import { prisma } from '@/lib/prisma'
import { Users } from 'lucide-react'
import type { Metadata } from 'next'

// Ricarica i dati ogni 60 secondi
export const revalidate = 60

// Meta dati ottimizzati per SEO
export const metadata: Metadata = {
  title: 'Unisciti al Team | Recruitment - JEIns Consulting',
  description: 'Mostriamo il valore degli studenti dell\'Insubria. Candidati per entrare in JEIns Consulting: consulenza, progetti reali e crescita per la tua carriera universitaria.',
  keywords: 'recruitment JEIns Consulting, candidature studenti Insubria, Junior Enterprise Varese, consulenza aziendale studenti, opportunità crescita universitaria, progetti reali',
  openGraph: {
    title: 'Unisciti a JEIns Consulting | Recruitment Studenti Insubria',
    description: 'Consulenza, progetti e crescita. Sviluppa le tue competenze professionali lavorando su progetti reali durante il tuo percorso universitario.',
    url: 'https://jeins.it/recruitment',
    type: 'website',
  },
  alternates: {
    canonical: 'https://jeins.it/recruitment',
  },
}

async function getRecruitmentStatus() {
  return await prisma.recruitment.findFirst({
    orderBy: { createdAt: 'desc' }
  })
}

export default async function RecruitmentPage() {
  const recruitment = await getRecruitmentStatus()
  
  // Parse FAQs from database or use defaults
  const defaultFaqs = [
    {
      question: "Quando aprono le candidature?",
      answer: "Il recruitment apre due volte all'anno, una in autunno e una in primavera. Ti invitiamo a controllare sui nostri canali social per sapere quando viene aperto."
    },
    {
      question: "Come funziona il processo di selezione?",
      answer: "Il processo prevede una prima valutazione del CV, seguita da un colloquio conoscitivo e, se necessario, da un test pratico specifico per il ruolo."
    },
    {
      question: "Quali competenze sono richieste?",
      answer: "Cerchiamo studenti motivati con buone capacità comunicative, spirito di squadra e voglia di mettersi in gioco. Le competenze tecniche specifiche dipendono dal ruolo."
    },
    {
      question: "Quanto tempo richiede l'impegno?",
      answer: "L'impegno varia da 5 a 15 ore settimanali, compatibilmente con gli studi universitari. Offriamo flessibilità negli orari."
    },
    {
      question: "Quali sono i benefici di far parte di JEIns?",
      answer: "Esperienza professionale reale, networking con aziende, sviluppo di competenze trasversali, certificazioni e possibilità di crescita personale e professionale."
    }
  ]
  
  const dbFaqs = recruitment?.faqs ? JSON.parse(recruitment.faqs) : []
  const faqsToUse = dbFaqs.length > 0 ? dbFaqs : defaultFaqs
  
  // Assicuriamo che la faq personalizzata sia sempre la prima ad apparire
  const faqApertura = {
    question: "Quando aprono le candidature?",
    answer: "Il recruitment apre due volte all'anno, una in autunno e una in primavera. Ti invitiamo a controllare sui nostri canali social per sapere quando viene aperto."
  }
  const faqs = [faqApertura, ...faqsToUse.filter((f: any) => f.question !== faqApertura.question)]

  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 section-green relative overflow-hidden">
        {/* Elementi decorativi */}
        <div className="decorative-corner top-0 right-0" style={{clipPath: 'polygon(100% 0, 100% 100%, 0 0)'}}></div>
        <div className="decorative-corner-bottom-right bottom-0 left-0" style={{clipPath: 'polygon(0 0, 100% 100%, 0 100%)'}}></div>
        <div className="decorative-strip decorative-strip-bottom"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 newspaper-headline">
            Unisciti al nostro team
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            {recruitment?.description || "Candidati per diventare parte di JEIns Consulting e sviluppa le tue competenze professionali attraverso progetti reali e un ambiente stimolante."}
          </p>
        </div>
      </section>

      {/* Sezione Stato Candidatura Fissa su CHIUSO */}
      <section className="py-20 section-white relative">
        {/* Elementi decorativi */}
        <div className="decorative-corner top-0 left-0"></div>
        <div className="decorative-corner-bottom-right bottom-0 right-0"></div>
        <div className="decorative-strip decorative-strip-top"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl font-bold mb-6 newspaper-headline">
              Stato delle candidature
            </h2>
          </div>

          <div className="bg-white border-2 border-insubria-200 rounded-2xl p-8 shadow-sm animate-fade-in-up text-center">
            <div className="bg-gray-50 text-gray-400 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <Users className="h-10 w-10" />
            </div>
            <h3 className="text-2xl font-bold text-gray-600 mb-4">
              Recruitment Chiuso
            </h3>
            <p className="text-gray-500 text-lg">
              Le candidature sono al momento chiuse. Torna a trovarci presto o segui i nostri canali social per non perderti le prossime aperture!
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 section-green-light relative">
        {/* Elementi decorativi */}
        <div className="decorative-corner top-0 right-0" style={{clipPath: 'polygon(100% 0, 100% 100%, 0 0)'}}></div>
        <div className="decorative-corner-bottom-right bottom-0 left-0" style={{clipPath: 'polygon(0 0, 100% 100%, 0 100%)'}}></div>
        <div className="decorative-strip decorative-strip-top"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl font-bold mb-6 newspaper-headline">
              Domande frequenti
            </h2>
            <p className="text-neutral-500 text-lg">
              Risposte alle domande più comuni sul processo di recruitment
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq: { question: string; answer: string }, index: number) => (
              <div key={index} className="bg-white border-l-4 border-insubria-600 p-6 animate-slide-in-left" style={{animationDelay: `${index * 0.1}s`}}>
                <h3 className="text-lg font-semibold text-insubria-600 mb-3">
                  {faq.question}
                </h3>
                <p className="text-neutral-500">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefici */}
      <section className="py-20 section-white relative">
        {/* Elementi decorativi */}
        <div className="decorative-corner top-0 left-0"></div>
        <div className="decorative-corner-bottom-right bottom-0 right-0"></div>
        <div className="decorative-strip decorative-strip-top"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl font-bold mb-6 newspaper-headline">
              Perché scegliere JEIns?
            </h2>
            <p className="text-neutral-500 text-lg">
              I vantaggi di far parte della nostra Junior Enterprise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            <div className="text-center animate-scale-in hover-lift h-full w-full">
              <div className="bg-white border-2 border-insubria-200 rounded-2xl p-6 shadow-sm h-full flex flex-col">
                <div className="bg-insubria-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💼</span>
                </div>
                <h3 className="text-lg font-semibold text-insubria-600 mb-3">
                  Esperienza Reale
                </h3>
                <p className="text-neutral-500 text-sm flex-grow">
                  Lavora su progetti concreti con aziende reali, sviluppando competenze professionali autentiche.
                </p>
              </div>
            </div>

            <div className="text-center animate-scale-in hover-lift h-full w-full" style={{animationDelay: '0.1s'}}>
              <div className="bg-white border-2 border-insubria-200 rounded-2xl p-6 shadow-sm h-full flex flex-col">
                <div className="bg-insubria-300 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-lg font-semibold text-insubria-600 mb-3">
                  Networking
                </h3>
                <p className="text-neutral-500 text-sm flex-grow">
                  Entra in contatto con professionisti del settore e costruisci la tua rete di contatti.
                </p>
              </div>
            </div>

            <div className="text-center animate-scale-in hover-lift h-full w-full" style={{animationDelay: '0.2s'}}>
              <div className="bg-white border-2 border-insubria-200 rounded-2xl p-6 shadow-sm h-full flex flex-col">
                <div className="bg-insubria-200 text-insubria-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-lg font-semibold text-insubria-600 mb-3">
                  Crescita Personale
                </h3>
                <p className="text-neutral-500 text-sm flex-grow">
                  Sviluppa soft skills, leadership e capacità di problem solving in un ambiente stimolante.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}