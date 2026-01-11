import { Header } from "@/components/header";
import { Legal } from "@/components/legal";

export default function TermsOfServicePage() {
  return (
    <main data-page="legal">
      <div data-component="container">
        <Header />
        <div data-component="legal-content">
          <h1>Terms of Service</h1>
          <p data-slot="updated">Last updated: January 2026</p>

          <h2>Acceptance of Terms</h2>
          <p>
            By downloading, installing, or using OpenSploit, you agree to these
            terms. If you do not agree, do not use the software.
          </p>

          <h2>Authorized Use Only</h2>
          <p>
            OpenSploit is designed exclusively for authorized security testing.
            You must:
          </p>
          <ul>
            <li>
              Have explicit written permission before testing any system you do
              not own
            </li>
            <li>
              Comply with all applicable laws and regulations in your
              jurisdiction
            </li>
            <li>
              Use the software only for legitimate security research, authorized
              penetration testing, or educational purposes
            </li>
            <li>
              Accept full responsibility for your actions when using OpenSploit
            </li>
          </ul>

          <h2>Prohibited Uses</h2>
          <p>You may not use OpenSploit to:</p>
          <ul>
            <li>Access systems without authorization</li>
            <li>Conduct attacks on systems you do not have permission to test</li>
            <li>Violate any applicable laws or regulations</li>
            <li>Cause harm to individuals, organizations, or infrastructure</li>
            <li>Engage in any malicious or unethical activities</li>
          </ul>

          <h2>Disclaimer of Warranties</h2>
          <p>
            OpenSploit is provided &quot;as is&quot; without warranty of any
            kind. We do not guarantee that the software will be error-free,
            secure, or suitable for your specific needs.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, the developers and
            contributors of OpenSploit shall not be liable for any damages
            arising from:
          </p>
          <ul>
            <li>Use or inability to use the software</li>
            <li>Unauthorized access or alterations to your systems</li>
            <li>Any legal consequences resulting from your use of the software</li>
            <li>
              Any claims by third parties related to your use of the software
            </li>
          </ul>

          <h2>User Responsibility</h2>
          <p>
            You are solely responsible for ensuring your use of OpenSploit
            complies with all applicable laws. This includes but is not limited
            to:
          </p>
          <ul>
            <li>Computer Fraud and Abuse Act (CFAA) - United States</li>
            <li>Computer Misuse Act - United Kingdom</li>
            <li>Similar legislation in other jurisdictions</li>
          </ul>

          <h2>Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless the developers and
            contributors of OpenSploit from any claims, damages, or expenses
            arising from your use of the software or violation of these terms.
          </p>

          <h2>Open Source License</h2>
          <p>
            OpenSploit is open source software. The source code is subject to
            its own license terms, which govern your rights to modify and
            redistribute the code.
          </p>

          <h2>Changes to Terms</h2>
          <p>
            We may update these terms at any time. Continued use of OpenSploit
            after changes constitutes acceptance of the updated terms.
          </p>

          <h2>Governing Law</h2>
          <p>
            These terms are governed by applicable law. Any disputes shall be
            resolved in the appropriate courts.
          </p>

          <h2>Contact</h2>
          <p>
            For questions about these terms, contact us at{" "}
            <a href="mailto:legal@opensploit.ai">legal@opensploit.ai</a>.
          </p>
        </div>
      </div>
      <Legal />
    </main>
  );
}
