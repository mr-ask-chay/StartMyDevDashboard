import { Helmet } from "react-helmet-async";

const PrivacyAndSecurity = () => {
  return (
    <div>
      <Helmet>
        <title>Privacy and Security | StartMyDev</title>
        <meta name="description" content="Learn how StartMyDev handles privacy: configure and generate project setup scripts locally without uploading project settings." />
        <link rel="canonical" href="https://start-my-dev-dashboard.vercel.app/docs/privacy-security" />
        <meta property="og:title" content="Privacy and Security | StartMyDev" />
        <meta property="og:description" content="Review StartMyDev's local script-generation workflow and privacy practices." />
        <meta property="og:url" content="https://start-my-dev-dashboard.vercel.app/docs/privacy-security" />
      </Helmet>
      <h2 className="fw-bold">Privacy & Security</h2>
      <p>
        StartMyDev was built with user privacy in mind. We{" "}
        <strong>do not collect</strong> any personal data, usage analytics, or
        store any project info.
      </p>
      <p>
        We <strong>do not share</strong> user information with any third party
        or company.
      </p>
      <p>
        StartMyDev is <strong>completely open-source</strong>. You can view and
        verify the source code on our
        <a
          href="https://github.com/mr-ask-chay/StartMyDevDashboard"
          target="_blank"
          rel="noopener noreferrer"
          className="ms-1"
        >
          GitHub Repository ↗
        </a>
        .
      </p>
      <p>Your scripts are generated locally and never leave your system.</p>
      <p>
        We believe in transparency, privacy-first tooling, and empowering
        developers without tracking them.
      </p>
    </div>
  );
};

export default PrivacyAndSecurity;
