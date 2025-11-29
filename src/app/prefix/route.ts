"use server";
import { NextResponse } from "next/server";

export async function GET() {
    const fileContents = `tiktok-developers-site-verification=nzUkHUwXorvZVt08T6Ppx9Zlj2qolzUP`;
    return new NextResponse(fileContents, {
        headers: {
            "Content-Type": "text/plain",
        },
    });
}