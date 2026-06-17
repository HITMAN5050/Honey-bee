import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, cafeName, city, phone, monthlyVolume } = body;

    // Server-side validation
    if (!name || !cafeName || !city || !phone) {
      return NextResponse.json(
        { error: "Missing required fields. Name, Café Name, City, and Phone Number are required." },
        { status: 400 }
      );
    }

    // Clean data logging (Simulates database storage / webhook dispatch)
    console.log("----------------------------------------");
    console.log("NEW HONEY BEE LEAD SUBMITTED:");
    console.log(`Name: ${name}`);
    console.log(`Café Name: ${cafeName}`);
    console.log(`City: ${city}`);
    console.log(`Phone: ${phone}`);
    console.log(`Est. Volume: ${monthlyVolume || "None specified"}`);
    console.log(`Date: ${new Date().toISOString()}`);
    console.log("----------------------------------------");

    // Success response
    return NextResponse.json(
      { success: true, message: "Your request has been successfully recorded. Our sales lead Aarav will call you back within 2 hours." },
      { status: 200 }
    );
  } catch (error) {
    console.error("API route error processing lead:", error);
    return NextResponse.json(
      { error: "Failed to submit request. Please try again." },
      { status: 500 }
    );
  }
}
