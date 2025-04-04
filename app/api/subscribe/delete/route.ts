import fs from "fs";
import { NextResponse } from "next/server";
import path from "path";

// Path to the subscribers JSON file
const subscribersFilePath = path.join(
  process.cwd(),
  "data",
  "subscribers.json"
);

// Get current subscribers
function getSubscribers(): { email: string; date: string }[] {
  if (!fs.existsSync(subscribersFilePath)) {
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
  fs.writeFileSync(
    subscribersFilePath,
    JSON.stringify(subscribers, null, 2),
    "utf8"
  );
}

export async function POST(request: Request) {
  // This endpoint is only accessible in development mode
  if (process.env.NODE_ENV !== "development") {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 }
    );
  }

  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { success: false, message: "Email is required" },
        { status: 400 }
      );
    }

    // Get current subscribers
    const subscribers = getSubscribers();

    // Filter out the subscriber to delete
    const updatedSubscribers = subscribers.filter(
      (subscriber) => subscriber.email.toLowerCase() !== email.toLowerCase()
    );

    // If no subscriber was removed
    if (subscribers.length === updatedSubscribers.length) {
      return NextResponse.json(
        { success: false, message: "Subscriber not found" },
        { status: 404 }
      );
    }

    // Save updated subscribers list
    saveSubscribers(updatedSubscribers);

    return NextResponse.json({
      success: true,
      message: "Subscriber removed successfully",
      remainingCount: updatedSubscribers.length,
    });
  } catch (error) {
    console.error("Error in delete subscriber API:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while processing your request",
      },
      { status: 500 }
    );
  }
}
