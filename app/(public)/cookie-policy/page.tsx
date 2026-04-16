import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy - JEIns Consulting',
  description: 'Informativa sull&apos;uso dei cookie di JEIns Consulting.',
}

export default function CookiePolicyPage() {
  return (
    <main className="py-20 section-white relative overflow-hidden">
      {/* Elementi decorativi */}
      <div className="decorative-corner top-0 left-0"></div>
      <div className="decorative-corner-bottom-right bottom-0 right-0"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-6 newspaper-headline">
            Cookie Policy
          </h1>
          <p className="text-neutral-500 italic mb-8">
            JEINS CONSULTING - 2025/2026
          </p>
        </div>

        <div className="prose prose-neutral max-w-none space-y-8 text-neutral-600">
          <section>
            <h2 className="text-2xl font-bold text-insubria-600 mb-4">Informativa e impostazione del sistema cookie</h2>
            <p>
              JEIns adotta soluzioni organizzative e tecniche idonee a garantire che i cookie non necessari non siano installati prima della manifestazione di un valido consenso, ove richiesto.
            </p>
            <p>
              La configurazione del sistema cookie e delle relative preferenze viene effettuata nel rispetto del principio di protezione dei dati fin dalla progettazione e per impostazione predefinita, ai sensi dell&apos;art. 25 GDPR.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-insubria-600 mb-4">Gestione del consenso</h2>
            <p>
              La gestione del consenso avviene nel rispetto dei principi di trasparenza e libertà di scelta dell&apos;utente, in conformità agli artt. 7, 12 e 13 GDPR, all&apos;art. 122 del Codice Privacy e alle Linee guida del Garante del 10 giugno 2021.
            </p>
            <p>L&apos;utente può in qualsiasi momento:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Rifiutare i cookie non necessari;</li>
              <li>Selezionare in modo granulare le singole categorie di cookie;</li>
              <li>Modificare successivamente le preferenze espresse tramite il pannello di controllo disponibile sul sito.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-insubria-600 mb-4">Aggiornamenti</h2>
            <p>
              La presente Cookie Policy può essere soggetta a modifiche in base a nuove normative o cambiamenti tecnici del sito. Gli utenti saranno informati di tali cambiamenti tramite la pubblicazione della versione aggiornata su questa pagina.
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