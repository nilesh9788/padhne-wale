import { AppShell, designerUrl, Footer, Manifesto } from "@/lib/products";

export default function AboutPage() {
  return (
    <AppShell>
      <main className="about-page">
        <section className="about-hero">
          <div>
            <span className="kicker">About the idea / 07</span>
            <h1>
              Study is
              <br />
              <i>everywhere.</i>
            </h1>
          </div>
        </section>
        <section className="origin" id="idea">
          <div>
            <span className="kicker">The origin story</span>
            <h2>
              We changed what counts as <i>study material.</i>
            </h2>
          </div>
          <div className="origin-copy">
            <p>We’re building a new category of learning </p>
            <p>
              products that fit naturally into students’ everyday lives. By
              turning familiar games and objects into concept- and PYQ-based
              study tools, we make revision more frequent, interactive and
              memorable.{" "}
            </p>
            <p>
              This transforms passive study time into active learning—creating a
              scalable way to make exam preparation more engaging, accessible
              and consistent.
            </p>
          </div>
        </section>
        <Manifesto compact />
        <section className="team" id="team">
          <div className="team-header">
            <span className="kicker">The people behind the objects</span>

            <h2>
              Small team.
              <br />
              <i>Big Dreams.</i>
            </h2>
          </div>

          <div className="team-grid">
            {/* FOUNDER */}
            <article className="person person-founder">
              <div className="person-number">01 / THE FOUNDER</div>

              <div className="person-art">
                <div className="person-art-glow" />
                <img
                  src="/founder.png"
                  alt="Illustrated founder"
                  className="person-image"
                />

                <div className="person-stamp">01</div>
              </div>

              <div className="person-info">
                <div>
                  <h3>Nilesh Agarwal</h3>
                  <p>Founder / Chief question asker</p>
                </div>
                <a
                  className="person-arrow"
                  href="https://www.linkedin.com/in/nileshagrawal9788/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ↗
                </a>{" "}
              </div>
            </article>

            {/* DESIGN */}
          </div>
        </section>

        <section className="join">
          <div>
            <span className="kicker">Come make a strange thing</span>
            <h2>
              Join us
              <br />
              <i>as a designer.</i>
            </h2>
          </div>
          <div className="join-copy">
            <p>
              We are looking for curious people who think a study tool can be a
              little more fun, tactile and unexpected.
            </p>
            <a
              className="button button-dark"
              href={designerUrl}
              target="_blank"
              rel="noreferrer"
            >
              Open designer form ↗
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </AppShell>
  );
}
