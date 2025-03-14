"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, X, Send, Bot, User, Loader2, ChevronDown, ChevronUp, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { createChatSession, addMessage, getAIResponse, type ChatSession } from "@/lib/ai-chat"
import { cn } from "@/lib/utils"

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [userInput, setUserInput] = useState("")
  const [chatSession, setChatSession] = useState<ChatSession>(() => {
    // Try to load from localStorage on client side
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("saudi-ease-chat")
      if (saved) {
        try {
          return JSON.parse(saved)
        } catch (e) {
          // If parsing fails, create a new session
          return createChatSession()
        }
      }
    }
    return createChatSession()
  })

  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  // Save chat session to localStorage when it changes
  useEffect(() => {
    if (typeof window !== "undefined" && chatSession) {
      localStorage.setItem("saudi-ease-chat", JSON.stringify(chatSession))
    }
  }, [chatSession])

  // Scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current && isOpen) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [chatSession.messages, isOpen])

  // Focus input when chat is opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const handleSendMessage = async () => {
    if (!userInput.trim()) return

    // Add user message to chat
    const updatedSession = addMessage(chatSession, "user", userInput)
    setChatSession(updatedSession)
    setUserInput("")

    // Show typing indicator
    setIsTyping(true)

    try {
      // Get AI response
      const response = await getAIResponse(updatedSession)

      // Add AI response to chat
      setChatSession((prevSession) => addMessage(prevSession, "assistant", response))
    } catch (error) {
      console.error("Error getting AI response:", error)
      setChatSession((prevSession) =>
        addMessage(prevSession, "assistant", "I'm sorry, I encountered an error. Please try again later."),
      )
    } finally {
      setIsTyping(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const resetChat = () => {
    setChatSession(createChatSession())
  }

  // Filter out system messages for display
  const displayMessages = chatSession.messages.filter((msg) => msg.role !== "system")

  // Quick replies based on services
  const quickReplies = [
    "Tell me about your web development services",
    "How can you help with e-invoicing?",
    "What digital marketing services do you offer?",
    "Do you offer SEO services?",
    "What's your design process?",
  ]

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => {
            setIsOpen(!isOpen)
            setIsMinimized(false)
          }}
          size="icon"
          className={`h-14 w-14 rounded-full shadow-lg ${isOpen ? "bg-gray-700 hover:bg-gray-800" : "bg-primary hover:bg-primary/90"}`}
          aria-label="AI Chat Assistant"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
        </Button>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={
              isMinimized
                ? { opacity: 1, y: 0, scale: 1, height: "auto" }
                : { opacity: 1, y: 0, scale: 1, height: "auto" }
            }
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "fixed right-6 z-50 w-80 sm:w-96 bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200",
              isMinimized ? "bottom-24 max-h-16" : "bottom-24 max-h-[80vh]",
            )}
          >
            {/* Header */}
            <div
              className="bg-primary p-4 text-white cursor-pointer flex justify-between items-center"
              onClick={() => setIsMinimized(!isMinimized)}
            >
              <div className="flex items-center">
                <Sparkles className="h-5 w-5 mr-2" />
                <div>
                  <h3 className="font-bold">Saudi Ease AI Assistant</h3>
                  <p className="text-xs text-white/80">Ask me about our services</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:bg-white/20">
                {isMinimized ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </Button>
            </div>

            {!isMinimized && (
              <>
                {/* Messages */}
                <div className="h-[350px] overflow-y-auto p-4 space-y-4 bg-gray-50">
                  {displayMessages.map((msg, index) => (
                    <div key={msg.id} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`max-w-[85%] rounded-lg p-3 flex ${
                          msg.role === "user"
                            ? "bg-primary text-white rounded-tr-none"
                            : "bg-white text-gray-800 rounded-tl-none border border-gray-200"
                        }`}
                      >
                        <div className="flex-shrink-0 mr-2">
                          {msg.role === "user" ? (
                            <User className="h-5 w-5 text-white/70" />
                          ) : (
                            <Bot className="h-5 w-5 text-primary" />
                          )}
                        </div>
                        <div>
                          <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                          <p className={`text-xs mt-1 ${msg.role === "user" ? "text-white/70" : "text-gray-500"}`}>
                            {new Date(msg.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Typing indicator */}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="max-w-[85%] rounded-lg p-3 bg-white text-gray-800 rounded-tl-none border border-gray-200 flex">
                        <div className="flex-shrink-0 mr-2">
                          <Bot className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex items-center">
                          <Loader2 className="h-4 w-4 animate-spin mr-2" />
                          <p className="text-sm text-gray-500">Typing...</p>
                        </div>
                      </div>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Quick Replies */}
                {displayMessages.length <= 2 && (
                  <div className="p-3 bg-white border-t border-gray-100">
                    <p className="text-xs text-gray-500 mb-2">Suggested questions:</p>
                    <div className="flex flex-wrap gap-2">
                      {quickReplies.map((reply, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setUserInput(reply)
                            // Small delay to show the user what was selected
                            setTimeout(() => {
                              if (inputRef.current) {
                                inputRef.current.focus()
                              }
                            }, 100)
                          }}
                          className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 py-1 rounded-full transition-colors"
                        >
                          {reply}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Input */}
                <div className="p-3 border-t border-gray-200 bg-white">
                  <div className="flex items-center">
                    <Textarea
                      ref={inputRef}
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      onKeyDown={handleKeyPress}
                      placeholder="Type your message..."
                      className="flex-1 border border-gray-300 rounded-lg px-3 py-2 min-h-[44px] max-h-[120px] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                      rows={1}
                    />
                    <Button
                      onClick={handleSendMessage}
                      disabled={!userInput.trim() || isTyping}
                      className="ml-2 bg-primary text-white p-2 rounded-lg hover:bg-primary/90 h-[44px] w-[44px]"
                    >
                      <Send className="h-5 w-5" />
                    </Button>
                  </div>

                  <div className="flex justify-between items-center mt-2">
                    <button onClick={resetChat} className="text-xs text-gray-500 hover:text-primary">
                      Reset conversation
                    </button>
                    <p className="text-xs text-gray-500">Powered by Saudi Ease AI</p>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

