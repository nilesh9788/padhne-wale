'use client'

import { useState } from 'react'
import { AboutPreview, AppShell, DeckSection, Footer, Hero, HowItWorks, Marquee, ProductModal, ProductUniverse, ShopCTA, type Product } from '@/lib/products'

export default function Page() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  return <AppShell>
    <main>
      <Hero />
      <Marquee />
      <DeckSection />
      <ProductUniverse onOpen={setSelectedProduct} />
      <HowItWorks />
      <AboutPreview />
      {/* <ShopCTA /> */}
    </main>
    <Footer />
    <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
  </AppShell>
}

