import fs from "fs";
import { NextResponse } from "next/server";
import path from "path";

// Simple email validation
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Path to the subscribers JSON file
const subscribersFilePath = path.join(
  process.cwd(),
  "data",
  "subscribers.json"
);

// Ensure the data directory exists
function ensureDirectoryExists() {
  const dir = path.join(process.cwd(), "data");
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Get current subscribers
function getSubscribers(): { email: string; date: string }[] {
  ensureDirectoryExists();

  if (!fs.existsSync(subscribersFilePath)) {
    fs.writeFileSync(subscribersFilePath, JSON.stringify([]), "utf8");
    return [];
  }

  const fileContent = fs.readFileSync(subscribersFilePath, "utf8");
  try {
    return JSON.parse(fileContent);
  } catch (error) {
    console.error("Error parsing subscribers file:", error);
    return [];
  }
}

// Save subscribers to file
function saveSubscribers(subscribers: { email: string; date: string }[]) {
  ensureDirectoryExists();
  fs.writeFileSync(
    subscribersFilePath,
    JSON.stringify(subscribers, null, 2),
    "utf8"
  );
}

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    // Get current subscribers
    const subscribers = getSubscribers();

    // Check if email already exists
    if (
      subscribers.some(
        (subscriber) => subscriber.email.toLowerCase() === email.toLowerCase()
      )
    ) {
      return NextResponse.json(
        { success: false, message: "This email is already subscribed" },
        { status: 400 }
      );
    }

    // Add new subscriber
    subscribers.push({
      email,
      date: new Date().toISOString(),
    });

    // Save updated subscribers list
    saveSubscribers(subscribers);

    return NextResponse.json({
      success: true,
      message: "Successfully subscribed to the newsletter",
    });
  } catch (error) {
    console.error("Error in subscribe API:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while processing your request",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  // This endpoint is only accessible in development mode
  if (process.env.NODE_ENV !== "development") {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 }
    );
  }

  try {
    const subscribers = getSubscribers();
    return NextResponse.json({ success: true, subscribers });
  } catch (error) {
    console.error("Error fetching subscribers:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while fetching subscribers",
      },
      { status: 500 }
    );
  }
}
