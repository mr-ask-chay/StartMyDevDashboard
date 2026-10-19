import { Helmet } from "react-helmet-async";

const About = () => (
  <main className="container py-5">
    <Helmet>
      <title>About Sai Krishna Chaitanya | StartMyDev</title>
      <meta
        name="description"
        content="Meet Sai Krishna Chaitanya, creator of StartMyDev and independent developer tools for project setup, PDF workflows, and Git productivity."
      />
      <link rel="canonical" href="https://start-my-dev-dashboard.vercel.app/about" />
      <meta property="og:title" content="About Sai Krishna Chaitanya | StartMyDev" />
      <meta
        property="og:description"
        content="The developer behind StartMyDev and practical developer utilities."
      />
      <meta property="og:url" content="https://start-my-dev-dashboard.vercel.app/about" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          "@id": "https://start-my-dev-dashboard.vercel.app/about#profile",
          "url": "https://start-my-dev-dashboard.vercel.app/about",
          "name": "About Sai Krishna Chaitanya | StartMyDev",
          "mainEntity": {
            "@type": "Person",
            "@id": "https://pdf-fe-kappa.vercel.app/about#person",
            "name": "Sai Krishna Chaitanya",
            "url": "https://pdf-fe-kappa.vercel.app/about"
          }
        })}
      </script>
    </Helmet>

    <article className="mx-auto" style={{ maxWidth: "800px" }}>
      <header className="mb-4">
        <p className="text-uppercase text-primary fw-semibold">About the author</p>
        <h1 className="display-5 fw-bold">Sai Krishna Chaitanya</h1>
        <p className="lead text-muted">
          Independent developer building practical tools for developers and everyday workflows.
        </p>
      </header>

      <section aria-labelledby="about-startmydev">
        <h2 id="about-startmydev" className="h3">About StartMyDev</h2>
        <p>
          StartMyDev helps developers configure and download project setup scripts for
          common frontend, backend, and full-stack stacks on Windows and Linux.
          Choose an operating system and technology, adjust project settings,
          preview the generated script, and download it.
        </p>
      </section>

      <section className="mt-4" aria-labelledby="other-projects">
        <h2 id="other-projects" className="h3">More projects</h2>
        <ul>
          <li>
            <a href="https://pdf-fe-kappa.vercel.app/">Unclasp</a> — browser-based PDF tools and a PDF password remover.
          </li>
          <li>
            <a href="https://internationalization-d2aa6.web.app/en/">Angular Internationalization Demo</a> — a multilingual Angular i18n example.
          </li>
          <li>
            <a href="https://github.com/mr-ask-chay/git-commit-summary">Git Commit Summary</a> — a CLI for summarizing Git changes.
          </li>
        </ul>
      </section>

      <p className="mt-4">
        Find Sai Krishna Chaitanya on{" "}
        <a href="https://github.com/mr-ask-chay">GitHub</a>,{" "}
        <a href="https://linkedin.com/in/sai-krishna-annam-046851167/">LinkedIn</a>, or{" "}
        <a href="https://linktr.ee/MR_ASK_Chay">Linktree</a>. See the{" "}
        <a href="https://mraskchay.vercel.app/">personal portfolio</a> for more projects.
      </p>
    </article>
  </main>
);

export default About;
