import { NextResponse } from "next/server";
import { cloudinary } from "@/lib/cloudinary";

export async function POST() {
  const timestamp = Math.round(new Date().getTime() / 1000);
  const folder = "financeai/posts";

  const signature = cloudinary.utils.api_sign_request(
    {
      timestamp,
      folder,
    },
    process.env.CLOUDINARY_API_SECRET ?? ""
  );

  return NextResponse.json({
    timestamp,
    folder,
    signature,
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    apiKey: process.env.CLOUDINARY_API_KEY,
  });
}
