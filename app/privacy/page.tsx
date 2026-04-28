import React from 'react';
import '../legal.css';

const EFFECTIVE_DATE = 'April 27, 2026';

export default function PrivacyPage() {
    return (
        <main className="legal-page">
            <section className="legal-hero">
                <div className="legal-hero__inner container">
                    <h1 className="legal-hero__title">Privacy Policy</h1>
                    <p className="legal-hero__meta">Effective {EFFECTIVE_DATE}</p>
                </div>
            </section>

            <section className="legal-body">
                <div className="legal-body__inner container">
                    <p className="legal-body__lead">
                        Vertria, Inc. (&ldquo;Vertria,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or
                        &ldquo;us&rdquo;) operates the ProductMountain and Climber products and the
                        website at productmountain.com (collectively, the &ldquo;Services&rdquo;).
                        This Privacy Policy explains what limited information we collect, how we
                        use it, and the choices you have. We have designed our Services to collect
                        as little personal information as possible.
                    </p>

                    <h2>1. Information We Collect</h2>
                    <p>
                        We do not currently use cookies, web beacons, pixels, or similar tracking
                        technologies on our website, and we do not automatically collect personal
                        information from visitors. The only information we collect is information
                        you voluntarily provide to us, such as:
                    </p>
                    <ul>
                        <li>
                            <strong>Contact information</strong> you submit when you request a demo,
                            email us, or otherwise reach out (for example, your name, business
                            email address, company name, and the contents of your message).
                        </li>
                        <li>
                            <strong>Customer data</strong> you or your organization provide to us
                            in connection with a paid subscription to the Services. This data is
                            governed by your organization&rsquo;s separate written agreement with
                            Vertria; this Policy does not change the terms of that agreement.
                        </li>
                    </ul>

                    <h2>2. How We Use Information</h2>
                    <p>We use the limited information we collect to:</p>
                    <ul>
                        <li>Respond to your inquiries and schedule demos.</li>
                        <li>Provide, maintain, and improve the Services.</li>
                        <li>Communicate with you about the Services, including service-related notices.</li>
                        <li>Comply with applicable legal obligations and enforce our Terms of Service.</li>
                    </ul>
                    <p>
                        We do not sell your personal information, and we do not share it with third
                        parties for their own marketing purposes.
                    </p>

                    <h2>3. Cookies and Tracking</h2>
                    <p>
                        We do not use cookies or other tracking technologies on our marketing
                        website at this time. If we begin using cookies in the future, we will
                        update this Policy and provide appropriate notice and choices.
                    </p>

                    <h2>4. How We Share Information</h2>
                    <p>
                        We share information only as needed to operate our business and only with
                        recipients bound by appropriate confidentiality and data-protection
                        obligations. Categories of recipients may include:
                    </p>
                    <ul>
                        <li>
                            <strong>Service providers</strong> who help us operate the Services
                            (for example, cloud hosting, email, and analytics infrastructure
                            providers), each acting under our instructions.
                        </li>
                        <li>
                            <strong>Legal and safety</strong> recipients, where disclosure is
                            required by law, legal process, or to protect the rights, property,
                            or safety of Vertria, our users, or others.
                        </li>
                        <li>
                            <strong>Business transfers</strong>, in connection with a merger,
                            acquisition, financing, reorganization, or sale of assets, subject to
                            customary confidentiality protections.
                        </li>
                    </ul>

                    <h2>5. Data Security</h2>
                    <p>
                        We use commercially reasonable administrative, technical, and physical
                        safeguards designed to protect information from unauthorized access, use,
                        alteration, and disclosure. Information you submit is encrypted in transit
                        and at rest. No method of transmission or storage is completely secure,
                        and we cannot guarantee absolute security.
                    </p>

                    <h2>6. Data Retention</h2>
                    <p>
                        We retain personal information only for as long as necessary to fulfill the
                        purposes described in this Policy, to comply with our legal obligations,
                        resolve disputes, and enforce our agreements. When information is no
                        longer needed, we delete or de-identify it.
                    </p>

                    <h2>7. Your Rights and Choices</h2>
                    <p>
                        Depending on where you live, you may have rights under applicable privacy
                        laws (such as the EU/UK GDPR or the California Consumer Privacy Act, as
                        amended by the CPRA). These rights may include the right to access,
                        correct, delete, or port your personal information, and to object to or
                        restrict certain processing. To exercise any of these rights, contact us
                        using the details below. We will not discriminate against you for
                        exercising any of these rights.
                    </p>

                    <h2>8. International Users</h2>
                    <p>
                        Vertria is headquartered in the United States, and we process personal
                        information in the United States. If you access the Services from outside
                        the United States, your information will be transferred to, stored, and
                        processed in the United States, where data protection laws may differ from
                        those of your jurisdiction.
                    </p>

                    <h2>9. Children&rsquo;s Privacy</h2>
                    <p>
                        The Services are not directed to children under 16, and we do not
                        knowingly collect personal information from children under 16. If you
                        believe a child has provided us with personal information, please contact
                        us and we will take steps to delete it.
                    </p>

                    <h2>10. Third-Party Links</h2>
                    <p>
                        Our website may contain links to third-party sites we do not control. This
                        Policy does not apply to those sites, and we are not responsible for their
                        practices. We encourage you to review the privacy policies of any
                        third-party sites you visit.
                    </p>

                    <h2>11. Changes to This Policy</h2>
                    <p>
                        We may update this Policy from time to time. If we make material changes,
                        we will revise the &ldquo;Effective&rdquo; date above and, where
                        appropriate, provide additional notice. Your continued use of the Services
                        after the effective date constitutes acceptance of the updated Policy.
                    </p>

                    <h2>12. Contact Us</h2>
                    <p>
                        If you have questions about this Policy or our privacy practices, contact
                        us at{' '}
                        <a href="mailto:hello@productmountain.com">hello@productmountain.com</a>.
                    </p>
                    <p>
                        Vertria, Inc.
                        <br />
                        Attn: Privacy
                    </p>
                </div>
            </section>
        </main>
    );
}
