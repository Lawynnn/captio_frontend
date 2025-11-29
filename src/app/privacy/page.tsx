"use client";

import Title from "@/components/Title";

export default function Page() {
    return (
        <>
            <Title title={"Privacy Policy"} />
            <div className="prose prose-invert max-w-3xl mx-auto px-4 py-8">
                <h2>Introduction</h2>
                <p>
                    This Privacy Policy explains how Captio ("we", "our", "the Service")
                    collects, uses, and protects your information when you use our platform.
                </p>

                <h2>Information We Collect</h2>
                <p>We may collect the following information:</p>
                <ul>
                    <li>Uploaded video content for caption generation</li>
                    <li>Account information from third-party login providers (e.g., TikTok)</li>
                    <li>Technical data such as browser type or device information</li>
                </ul>

                <h2>How We Use Your Information</h2>
                <p>Your information may be used to:</p>
                <ul>
                    <li>Generate AI-based captions for your videos</li>
                    <li>Improve our algorithms and overall service quality</li>
                    <li>Provide customer support and communicate updates</li>
                </ul>

                <h2>Data Storage & Security</h2>
                <p>
                    We use industry-standard methods to protect your data. Uploaded
                    content may be temporarily stored to process captions but is not
                    shared or sold to third parties.
                </p>

                <h2>Third-Party Services</h2>
                <p>
                    If you log in using TikTok or other platforms, we may receive
                    basic profile data according to their permissions and policies.
                </p>

                <h2>Your Rights</h2>
                <p>You have the right to request:</p>
                <ul>
                    <li>Deletion of your stored data</li>
                    <li>Information about what data we hold</li>
                    <li>Correction of inaccurate data</li>
                </ul>

                <h2>Changes to This Policy</h2>
                <p>
                    We may update this Privacy Policy from time to time. The updated
                    version will always be available on this page.
                </p>

                <h2>Contact</h2>
                <p>
                    For privacy-related questions, contact us at:
                    <br />
                    <a href="mailto:support@captio.app">support@captio.app</a>
                </p>
            </div>
        </>
    );
}
