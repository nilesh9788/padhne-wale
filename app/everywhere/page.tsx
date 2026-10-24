"use client";
import { AppShell, Footer } from "@/lib/products";

import { useEffect, useRef, useState } from "react";


type EverywhereCard = {
  id: number;
  title: string;
  image: string;
  description: string;
};

const everywhereCards: EverywhereCard[] = [
  {
    id: 1,
    title: "STUDY ON THE GO",
    image: "/everywhere-01.png",
    description:
      "A familiar everyday object transformed into study material, making revision feel effortless even when you are away from your usual desk or study setup.",
  },
  {
    id: 2,
    title: "LEARN BETWEEN THINGS",
    image: "/everywhere-02.png",
    description:
      "Turn those little gaps between classes, commutes and conversations into useful moments of learning with study material designed to travel wherever you do.",
  },
  {
    id: 3,
    title: "NO DESK NEEDED",
    image: "/everywhere-03.png",
    description:
      "Your study session does not need a table, chair or perfectly organised setup. Pick up something familiar, play with it and sneak in some revision.",
  },
  {
    id: 4,
    title: "REVISION EVERYWHERE",
    image: "/everywhere-04.png",
    description:
      "Revision can happen in unexpected places when the material itself fits naturally into your everyday life instead of asking you to stop everything around it.",
  },
  {
    id: 5,
    title: "POCKET SIZED LEARNING",
    image: "/everywhere-05.png",
    description:
      "Small enough to carry around and useful enough to pick up anytime, this turns waiting, travelling and taking breaks into opportunities to revise.",
  },
  {
    id: 6,
    title: "PLAY LEARN REPEAT",
    image: "/everywhere-06.png",
    description:
      "Learning becomes easier to return to when it feels like something you can play with. Pick it up, explore a concept and repeat whenever you want.",
  },
  {
    id: 7,
    title: "WAIT LEARN REPEAT",
    image: "/everywhere-07.png",
    description:
      "Waiting does not always have to mean scrolling. Keep something useful nearby and turn those otherwise forgettable minutes into quick revision breaks.",
  },
  {
    id: 8,
    title: "ANY PLACE WORKS",
    image: "/everywhere-08.png",
    description:
      "The point is simple: learning does not belong to one particular place. Wherever you happen to be, there is always room for one more concept.",
  },
  {
    id: 9,
    title: "MAKE TIME STUDY",
    image: "/everywhere-09.png",
    description:
      "Instead of waiting for the perfect study session, make use of the time already around you and turn ordinary moments into small but meaningful revision.",
  },
  {
    id: 10,
    title: "STUDY WITHOUT STUDYING",
    image: "/everywhere-10.png",
    description:
      "The best part is that it does not have to look like traditional studying. Familiar objects, playful formats and useful information can quietly do the work.",
  },
];

export default function EverywherePage() {
  const [activeCard, setActiveCard] = useState<EverywhereCard | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const cardsSectionRef = useRef<HTMLElement | null>(null);
  const cardRefs = useRef<(HTMLButtonElement | null)[]>([]);

  /*
   * ---------------------------------------------------------
   * CARD PARALLAX
   * ---------------------------------------------------------
   *
   * Each card receives a small movement based on its position
   * inside the viewport. This keeps the animation subtle and
   * prevents the cards from feeling like a conventional grid.
   */
  useEffect(() => {
    const cardsSection = cardsSectionRef.current;

    if (!cardsSection) return;

    let ticking = false;

    const updateParallax = () => {
      const viewportCenter = window.innerHeight / 2;

      cardRefs.current.forEach((card) => {
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;

        const distanceFromCenter =
          (cardCenter - viewportCenter) / window.innerHeight;

        const movement = distanceFromCenter * -28;

        card.style.setProperty("--everywhere-parallax", `${movement}px`);
      });

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    updateParallax();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", updateParallax);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateParallax);
    };
  }, []);

  /*
   * ---------------------------------------------------------
   * ESCAPE TO CLOSE POPUP
   * ---------------------------------------------------------
   */
  useEffect(() => {
    if (!activeCard) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveCard(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeCard]);

  /*
   * Prevent background scrolling while popup is open.
   */
  useEffect(() => {
    if (!activeCard) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [activeCard]);

  return (
    <AppShell> 
    <main className="everywhere-page" id="top">
      {/* =====================================================
          SCREEN 01 — EVERYWHERE HERO
          ===================================================== */}

      <section className="everywhere-hero">
        <div className="everywhere-hero-media" aria-hidden="true">
          <img src="/everywhere-hero.png" alt="" draggable={false} />
        </div>

        <div className="everywhere-hero-gradient" aria-hidden="true" />

        <div className="everywhere-hero-content">
          <div className="everywhere-hero-title">
            <div className="everywhere-hero-title-main">PADHNE WALE</div>

            <div className="everywhere-hero-title-sub">
              <span>Kahin Bhi Padh </span>
              <span className="everywhere-hero-title-lime">Lete Hain</span>
            </div>

            {/* <div className="everywhere-hero-title-line" /> */}
          </div>
        </div>
      </section>

      {/* =====================================================
          SCREEN 02 — EVERYWHERE CARDS
          ===================================================== */}

      <section className="everywhere-cards-section" ref={cardsSectionRef}>
        <div className="everywhere-cards">
          {everywhereCards.map((card, index) => (
            <button
              key={card.id}
              ref={(element) => {
                cardRefs.current[index] = element;
              }}
              type="button"
              className={`everywhere-card ${
                hoveredCard === card.id ? "everywhere-card-active" : ""
              }`}
              style={
                {
                  "--card-index": index,
                } as React.CSSProperties
              }
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onFocus={() => setHoveredCard(card.id)}
              onBlur={() => setHoveredCard(null)}
              onClick={() => setActiveCard(card)}
              aria-label={`Open ${card.title}`}
            >
              <div className="everywhere-card-inner">
                <div className="everywhere-card-image">
                  <img src={card.image} alt="" draggable={false} />

                  <div
                    className="everywhere-card-image-overlay"
                    aria-hidden="true"
                  />
                </div>

                <div className="everywhere-card-copy">
                  <span className="everywhere-card-number">0{card.id}</span>

                  <h2>{card.title}</h2>

                  <span className="everywhere-card-arrow">↗</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* =====================================================
          CARD POPUP
          ===================================================== */}

      {activeCard && (
        <div
          className="everywhere-modal"
          role="dialog"
          aria-modal="true"
          aria-label={activeCard.title}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setActiveCard(null);
            }
          }}
        >
          <div className="everywhere-modal-content">
            <button
              type="button"
              className="everywhere-modal-close"
              onClick={() => setActiveCard(null)}
              aria-label="Close"
            >
              ×
            </button>

            <div className="everywhere-modal-image">
              <img src={activeCard.image} alt="" draggable={false} />
            </div>

            <div className="everywhere-modal-copy">
              <div className="everywhere-modal-meta">
                <span>Everywhere / 0{activeCard.id}</span>

                <span>Study material</span>
              </div>

              <h2>{activeCard.title}</h2>

              <p>{activeCard.description}</p>
            </div>
          </div>
        </div>
      )}
    </main>
    <Footer />
    </AppShell>
  );
}
