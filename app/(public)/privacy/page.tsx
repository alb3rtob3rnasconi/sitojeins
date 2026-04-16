import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - JEIns Consulting',
  description: 'Informativa sul trattamento dei dati personali di JEIns Consulting.',
}

export default function PrivacyPage() {
  return (
    <main className="py-20 section-white relative overflow-hidden">
      {/* Elementi decorativi */}
      <div className="decorative-corner top-0 left-0"></div>
      <div className="decorative-corner-bottom-right bottom-0 right-0"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-6 newspaper-headline">
            Privacy Policy
          </h1>
          <p className="text-neutral-500 italic mb-8">
            JEINS CONSULTING - 2025/2026
          </p>
        </div>

        <div className="prose prose-neutral max-w-none space-y-8 text-neutral-600">
          <section>
            <h2 className="text-2xl font-bold text-insubria-600 mb-4">1. Titolare del trattamento</h2>
            <p>
              Il Titolare del trattamento è <strong>JEIns Consulting</strong> (di seguito anche "JEIns", "Associazione" o "Titolare"), con sede legale in Seregno (MB), Via Stefano da Seregno n. 31.
            </p>
            <p>
              Per qualsiasi richiesta relativa al trattamento dei dati personali o per l&apos;esercizio dei diritti previsti dalla normativa applicabile, è possibile contattare il Titolare al seguente indirizzo e-mail: <a href="mailto:jeinsubria@gmail.com" className="text-insubria-600 hover:underline">jeinsubria@gmail.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-insubria-600 mb-4">2. Ambito di applicazione</h2>
            <p>La presente informativa descrive i trattamenti di dati personali effettuati da JEIns:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>tramite il sito web istituzionale;</li>
              <li>tramite i moduli di contatto presenti online;</li>
              <li>nell&apos;ambito delle comunicazioni digitali dell&apos;Associazione;</li>
              <li>nello svolgimento delle attività associative, istituzionali, formative, progettuali e organizzative di carattere generale.</li>
            </ul>
            <p className="mt-4">
              La presente informativa ha carattere generale e si applica ai trattamenti ordinari svolti da JEIns in qualità di Titolare. Per specifici trattamenti di dati personali, quali a titolo esemplificativo ma non esaustivo i processi di recruitment e candidatura, verranno fornite informative specifiche.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-insubria-600 mb-4">3. Finalità e base giuridica</h2>
            <p>
              I dati sono trattati per finalità connesse alle attività istituzionali di JEIns Consulting, per rispondere alle richieste degli utenti, per l&apos;adempimento di obblighi di legge e, previo consenso ove richiesto, per attività di comunicazione e marketing (come la newsletter).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-insubria-600 mb-4">4. Aggiornamenti della policy</h2>
            <p>
              La presente Privacy Policy può essere modificata o aggiornata nel tempo, anche in considerazione di modifiche normative, evoluzioni organizzative, aggiornamenti dei servizi utilizzati o cambiamenti nelle attività svolte da JEIns.
            </p>
            <p className="font-semibold mt-4">
              Ultimo aggiornamento: Aprile 2026
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}