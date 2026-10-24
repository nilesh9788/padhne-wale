"use client";
import { AppShell, Footer } from "@/lib/products";
import {
  useEffect,
  useRef,
  useState,
} from "react";

type PRHotspot = {
  id: number;
  title: string;
  description: string;

  // Desktop coordinates
  desktop: {
    left: string;
    top: string;
    width: string;
    height: string;
  };

  // Mobile coordinates
  mobile: {
    left: string;
    top: string;
    width: string;
    height: string;
  };
};

const prHotspots: PRHotspot[] = [
  {
    id: 1,
    title: "what is padhne wale",
    description:
      "Padhne Wale is built around a simple belief: learning should fit naturally into everyday life, making curiosity easier, more accessible, playful, and relevant.",
    desktop: {
      left: "22%",
      top: "19%",
      width: "13%",
      height: "12%",
    },
    mobile: {
      left: "17%",
      top: "17%",
      width: "15%",
      height: "12%",
    },
  },

  {
    id: 2,
    title: "problem we are solving",
    description:
      "Students have information everywhere but often lack engaging ways to connect with it. We make learning feel less intimidating, more memorable, and easier to approach.",
    desktop: {
      left: "44%",
      top: "14%",
      width: "15%",
      height: "13%",
    },
    mobile: {
      left: "46%",
      top: "21%",
      width: "17%",
      height: "13%",
    },
  },

  {
    id: 3,
    title: "for whome we are",
    description:
      "We create for curious learners who want education to feel relevant beyond classrooms, textbooks, and rigid routines, wherever they happen to be in life.",
    desktop: {
      left: "73%",
      top: "24%",
      width: "16%",
      height: "12%",
    },
    mobile: {
      left: "76%",
      top: "18%",
      width: "17%",
      height: "12%",
    },
  },

  {
    id: 4,
    title: "what we make",
    description:
      "We turn ideas, information, and everyday experiences into thoughtful learning formats that people can interact with, understand quickly, remember naturally, and return to.",
    desktop: {
      left: "10%",
      top: "38%",
      width: "14%",
      height: "12%",
    },
    mobile: {
      left: "8%",
      top: "40%",
      width: "16%",
      height: "12%",
    },
  },

  {
    id: 5,
    title: "about us",
    description:
      "We are a team interested in the space between culture, creativity, and learning, building experiences that make knowledge feel human, visual, unexpected, and enjoyable.",
    desktop: {
      left: "36%",
      top: "40%",
      width: "13%",
      height: "11%",
    },
    mobile: {
      left: "39%",
      top: "43%",
      width: "16%",
      height: "11%",
    },
  },

  {
    id: 6,
    title: "join use and solve with us",
    description:
      "We believe better learning experiences can be built together. If you have ideas, problems, or possibilities worth exploring, come collaborate and create with us.",
    desktop: {
      left: "82%",
      top: "39%",
      width: "16%",
      height: "14%",
    },
    mobile: {
      left: "76%",
      top: "48%",
      width: "18%",
      height: "13%",
    },
  },
];

export default function PRPage() {
  const [activeHotspot, setActiveHotspot] =
    useState<PRHotspot | null>(null);

  const [isPointerVisible, setIsPointerVisible] =
    useState(false);

  // NEW: keeps track of the hotspot currently being hovered
  const [hoveredHotspot, setHoveredHotspot] =
    useState<PRHotspot | null>(null);

  const pointerRef =
    useRef<HTMLDivElement | null>(null);

  const pointerTitleRef =
    useRef<HTMLDivElement | null>(null);

  const pointerAnimationFrame =
    useRef<number | null>(null);

  const pointerPosition =
    useRef({
      x: 0,
      y: 0,
    });

  /* ---------------------------------------------------------
     CUSTOM POINTER
     --------------------------------------------------------- */

  useEffect(() => {
    const handlePointerMove = (
      event: PointerEvent
    ) => {
      pointerPosition.current = {
        x: event.clientX,
        y: event.clientY,
      };

      if (
        pointerAnimationFrame.current !==
        null
      ) {
        return;
      }

      pointerAnimationFrame.current =
        window.requestAnimationFrame(() => {
          const pointer =
            pointerRef.current;

          const title =
            pointerTitleRef.current;

          if (pointer) {
            pointer.style.transform =
              `translate3d(
                ${pointerPosition.current.x}px,
                ${pointerPosition.current.y}px,
                0
              )`;
          }

          if (title) {
            title.style.transform =
              `translate3d(
                ${pointerPosition.current.x + 18}px,
                ${pointerPosition.current.y + 18}px,
                0
              )`;
          }

          pointerAnimationFrame.current =
            null;
        });
    };

    window.addEventListener(
      "pointermove",
      handlePointerMove,
      {
        passive: true,
      }
    );

    return () => {
      window.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      if (
        pointerAnimationFrame.current !==
        null
      ) {
        window.cancelAnimationFrame(
          pointerAnimationFrame.current
        );
      }
    };
  }, []);

  /* ---------------------------------------------------------
     ESCAPE CLOSE
     --------------------------------------------------------- */

  useEffect(() => {
    if (!activeHotspot) {
      return;
    }

    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (
        event.key === "Escape"
      ) {
        setActiveHotspot(null);
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [activeHotspot]);

  /* ---------------------------------------------------------
     BODY LOCK WHEN MODAL IS OPEN
     --------------------------------------------------------- */

  useEffect(() => {
    if (!activeHotspot) {
      return;
    }

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow =
      "hidden";

    return () => {
      document.body.style.overflow =
        previousOverflow;
    };
  }, [activeHotspot]);

  /* ---------------------------------------------------------
     POINTER ENTER
     --------------------------------------------------------- */

  const handleHotspotEnter = (
    hotspot: PRHotspot
  ) => {
    setHoveredHotspot(hotspot);
    setIsPointerVisible(true);
  };

  /* ---------------------------------------------------------
     POINTER LEAVE
     --------------------------------------------------------- */

  const handleHotspotLeave = () => {
    setHoveredHotspot(null);
    setIsPointerVisible(false);
  };

  /* ---------------------------------------------------------
     OPEN POPUP
     --------------------------------------------------------- */

  const openHotspot = (
    hotspot: PRHotspot
  ) => {
    setActiveHotspot(hotspot);
    setHoveredHotspot(null);
    setIsPointerVisible(false);
  };

  return (
    <AppShell>
    <main className="pr-page">

      {/* =====================================================
          MAIN PR SCREEN
          ===================================================== */}

      <section className="pr-screen">

        {/* ---------------------------------------------------
            DESKTOP IMAGE
            --------------------------------------------------- */}

        <picture className="pr-background">
          <source
            media="(max-width: 767px)"
            srcSet="/pr-mobile.png"
          />

          <img
            src="/pr-desktop.png"
            alt="Padhne Wale pitch deck"
            className="pr-background-image"
            draggable={false}
          />
        </picture>

        {/* ---------------------------------------------------
            DARKENING LAYER

            Keeps the artwork visible but makes the overall
            screen darker and gives the interaction more depth.
            --------------------------------------------------- */}

        <div
          className="pr-dark-overlay"
          aria-hidden="true"
        />

        {/* ---------------------------------------------------
            MINIMAL GRADIENT

            Slightly stronger around the lower portion so the
            bottom instruction remains readable without putting
            a heavy black gradient over the artwork.
            --------------------------------------------------- */}

        <div
          className="pr-gradient-overlay"
          aria-hidden="true"
        />

        {/* =================================================
            INTERACTIVE HOTSPOTS
            ================================================= */}

        <div className="pr-hotspots">
          {prHotspots.map(
            (hotspot) => (
              <button
                key={hotspot.id}
                type="button"
                className="pr-hotspot"
                aria-label={
                  hotspot.title
                }
                style={
                  {
                    "--desktop-left":
                      hotspot.desktop.left,
                    "--desktop-top":
                      hotspot.desktop.top,
                    "--desktop-width":
                      hotspot.desktop.width,
                    "--desktop-height":
                      hotspot.desktop.height,

                    "--mobile-left":
                      hotspot.mobile.left,
                    "--mobile-top":
                      hotspot.mobile.top,
                    "--mobile-width":
                      hotspot.mobile.width,
                    "--mobile-height":
                      hotspot.mobile.height,
                  } as React.CSSProperties
                }
                onMouseEnter={() =>
                  handleHotspotEnter(
                    hotspot
                  )
                }
                onMouseLeave={
                  handleHotspotLeave
                }
                onFocus={() =>
                  handleHotspotEnter(
                    hotspot
                  )
                }
                onBlur={
                  handleHotspotLeave
                }
                onClick={() =>
                  openHotspot(
                    hotspot
                  )
                }
              >

                {/* -----------------------------------------
                    Invisible interaction area.

                    The actual title is already part of the
                    artwork, so we DO NOT render another title
                    over it.
                    ----------------------------------------- */}

                <span className="pr-hotspot-area" />

              </button>
            )
          )}
        </div>

        {/* =================================================
            CUSTOM POINTER
            ================================================= */}

        <div
          ref={pointerRef}
          className={
            `pr-custom-pointer ${
              isPointerVisible
                ? "is-visible"
                : ""
            }`
          }
          aria-hidden="true"
        >

          <div className="pr-pointer-ring">

            <span className="pr-pointer-cross pr-pointer-cross-top" />

            <span className="pr-pointer-cross pr-pointer-cross-right" />

            <span className="pr-pointer-cross pr-pointer-cross-bottom" />

            <span className="pr-pointer-cross pr-pointer-cross-left" />

            <span className="pr-pointer-dot" />

          </div>

        </div>

        {/* ---------------------------------------------------
            POINTER TITLE

            This is deliberately NOT given a background.

            The title now comes from the hotspot currently
            being hovered, rather than activeHotspot.
            --------------------------------------------------- */}

        <div
          ref={pointerTitleRef}
          className={
            `pr-pointer-title ${
              isPointerVisible &&
              hoveredHotspot
                ? "is-visible"
                : ""
            }`
          }
          aria-hidden="true"
        >
          {hoveredHotspot?.title ?? ""}
        </div>

        {/* =================================================
            BOTTOM INSTRUCTION
            ================================================= */}

        <div className="pr-instruction">
          <span>
            hover on screen to get our pitch deck
          </span>
        </div>

      </section>

      {/* =====================================================
          POPUP / PITCH DECK PANEL
          ===================================================== */}

      {activeHotspot && (
        <div
          className="pr-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="pr-modal-title"
          onMouseDown={(
            event
          ) => {
            if (
              event.target ===
              event.currentTarget
            ) {
              setActiveHotspot(
                null
              );
            }
          }}
        >

          <div className="pr-modal-card">

            {/* ---------------------------------------------
                CLOSE
                --------------------------------------------- */}

            <button
              type="button"
              className="pr-modal-close"
              aria-label="Close pitch deck"
              onClick={() =>
                setActiveHotspot(
                  null
                )
              }
            >
              <span />
              <span />
            </button>

            {/* ---------------------------------------------
                IMAGE

                Uses the same artwork that is visible on
                the main screen. Desktop/mobile source is
                automatically selected.
                --------------------------------------------- */}

            <div className="pr-modal-image">
              <picture>

                <source
                  media="(max-width: 767px)"
                  srcSet="/pr-mobile.png"
                />

                <img
                  src="/pr-desktop.png"
                  alt=""
                  draggable={false}
                />

              </picture>
            </div>

            {/* ---------------------------------------------
                CONTENT
                --------------------------------------------- */}

            <div className="pr-modal-content">

              <div className="pr-modal-eyebrow">
                Padhne Wale / Pitch Deck
              </div>

              <h2
                id="pr-modal-title"
              >
                {
                  activeHotspot.title
                }
              </h2>

              <p>
                {
                  activeHotspot.description
                }
              </p>

              <button
                type="button"
                className="pr-modal-back"
                onClick={() =>
                  setActiveHotspot(
                    null
                  )
                }
              >
                Back to the wall

                <span>
                  ↗
                </span>
              </button>

            </div>

          </div>

        </div>
      )}

    </main>
    <Footer />
    </AppShell>
  );
}


