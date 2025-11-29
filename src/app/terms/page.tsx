"use client";

import Title from "@/components/Title";

export default function Page() {
    return (
        <>
            <Title title={"Terms of Service"} />
            <div className="prose prose-invert max-w-3xl mx-auto px-4 py-8">
                <h2>Introduction</h2>
                <p>
                    These Terms of Service ("Terms") govern your use of Captio
                    ("the Service"). By accessing or using the Service, you agree
                    to be bound by these Terms.
                </p>

                <h2>Use of the Service</h2>
                <p>
                    Captio provides AI-generated captions and editing tools for
                    social media videos. You agree to use the Service only for
                    lawful purposes and in compliance with all applicable laws.
                </p>

                <h2>User Content</h2>
                <p>
                    You retain ownership of any content you upload. By using the
                    Service, you grant us a non-exclusive license to process your
                    content for the purpose of generating captions and improving
                    the Service.
                </p>

                <h2>Prohibited Activities</h2>
                <ul>
                    <li>Misusing, abusing, or attempting to disrupt the Service</li>
                    <li>Uploading illegal or harmful content</li>
                    <li>Reverse engineering or attempting to access restricted areas</li>
                </ul>

                <h2>Disclaimer</h2>
                <p>
                    The Service is provided “as is,” without warranties of any kind. 
                    We do not guarantee the accuracy, reliability, or availability of the Service.
                </p>

                <h2>Limitation of Liability</h2>
                <p>
                    We shall not be liable for any damages arising from your use
                    or inability to use the Service.
                </p>

                <h2>Changes to These Terms</h2>
                <p>
                    We may update these Terms at any time. Continued use of the
                    Service constitutes acceptance of the updated Terms.
                </p>

                <h2>Contact</h2>
                <p>
                    If you have questions about these Terms, you can contact us at:
                    <br />
                    <a href="mailto:support@captio.app">support@captio.app</a>
                </p>
            </div>
        </>
    );
}
