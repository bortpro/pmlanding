import React from 'react';
import '../legal.css';

const EFFECTIVE_DATE = 'April 27, 2026';

export default function TermsPage() {
    return (
        <main className="legal-page">
            <section className="legal-hero">
                <div className="legal-hero__inner container">
                    <h1 className="legal-hero__title">Terms of Service</h1>
                    <p className="legal-hero__meta">Effective {EFFECTIVE_DATE}</p>
                </div>
            </section>

            <section className="legal-body">
                <div className="legal-body__inner container">
                    <p className="legal-body__lead">
                        These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use
                        of the websites, applications, and services (collectively, the
                        &ldquo;Services&rdquo;) made available by Vertria, Inc.
                        (&ldquo;Vertria,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or
                        &ldquo;us&rdquo;), including the ProductMountain and Climber products and
                        the website at productmountain.com. By accessing or using the Services,
                        you agree to be bound by these Terms. If you do not agree, do not use the
                        Services.
                    </p>

                    <h2>1. The Services</h2>
                    <p>
                        Vertria provides software and related services that help product and
                        revenue teams analyze customer conversations and surface insights. Access
                        to certain features may require a paid subscription governed by a separate
                        written agreement (an &ldquo;Order&rdquo; or &ldquo;Subscription
                        Agreement&rdquo;). In the event of a conflict between these Terms and a
                        Subscription Agreement, the Subscription Agreement controls.
                    </p>

                    <h2>2. Eligibility</h2>
                    <p>
                        You may use the Services only if you can form a binding contract with
                        Vertria and only in compliance with these Terms and all applicable laws.
                        The Services are not intended for individuals under the age of 16.
                    </p>

                    <h2>3. Accounts</h2>
                    <p>
                        If you create an account or are granted access to the Services, you are
                        responsible for maintaining the confidentiality of your credentials and
                        for all activity that occurs under your account. You agree to provide
                        accurate information and to notify us promptly of any unauthorized use.
                    </p>

                    <h2>4. Acceptable Use</h2>
                    <p>You agree not to, and not to permit any third party to:</p>
                    <ul>
                        <li>Use the Services in violation of any law or third-party right.</li>
                        <li>
                            Reverse engineer, decompile, or otherwise attempt to derive the source
                            code of the Services, except to the extent expressly permitted by law.
                        </li>
                        <li>
                            Copy, resell, sublicense, rent, or otherwise commercially exploit the
                            Services without our prior written consent.
                        </li>
                        <li>
                            Use the Services to send spam, malware, or other harmful code, or to
                            interfere with the integrity or performance of the Services.
                        </li>
                        <li>
                            Attempt to gain unauthorized access to the Services or to any related
                            systems, accounts, or data.
                        </li>
                        <li>
                            Use the Services to develop a competing product or service, or to
                            benchmark against Vertria without our prior written consent.
                        </li>
                    </ul>

                    <h2>5. Intellectual Property</h2>
                    <p>
                        The Services, including all software, content, designs, trademarks, and
                        documentation, are owned by Vertria or its licensors and are protected by
                        intellectual property laws. Subject to your compliance with these Terms,
                        Vertria grants you a limited, non-exclusive, non-transferable,
                        non-sublicensable, revocable right to access and use the Services for
                        their intended purpose. All rights not expressly granted are reserved.
                    </p>

                    <h2>6. Customer Data</h2>
                    <p>
                        As between you and Vertria, you retain all rights in any data, content, or
                        materials you submit to or generate through the Services
                        (&ldquo;Customer Data&rdquo;). You grant Vertria a worldwide,
                        royalty-free license to host, process, transmit, and use Customer Data
                        solely as necessary to provide and improve the Services and as further
                        described in your Subscription Agreement, if any. You are responsible for
                        the accuracy and lawfulness of Customer Data and for ensuring you have all
                        necessary rights and consents to provide it.
                    </p>

                    <h2>7. Feedback</h2>
                    <p>
                        If you choose to provide suggestions, feedback, or ideas about the
                        Services, you grant Vertria a perpetual, irrevocable, worldwide,
                        royalty-free license to use and incorporate that feedback for any purpose
                        without obligation to you.
                    </p>

                    <h2>8. Third-Party Services</h2>
                    <p>
                        The Services may interoperate with or contain links to third-party
                        services that we do not control. Your use of any third-party service is
                        subject to that third party&rsquo;s terms, and we are not responsible for
                        third-party services or their availability.
                    </p>

                    <h2>9. Fees and Payment</h2>
                    <p>
                        Fees, billing terms, and payment obligations for paid Services are set
                        forth in your Order or Subscription Agreement. Except as expressly stated
                        in those documents or required by law, fees are non-refundable.
                    </p>

                    <h2>10. Disclaimers</h2>
                    <p>
                        THE SERVICES ARE PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS
                        AVAILABLE,&rdquo; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED,
                        INCLUDING WITHOUT LIMITATION ANY IMPLIED WARRANTIES OF MERCHANTABILITY,
                        FITNESS FOR A PARTICULAR PURPOSE, TITLE, OR NON-INFRINGEMENT. VERTRIA DOES
                        NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR
                        SECURE, OR THAT ANY OUTPUTS WILL BE ACCURATE OR RELIABLE FOR YOUR
                        PURPOSES.
                    </p>

                    <h2>11. Limitation of Liability</h2>
                    <p>
                        TO THE MAXIMUM EXTENT PERMITTED BY LAW, VERTRIA WILL NOT BE LIABLE FOR ANY
                        INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE
                        DAMAGES, OR FOR ANY LOSS OF PROFITS, REVENUES, DATA, GOODWILL, OR BUSINESS
                        OPPORTUNITIES, ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICES,
                        WHETHER IN CONTRACT, TORT, OR ANY OTHER LEGAL THEORY, EVEN IF VERTRIA HAS
                        BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. VERTRIA&rsquo;S TOTAL
                        AGGREGATE LIABILITY ARISING OUT OF OR RELATED TO THESE TERMS OR THE
                        SERVICES WILL NOT EXCEED THE GREATER OF (A) THE AMOUNTS YOU PAID TO
                        VERTRIA FOR THE SERVICES IN THE TWELVE (12) MONTHS PRECEDING THE EVENT
                        GIVING RISE TO THE CLAIM, OR (B) ONE HUNDRED U.S. DOLLARS (US$100).
                    </p>

                    <h2>12. Indemnification</h2>
                    <p>
                        You agree to defend, indemnify, and hold harmless Vertria and its
                        officers, directors, employees, and agents from and against any claims,
                        damages, liabilities, losses, costs, and expenses (including reasonable
                        attorneys&rsquo; fees) arising out of or related to your use of the
                        Services, your Customer Data, or your breach of these Terms.
                    </p>

                    <h2>13. Termination</h2>
                    <p>
                        We may suspend or terminate your access to the Services at any time, with
                        or without notice, including for any breach of these Terms. Upon
                        termination, your right to use the Services will cease immediately.
                        Sections that by their nature should survive termination will survive.
                    </p>

                    <h2>14. Governing Law and Disputes</h2>
                    <p>
                        These Terms are governed by the laws of the State of Delaware, without
                        regard to its conflict-of-laws principles. The exclusive venue for any
                        dispute arising out of or related to these Terms or the Services will be
                        the state and federal courts located in Delaware, and you consent to
                        personal jurisdiction in those courts.
                    </p>

                    <h2>15. Changes to These Terms</h2>
                    <p>
                        We may update these Terms from time to time. If we make material changes,
                        we will revise the &ldquo;Effective&rdquo; date above and, where
                        appropriate, provide additional notice. Your continued use of the Services
                        after the effective date constitutes acceptance of the updated Terms.
                    </p>

                    <h2>16. Miscellaneous</h2>
                    <p>
                        These Terms, together with any Subscription Agreement and our Privacy
                        Policy, constitute the entire agreement between you and Vertria regarding
                        the Services. If any provision is found unenforceable, the remaining
                        provisions will remain in full force and effect. Our failure to enforce
                        any right or provision will not be deemed a waiver. You may not assign
                        these Terms without our prior written consent; we may assign them
                        without restriction.
                    </p>

                    <h2>17. Contact Us</h2>
                    <p>
                        Questions about these Terms? Contact us at{' '}
                        <a href="mailto:hello@productmountain.com">hello@productmountain.com</a>.
                    </p>
                    <p>
                        Vertria, Inc.
                        <br />
                        Attn: Legal
                    </p>
                </div>
            </section>
        </main>
    );
}
