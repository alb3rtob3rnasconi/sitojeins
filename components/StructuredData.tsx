import React from 'react'

export default function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'JEIns Consulting',
    'url': 'https://www.jeins.it',
    'logo': 'https://www.jeins.it/images/logo-jeins.png',
    'description': 'Junior Enterprise dell\'Università dell\'Insubria specializzata in consulenza strategica, IT e marketing.',
    'contactPoint': {
      '@type': 'ContactPoint',
      'telephone': '+39 0332 218811',
      'contactType': 'customer service',
      'email': 'jeinsubria@gmail.com',
      'areaServed': 'IT',
      'availableLanguage': 'Italian'
    },
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Via Stefano da Seregno n.31',
      'addressLocality': 'Seregno',
      'postalCode': '20831',
      'addressRegion': 'MB',
      'addressCountry': 'IT'
    },
    'sameAs': [
      'https://www.instagram.com/jeins.consulting/',
      'https://it.linkedin.com/company/jeins'
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}