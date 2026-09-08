'use client'

import { useEffect, useRef, useState } from 'react'

export type Product = {
  id: string
  index: string
  name: string
  eyebrow: string
  title: string
  description: string
  color: string
  type: 'cards' | 'chips' | 'jenga' | 'tell' | 'pack' | 'matchbox'
  features: string[]
  image: string
}

export const products: Product[] = [
  {
    id: 'formula-cards',
    index: '01',
    name: 'Formula Playing Cards',
    eyebrow: 'The original study object',
    title: 'A deck you can actually revise from.',
    description:
      '52 cards. 52 things worth remembering. Chaar worlds of knowledge, shuffled into your pocket — full jugaad for revision.',
    color: 'lime',
    type: 'cards',
    image: '/products/playing-card.png',
    features: [
      '52 educational cards',
      '4 subject categories',
      'Formula-based learning',
      'Collectible design',
    ],
  },
  {
    id: 'chemistry-chips',
    index: '02',
    name: 'Chemistry Poker Chips',
    eyebrow: 'Chemistry / All in',
    title: 'The only chips worth betting your marks on.',
    description:
      'Scientists, constants and discoveries — stacked into a tactile set you will want to keep on your desk.',
    color: 'coral',
    type: 'chips',
    image: '/products/poker-coin.png',
    features: [
      'Scientists & discoveries',
      'Chemistry constants',
      'Premium weighted chips',
      'Collectible set',
    ],
  },
  {
    id: 'concept-jenga',
    index: '03',
    name: 'Concept Jenga',
    eyebrow: 'Play until it clicks',
    title: 'Losing still teaches you something.',
    description:
      'Every block is a question, a formula or a challenge. Pull one out. Put an idea in.',
    color: 'blue',
    type: 'jenga',
    image: '/products/jenga.png',
    features: [
      'Question blocks',
      'Formula blocks',
      'Challenge blocks',
      'Subject-wise editions',
    ],
  },
  {
    id: 'tell-or-solve',
    index: '04',
    name: 'Tissue Paper',
    eyebrow: 'Truth or dare, re-written',
    title: 'Make studying a group activity.',
    description:
      'Tell a fact, solve a problem, challenge a friend. The fastest way to learn is to make it social.',
    color: 'yellow',
    type: 'tell',
    image: '/products/tissue-paper.png',
    features: [
      'Tell cards',
      'Solve cards',
      'Rapid-fire rounds',
      'Challenge cards',
    ],
  },
  {
    id: 'cram-pack',
    index: '05',
    name: 'Monopoly',
    eyebrow: 'For the exam tomorrow',
    title: 'Pocket-sized panic management.',
    description:
      'A tiny revision pack for the five minutes before class, the bus ride, or the night before.',
    color: 'pink',
    type: 'pack',
    image: '/products/monopoly.png',
    features: [
      'Pocket-sized',
      'Chapter-specific',
      'Formula cards',
      'Last-minute revision',
    ],
  },
  {
    id: 'matchbox-formulas',
    index: '06',
    name: 'UNO No Mercy Card',
    eyebrow: 'Tiny box, big recall',
    title: 'Light up a formula.',
    description:
      'Pull a strip. Read a formula. Put it somewhere your brain can find it later.',
    color: 'orange',
    type: 'matchbox',
    image: '/products/uno.png',
    features: [
      'Formula strips',
      'Tiny packaging',
      'Carry anywhere',
      'Instant recall',
    ],
  },
  {
    id: 'cigarette box',
    index: '06',
    name: 'Cigarette Box formula book',
    eyebrow: 'Tiny box, big recall',
    title: 'Light up a formula.',
    description:
      'Pull a strip. Read a formula. Put it somewhere your brain can find it later.',
    color: 'orange',
    type: 'matchbox',
    image: '/products/Cigarette.png',
    features: [
      'Formula strips',
      'Tiny packaging',
      'Carry anywhere',
      'Instant recall',
    ],
  },
]

export const purchaseUrl = 'https://forms.google.com/'
export const designerUrl = 'https://forms.google.com/'

export function getProduct(id: string) {
  return products.find((product) => product.id === id)
}

export function ProductObject({
  type,
  small = false,
}: {
  type: Product['type']
  small?: boolean
}) {
  return (
    <div
      className={`object object-${type} ${small ? 'object-small' : ''}`}
      aria-hidden="true"
    >
      {type === 'cards' && (
        <>
          <span>F = ma</span>
          <span>pH 7</span>
          <span>∑ n²</span>
        </>
      )}

      {type === 'chips' && (
        <>
          <span>Na</span>
          <span>6.022</span>
          <span>1869</span>
        </>
      )}

      {type === 'jenga' &&
        Array.from({ length: 9 }).map((_, i) => (
          <i key={i}>{i % 3 === 0 ? '?' : '→'}</i>
        ))}

      {type === 'tell' && (
        <>
          <span>TELL</span>
          <span>SOLVE</span>
        </>
      )}

      {type === 'pack' && (
        <>
          <b>CRAM</b>
          <em>PACK</em>
        </>
      )}

      {type === 'matchbox' && (
        <>
          <b>FORMULA</b>
          <em>STRIPS</em>
        </>
      )}
    </div>
  )
}

export function ProductVisual({
  product,
  small = false,
}: {
  product: Product
  small?: boolean
}) {
  return (
    <div
      className={`visual visual-${product.color} ${
        small ? 'visual-small' : ''
      }`}
    >
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
        draggable={false}
      />
    </div>
  )
}

export function ProductCard({
  product,
  onOpen,
}: {
  product: Product
  onOpen: (product: Product) => void
}) {
  return (
    <button
      className="product-card"
      onClick={() => onOpen(product)}
      aria-label={`View details for ${product.name}`}
    >
      <div className="card-meta">
        <span>{product.index}</span>
        <span>{product.eyebrow}</span>
      </div>

      <ProductVisual product={product} small />

      <div className="card-copy">
        <h3>{product.name}</h3>
        <p>{product.title}</p>
        <span className="text-link">Open product ↗</span>
      </div>
    </button>
  )
}

export function ProductModal({
  product,
  onClose,
}: {
  product: Product | null
  onClose: () => void
}) {
  if (!product) return null

  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <section
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close product details"
        >
          ×
        </button>

        <div className="modal-visual">
          <ProductVisual product={product} />
        </div>

        <div className="modal-content">
          <span className="kicker">
            {product.index} / {product.eyebrow}
          </span>

          <h2 id="product-modal-title">{product.name}</h2>

          <p>{product.description}</p>

          <ul>
            {product.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>

          <a
            className="button button-dark"
            href={purchaseUrl}
            target="_blank"
            rel="noreferrer"
          >
            Get yours ↗
          </a>
        </div>
      </section>
    </div>
  )
}

export function Nav({ onProducts }: { onProducts?: () => void }) {
  return (
    <header className="site-nav">
      <a href="/" className="logo">
        Padhne Wale<span>®</span>
      </a>

      <nav className="nav-links">
        <a href="/about">About Us</a>
        <a href="/products">Products</a>
      </nav>

      <a
        className="nav-cta"
        href={purchaseUrl}
        target="_blank"
        rel="noreferrer"
      >
        Get yours <span>↗</span>
      </a>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <a className="logo" href="/">
          Padhne Wale<span>®</span>
        </a>

        <p>Made for people who can study literally anywhere.</p>
      </div>

      <div className="footer-links">
        <a href="/products">Products</a>
        <a href="/about">About</a>
        <a
          href={purchaseUrl}
          target="_blank"
          rel="noreferrer"
        >
          Purchase ↗
        </a>
      </div>

      <small>© 2026 — study material for everywhere</small>
    </footer>
  )
}

export function LetterNoise() {
  return (
    <span className="noise" aria-hidden="true">
      ✳
    </span>
  )
}

export function Manifesto({
  compact = false,
}: {
  compact?: boolean
}) {
  return (
    <section
      className={`manifesto ${
        compact ? 'manifesto-compact' : ''
      }`}
    >
      <p>We didn&apos;t change how students study.</p>

      <h2>
       We are bringing Learning <i>That Lives Beyond The Exam.</i>
      </h2>

      <p className="manifesto-body"> Designed with strong visual identity, thoughtful details and collectible appeal, a keepsake, desk piece or meaningful gift. </p>
    </section>
  )
}

export function Marquee() {
  return (
    <div className="marquee">
      <div>
        STUDY DOESN&apos;T NEED A DESK <span>✳</span>{' '}
        PLAY / LEARN / REPEAT <span>✳</span>{' '}
        STUDY MATERIAL FOR EVERYWHERE <span>✳</span>
      </div>
    </div>
  )
}

/*
 * =========================================================
 * HOW IT WORKS — "how" section
 * =========================================================
 *
 * Background is a full-bleed scene image with a dark gradient
 * coming in from the left (so the PICK / PLAY / LEARN / REPEAT
 * copy stays readable). A handful of invisible hotspots sit on
 * top of the objects in the scene (playing cards, poker chips,
 * jenga, matchbox, cram pack) — hovering / focusing one reveals
 * a small "+" callout with the object's name and a one-line
 * description, same behaviour as the reference screenshot.
 *
 * Heading words (Pick / Play / Learn / Repeat) are meant to be
 * set in Space Grotesk, and the supporting copy lines + the CTA
 * button in Syncopate — that mapping lives in the class names
 * below (`how-step-title` / `how-step-copy` / `how-cta`) so
 * it can be wired up from the global CSS/font-face rules you'll
 * share next.
 */

type HowSpot = {
  id: string
  name: string
  description: string
  style: { top: string; left: string }
  placement: 'right' | 'left' | 'above' | 'below'
}

const howSpots: HowSpot[] = [
  {
    id: 'cigarette',
    name: 'Cigarette',
    description:
      'A familiar everyday object turned into an unexpected piece of study material.',
    style: { top: '30.5%', left: '50.1%' },
    placement: 'right',
  },
  {
    id: 'cards',
    name: 'Playing Cards',
    description:
      'A well designed and planned playing cards for the JEE aspirants.',
    style: { top: '81.4%', left: '56.5%' },
    placement: 'above',
  },
  {
    id: 'chips',
    name: 'Poker Chips',
    description:
      'Weighted chemistry chips that turn constants and discoveries into a stackable set.',
    style: { top: '83.4%', left: '64.1%' },
    placement: 'above',
  },
  {
    id: 'tissue',
    name: 'Tissue Paper',
    description:
      'Even the most ordinary things around you can become a way to learn.',
    style: { top: '77.2%', left: '74.4%' },
    placement: 'above',
  },
  {
    id: 'jenga',
    name: 'Concept Jenga',
    description:
      'Every block hides a question, a formula or a challenge — pull one out, learn one.',
    style: { top: '51%', left: '84.5%' },
    placement: 'left',
  },
  {
    id: 'cigarette-box',
    name: 'Cigarette Box',
    description:
      'A tiny familiar box reimagined as a pocket-sized piece of revision.',
    style: { top: '87.7%', left: '71.7%' },
    placement: 'above',
  },
]

export function HowItWorks() {
  const [activeSpot, setActiveSpot] = useState<string | null>(null)

  return (
    <section className="how" id="how">
      <div className="how-media">
        <img
          className="how-media-image"
          src="/how-it-works-bg.png"
          alt=""
          aria-hidden="true"
        />

        <div
          className="how-media-gradient"
          aria-hidden="true"
        />

        {howSpots.map((spot) => (
          <div
            key={spot.id}
            className={`how-spot how-spot-${spot.placement} ${
              activeSpot === spot.id ? 'how-spot-active' : ''
            }`}
            style={spot.style}
            onMouseEnter={() => setActiveSpot(spot.id)}
            onMouseLeave={() => setActiveSpot(null)}
          >
            <button
              type="button"
              className="how-spot-marker"
              aria-label={`${spot.name}: ${spot.description}`}
              aria-describedby={`how-spot-${spot.id}-tooltip`}
              onFocus={() => setActiveSpot(spot.id)}
              onBlur={() => setActiveSpot(null)}
            >
              <span aria-hidden="true">+</span>
            </button>

            <span
              id={`how-spot-${spot.id}-tooltip`}
              className="how-spot-card"
              role="tooltip"
            >
              <b className="how-spot-name">{spot.name}</b>
              <span className="how-spot-desc">{spot.description}</span>
            </span>
          </div>
        ))}
      </div>

      <div className="section-intro">
        <div className="how-steps">
          <div className="how-step">
            <h3 className="how-step-title how-step-title-white">
              Pick
            </h3>

            <p className="how-step-copy">
              Choose your study material.
            </p>
          </div>

          <div className="how-step">
            <h3 className="how-step-title how-step-title-lime">
              Play
            </h3>

            <p className="how-step-copy">
              Use it like the object you already know.
            </p>
          </div>

          <div className="how-step">
            <h3 className="how-step-title how-step-title-lime">
              Learn
            </h3>

            <p className="how-step-copy">
              Every play becomes revision.
            </p>
          </div>

          <div className="how-step">
            <h3 className="how-step-title how-step-title-white">
              Repeat
            </h3>

            <p className="how-step-copy">
              Because apparently, you can study anywhere.
            </p>
          </div>
        </div>

        {/* CTA intentionally omitted from this section. */}
      </div>
    </section>
  )
}

export function ShopCTA() {
  return (
    <section className="shop-cta">
      <div className="cta-object cta-left">
        <ProductObject type="cards" small />
      </div>

      <div className="cta-object cta-right">
        <ProductObject type="chips" small />
      </div>

      <span className="kicker">
        Your next study break
      </span>

      <h2>
        Ready to study without looking like you&apos;re
        studying?
      </h2>

      <a
        className="button button-lime"
        href={purchaseUrl}
        target="_blank"
        rel="noreferrer"
      >
        Get your study material ↗
      </a>
    </section>
  )
}

/*
 * =========================================================
 * ABOUT / IDEA PREVIEW
 * =========================================================
 *
 * Full-bleed visual section inspired by the supplied reference.
 *
 * Typography:
 * - "THE IDEA"                    → Syncopate
 * - "A SMALL OBSERVATION"         → Syncopate
 * - Main statement                → Space Grotesk
 * - "READ WHOLE STORY"            → Syncopate
 *
 * The background artwork and left-side gradient are intentionally
 * separated into their own elements so the global CSS can precisely
 * control the image crop, gradient strength, typography and layout.
 */

export function AboutPreview() {
  return (
    <section className="about-preview" id="idea">
      {/* Background artwork */}
      <div
        className="about-preview-media"
        aria-hidden="true"
      >
        <img
          className="about-preview-image"
          src="/about-bg.png"
          alt=""
          draggable={false}
        />

        <div
          className="about-preview-gradient"
          aria-hidden="true"
        />
      </div>

      {/* Circular idea marker */}
      <div className="about-stamp">
        <span>
          The
          <br />
          Idea
        </span>
      </div>

      {/* Main story copy */}
      <div className="about-preview-content">
        <span className="about-preview-observation">
          A small observation
        </span>

        <h2 className="about-preview-title">
          WHAT IF YOUR
          <br />
          <span>TIMEPASS</span> WAS
          <br />
          YOUR <span>STUDY TIME</span>
        </h2>

        <a
          className="about-preview-link"
          href="/about"
        >
          Read whole story
        </a>
      </div>
    </section>
  )
}

export function BackToTop() {
  return (
    <a className="back-top" href="#top">
      ↑
    </a>
  )
}

export function ScrollProgress() {
  return (
    <div
      className="scroll-progress"
      aria-hidden="true"
    />
  )
}

export function ProductUniverse({
  onOpen,
}: {
  onOpen: (product: Product) => void
}) {
  return (
    <section
      className="collection"
      id="collection"
    >
      <div className="collection-heading">
        <span className="kicker">
          The collection / 06 objects
        </span>

        <h2>
          Six objects.
          <br />
          <i>One study system.</i>
        </h2>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onOpen={onOpen}
          />
        ))}
      </div>
    </section>
  )
}

export function DeckSection() {
  const sectionRef = useRef<HTMLElement | null>(null)

  const targetProgress = useRef(0)
  const currentProgress = useRef(0)
  const animationFrame = useRef<number | null>(null)

  const [progress, setProgress] = useState(0)

  /*
   * Currently selected category.
   *
   * null = no popup is open
   */
  const [selectedCategory, setSelectedCategory] =
    useState<{
      name: string
      description: string
      availableFor: string
      src: string
    } | null>(null)

  /*
   * =========================================================
   * DECK DATA
   * =========================================================
   */

  const deckImages = [
    {
      name: 'Physics',
      src: '/physics.png',
      alt: 'Physics study material',

      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
        'Suspendisse varius enim in eros elementum tristique. ' +
        'Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',

      availableFor:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
        'Students, learners and anyone interested in understanding ' +
        'the fundamental concepts of physics.',
    },

    {
      name: 'Chemistry',
      src: '/chemistry.png',
      alt: 'Chemistry study material',

      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
        'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. ' +
        'Donec ullamcorper nulla non metus auctor fringilla.',

      availableFor:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
        'Students and learners looking to explore chemistry through ' +
        'structured and engaging study material.',
    },

    {
      name: 'Mathematics',
      src: '/maths.png',
      alt: 'Maths study material',

      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
        'Cras mattis consectetur purus sit amet fermentum. ' +
        'Aenean lacinia bibendum nulla sed consectetur.',

      availableFor:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
        'Learners who want to strengthen their mathematical concepts, ' +
        'problem-solving abilities and logical thinking.',
    },

    {
      name: 'Biology',
      src: '/biology.png',
      alt: 'Biology study material',

      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
        'Maecenas faucibus mollis interdum. Praesent commodo cursus magna, ' +
        'vel scelerisque nisl consectetur et.',

      availableFor:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
        'Students and curious learners interested in exploring biology ' +
        'and the world of living organisms.',
    },
  ]

  /*
   * =========================================================
   * SCROLL PROGRESS
   * =========================================================
   */

  useEffect(() => {
    const section = sectionRef.current

    if (!section) return

    const updateTargetProgress = () => {
      const sectionTop =
        window.scrollY +
        section.getBoundingClientRect().top

      const scrollableHeight =
        section.offsetHeight -
        window.innerHeight

      const rawProgress =
        (window.scrollY - sectionTop) /
        Math.max(scrollableHeight, 1)

      targetProgress.current = Math.max(
        0,
        Math.min(1, rawProgress)
      )
    }

    const animate = () => {
      /*
       * Smooth scrolling interpolation.
       */
      const smoothing = 0.045

      currentProgress.current +=
        (targetProgress.current -
          currentProgress.current) *
        smoothing

      setProgress(currentProgress.current)

      animationFrame.current =
        requestAnimationFrame(animate)
    }

    updateTargetProgress()

    window.addEventListener(
      'scroll',
      updateTargetProgress,
      { passive: true }
    )

    window.addEventListener(
      'resize',
      updateTargetProgress
    )

    animationFrame.current =
      requestAnimationFrame(animate)

    return () => {
      window.removeEventListener(
        'scroll',
        updateTargetProgress
      )

      window.removeEventListener(
        'resize',
        updateTargetProgress
      )

      if (animationFrame.current !== null) {
        cancelAnimationFrame(
          animationFrame.current
        )
      }
    }
  }, [])

  /*
   * =========================================================
   * CLOSE POPUP WITH ESCAPE
   * =========================================================
   */

  useEffect(() => {
    if (!selectedCategory) return

    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (event.key === 'Escape') {
        setSelectedCategory(null)
      }
    }

    document.addEventListener(
      'keydown',
      handleKeyDown
    )

    /*
     * Prevent background page from scrolling
     * while popup is open.
     */
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener(
        'keydown',
        handleKeyDown
      )

      document.body.style.overflow = ''
    }
  }, [selectedCategory])

  /*
   * =========================================================
   * IMAGE SCROLL PROGRESS
   * =========================================================
   *
   * 0.00 → 0.25 = Image 1
   * 0.25 → 0.50 = Image 2
   * 0.50 → 0.75 = Image 3
   * 0.75 → 1.00 = Image 4
   */

  const getImageProgress = (
    index: number
  ) => {
    const start =
      index / deckImages.length

    const end =
      (index + 1) /
      deckImages.length

    const localProgress =
      (progress - start) /
      (end - start)

    return Math.max(
      0,
      Math.min(1, localProgress)
    )
  }

  /*
   * =========================================================
   * CINEMATIC EASING
   * =========================================================
   */

  const easeOutCubic = (
    value: number
  ) => {
    return 1 -
      Math.pow(
        1 - value,
        3
      )
  }

  /*
   * =========================================================
   * OPEN CATEGORY
   * =========================================================
   */

  const openCategory = (
    category: typeof deckImages[number]
  ) => {
    setSelectedCategory(category)
  }

  /*
   * =========================================================
   * CLOSE CATEGORY
   * =========================================================
   */

  const closeCategory = () => {
    setSelectedCategory(null)
  }

  return (
    <>
      {/* =====================================================
          DECK SECTION
          ===================================================== */}

      <section
        className="deck-section"
        id="deck"
        ref={sectionRef}
      >
        <div className="deck-sticky">

          {/* =================================================
              TOP RIGHT — BRAND
              ================================================= */}

          <div className="deck-brand">
            we are un-academy
          </div>

          {/* =================================================
              TOP LEFT — MAIN HEADING
              ================================================= */}

          <div className="deck-heading">
            <h2>
              <span>WHAT</span>{' '}

              <span className="lime-text">
                padhne wala
              </span>

              <br />
              <span>make</span>{' '}

              <span>
                AND FOR WHOM
              </span>
            </h2>
          </div>

          {/* =================================================
              TOP RIGHT — DESCRIPTION
              ================================================= */}

          <div className="deck-description">
            Knowledge has no
            <br />
            boundaries, neither
            <br />
            should your study
            <br />
            material.
          </div>

          {/* =================================================
              FOUR IMAGE PANELS
              ================================================= */}

          <div className="deck-images">
            {deckImages.map(
              (image, index) => {
                const imageProgress =
                  getImageProgress(index)

                const easedProgress =
                  easeOutCubic(
                    imageProgress
                  )

                /*
                 * Image enters from below.
                 */
                const translateY =
                  110 -
                  easedProgress * 110

                /*
                 * Initial scale during
                 * scroll entrance.
                 */
                const scale =
                  0.92 +
                  easedProgress * 0.08

                const opacity =
                  easedProgress

                return (
                  <div
                    key={image.src}
                    className={`
                      deck-image-panel
                      deck-panel-${index + 1}
                    `}
                    style={{
                      opacity,

                      transform: `
                        translate3d(
                          0,
                          ${translateY}px,
                          0
                        )
                        scale(${scale})
                      `,
                    }}
                    onClick={() =>
                      openCategory(image)
                    }
                    role="button"
                    tabIndex={0}
                    aria-label={`
                      Open ${image.name} category
                    `}
                    onKeyDown={(
                      event
                    ) => {
                      if (
                        event.key === 'Enter' ||
                        event.key === ' '
                      ) {
                        event.preventDefault()

                        openCategory(image)
                      }
                    }}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      draggable={false}
                    />

                    {/* =============================================
                        OPTIONAL HOVER LABEL
                        ============================================== */}

                    <div className="deck-image-overlay">
                      <span>
                        {image.name}
                      </span>

                      <span>
                        +
                      </span>
                    </div>
                  </div>
                )
              }
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          CATEGORY POPUP
          ===================================================== */}

      {selectedCategory && (
        <div
          className="deck-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="deck-modal-title"
          onClick={(
            event
          ) => {
            if (
              event.target ===
              event.currentTarget
            ) {
              closeCategory()
            }
          }}
        >
          <div className="deck-modal-content">

            {/* ===============================================
                CLOSE BUTTON
                =============================================== */}

            <button
              type="button"
              className="deck-modal-close"
              onClick={
                closeCategory
              }
              aria-label="Close category popup"
            >
              ×
            </button>

            {/* ===============================================
                CATEGORY IMAGE
                =============================================== */}

            <div className="deck-modal-image">
              <img
                src={
                  selectedCategory.src
                }
                alt={
                  selectedCategory.name
                }
                draggable={false}
              />
            </div>

            {/* ===============================================
                CATEGORY INFORMATION
                =============================================== */}

            <div className="deck-modal-info">

              {/* CATEGORY */}
              <div className="deck-modal-label">
                CATEGORY
              </div>

              <h3
                id="deck-modal-title"
              >
                {
                  selectedCategory.name
                }
              </h3>

              {/* DESCRIPTION */}

              <div className="deck-modal-section">
                <div className="deck-modal-label">
                  DESCRIPTION
                </div>

                <p>
                  {
                    selectedCategory.description
                  }
                </p>
              </div>

              {/* AVAILABLE FOR */}

              <div className="deck-modal-section">
                <div className="deck-modal-label">
                  AVAILABLE FOR
                </div>

                <p>
                  {
                    selectedCategory.availableFor
                  }
                </p>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  )
}

export function Hero() {
  return (
    <section
      className="hero"
      id="top"
    >
      {/* Navigation */}
      <nav className="hero-nav">
        <a
          href="#top"
          className="hero-logo"
        >
          PW
        </a>

        <div className="hero-nav-links">
          <a href="#about">
            About
          </a>

          <a href="#features">
            Study Objects
          </a>

          <a href="#contact">
            Contact
          </a>
        </div>

        <a
          href="#shop"
          className="hero-nav-cta"
        >
          Shop
        </a>
      </nav>

      {/* Right-side artwork */}
      <div className="hero-image">
        <img
          src="/hero-bg.png"
          alt=""
          aria-hidden="true"
        />
      </div>

      {/* Dark gradient over artwork */}
      <div className="hero-gradient" />

      {/* Main content */}
      <div className="hero-content">
        <div className="hero-meta">
          <span>
            Edition 001
          </span>

          <span>
            Made in India
          </span>
        </div>

        <div className="hero-kicker">
          A study material company
        </div>

        <h1>
          <span>
            Padhne wale
          </span>

          <span>
            kahin bhi
          </span>

          <span>
            padh lete hain
            <span className="period">
              .
            </span>
          </span>
        </h1>

        <p>
          Learning happens everywhere,
          <br />
          So we made study material for everywhere.
        </p>
      </div>
    </section>
  )
}

export function ProductReveal({
  product,
  onOpen,
}: {
  product: Product
  onOpen: (product: Product) => void
}) {
  return (
    <article
      className={`reveal reveal-${product.color}`}
    >
      <div className="reveal-art">
        <span className="reveal-index">
          {product.index}
        </span>

        <ProductVisual product={product} />
      </div>

      <div className="reveal-copy">
        <span className="kicker">
          {product.eyebrow}
        </span>

        <h2>
          {product.name}
        </h2>

        <p>
          {product.title}
        </p>

        <button
          className="button button-dark"
          onClick={() =>
            onOpen(product)
          }
        >
          Explore product ↗
        </button>
      </div>
    </article>
  )
}

export function ProductReveals({
  onOpen,
}: {
  onOpen: (product: Product) => void
}) {
  return (
    <section className="reveals">
      <div className="reveal-lead">
        <span className="kicker">
          And that&apos;s just one way to study.
        </span>

        <h2>
          Meet the rest of the
          <br />
          <i>
            unusual suspects.
          </i>
        </h2>
      </div>

      {products
        .slice(0, 4)
        .map((product) => (
          <ProductReveal
            key={product.id}
            product={product}
            onOpen={onOpen}
          />
        ))}
    </section>
  )
}

export function ChooseWeapon({
  onOpen,
}: {
  onOpen: (product: Product) => void
}) {
  return (
    <section className="choose">
      <div className="choose-head">
        <span className="kicker">
          No wrong answers here
        </span>

        <h2>
          How do you like
          <br />
          <i>
            to study?
          </i>
        </h2>
      </div>

      <div className="weapon-row">
        {products.map(
          (product) => (
            <button
              key={product.id}
              onClick={() =>
                onOpen(product)
              }
              className={`weapon weapon-${product.color}`}
            >
              <ProductVisual
                product={product}
                small
              />

              <span>
                {product.name}
              </span>

              <b>
                ↗
              </b>
            </button>
          )
        )}
      </div>
    </section>
  )
}

export function AppShell({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ScrollProgress />
      <Nav />
      {children}
      <BackToTop />
    </>
  )
}

