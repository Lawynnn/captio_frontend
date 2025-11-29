import { Poppins } from "next/font/google";
import "./globals.css";

const poppinsFont = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={poppinsFont.variable}>
            <body
                className={`antialiased bg-bg-primary text-text-primary min-h-screen`}
            >
                {children}
            </body>
        </html>
    );
}
