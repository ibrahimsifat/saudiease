// Utility for verifying reCAPTCHA tokens

export async function verifyRecaptchaToken(token: string): Promise<boolean> {
  try {
    // Skip verification in development environment for easier testing
    // if (
    //   process.env.NODE_ENV === "development" &&
    //   process.env.SKIP_RECAPTCHA_IN_DEV === "true"
    // ) {
    //   console.log("Skipping reCAPTCHA verification in development");
    //   return true;
    // }

    // Verify the token with Google's reCAPTCHA API
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;

    if (!secretKey) {
      console.error("reCAPTCHA secret key is not defined");
      return false;
    }

    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${secretKey}&response=${token}`,
      }
    );

    const data = await response.json();

    return data.success === true && data.score >= 0.5; // For v3 reCAPTCHA
  } catch (error) {
    console.error("Error verifying reCAPTCHA token:", error);
    return false;
  }
}
