"use client";
import { useEffect } from "react";

export default function Title({ title }: { title: string }) {
    useEffect(() => {
        document.title = `${title} - Captio v1.0`;
    }, [title]);

    return null;
}
