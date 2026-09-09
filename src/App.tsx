import { LanguageProvider } from './i18n/LanguageContext'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { TrustBar } from './components/TrustBar'
import { Services } from './components/Services'
import { About } from './components/About'
import { Approach } from './components/Approach'
import { HomeVisits } from './components/HomeVisits'
import { Faq } from './components/Faq'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { FloatingWhatsApp } from './components/FloatingWhatsApp'

export default function App() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <About />
        <Approach />
        <HomeVisits />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </LanguageProvider>
  )
}
