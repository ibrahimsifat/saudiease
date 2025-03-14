import { services } from "@/data/services"
import { faqs } from "@/data/faq"

// Types for the AI chat system
export type Message = {
  id: string
  role: "user" | "assistant" | "system"
  content: string
  timestamp: Date
}

export type ChatSession = {
  id: string
  messages: Message[]
  createdAt: Date
  updatedAt: Date
}

// Initial system prompt that defines the chatbot's behavior
export const systemPrompt = `
You are an AI assistant for Saudi Ease, a digital solutions company in Saudi Arabia.

Company Information:
- Name: Saudi Ease
- Services: Web Development, E-Commerce Solutions, E-Invoicing, Graphic Design, Digital Marketing, SEO
- Focus: Helping Saudi businesses with digital transformation aligned with Vision 2030
- Specialties: ZATCA compliance, Arabic/English websites, local SEO

Your role is to:
1. Answer questions about Saudi Ease services and capabilities
2. Recommend appropriate services based on user needs
3. Explain how Saudi Ease can help with digital transformation
4. Provide basic information about pricing and process
5. Collect contact information for follow-ups

Keep responses concise (2-3 sentences max), friendly, and professional.
Always recommend booking a consultation for detailed questions.
`

// Sample responses for common questions
export const predefinedResponses: Record<string, string> = {
  greeting:
    "Hello! I'm the Saudi Ease virtual assistant. How can I help you with your digital transformation needs today?",

  services:
    "Saudi Ease offers web development, e-commerce solutions, e-invoicing, graphic design, digital marketing, and SEO services. All our solutions are tailored for the Saudi market and Vision 2030 compliance. What specific service are you interested in?",

  pricing:
    "Our pricing varies based on project requirements and scope. We offer customized packages starting from 5,000 SAR for basic solutions. Would you like to schedule a free consultation to discuss your specific needs?",

  process:
    "Our process begins with a free consultation to understand your needs, followed by a proposal, design phase, development, testing, and launch. We also provide ongoing support and maintenance. What type of project are you considering?",

  contact:
    "You can reach our team at info@saudiease.com or call +966-12-345-6789. Alternatively, I can collect your information for a callback. Would you like to leave your contact details?",

  zatca:
    "Saudi Ease specializes in ZATCA-compliant e-invoicing solutions that meet all regulatory requirements. Our systems integrate with your existing accounting software and ensure full compliance with Saudi tax regulations. Would you like more information about our e-invoicing services?",

  vision2030:
    "Our digital solutions are aligned with Saudi Vision 2030 goals, helping businesses participate in digital transformation and economic diversification. We ensure all our services meet local regulations and market needs. How can we help your business align with Vision 2030?",

  timeline:
    "Project timelines vary based on complexity. Simple websites can be completed in 2-4 weeks, while complex e-commerce or custom solutions may take 2-3 months. Would you like to discuss your project timeline requirements?",

  portfolio:
    "We've worked with businesses across various sectors in Saudi Arabia, including retail, healthcare, finance, and government. You can view our portfolio on our website. Would you like me to highlight any specific industry examples?",

  fallback:
    "I appreciate your question. For more detailed information, our team would be happy to assist you directly. Would you like to schedule a consultation with one of our specialists?",
}

// Function to generate a response based on user input
export function generateResponse(userMessage: string): string {
  const normalizedInput = userMessage.toLowerCase().trim()

  // Check for greetings
  if (/^(hi|hello|hey|assalam|salam|مرحبا|السلام عليكم)/.test(normalizedInput)) {
    return predefinedResponses.greeting
  }

  // Check for service inquiries
  if (/service|offer|provide|do you|what can|solutions?/i.test(normalizedInput)) {
    return predefinedResponses.services
  }

  // Check for pricing inquiries
  if (/price|cost|pricing|how much|package|fee/i.test(normalizedInput)) {
    return predefinedResponses.pricing
  }

  // Check for process inquiries
  if (/process|how do|steps|procedure|work with|start/i.test(normalizedInput)) {
    return predefinedResponses.process
  }

  // Check for contact inquiries
  if (/contact|reach|call|email|phone|talk to/i.test(normalizedInput)) {
    return predefinedResponses.contact
  }

  // Check for ZATCA/e-invoicing inquiries
  if (/zatca|e-invoic|electronic invoic|tax|compliance|invoice/i.test(normalizedInput)) {
    return predefinedResponses.zatca
  }

  // Check for Vision 2030 inquiries
  if (/vision|2030|saudi vision|transformation/i.test(normalizedInput)) {
    return predefinedResponses.vision2030
  }

  // Check for timeline inquiries
  if (/time|long|duration|timeline|when|finish|complete/i.test(normalizedInput)) {
    return predefinedResponses.timeline
  }

  // Check for portfolio/experience inquiries
  if (/portfolio|example|work|project|client|experience/i.test(normalizedInput)) {
    return predefinedResponses.portfolio
  }

  // Service-specific responses
  for (const service of services) {
    if (
      normalizedInput.includes(service.id) ||
      normalizedInput.includes(service.title.toLowerCase()) ||
      service.keywords?.some((keyword) => normalizedInput.includes(keyword.toLowerCase()))
    ) {
      return `Our ${service.title} service helps businesses ${service.description.toLowerCase()}. Key features include ${service.features.slice(0, 2).join(" and ")}. Would you like to learn more about this service?`
    }
  }

  // FAQ matching
  for (const faq of faqs) {
    const questionLower = faq.question.toLowerCase()
    if (
      normalizedInput.includes(questionLower.substring(0, 10)) ||
      questionLower.includes(normalizedInput.substring(0, 10))
    ) {
      return `${faq.answer} Can I help you with anything else?`
    }
  }

  // Fallback response
  return predefinedResponses.fallback
}

// Function to create a new chat session
export function createChatSession(): ChatSession {
  return {
    id: generateId(),
    messages: [
      {
        id: generateId(),
        role: "system",
        content: systemPrompt,
        timestamp: new Date(),
      },
      {
        id: generateId(),
        role: "assistant",
        content: predefinedResponses.greeting,
        timestamp: new Date(),
      },
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
  }
}

// Helper function to generate a unique ID
function generateId(): string {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

// Function to add a message to a chat session
export function addMessage(session: ChatSession, role: "user" | "assistant", content: string): ChatSession {
  const updatedSession = {
    ...session,
    messages: [
      ...session.messages,
      {
        id: generateId(),
        role,
        content,
        timestamp: new Date(),
      },
    ],
    updatedAt: new Date(),
  }

  return updatedSession
}

// Function to get a response from the AI
export function getAIResponse(session: ChatSession): Promise<string> {
  return new Promise((resolve) => {
    // Get the last user message
    const lastUserMessage = session.messages.filter((m) => m.role === "user").pop()

    if (!lastUserMessage) {
      resolve(predefinedResponses.greeting)
      return
    }

    // Generate a response based on the user's message
    const response = generateResponse(lastUserMessage.content)

    // Simulate a delay to make it feel more natural
    setTimeout(
      () => {
        resolve(response)
      },
      500 + Math.random() * 1000,
    )
  })
}

