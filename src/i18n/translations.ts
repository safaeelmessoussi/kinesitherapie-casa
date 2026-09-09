export type Lang = 'fr' | 'en'

export interface ServiceItem {
  title: string
  description: string
}

export interface StepItem {
  title: string
  description: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface Translation {
  meta: {
    title: string
    description: string
  }
  nav: {
    services: string
    about: string
    approach: string
    home: string
    faq: string
    contact: string
    cta: string
    menu: string
    close: string
    switchTo: string
  }
  hero: {
    eyebrow: string
    title: string
    highlight: string
    subtitle: string
    ctaWhatsapp: string
    ctaCall: string
    badgeHome: string
    badgeReply: string
    imageAlt: string
  }
  trust: { title: string; description: string }[]
  services: {
    eyebrow: string
    title: string
    subtitle: string
    items: ServiceItem[]
    note: string
  }
  about: {
    eyebrow: string
    title: string
    paragraphs: string[]
    values: { title: string; description: string }[]
    imageAlt: string
    quote: string
  }
  approach: {
    eyebrow: string
    title: string
    subtitle: string
    steps: StepItem[]
    imageAlt: string
  }
  home: {
    eyebrow: string
    title: string
    subtitle: string
    points: string[]
    cta: string
    imageAlt: string
  }
  faq: {
    eyebrow: string
    title: string
    items: FaqItem[]
  }
  contact: {
    eyebrow: string
    title: string
    subtitle: string
    phoneLabel: string
    whatsappLabel: string
    whatsappHint: string
    hoursLabel: string
    hoursValue: string
    locationLabel: string
    locationValue: string
    languagesLabel: string
    languagesValue: string
    ctaWhatsapp: string
    ctaCall: string
  }
  footer: {
    tagline: string
    rights: string
    disclaimer: string
  }
  whatsappMessage: string
  floating: string
}

export const translations: Record<Lang, Translation> = {
  fr: {
    meta: {
      title: 'Kinésithérapie Casa — Cabinet de kinésithérapie à Casablanca | Lechheb Walid',
      description:
        'Cabinet de kinésithérapie à Casablanca : rééducation, kiné du sport, douleurs du dos, kinésithérapie respiratoire et séances à domicile. Prise de rendez-vous rapide par téléphone ou WhatsApp.',
    },
    nav: {
      services: 'Soins',
      about: 'Le kiné',
      approach: 'Déroulement',
      home: 'À domicile',
      faq: 'FAQ',
      contact: 'Contact',
      cta: 'Prendre rendez-vous',
      menu: 'Ouvrir le menu',
      close: 'Fermer le menu',
      switchTo: 'Switch to English',
    },
    hero: {
      eyebrow: 'Cabinet de kinésithérapie · Casablanca',
      title: 'Retrouvez le mouvement,',
      highlight: 'sans la douleur.',
      subtitle:
        'Lechheb Walid vous accompagne avec une kinésithérapie moderne, humaine et efficace : au cabinet ou directement chez vous, à Casablanca. Un bilan précis, un plan clair, et des résultats que vous ressentez.',
      ctaWhatsapp: 'Réserver sur WhatsApp',
      ctaCall: 'Appeler le cabinet',
      badgeHome: 'Séances à domicile',
      badgeReply: 'Réponse rapide sur WhatsApp',
      imageAlt: 'Salle de soins lumineuse du cabinet de kinésithérapie à Casablanca',
    },
    trust: [
      {
        title: 'Prise en charge personnalisée',
        description: 'Chaque séance est construite autour de votre bilan, de vos objectifs et de votre rythme.',
      },
      {
        title: 'Cabinet ou domicile',
        description: 'Vous choisissez : au cabinet ou chez vous, avec le même matériel et la même exigence.',
      },
      {
        title: 'Rendez-vous rapides',
        description: 'Une réponse dans la journée et des créneaux adaptés à vos disponibilités.',
      },
      {
        title: 'Suivi entre les séances',
        description: 'Exercices à faire chez vous et un canal WhatsApp pour toute question.',
      },
    ],
    services: {
      eyebrow: 'Nos soins',
      title: 'Une prise en charge complète, adaptée à votre situation',
      subtitle:
        'De la douleur aiguë à la reprise du sport, le cabinet accompagne adultes, sportifs et seniors avec des techniques manuelles et actives reconnues.',
      items: [
        {
          title: 'Rééducation post-opératoire & traumatologie',
          description:
            'Après une chirurgie, une fracture, une entorse ou une rupture ligamentaire : récupérer la mobilité, la force et la confiance étape par étape.',
        },
        {
          title: 'Kinésithérapie du sport',
          description:
            'Prévention et traitement des blessures, préparation au retour sur le terrain et optimisation du geste sportif, quel que soit votre niveau.',
        },
        {
          title: 'Douleurs du dos, cou & articulations',
          description:
            'Lombalgie, cervicalgie, sciatique, tendinites, épaule douloureuse : soulager, comprendre la cause et éviter la récidive.',
        },
        {
          title: 'Kinésithérapie respiratoire',
          description:
            'Désencombrement bronchique et rééducation du souffle pour nourrissons, enfants et adultes, en période aiguë ou chronique.',
        },
        {
          title: 'Rééducation neurologique',
          description:
            'Accompagnement après un AVC, en cas de maladie de Parkinson ou d\u2019autres atteintes neurologiques pour préserver l\u2019autonomie au quotidien.',
        },
        {
          title: 'Kinésithérapie des seniors',
          description:
            'Équilibre, prévention des chutes, entretien de la mobilité et maintien de l\u2019indépendance, au cabinet ou à domicile.',
        },
      ],
      note: 'Votre besoin n\u2019apparaît pas ici ? Écrivez-nous sur WhatsApp, nous vous orienterons.',
    },
    about: {
      eyebrow: 'Votre kinésithérapeute',
      title: 'Lechheb Walid, l\u2019énergie d\u2019un jeune kiné, l\u2019écoute d\u2019un vrai partenaire',
      paragraphs: [
        'Kinésithérapeute à Casablanca, Walid a une conviction simple : on se rétablit mieux quand on comprend ce qui se passe dans son corps et quand on avance avec quelqu\u2019un qui y croit autant que soi.',
        'Sa pratique associe thérapie manuelle, exercices actifs et éducation du patient. Pas de séances mécaniques : chaque rendez-vous a un objectif, chaque progrès est mesuré, et le plan s\u2019adapte à votre évolution.',
        'Dynamique, direct et bienveillant, il accompagne aussi bien le sportif pressé de reprendre que la personne qui souhaite simplement retrouver un quotidien sans douleur.',
      ],
      values: [
        {
          title: 'Écoute & pédagogie',
          description: 'Vous repartez en comprenant votre douleur et ce que vous pouvez faire pour la réduire.',
        },
        {
          title: 'Approche active',
          description: 'La main du kiné soulage, le mouvement guérit : vous êtes acteur de votre rééducation.',
        },
        {
          title: 'Rigueur & suivi',
          description: 'Bilan initial, objectifs clairs, réévaluations régulières et exercices adaptés à domicile.',
        },
      ],
      imageAlt: 'Portrait de Lechheb Walid, kinésithérapeute à Casablanca',
      quote: '« Mon rôle n\u2019est pas seulement de soulager : c\u2019est de vous rendre autonome et confiant dans votre corps. »',
    },
    approach: {
      eyebrow: 'Déroulement',
      title: 'Comment se passe votre prise en charge',
      subtitle: 'Un parcours clair en trois étapes, pour savoir exactement où vous allez.',
      steps: [
        {
          title: 'Bilan complet',
          description:
            'La première séance est consacrée à vous écouter, examiner la zone concernée et évaluer mobilité, force et douleur. On fixe ensemble des objectifs réalistes.',
        },
        {
          title: 'Traitement ciblé',
          description:
            'Thérapie manuelle, mobilisations, renforcement, travail proprioceptif : chaque technique est choisie en fonction de votre bilan et ajustée séance après séance.',
        },
        {
          title: 'Programme & autonomie',
          description:
            'Vous recevez des exercices simples à réaliser chez vous, avec un suivi WhatsApp pour rester sur la bonne voie et prévenir les rechutes.',
        },
      ],
      imageAlt: 'Séance de thérapie manuelle de l\u2019épaule au cabinet',
    },
    home: {
      eyebrow: 'Séances à domicile',
      title: 'La même qualité de soins, directement chez vous à Casablanca',
      subtitle:
        'Mobilité réduite, sortie d\u2019hospitalisation, emploi du temps chargé ou simple préférence : le kiné se déplace avec le matériel nécessaire.',
      points: [
        'Déplacement dans Casablanca et ses environs',
        'Matériel professionnel transporté à chaque séance',
        'Créneaux en journée et en début de soirée selon disponibilités',
        'Idéal pour les seniors, la rééducation post-opératoire et la kiné respiratoire',
      ],
      cta: 'Demander une séance à domicile',
      imageAlt: 'Exercice de rééducation guidé avec élastique et coussin d\u2019équilibre',
    },
    faq: {
      eyebrow: 'Questions fréquentes',
      title: 'Tout ce que vous voulez savoir avant votre première séance',
      items: [
        {
          question: 'Ai-je besoin d\u2019une ordonnance pour consulter ?',
          answer:
            'Une prescription médicale est recommandée, notamment pour la prise en charge par votre assurance ou mutuelle. Vous pouvez néanmoins nous contacter sans ordonnance : nous vous orienterons et, si nécessaire, vous conseillerons de consulter votre médecin.',
        },
        {
          question: 'Combien de temps dure une séance ?',
          answer:
            'Une séance dure en général entre 30 et 45 minutes. Le premier rendez-vous est un peu plus long, car il comprend un bilan complet et la définition de vos objectifs.',
        },
        {
          question: 'Comment prendre rendez-vous ?',
          answer:
            'Le plus simple est d\u2019envoyer un message WhatsApp ou d\u2019appeler le cabinet. Précisez votre besoin et vos disponibilités, nous vous proposons rapidement un créneau au cabinet ou à domicile.',
        },
        {
          question: 'Que dois-je apporter et comment m\u2019habiller ?',
          answer:
            'Apportez votre ordonnance, vos examens récents (radiographies, IRM, comptes rendus) et une tenue souple qui permet d\u2019accéder facilement à la zone à traiter.',
        },
        {
          question: 'Les séances à domicile coûtent-elles plus cher ?',
          answer:
            'Un supplément de déplacement peut s\u2019appliquer selon la zone. Les tarifs sont communiqués clairement avant la première séance : contactez-nous pour un devis précis.',
        },
        {
          question: 'Quels moyens de paiement acceptez-vous ?',
          answer:
            'Le règlement s\u2019effectue à chaque séance ou par forfait selon votre prise en charge. Une facture vous est remise pour votre remboursement éventuel.',
        },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Prenez rendez-vous dès aujourd\u2019hui',
      subtitle:
        'Un message suffit pour obtenir un créneau. Décrivez votre besoin, nous vous répondons rapidement.',
      phoneLabel: 'Téléphone',
      whatsappLabel: 'WhatsApp',
      whatsappHint: 'Réponse rapide, du lundi au samedi',
      hoursLabel: 'Horaires',
      hoursValue: 'Du lundi au samedi, sur rendez-vous',
      locationLabel: 'Localisation',
      locationValue: 'Casablanca — cabinet et déplacements à domicile',
      languagesLabel: 'Langues parlées',
      languagesValue: 'Français · Arabe · English',
      ctaWhatsapp: 'Écrire sur WhatsApp',
      ctaCall: 'Appeler maintenant',
    },
    footer: {
      tagline: 'Cabinet de kinésithérapie à Casablanca — au cabinet et à domicile.',
      rights: 'Tous droits réservés.',
      disclaimer:
        'Les informations de ce site ne remplacent pas un avis médical. En cas d\u2019urgence, contactez les services d\u2019urgence.',
    },
    whatsappMessage:
      'Bonjour, je souhaite prendre rendez-vous pour une séance de kinésithérapie à Casablanca.',
    floating: 'Discuter sur WhatsApp',
  },

  en: {
    meta: {
      title: 'Kinésithérapie Casa — Physiotherapy Clinic in Casablanca | Lechheb Walid',
      description:
        'Physiotherapy clinic in Casablanca: rehabilitation, sports physio, back pain, respiratory physiotherapy and home visits. Book quickly by phone or WhatsApp.',
    },
    nav: {
      services: 'Treatments',
      about: 'Your physio',
      approach: 'How it works',
      home: 'Home visits',
      faq: 'FAQ',
      contact: 'Contact',
      cta: 'Book a session',
      menu: 'Open menu',
      close: 'Close menu',
      switchTo: 'Passer en français',
    },
    hero: {
      eyebrow: 'Physiotherapy clinic · Casablanca',
      title: 'Move freely again,',
      highlight: 'without the pain.',
      subtitle:
        'Lechheb Walid offers modern, human and effective physiotherapy — at the clinic or in the comfort of your home in Casablanca. A precise assessment, a clear plan, and results you can feel.',
      ctaWhatsapp: 'Book on WhatsApp',
      ctaCall: 'Call the clinic',
      badgeHome: 'Home visits available',
      badgeReply: 'Fast replies on WhatsApp',
      imageAlt: 'Bright treatment room at the physiotherapy clinic in Casablanca',
    },
    trust: [
      {
        title: 'Personalised care',
        description: 'Every session is built around your assessment, your goals and your pace.',
      },
      {
        title: 'Clinic or home',
        description: 'Your choice: at the clinic or at home, with the same equipment and the same standards.',
      },
      {
        title: 'Quick appointments',
        description: 'A reply within the day and time slots that fit your schedule.',
      },
      {
        title: 'Support between sessions',
        description: 'Home exercises and a WhatsApp line for any question along the way.',
      },
    ],
    services: {
      eyebrow: 'Treatments',
      title: 'Complete care, tailored to your situation',
      subtitle:
        'From acute pain to returning to sport, the clinic supports adults, athletes and seniors with recognised manual and active techniques.',
      items: [
        {
          title: 'Post-surgery & injury rehabilitation',
          description:
            'After surgery, a fracture, a sprain or a ligament tear: regain mobility, strength and confidence step by step.',
        },
        {
          title: 'Sports physiotherapy',
          description:
            'Injury prevention and treatment, return-to-play preparation and movement optimisation, whatever your level.',
        },
        {
          title: 'Back, neck & joint pain',
          description:
            'Lower back pain, neck pain, sciatica, tendinitis, painful shoulder: relieve, understand the cause and prevent recurrence.',
        },
        {
          title: 'Respiratory physiotherapy',
          description:
            'Airway clearance and breathing rehabilitation for infants, children and adults, in acute or chronic conditions.',
        },
        {
          title: 'Neurological rehabilitation',
          description:
            'Support after a stroke, with Parkinson\u2019s disease or other neurological conditions to preserve everyday independence.',
        },
        {
          title: 'Physiotherapy for seniors',
          description:
            'Balance, fall prevention, mobility maintenance and independence, at the clinic or at home.',
        },
      ],
      note: 'Can\u2019t find what you need? Message us on WhatsApp and we will guide you.',
    },
    about: {
      eyebrow: 'Your physiotherapist',
      title: 'Lechheb Walid: the energy of a young physio, the attention of a true partner',
      paragraphs: [
        'A physiotherapist in Casablanca, Walid holds a simple belief: people recover better when they understand what is happening in their body and move forward with someone who believes in it as much as they do.',
        'His practice combines manual therapy, active exercise and patient education. No routine sessions: every appointment has a goal, every improvement is measured, and the plan adapts as you progress.',
        'Dynamic, straightforward and caring, he supports the athlete eager to get back on the field as much as the person who simply wants a pain-free daily life.',
      ],
      values: [
        {
          title: 'Listening & education',
          description: 'You leave understanding your pain and what you can do to reduce it.',
        },
        {
          title: 'Active approach',
          description: 'The therapist\u2019s hands relieve, movement heals: you take an active role in your recovery.',
        },
        {
          title: 'Rigour & follow-up',
          description: 'Initial assessment, clear goals, regular re-evaluations and tailored home exercises.',
        },
      ],
      imageAlt: 'Portrait of Lechheb Walid, physiotherapist in Casablanca',
      quote: '\u201CMy role isn\u2019t only to relieve pain: it\u2019s to make you independent and confident in your body.\u201D',
    },
    approach: {
      eyebrow: 'How it works',
      title: 'What to expect from your care',
      subtitle: 'A clear three-step journey, so you always know where you are heading.',
      steps: [
        {
          title: 'Full assessment',
          description:
            'The first session is dedicated to listening to you, examining the affected area and evaluating mobility, strength and pain. Together we set realistic goals.',
        },
        {
          title: 'Targeted treatment',
          description:
            'Manual therapy, mobilisation, strengthening, proprioceptive work: each technique is chosen based on your assessment and adjusted session after session.',
        },
        {
          title: 'Programme & independence',
          description:
            'You receive simple exercises to do at home, with WhatsApp follow-up to stay on track and prevent relapses.',
        },
      ],
      imageAlt: 'Manual therapy session on the shoulder at the clinic',
    },
    home: {
      eyebrow: 'Home visits',
      title: 'The same quality of care, right at your home in Casablanca',
      subtitle:
        'Reduced mobility, hospital discharge, a busy schedule or simple preference: your physio comes to you with the necessary equipment.',
      points: [
        'Visits across Casablanca and surrounding areas',
        'Professional equipment brought to every session',
        'Daytime and early-evening slots depending on availability',
        'Ideal for seniors, post-surgery rehabilitation and respiratory physiotherapy',
      ],
      cta: 'Request a home visit',
      imageAlt: 'Guided rehabilitation exercise with a resistance band and balance pad',
    },
    faq: {
      eyebrow: 'Frequently asked questions',
      title: 'Everything you want to know before your first session',
      items: [
        {
          question: 'Do I need a prescription to book?',
          answer:
            'A medical prescription is recommended, especially for reimbursement by your insurance. You can still contact us without one: we will guide you and, if needed, advise you to see your doctor.',
        },
        {
          question: 'How long does a session last?',
          answer:
            'A session usually lasts 30 to 45 minutes. The first appointment is a little longer, as it includes a full assessment and setting your goals.',
        },
        {
          question: 'How do I book an appointment?',
          answer:
            'The easiest way is to send a WhatsApp message or call the clinic. Tell us what you need and when you are available, and we will quickly offer a slot at the clinic or at home.',
        },
        {
          question: 'What should I bring and wear?',
          answer:
            'Bring your prescription, any recent exams (X-rays, MRI, reports) and comfortable clothing that gives easy access to the area being treated.',
        },
        {
          question: 'Do home visits cost more?',
          answer:
            'A travel supplement may apply depending on the area. Fees are clearly communicated before the first session: contact us for an exact quote.',
        },
        {
          question: 'Which payment methods do you accept?',
          answer:
            'Payment is made per session or as a package depending on your care plan. An invoice is provided for any reimbursement claim.',
        },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Book your appointment today',
      subtitle: 'One message is all it takes. Describe what you need and we will reply quickly.',
      phoneLabel: 'Phone',
      whatsappLabel: 'WhatsApp',
      whatsappHint: 'Fast replies, Monday to Saturday',
      hoursLabel: 'Opening hours',
      hoursValue: 'Monday to Saturday, by appointment',
      locationLabel: 'Location',
      locationValue: 'Casablanca — clinic and home visits',
      languagesLabel: 'Languages',
      languagesValue: 'French · Arabic · English',
      ctaWhatsapp: 'Message on WhatsApp',
      ctaCall: 'Call now',
    },
    footer: {
      tagline: 'Physiotherapy clinic in Casablanca — at the clinic and at home.',
      rights: 'All rights reserved.',
      disclaimer:
        'The information on this site does not replace medical advice. In an emergency, contact emergency services.',
    },
    whatsappMessage: 'Hello, I would like to book a physiotherapy session in Casablanca.',
    floating: 'Chat on WhatsApp',
  },
}
