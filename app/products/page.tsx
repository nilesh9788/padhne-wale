'use client'

import { useMemo, useState } from 'react'
import { AppShell, Footer } from '@/lib/products'

/* =========================================================
   PRODUCT DATA
   ========================================================= */

const products = [
  {
    number: '01',
    name: 'Formula Playing Cards',
    category: 'PHYSICS',
    description:
      'A deck of playing cards turned into a pocket-sized revision system. Learn formulas, concepts and questions while you play.',
    inside: '52 educational playing cards',
    quantity: '52 CARDS',
    size: 'STANDARD PLAYING CARD SIZE',
    price: '₹399',
    originalPrice: '₹499',
    discount: '20% OFF',
    image: '/products/formula-playing-cards.png',
    orderUrl: 'https://forms.google.com/',
    accent: 'lime',
  },

  {
    number: '02',
    name: 'Poker Chips',
    category: 'CHEMISTRY',
    description:
      'Chemistry concepts packed into poker chips. A tactile way to remember constants, scientists, discoveries and the stuff you usually cram.',
    inside: 'Educational chemistry poker chips',
    quantity: 'SET OF CHIPS',
    size: 'POKER CHIP SIZE',
    price: '₹499',
    originalPrice: '₹599',
    discount: '17% OFF',
    image: '/products/poker-chips.png',
    orderUrl: 'https://forms.google.com/',
    accent: 'coral',
  },

  {
    number: '03',
    name: 'Concept Jenga',
    category: 'MULTI-SUBJECT',
    description:
      'The classic tower game, rebuilt for revision. Pull a block, answer a question, remember a concept and try not to bring the whole syllabus down.',
    inside: 'Question, formula and challenge blocks',
    quantity: '54 BLOCKS',
    size: 'JENGA-STYLE BLOCK SET',
    price: '₹699',
    originalPrice: '₹799',
    discount: '13% OFF',
    image: '/products/concept-jenga.png',
    orderUrl: 'https://forms.google.com/',
    accent: 'blue',
  },

  {
    number: '04',
    name: 'Tell or Solve',
    category: 'MULTI-SUBJECT',
    description:
      'One deck. Two ways to play. Tell the answer or solve the problem — designed for quick revision, group study and competitive learning.',
    inside: 'Tell cards + Solve cards',
    quantity: 'DECK OF CARDS',
    size: 'POCKET-SIZED DECK',
    price: '₹349',
    originalPrice: '₹399',
    discount: '13% OFF',
    image: '/products/tell-or-solve.png',
    orderUrl: 'https://forms.google.com/',
    accent: 'yellow',
  },

  {
    number: '05',
    name: 'Cram Pack',
    category: 'MULTI-SUBJECT',
    description:
      'The last-minute revision pack for the moments when there is more syllabus than time. Compact, focused and built for quick recall.',
    inside: 'Chapter-wise revision cards',
    quantity: 'COMPACT CARD PACK',
    size: 'POCKET-SIZED',
    price: '₹299',
    originalPrice: '₹349',
    discount: '14% OFF',
    image: '/products/cram-pack.png',
    orderUrl: 'https://forms.google.com/',
    accent: 'pink',
  },

  {
    number: '06',
    name: 'Matchbox Formulas',
    category: 'MULTI-SUBJECT',
    description:
      'Tiny packaging. Big formulas. A matchbox-sized revision object made to live in your pocket, bag, desk or literally anywhere you study.',
    inside: 'Formula strips',
    quantity: 'FORMULA STRIPS',
    size: 'MATCHBOX-SIZED',
    price: '₹199',
    originalPrice: '₹249',
    discount: '20% OFF',
    image: '/products/matchbox-formulas.png',
    orderUrl: 'https://forms.google.com/',
    accent: 'orange',
  },

  {
    number: '07',
    name: 'Tissue Paper',
    category: 'MULTI-SUBJECT',
    description:
      'Study material hiding in plain sight. A deliberately unexpected format for notes, formulas and quick revision.',
    inside: 'Printed revision sheets',
    quantity: 'TISSUE SHEETS',
    size: 'STANDARD TISSUE FORMAT',
    price: '₹149',
    originalPrice: '₹199',
    discount: '25% OFF',
    image: '/products/tissue-paper.png',
    orderUrl: 'https://forms.google.com/',
    accent: 'lime',
  },

  {
    number: '08',
    name: 'Cheat Notes',
    category: 'MULTI-SUBJECT',
    description:
      'Small notes for big syllabus. Condensed formulas, concepts and reminders designed for the final glance before you need them.',
    inside: 'Condensed revision notes',
    quantity: 'NOTE SET',
    size: 'POCKET-SIZED',
    price: '₹249',
    originalPrice: '₹299',
    discount: '17% OFF',
    image: '/products/cheat-notes.png',
    orderUrl: 'https://forms.google.com/',
    accent: 'coral',
  },
]

type Product = (typeof products)[number]

/* =========================================================
   PRODUCT CARD
   ========================================================= */

function ProductItem({ product }: { product: Product }) {
  return (
    <article
      className={`product-item product-item-${product.accent}`}
      id={`product-${product.number}`}
    >
      {/* TOP META */}

      <div className="product-item-top">
        <span className="product-number">
          {product.number}
        </span>

        <span className="product-category">
          {product.category}
        </span>
      </div>

      {/* IMAGE */}

      <div className="product-image-wrap">
        <div className="product-image-frame">
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />

          <span className="product-image-label">
            PADHNE WALE®
          </span>
        </div>
      </div>

      {/* INFORMATION */}

      <div className="product-information">
        <div className="product-heading">
          <span className="product-eyebrow">
            {product.category} / {product.number}
          </span>

          <h2>{product.name}</h2>
        </div>

        <p className="product-description">
          {product.description}
        </p>

        {/* DETAILS */}

        <div className="product-details">
          <div className="product-detail">
            <span>INSIDE</span>
            <strong>{product.inside}</strong>
          </div>

          <div className="product-detail">
            <span>QUANTITY</span>
            <strong>{product.quantity}</strong>
          </div>

          <div className="product-detail">
            <span>SIZE</span>
            <strong>{product.size}</strong>
          </div>

          <div className="product-detail">
            <span>CATEGORY</span>
            <strong>{product.category}</strong>
          </div>
        </div>

        {/* PRICE */}

        <div className="product-purchase">
          <div className="product-price">
            <span className="product-price-current">
              {product.price}
            </span>

            <span className="product-price-old">
              {product.originalPrice}
            </span>

            <span className="product-discount">
              {product.discount}
            </span>
          </div>

          <a
            href={product.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="product-order-button"
          >
            Order now <span>↗</span>
          </a>
        </div>
      </div>
    </article>
  )
}

/* =========================================================
   PRODUCTS PAGE
   ========================================================= */

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('ALL')

  const categories = useMemo(() => {
    return [
      'ALL',
      ...Array.from(
        new Set(products.map((product) => product.category))
      ),
    ]
  }, [])

  const filteredProducts =
    activeCategory === 'ALL'
      ? products
      : products.filter(
          (product) => product.category === activeCategory
        )

  return (
    <AppShell>
      <main className="products-page">
        <section className="products-catalogue">
          {/* PAGE HEADER + FILTER */}

          <div className="products-catalogue-header">
            <div className="products-catalogue-title">
              <span>PRODUCTS / 08</span>

              <h1>THE COLLECTION</h1>
            </div>

            <div
              className="products-category-filter"
              aria-label="Filter products by category"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={
                    activeCategory === category
                      ? 'active'
                      : ''
                  }
                  onClick={() =>
                    setActiveCategory(category)
                  }
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* PRODUCT COUNT */}

          <div className="products-results-meta">
            <span>
              {String(filteredProducts.length).padStart(2, '0')} PRODUCTS
            </span>

            <span>
              {activeCategory === 'ALL'
                ? 'ALL CATEGORIES'
                : activeCategory}
            </span>
          </div>

          {/* PRODUCTS */}

          <div className="product-list">
            {filteredProducts.map((product) => (
              <ProductItem
                key={product.number}
                product={product}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </AppShell>
  )
}

