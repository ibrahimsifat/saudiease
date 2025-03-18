"use client";

import { createContext, useContext, type ReactNode } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

interface RecaptchaContextType {
  siteKey: string;
}

const RecaptchaContext = createContext<RecaptchaContextType | null>(null);

export const useRecaptcha = () => {
  const context = useContext(RecaptchaContext);
  if (!context) {
    throw new Error("useRecaptcha must be used within a RecaptchaProvider");
  }
  return context;
};

interface RecaptchaProviderProps {
  children: ReactNode;
}

export function RecaptchaProvider({ children }: RecaptchaProviderProps) {
  // Get the site key from environment variables
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

  if (!siteKey) {
    console.warn(
      "reCAPTCHA site key is not defined. reCAPTCHA will not work properly."
    );
  }

  return (
    <RecaptchaContext.Provider value={{ siteKey }}>
      <GoogleReCaptchaProvider
        reCaptchaKey={siteKey}
        scriptProps={{
          async: true,
          defer: true,
          appendTo: "head",
        }}
      >
        {children}
      </GoogleReCaptchaProvider>
    </RecaptchaContext.Provider>
  );
}
