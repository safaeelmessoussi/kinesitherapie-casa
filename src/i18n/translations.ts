export type Lang = 'fr' | 'en' | 'ar' | 'zgh'

export interface LanguageOption {
  code: Lang
  label: string
  short: string
  dir: 'ltr' | 'rtl'
}

export const languages: LanguageOption[] = [
  { code: 'fr', label: 'Français', short: 'FR', dir: 'ltr' },
  { code: 'en', label: 'English', short: 'EN', dir: 'ltr' },
  { code: 'ar', label: 'العربية', short: 'ع', dir: 'rtl' },
  { code: 'zgh', label: 'ⵜⴰⵎⴰⵣⵉⵖⵜ', short: 'ⵣ', dir: 'ltr' },
]

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
  brand: {
    line1: string
    line2: string
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
    language: string
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
    whatsappMessage: string
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
    landlineLabel: string
    addressLabel: string
    addressValue: string
    mapsCta: string
    locationShort: string
    hoursLabel: string
    hoursValue: string
    languagesLabel: string
    languagesValue: string
    followLabel: string
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
      title: 'Centre de Kinésithérapie El Kandari — Casablanca, Sidi Othmane',
      description:
        'Centre de kinésithérapie à Casablanca (Sidi Othmane) : rééducation, kiné du sport, douleurs du dos, posture et séances à domicile. Prise de rendez-vous rapide par téléphone ou WhatsApp.',
    },
    brand: {
      line1: 'Centre de Kinésithérapie',
      line2: 'El Kandari',
    },
    nav: {
      services: 'Soins',
      about: 'Le centre',
      approach: 'Déroulement',
      home: 'À domicile',
      faq: 'FAQ',
      contact: 'Contact',
      cta: 'Prendre rendez-vous',
      menu: 'Ouvrir le menu',
      close: 'Fermer le menu',
      language: 'Langue',
    },
    hero: {
      eyebrow: 'Centre de kinésithérapie · Sidi Othmane, Casablanca',
      title: 'Retrouvez le mouvement,',
      highlight: 'sans la douleur.',
      subtitle:
        'Nous vous accompagnons avec une kinésithérapie moderne, humaine et efficace : au centre, à Sidi Othmane, ou directement chez vous à Casablanca. Un bilan précis, un plan clair, et des résultats que vous ressentez.',
      ctaWhatsapp: 'Réserver sur WhatsApp',
      ctaCall: 'Appeler le centre',
      badgeHome: 'Séances à domicile',
      badgeReply: 'Réponse rapide sur WhatsApp',
      imageAlt: 'Salle de soins lumineuse du centre de kinésithérapie à Casablanca',
    },
    trust: [
      {
        title: 'Prise en charge personnalisée',
        description: 'Chaque séance est construite autour de votre bilan, de vos objectifs et de votre rythme.',
      },
      {
        title: 'Au centre ou à domicile',
        description: 'Vous choisissez : au centre ou chez vous, avec le même matériel et la même exigence.',
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
        'De la douleur aiguë à la reprise du sport, le centre accompagne adultes, sportifs et seniors avec des techniques manuelles et actives reconnues.',
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
          title: 'Posture, ergonomie & prévention',
          description:
            'Analyse posturale, conseils ergonomiques (bureau, télétravail, gestes du quotidien) et programmes de prévention pour éviter que la douleur ne revienne.',
        },
        {
          title: 'Rééducation neurologique',
          description:
            'Accompagnement après un AVC, en cas de maladie de Parkinson ou d\u2019autres atteintes neurologiques pour préserver l\u2019autonomie au quotidien.',
        },
        {
          title: 'Kinésithérapie des seniors',
          description:
            'Équilibre, prévention des chutes, entretien de la mobilité et maintien de l\u2019indépendance, au centre ou à domicile.',
        },
      ],
      note: 'Votre besoin n\u2019apparaît pas ici ? Écrivez-nous sur WhatsApp, nous vous orienterons.',
    },
    about: {
      eyebrow: 'Le centre',
      title: 'Votre santé est notre priorité',
      paragraphs: [
        'Au Centre de Kinésithérapie El Kandari, à Sidi Othmane, nous partons d\u2019une conviction simple : on se rétablit mieux quand on comprend ce qui se passe dans son corps et quand on avance avec une équipe qui y croit autant que soi.',
        'Notre pratique associe thérapie manuelle, exercices actifs et éducation du patient. Pas de séances mécaniques : chaque rendez-vous a un objectif, chaque progrès est mesuré, et le plan s\u2019adapte à votre évolution.',
        'Dynamiques, directs et bienveillants, nous accompagnons aussi bien le sportif pressé de reprendre que la personne qui souhaite simplement retrouver un quotidien sans douleur — au centre ou à domicile.',
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
      imageAlt: 'Séance de thérapie manuelle de l\u2019épaule au centre',
    },
    home: {
      eyebrow: 'Séances à domicile',
      title: 'La même qualité de soins, directement chez vous à Casablanca',
      subtitle:
        'Mobilité réduite, sortie d\u2019hospitalisation, emploi du temps chargé ou simple préférence : notre équipe se déplace avec le matériel nécessaire.',
      points: [
        'Déplacement dans Casablanca et ses environs',
        'Matériel professionnel transporté à chaque séance',
        'Créneaux en journée et en début de soirée selon disponibilités',
        'Idéal pour les seniors et la rééducation post-opératoire',
      ],
      cta: 'Demander une séance à domicile',
      imageAlt: 'Table de kinésithérapie portable installée dans un salon lumineux',
      whatsappMessage: 'Bonjour, je souhaite réserver une séance de kinésithérapie à domicile à Casablanca.',
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
            'Le plus simple est d\u2019envoyer un message WhatsApp ou d\u2019appeler le centre. Précisez votre besoin et vos disponibilités, nous vous proposons rapidement un créneau au centre ou à domicile.',
        },
        {
          question: 'Que dois-je apporter et comment m\u2019habiller ?',
          answer:
            'Apportez votre ordonnance, vos examens récents (radiographies, IRM, comptes rendus) et une tenue souple qui permet d\u2019accéder facilement à la zone à traiter.',
        },
        {
          question: 'Les séances à domicile coûtent-elles plus cher ?',
          answer:
            'Un supplément de déplacement peut s\u2019appliquer selon la zone. Les tarifs sont communiqués clairement avant la première séance.',
        },
        {
          question: 'Quels moyens de paiement acceptez-vous ?',
          answer: 'Le règlement s\u2019effectue à chaque séance ou par forfait selon votre prise en charge.',
        },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Prenez rendez-vous dès aujourd\u2019hui',
      subtitle: 'Un message suffit pour obtenir un créneau. Décrivez votre besoin, nous vous répondons rapidement.',
      phoneLabel: 'Mobile',
      whatsappLabel: 'WhatsApp',
      whatsappHint: 'Réponse rapide, du lundi au samedi',
      landlineLabel: 'Téléphone fixe',
      addressLabel: 'Adresse',
      addressValue: '176 Bd Nil, 1er étage, Hay Mabrouka — Sidi Othmane, Casablanca',
      mapsCta: 'Ouvrir dans Google Maps',
      locationShort: 'Sidi Othmane, Casablanca',
      hoursLabel: 'Horaires',
      hoursValue: 'Du lundi au samedi, sur rendez-vous',
      languagesLabel: 'Langues parlées',
      languagesValue: 'Français · Arabe · English',
      followLabel: 'Suivez-nous',
      ctaWhatsapp: 'Écrire sur WhatsApp',
      ctaCall: 'Appeler maintenant',
    },
    footer: {
      tagline: 'Votre santé est notre priorité.',
      rights: 'Tous droits réservés.',
      disclaimer:
        'Les informations de ce site ne remplacent pas un avis médical. En cas d\u2019urgence, contactez les services d\u2019urgence.',
    },
    whatsappMessage: 'Bonjour, je souhaite prendre rendez-vous pour une séance de kinésithérapie à Casablanca.',
    floating: 'Discuter sur WhatsApp',
  },

  en: {
    meta: {
      title: 'Centre de Kinésithérapie El Kandari — Physiotherapy in Casablanca, Sidi Othmane',
      description:
        'Physiotherapy clinic in Casablanca (Sidi Othmane): rehabilitation, sports physio, back pain, posture and home visits. Book quickly by phone or WhatsApp.',
    },
    brand: {
      line1: 'Centre de Kinésithérapie',
      line2: 'El Kandari',
    },
    nav: {
      services: 'Treatments',
      about: 'The clinic',
      approach: 'How it works',
      home: 'Home visits',
      faq: 'FAQ',
      contact: 'Contact',
      cta: 'Book a session',
      menu: 'Open menu',
      close: 'Close menu',
      language: 'Language',
    },
    hero: {
      eyebrow: 'Physiotherapy clinic · Sidi Othmane, Casablanca',
      title: 'Move freely again,',
      highlight: 'without the pain.',
      subtitle:
        'We offer modern, human and effective physiotherapy — at our clinic in Sidi Othmane or in the comfort of your home in Casablanca. A precise assessment, a clear plan, and results you can feel.',
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
          title: 'Posture, ergonomics & prevention',
          description:
            'Postural analysis, ergonomic advice (desk work, remote work, everyday movements) and prevention programmes so the pain does not come back.',
        },
        {
          title: 'Neurological rehabilitation',
          description:
            'Support after a stroke, with Parkinson\u2019s disease or other neurological conditions to preserve everyday independence.',
        },
        {
          title: 'Physiotherapy for seniors',
          description: 'Balance, fall prevention, mobility maintenance and independence, at the clinic or at home.',
        },
      ],
      note: 'Can\u2019t find what you need? Message us on WhatsApp and we will guide you.',
    },
    about: {
      eyebrow: 'The clinic',
      title: 'Your health is our priority',
      paragraphs: [
        'At Centre de Kinésithérapie El Kandari in Sidi Othmane, we start from a simple belief: people recover better when they understand what is happening in their body and move forward with a team that believes in it as much as they do.',
        'Our practice combines manual therapy, active exercise and patient education. No routine sessions: every appointment has a goal, every improvement is measured, and the plan adapts as you progress.',
        'Dynamic, straightforward and caring, we support the athlete eager to get back on the field as much as the person who simply wants a pain-free daily life — at the clinic or at home.',
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
        'Reduced mobility, hospital discharge, a busy schedule or simple preference: our team comes to you with the necessary equipment.',
      points: [
        'Visits across Casablanca and surrounding areas',
        'Professional equipment brought to every session',
        'Daytime and early-evening slots depending on availability',
        'Ideal for seniors and post-surgery rehabilitation',
      ],
      cta: 'Request a home visit',
      imageAlt: 'Portable physiotherapy table set up in a bright living room',
      whatsappMessage: 'Hello, I would like to book a home physiotherapy session in Casablanca.',
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
            'A travel supplement may apply depending on the area. Fees are clearly communicated before the first session.',
        },
        {
          question: 'Which payment methods do you accept?',
          answer: 'Payment is made per session or as a package depending on your care plan.',
        },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Book your appointment today',
      subtitle: 'One message is all it takes. Describe what you need and we will reply quickly.',
      phoneLabel: 'Mobile',
      whatsappLabel: 'WhatsApp',
      whatsappHint: 'Fast replies, Monday to Saturday',
      landlineLabel: 'Landline',
      addressLabel: 'Address',
      addressValue: '176 Bd Nil, 1st floor, Hay Mabrouka — Sidi Othmane, Casablanca',
      mapsCta: 'Open in Google Maps',
      locationShort: 'Sidi Othmane, Casablanca',
      hoursLabel: 'Opening hours',
      hoursValue: 'Monday to Saturday, by appointment',
      languagesLabel: 'Languages',
      languagesValue: 'French · Arabic · English',
      followLabel: 'Follow us',
      ctaWhatsapp: 'Message on WhatsApp',
      ctaCall: 'Call now',
    },
    footer: {
      tagline: 'Your health is our priority.',
      rights: 'All rights reserved.',
      disclaimer:
        'The information on this site does not replace medical advice. In an emergency, contact emergency services.',
    },
    whatsappMessage: 'Hello, I would like to book a physiotherapy session in Casablanca.',
    floating: 'Chat on WhatsApp',
  },

  ar: {
    meta: {
      title: 'مركز الترويض الطبي الكندري — الدار البيضاء، سيدي عثمان',
      description:
        'مركز الترويض الطبي في الدار البيضاء (سيدي عثمان): إعادة التأهيل، العلاج الطبيعي الرياضي، آلام الظهر، الوضعية وحصص في المنزل. حجز سريع عبر الهاتف أو واتساب.',
    },
    brand: {
      line1: 'مركز الترويض الطبي',
      line2: 'الكندري',
    },
    nav: {
      services: 'العلاجات',
      about: 'المركز',
      approach: 'مسار العلاج',
      home: 'في المنزل',
      faq: 'الأسئلة الشائعة',
      contact: 'اتصل بنا',
      cta: 'احجز موعدًا',
      menu: 'فتح القائمة',
      close: 'إغلاق القائمة',
      language: 'اللغة',
    },
    hero: {
      eyebrow: 'مركز الترويض الطبي · سيدي عثمان، الدار البيضاء',
      title: 'استعد حركتك،',
      highlight: 'بدون ألم.',
      subtitle:
        'نرافقكم بعلاج طبيعي حديث وإنساني وفعّال: في المركز بسيدي عثمان أو مباشرة في منزلكم بالدار البيضاء. تشخيص دقيق، خطة واضحة، ونتائج تشعرون بها.',
      ctaWhatsapp: 'احجز عبر واتساب',
      ctaCall: 'اتصل بالمركز',
      badgeHome: 'حصص في المنزل',
      badgeReply: 'رد سريع على واتساب',
      imageAlt: 'قاعة علاج مضيئة في مركز الترويض الطبي بالدار البيضاء',
    },
    trust: [
      {
        title: 'رعاية شخصية',
        description: 'كل جلسة تُبنى على تشخيصك وأهدافك ووتيرتك.',
      },
      {
        title: 'في المركز أو في المنزل',
        description: 'أنت تختار: في المركز أو في منزلك، بنفس المعدات ونفس الجودة.',
      },
      {
        title: 'مواعيد سريعة',
        description: 'رد في نفس اليوم ومواعيد تناسب أوقاتك.',
      },
      {
        title: 'متابعة بين الجلسات',
        description: 'تمارين تقوم بها في المنزل وقناة واتساب لأي سؤال.',
      },
    ],
    services: {
      eyebrow: 'علاجاتنا',
      title: 'رعاية شاملة تتناسب مع حالتك',
      subtitle:
        'من الألم الحاد إلى العودة إلى الرياضة، يرافق المركز الكبار والرياضيين وكبار السن بتقنيات يدوية ونشطة معتمدة.',
      items: [
        {
          title: 'إعادة التأهيل بعد الجراحة والإصابات',
          description:
            'بعد عملية جراحية أو كسر أو التواء أو تمزق في الأربطة: استعادة الحركة والقوة والثقة خطوة بخطوة.',
        },
        {
          title: 'العلاج الطبيعي الرياضي',
          description:
            'الوقاية من الإصابات وعلاجها، والتحضير للعودة إلى الملعب وتحسين الأداء الحركي مهما كان مستواك.',
        },
        {
          title: 'آلام الظهر والرقبة والمفاصل',
          description:
            'آلام أسفل الظهر، الرقبة، عرق النسا، التهاب الأوتار، الكتف المؤلم: تخفيف الألم، فهم السبب وتجنب تكراره.',
        },
        {
          title: 'الوضعية والأرغونوميا والوقاية',
          description:
            'تحليل الوضعية، نصائح أرغونومية (المكتب، العمل عن بُعد، حركات الحياة اليومية) وبرامج وقائية حتى لا يعود الألم.',
        },
        {
          title: 'إعادة التأهيل العصبي',
          description:
            'مواكبة بعد السكتة الدماغية، أو في حالة مرض باركنسون أو إصابات عصبية أخرى للحفاظ على الاستقلالية اليومية.',
        },
        {
          title: 'العلاج الطبيعي لكبار السن',
          description: 'التوازن، الوقاية من السقوط، الحفاظ على الحركة والاستقلالية، في المركز أو في المنزل.',
        },
      ],
      note: 'لم تجد ما تحتاجه؟ راسلنا على واتساب وسنوجهك.',
    },
    about: {
      eyebrow: 'المركز',
      title: 'صحتكم أولويتنا',
      paragraphs: [
        'في مركز الترويض الطبي الكندري بسيدي عثمان، ننطلق من قناعة بسيطة: نتعافى بشكل أفضل عندما نفهم ما يحدث في أجسامنا وعندما نتقدم مع فريق يؤمن بذلك مثلنا.',
        'تجمع ممارستنا بين العلاج اليدوي والتمارين النشطة وتوعية المريض. لا جلسات روتينية: لكل موعد هدف، وكل تقدم يُقاس، والخطة تتكيف مع تطورك.',
        'بحيوية وصراحة وتعاطف، نرافق الرياضي المتعجل للعودة كما نرافق من يرغب ببساطة في حياة يومية بلا ألم — في المركز أو في المنزل.',
      ],
      values: [
        {
          title: 'الإصغاء والتوعية',
          description: 'تغادر وأنت تفهم ألمك وما يمكنك فعله لتقليله.',
        },
        {
          title: 'منهج نشط',
          description: 'يد المعالج تخفف، والحركة تشفي: أنت شريك فعّال في تعافيك.',
        },
        {
          title: 'دقة ومتابعة',
          description: 'تشخيص أولي، أهداف واضحة، تقييمات منتظمة وتمارين منزلية مناسبة.',
        },
      ],
    },
    approach: {
      eyebrow: 'مسار العلاج',
      title: 'كيف تتم رعايتك',
      subtitle: 'مسار واضح في ثلاث مراحل، لتعرف تمامًا إلى أين تتجه.',
      steps: [
        {
          title: 'تشخيص كامل',
          description:
            'الجلسة الأولى مخصصة للإصغاء إليك وفحص المنطقة المعنية وتقييم الحركة والقوة والألم. نحدد معًا أهدافًا واقعية.',
        },
        {
          title: 'علاج موجّه',
          description:
            'علاج يدوي، تحريك المفاصل، تقوية، تمارين التوازن: كل تقنية تُختار حسب تشخيصك وتُعدَّل جلسة بعد جلسة.',
        },
        {
          title: 'برنامج واستقلالية',
          description:
            'تتلقى تمارين بسيطة لتقوم بها في المنزل، مع متابعة عبر واتساب للبقاء على المسار الصحيح وتجنب الانتكاس.',
        },
      ],
      imageAlt: 'جلسة علاج يدوي للكتف في المركز',
    },
    home: {
      eyebrow: 'حصص في المنزل',
      title: 'نفس جودة الرعاية، مباشرة في منزلك بالدار البيضاء',
      subtitle:
        'حركة محدودة، خروج من المستشفى، جدول مزدحم أو مجرد تفضيل: ينتقل فريقنا إليك بالمعدات اللازمة.',
      points: [
        'التنقل داخل الدار البيضاء وضواحيها',
        'معدات مهنية تُنقل في كل جلسة',
        'مواعيد نهارية وفي بداية المساء حسب التوفر',
        'مثالي لكبار السن وإعادة التأهيل بعد الجراحة',
      ],
      cta: 'اطلب حصة في المنزل',
      imageAlt: 'طاولة علاج طبيعي محمولة في صالة منزل مضيئة',
      whatsappMessage: 'مرحبًا، أرغب في حجز حصة علاج طبيعي في المنزل بالدار البيضاء.',
    },
    faq: {
      eyebrow: 'الأسئلة الشائعة',
      title: 'كل ما تريد معرفته قبل جلستك الأولى',
      items: [
        {
          question: 'هل أحتاج إلى وصفة طبية؟',
          answer:
            'يُستحسن وجود وصفة طبية، خاصة للتعويض من التأمين أو التعاضدية. يمكنك مع ذلك التواصل معنا بدونها: سنوجهك وننصحك بزيارة طبيبك إذا لزم الأمر.',
        },
        {
          question: 'كم تدوم الجلسة؟',
          answer:
            'تدوم الجلسة عادة بين 30 و45 دقيقة. الموعد الأول أطول قليلًا لأنه يتضمن تشخيصًا كاملًا وتحديد أهدافك.',
        },
        {
          question: 'كيف أحجز موعدًا؟',
          answer:
            'أسهل طريقة هي إرسال رسالة واتساب أو الاتصال بالمركز. حدد حاجتك وأوقاتك المتاحة، وسنقترح عليك بسرعة موعدًا في المركز أو في المنزل.',
        },
        {
          question: 'ماذا أحضر معي وكيف ألبس؟',
          answer:
            'أحضر وصفتك وفحوصاتك الأخيرة (أشعة، رنين مغناطيسي، تقارير) وملابس مريحة تسهّل الوصول إلى المنطقة المعالجة.',
        },
        {
          question: 'هل الحصص المنزلية أغلى؟',
          answer: 'قد تُطبق زيادة للتنقل حسب المنطقة. تُبلَّغ الأسعار بوضوح قبل الجلسة الأولى.',
        },
        {
          question: 'ما وسائل الدفع المقبولة؟',
          answer: 'يتم الدفع في كل جلسة أو على شكل باقة حسب خطة علاجك.',
        },
      ],
    },
    contact: {
      eyebrow: 'اتصل بنا',
      title: 'احجز موعدك اليوم',
      subtitle: 'رسالة واحدة تكفي للحصول على موعد. صف حاجتك ونرد عليك بسرعة.',
      phoneLabel: 'الهاتف المحمول',
      whatsappLabel: 'واتساب',
      whatsappHint: 'رد سريع، من الاثنين إلى السبت',
      landlineLabel: 'الهاتف الثابت',
      addressLabel: 'العنوان',
      addressValue: '176 شارع النيل، الطابق الأول، حي المبروكة — سيدي عثمان، الدار البيضاء',
      mapsCta: 'افتح في خرائط جوجل',
      locationShort: 'سيدي عثمان، الدار البيضاء',
      hoursLabel: 'أوقات العمل',
      hoursValue: 'من الاثنين إلى السبت، بموعد مسبق',
      languagesLabel: 'اللغات',
      languagesValue: 'الفرنسية · العربية · الإنجليزية',
      followLabel: 'تابعونا',
      ctaWhatsapp: 'راسلنا على واتساب',
      ctaCall: 'اتصل الآن',
    },
    footer: {
      tagline: 'صحتكم أولويتنا.',
      rights: 'جميع الحقوق محفوظة.',
      disclaimer: 'المعلومات في هذا الموقع لا تعوض الاستشارة الطبية. في حالة الطوارئ، اتصل بخدمات الإسعاف.',
    },
    whatsappMessage: 'مرحبًا، أرغب في حجز موعد لجلسة علاج طبيعي في الدار البيضاء.',
    floating: 'تحدث معنا على واتساب',
  },

  zgh: {
    meta: {
      title: 'ⴰⵎⵎⴰⵙ ⵏ ⵓⵙⵓⵊⵊⵉ ⵙ ⵓⵎⵓⵙⵙⵓ ⵍⴽⴰⵏⴷⴰⵔⵉ — ⵜⵉⴳⵎⵎⵉ ⵜⵓⵎⵍⵉⵍⵜ, ⵙⵉⴷⵉ ⵄⵜⵎⴰⵏ',
      description:
        'ⴰⵎⵎⴰⵙ ⵏ ⵓⵙⵓⵊⵊⵉ ⵙ ⵓⵎⵓⵙⵙⵓ ⴳ ⵜⴳⵎⵎⵉ ⵜⵓⵎⵍⵉⵍⵜ (ⵙⵉⴷⵉ ⵄⵜⵎⴰⵏ): ⴰⵙⵓⵊⵊⵉ ⵏ ⵓⵣⴰⴳⵓⵔ, ⴰⴷⴷⴰⵍ, ⵜⴰⴱⴷⴷⵉ ⴷ ⵜⵖⵉⵎⵉⵜⵉⵏ ⴳ ⵜⴰⴷⴷⴰⵔⵜ. ⴰⵎⵙⴰⴳⴰⵔ ⵙ ⵜⵜⵉⵍⵉⴼⵓⵏ ⵏⵖ ⵡⴰⵜⵙⴰⴱ.',
    },
    brand: {
      line1: 'Centre de Kinésithérapie',
      line2: 'El Kandari',
    },
    nav: {
      services: 'ⴰⵙⵓⵊⵊⵉ',
      about: 'ⴰⵎⵎⴰⵙ',
      approach: 'ⵎⴰⵎⴽ ⵜⵜⵉⵍⵉ',
      home: 'ⴳ ⵜⴰⴷⴷⴰⵔⵜ',
      faq: 'ⵉⵙⵇⵙⵉⵜⵏ',
      contact: 'ⴰⵎⵢⴰⵡⴰⴹ',
      cta: 'ⴰⵡⵉ ⴰⵎⵙⴰⴳⴰⵔ',
      menu: 'ⵕⵥⵎ ⵓⵎⵓⵖ',
      close: 'ⵇⵇⵏ ⵓⵎⵓⵖ',
      language: 'ⵜⵓⵜⵍⴰⵢⵜ',
    },
    hero: {
      eyebrow: 'ⴰⵎⵎⴰⵙ ⵏ ⵓⵙⵓⵊⵊⵉ ⵙ ⵓⵎⵓⵙⵙⵓ · ⵙⵉⴷⵉ ⵄⵜⵎⴰⵏ, ⵜⵉⴳⵎⵎⵉ ⵜⵓⵎⵍⵉⵍⵜ',
      title: 'ⵔⴰⵔ ⴰⵎⵓⵙⵙⵓ ⵏⵏⴽ,',
      highlight: 'ⴱⵍⴰ ⴰⵇⵔⴰⵃ.',
      subtitle:
        'ⵏⵜⵜⵉⵍⵉ ⵜⴰⵎⴰ ⵏⵏⴽ ⵙ ⵢⴰⵏ ⵓⵙⵓⵊⵊⵉ ⴰⵜⵔⴰⵔ, ⴰⵏⴰⴼⴳⴰⵏ ⴷ ⵉⵎⵓⵔⵙⵏ: ⴳ ⵡⴰⵎⵎⴰⵙ ⴳ ⵙⵉⴷⵉ ⵄⵜⵎⴰⵏ ⵏⵖ ⴳ ⵜⴰⴷⴷⴰⵔⵜ ⵏⵏⴽ ⴳ ⵜⴳⵎⵎⵉ ⵜⵓⵎⵍⵉⵍⵜ. ⴰⵙⵙⵜⴳ ⵉⵖⵓⴷⴰⵏ, ⴰⵖⴰⵡⴰⵙ ⵉⴼⴰⵡⵏ, ⴷ ⵉⴳⵎⴰⴹ ⵜⵜⵃⵓⵙⵙⵓⵜ.',
      ctaWhatsapp: 'ⴰⵡⵉ ⴰⵎⵙⴰⴳⴰⵔ ⴳ ⵡⴰⵜⵙⴰⴱ',
      ctaCall: 'ⵖⵔ ⵉ ⵡⴰⵎⵎⴰⵙ',
      badgeHome: 'ⵜⵉⵖⵉⵎⵉⵜⵉⵏ ⴳ ⵜⴰⴷⴷⴰⵔⵜ',
      badgeReply: 'ⵜⵉⵔⵔⴰⵔⵜ ⵜⴰⵣⵔⴱⴰⵏⵜ ⴳ ⵡⴰⵜⵙⴰⴱ',
      imageAlt: 'ⵜⴰⵃⴰⵏⵓⵜ ⵏ ⵓⵙⵓⵊⵊⵉ ⵉⴼⴰⵡⵏ ⴳ ⵜⴳⵎⵎⵉ ⵜⵓⵎⵍⵉⵍⵜ',
    },
    trust: [
      {
        title: 'ⴰⵙⵓⵊⵊⵉ ⵉⵎⵙⴰⵙⴰⵏ ⴷ ⴽⵓ ⵢⴰⵏ',
        description: 'ⴽⵓ ⵜⵉⵖⵉⵎⵉⵜ ⵜⴱⴷⴷ ⵅⴼ ⵓⵙⵙⵜⴳ ⵏⵏⴽ, ⵉⵡⵜⵜⴰⵙⵏ ⵏⵏⴽ ⴷ ⵓⵏⵣⴳⵓⵎ ⵏⵏⴽ.',
      },
      {
        title: 'ⴳ ⵡⴰⵎⵎⴰⵙ ⵏⵖ ⴳ ⵜⴰⴷⴷⴰⵔⵜ',
        description: 'ⴽⵢⵢⵉ ⴰⴷ ⵉⵙⵜⵉⵏ: ⴳ ⵡⴰⵎⵎⴰⵙ ⵏⵖ ⴳ ⵜⴰⴷⴷⴰⵔⵜ ⵏⵏⴽ, ⵙ ⵢⴰⵏ ⵓⵎⴰⵙⵙⵏ ⴷ ⵢⴰⵜ ⵜⵖⵓⴷⵉ.',
      },
      {
        title: 'ⵉⵎⵙⴰⴳⴰⵔⵏ ⵉⵣⵔⴱⴰⵏⵏ',
        description: 'ⵜⵉⵔⵔⴰⵔⵜ ⴳ ⵢⴰⵏ ⵡⴰⵙⵙ ⴷ ⵉⵣⵎⴰⵣ ⵉⵎⵙⴰⵙⴰⵏ ⴷ ⵡⴰⴽⵓⴷ ⵏⵏⴽ.',
      },
      {
        title: 'ⴰⴹⴼⴰⵕ ⴳⵔ ⵜⵖⵉⵎⵉⵜⵉⵏ',
        description: 'ⵉⵍⵓⵖⵎⴰ ⴰⴷ ⵜⵏ ⵜⵙⴽⵔⵜ ⴳ ⵜⴰⴷⴷⴰⵔⵜ ⴷ ⵡⴰⵜⵙⴰⴱ ⵉ ⴽⵓ ⴰⵙⵇⵙⵉ.',
      },
    ],
    services: {
      eyebrow: 'ⴰⵙⵓⵊⵊⵉ ⵏⵏⵖ',
      title: 'ⴰⵙⵓⵊⵊⵉ ⵉⵙⵎⴷⵏ, ⵉⵎⵙⴰⵙⴰⵏ ⴷ ⵡⴰⴷⴷⴰⴷ ⵏⵏⴽ',
      subtitle:
        'ⵙⴳ ⵓⵇⵔⴰⵃ ⴰⵔ ⵜⵓⵖⵓⵍⵜ ⵙ ⵡⴰⴷⴷⴰⵍ, ⵉⵜⵜⵉⵍⵉ ⵡⴰⵎⵎⴰⵙ ⵜⴰⵎⴰ ⵏ ⵉⵎⵇⵇⵔⴰⵏⵏ, ⵉⵎⴰⴷⴷⴰⵍⵏ ⴷ ⵉⵎⵖⴰⵔⵏ ⵙ ⵜⵉⴳⴳⵉⵜⵉⵏ ⵏ ⵓⴼⵓⵙ ⴷ ⵓⵎⵓⵙⵙⵓ ⵉⵜⵜⵓⵙⵙⴰⵏⵏ.',
      items: [
        {
          title: 'ⴰⵙⵓⵊⵊⵉ ⴷⴼⴼⵉⵔ ⵜⵡⵓⵔⵉ ⵜⴰⵎⵙⵓⵊⵊⵉⵜ ⴷ ⵉⵎⴰⵟⵟⴰⵍⵏ',
          description:
            'ⴷⴼⴼⵉⵔ ⵏ ⵜⵡⵓⵔⵉ ⵜⴰⵎⵙⵓⵊⵊⵉⵜ, ⴰⵕⵥⵥⵓⵎ ⵏ ⵉⵖⵙ ⵏⵖ ⴰⴼⵜⵍ: ⵔⴰⵔ ⴰⵎⵓⵙⵙⵓ, ⵜⴰⴷⵓⵙⵉ ⴷ ⵜⴰⴼⵍⵙⵜ ⴰⵙⵓⵔⵉⴼ ⵙ ⵓⵙⵓⵔⵉⴼ.',
        },
        {
          title: 'ⴰⵙⵓⵊⵊⵉ ⵏ ⵡⴰⴷⴷⴰⵍ',
          description:
            'ⴰⵃⵟⵟⵓ ⴷ ⵓⵙⵓⵊⵊⵉ ⵏ ⵉⵎⴰⵟⵟⴰⵍⵏ, ⴰⵙⵎⵓⵜⵜⴳ ⵏ ⵜⵓⵖⵓⵍⵜ ⵙ ⵡⴰⴷⴷⴰⵍ, ⵎⴰ ⵢⴰⴷ ⵉⴳⴰ ⴰⵙⵡⵉⵔ ⵏⵏⴽ.',
        },
        {
          title: 'ⴰⵇⵔⴰⵃ ⵏ ⵓⵣⴰⴳⵓⵔ, ⵓⵎⴳⴳⵔⴹ ⴷ ⵉⵖⵙⴰⵏ',
          description:
            'ⴰⵇⵔⴰⵃ ⵏ ⵓⵣⴰⴳⵓⵔ, ⵏ ⵓⵎⴳⴳⵔⴹ, ⵏ ⵜⵖⵔⵓⴹⵜ: ⵙⴼⵙⵓⵙ ⴰⵇⵔⴰⵃ, ⵙⵙⵏ ⴰⵙⵔⴰⴳ ⵏⵏⵙ, ⴷ ⵓⵔ ⵜ ⵜⴰⵊⵊⵜ ⴰⴷ ⵢⴰⵖⵓⵍ.',
        },
        {
          title: 'ⵜⴰⴱⴷⴷⵉ, ⴰⵎⵙⴰⵙⴰ ⵏ ⵜⵡⵓⵔⵉ ⴷ ⵓⵃⵟⵟⵓ',
          description:
            'ⴰⵙⵙⵜⴳ ⵏ ⵜⴱⴷⴷⵉ, ⵉⵙⵡⵉⵏⴳⵉⵎⵏ ⵉ ⵜⵡⵓⵔⵉ (ⴰⴱⵢⵓⵔⵓ, ⵜⴰⵡⵓⵔⵉ ⵙⴳ ⵜⴰⴷⴷⴰⵔⵜ, ⵉⵎⵓⵙⵙⵓⵜⵏ ⵏ ⴽⵓ ⴰⵙⵙ) ⴷ ⵉⵖⴰⵡⴰⵙⵏ ⵏ ⵓⵃⵟⵟⵓ ⵃⵎⴰ ⵓⵔ ⵢⴰⵖⵓⵍ ⵓⵇⵔⴰⵃ.',
        },
        {
          title: 'ⴰⵙⵓⵊⵊⵉ ⴰⵏⵓⵔⵓⵍⵓⵊⵉ',
          description:
            'ⴰⴹⴼⴰⵕ ⴷⴼⴼⵉⵔ ⵏ ⵜⵢⵢⵉⵜⵉ ⵏ ⵓⵍⵍⵖ, ⴰⵟⵟⴰⵏ ⵏ ⴱⴰⵔⴽⵉⵏⵙⵓⵏ ⵏⵖ ⵉⵎⵓⴽⵔⵉⵙⵏ ⵢⴰⴹⵏ, ⵃⵎⴰ ⴰⴷ ⵜⵇⵇⵉⵎ ⵜⴷⵔⴼⵉⵜ ⴳ ⵜⵓⴷⵔⵜ ⵏ ⴽⵓ ⴰⵙⵙ.',
        },
        {
          title: 'ⴰⵙⵓⵊⵊⵉ ⵏ ⵉⵎⵖⴰⵔⵏ',
          description: 'ⴰⵎⵙⴰⵙⴰ, ⴰⵃⵟⵟⵓ ⵙⴳ ⵜⵢⵢⵉⵜⴰ ⵏ ⵡⴰⴽⴰⵍ, ⴰⵎⵓⵙⵙⵓ ⴷ ⵜⴷⵔⴼⵉⵜ, ⴳ ⵡⴰⵎⵎⴰⵙ ⵏⵖ ⴳ ⵜⴰⴷⴷⴰⵔⵜ.',
        },
      ],
      note: 'ⵓⵔ ⵜⵓⴼⵉⵜ ⵎⴰⴷ ⵜⵔⵉⵜ? ⴰⵔⴰ ⴰⵖ ⴳ ⵡⴰⵜⵙⴰⴱ, ⵔⴰⴷ ⴰⴽ ⵏⵎⵍ ⴰⴱⵔⵉⴷ.',
    },
    about: {
      eyebrow: 'ⴰⵎⵎⴰⵙ',
      title: 'ⵜⴰⴷⵓⵙⵉ ⵏⵏⴽ ⵜⴳⴰ ⴰⵎⵣⵡⴰⵔⵓ ⵏⵏⵖ',
      paragraphs: [
        'ⴳ ⵡⴰⵎⵎⴰⵙ ⵏ ⵓⵙⵓⵊⵊⵉ ⵙ ⵓⵎⵓⵙⵙⵓ ⵍⴽⴰⵏⴷⴰⵔⵉ ⴳ ⵙⵉⴷⵉ ⵄⵜⵎⴰⵏ, ⵏⴱⴷⴰ ⵙⴳ ⵢⴰⵜ ⵜⵖⴰⵔⴰⵙⵜ ⵜⴰⴼⵙⵓⵙⵜ: ⵏⵊⵊⵉ ⵓⴳⴳⴰⵔ ⵉⵖ ⵏⵙⵙⵏ ⵎⴰⴷ ⵉⵜⵜⵎⵙⴰⵔⵏ ⴳ ⵜⴼⴽⴽⴰ ⵏⵏⵖ ⴷ ⵉⵖ ⵏⴷⴷⴰ ⴷ ⵢⴰⵜ ⵜⵔⴰⴱⴱⵓⵜ ⵢⵓⵎⵏⵏ ⵙⵔⵙ ⵣⵓⵏⴷ ⵏⴽⴽⵏⵉ.',
        'ⵜⴰⵡⵓⵔⵉ ⵏⵏⵖ ⵜⵙⵎⵓⵏ ⴰⵙⵓⵊⵊⵉ ⵙ ⵓⴼⵓⵙ, ⵉⵍⵓⵖⵎⴰ ⴷ ⵓⵙⵙⵍⵎⴷ ⵏ ⵓⵎⵓⴹⵉⵏ. ⵓⵔ ⵍⵍⵉⵏⵜ ⵜⵖⵉⵎⵉⵜⵉⵏ ⵣⵓⵏⴷ ⵜⵉⵢⴰⴹ: ⴽⵓ ⴰⵎⵙⴰⴳⴰⵔ ⵖⵓⵔⵙ ⴰⵡⵜⵜⴰⵙ, ⴽⵓ ⴰⵙⵙⴰⵔⵓ ⵉⵜⵜⵓⵙⵖⴰⵍ, ⴷ ⵓⵖⴰⵡⴰⵙ ⵉⵜⵜⵎⵙⴰⵙⴰ ⴷ ⵓⵙⵙⴰⵔⵓ ⵏⵏⴽ.',
        'ⵙ ⵜⵣⵎⵔⵜ, ⵜⵉⴷⵜ ⴷ ⵜⵃⵏⵏⴰ, ⵏⵜⵜⵉⵍⵉ ⵜⴰⵎⴰ ⵏ ⵓⵎⴰⴷⴷⴰⵍ ⵉⵔⴰⵏ ⴰⴷ ⵢⴰⵖⵓⵍ ⵙ ⵣⵔⴱ, ⴷ ⵡⴰⵏⵏⴰ ⵉⵔⴰⵏ ⵖⴰⵙ ⵜⵓⴷⵔⵜ ⴱⵍⴰ ⴰⵇⵔⴰⵃ — ⴳ ⵡⴰⵎⵎⴰⵙ ⵏⵖ ⴳ ⵜⴰⴷⴷⴰⵔⵜ.',
      ],
      values: [
        {
          title: 'ⴰⵙⴼⵍⴷ ⴷ ⵓⵙⵙⵍⵎⴷ',
          description: 'ⵜⴷⴷⵓⵜ ⵜⵙⵙⵏⵜ ⴰⵇⵔⴰⵃ ⵏⵏⴽ ⴷ ⵎⴰⴷ ⵜⵣⵎⵔⵜ ⴰⴷ ⵜⵙⴽⵔⵜ ⵃⵎⴰ ⴰⴷ ⵜ ⵜⵙⵙⴷⵔⵓⵙⵜ.',
        },
        {
          title: 'ⵜⴰⵖⴰⵔⴰⵙⵜ ⵏ ⵓⵎⵓⵙⵙⵓ',
          description: 'ⴰⴼⵓⵙ ⵏ ⵓⵎⵙⵓⵊⵊⵉ ⵉⵙⴼⵙⵓⵙ, ⴰⵎⵓⵙⵙⵓ ⵉⵙⵙⵊⵊⵉ: ⴽⵢⵢⵉ ⴰⴷ ⵉⴳⴰⵏ ⴰⵎⵙⴽⴰⵔ ⴳ ⵓⵙⵓⵊⵊⵉ ⵏⵏⴽ.',
        },
        {
          title: 'ⵜⵉⵖⵓⴷⵉ ⴷ ⵓⴹⴼⴰⵕ',
          description: 'ⴰⵙⵙⵜⴳ ⴰⵎⵣⵡⴰⵔⵓ, ⵉⵡⵜⵜⴰⵙⵏ ⵉⴼⴰⵡⵏ, ⴰⵙⵙⵜⴳ ⴽⵓ ⵜⵉⵣⵉ ⴷ ⵉⵍⵓⵖⵎⴰ ⵉⵎⵙⴰⵙⴰⵏ ⴳ ⵜⴰⴷⴷⴰⵔⵜ.',
        },
      ],
    },
    approach: {
      eyebrow: 'ⵎⴰⵎⴽ ⵜⵜⵉⵍⵉ',
      title: 'ⵎⴰⵎⴽ ⵉⵜⵜⵉⵍⵉ ⵓⵙⵓⵊⵊⵉ ⵏⵏⴽ',
      subtitle: 'ⴰⴱⵔⵉⴷ ⵉⴼⴰⵡⵏ ⵙ ⴽⵕⴰⴹ ⵉⵙⵓⵔⵉⴼⵏ, ⴰⴷ ⵜⵙⵙⵏⵜ ⵎⴰⵏⵉ ⵜⴷⴷⵓⵜ.',
      steps: [
        {
          title: 'ⴰⵙⵙⵜⴳ ⵉⵙⵎⴷⵏ',
          description:
            'ⵜⵉⵖⵉⵎⵉⵜ ⵜⴰⵎⵣⵡⴰⵔⵓⵜ ⵜⴳⴰ ⵉ ⵓⵙⴼⵍⴷ ⵏⵏⴽ, ⴰⵙⵙⵉⴳⴳⵍ ⵏ ⵡⴰⵏⵙⴰ ⵉⵇⵔⵃⵏ ⴷ ⵓⵙⵙⵜⴳ ⵏ ⵓⵎⵓⵙⵙⵓ, ⵜⴷⵓⵙⵉ ⴷ ⵓⵇⵔⴰⵃ. ⵏⵙⵔⵙ ⵙ ⵜⴷⵔⴰⵡⵜ ⵉⵡⵜⵜⴰⵙⵏ ⵉⵣⵎⵔⵏ.',
        },
        {
          title: 'ⴰⵙⵓⵊⵊⵉ ⵉⵎⵙⴰⵙⴰⵏ',
          description:
            'ⴰⵙⵓⵊⵊⵉ ⵙ ⵓⴼⵓⵙ, ⴰⵙⵎⵓⵙⵙⵓ, ⴰⵙⴷⵓⵙ, ⴰⵎⵙⴰⵙⴰ: ⴽⵓ ⵜⴰⵜⵉⴽⵏⵉⵜ ⵜⵜⵓⵙⵜⴰⵢ ⵅⴼ ⵓⵙⵙⵜⴳ ⵏⵏⴽ ⴷ ⵜⵜⵓⵙⵎⵙⴰⵙⴰ ⵜⵉⵖⵉⵎⵉⵜ ⴷⴼⴼⵉⵔ ⵜⵉⵖⵉⵎⵉⵜ.',
        },
        {
          title: 'ⴰⵖⴰⵡⴰⵙ ⴷ ⵜⴷⵔⴼⵉⵜ',
          description:
            'ⵜⵜⴰⵡⵉⵜ ⵉⵍⵓⵖⵎⴰ ⵉⴼⵙⵓⵙⵏ ⴰⴷ ⵜⵏ ⵜⵙⴽⵔⵜ ⴳ ⵜⴰⴷⴷⴰⵔⵜ, ⵙ ⵓⴹⴼⴰⵕ ⴳ ⵡⴰⵜⵙⴰⴱ ⵃⵎⴰ ⴰⴷ ⵜⵇⵇⵉⵎⵜ ⴳ ⵓⴱⵔⵉⴷ ⵉⵖⵓⴷⴰⵏ.',
        },
      ],
      imageAlt: 'ⵜⵉⵖⵉⵎⵉⵜ ⵏ ⵓⵙⵓⵊⵊⵉ ⵙ ⵓⴼⵓⵙ ⵏ ⵜⵖⵔⵓⴹⵜ ⴳ ⵡⴰⵎⵎⴰⵙ',
    },
    home: {
      eyebrow: 'ⵜⵉⵖⵉⵎⵉⵜⵉⵏ ⴳ ⵜⴰⴷⴷⴰⵔⵜ',
      title: 'ⵜⵉⵖⵓⴷⵉ ⵏ ⵓⵙⵓⵊⵊⵉ ⵏⵏⵉⵜ, ⴳ ⵜⴰⴷⴷⴰⵔⵜ ⵏⵏⴽ ⴳ ⵜⴳⵎⵎⵉ ⵜⵓⵎⵍⵉⵍⵜ',
      subtitle:
        'ⴰⵎⵓⵙⵙⵓ ⵉⴷⵔⵓⵙⵏ, ⵜⵓⴼⴼⵖⴰ ⵙⴳ ⵓⵙⴳⵏⴰⴼ, ⴰⴽⵓⴷ ⵉⵄⵎⵕⵏ ⵏⵖ ⵖⴰⵙ ⵜⵉⵔⴰⵜ: ⵜⴰⵔⴰⴱⴱⵓⵜ ⵏⵏⵖ ⴰⴷ ⴽ ⴷ ⵜⴰⵛⴽ ⵙ ⵓⵎⴰⵙⵙⵏ ⵉⵍⴰⵇⵏ.',
      points: [
        'ⴰⵎⵓⴷⴷⵓ ⴳ ⵜⴳⵎⵎⵉ ⵜⵓⵎⵍⵉⵍⵜ ⴷ ⵎⴰ ⵜ ⵉⵏⵏⴹⵏ',
        'ⴰⵎⴰⵙⵙⵏ ⴰⵣⵣⵓⵍⴰⵏ ⵉⵜⵜⵓⵙⵎⵓⵜⵜⵉⵏ ⴳ ⴽⵓ ⵜⵉⵖⵉⵎⵉⵜ',
        'ⵉⵣⵎⴰⵣ ⴳ ⵡⴰⵙⵙ ⴷ ⵜⴰⵣⵡⴰⵔⴰ ⵏ ⵜⴷⴳⴳⵯⴰⵜ',
        'ⵉⵖⵓⴷⴰ ⵉ ⵉⵎⵖⴰⵔⵏ ⴷ ⵓⵙⵓⵊⵊⵉ ⴷⴼⴼⵉⵔ ⵜⵡⵓⵔⵉ ⵜⴰⵎⵙⵓⵊⵊⵉⵜ',
      ],
      cta: 'ⵙⵓⵜⵔ ⵜⵉⵖⵉⵎⵉⵜ ⴳ ⵜⴰⴷⴷⴰⵔⵜ',
      imageAlt: 'ⵜⴰⴷⴰⴱⵓⵜ ⵏ ⵓⵙⵓⵊⵊⵉ ⵉⵜⵜⵓⵙⵎⵓⵜⵜⵉⵏ ⴳ ⵢⴰⵜ ⵜⴰⴷⴷⴰⵔⵜ ⵉⴼⴰⵡⵏ',
      whatsappMessage:
        'ⴰⵣⵓⵍ, ⵔⵉⵖ ⴰⴷ ⴰⵡⵉⵖ ⵜⵉⵖⵉⵎⵉⵜ ⵏ ⵓⵙⵓⵊⵊⵉ ⵙ ⵓⵎⵓⵙⵙⵓ ⴳ ⵜⴰⴷⴷⴰⵔⵜ ⴳ ⵜⴳⵎⵎⵉ ⵜⵓⵎⵍⵉⵍⵜ. (Bonjour, je souhaite réserver une séance de kinésithérapie à domicile à Casablanca.)',
    },
    faq: {
      eyebrow: 'ⵉⵙⵇⵙⵉⵜⵏ',
      title: 'ⴽⵓⵍⵍⵓ ⵎⴰⴷ ⵜⵔⵉⵜ ⴰⴷ ⵜⵙⵙⵏⵜ ⴷⴰⵜ ⵜⵖⵉⵎⵉⵜ ⵏⵏⴽ ⵜⴰⵎⵣⵡⴰⵔⵓⵜ',
      items: [
        {
          question: 'ⵉⵙ ⵜⵜⵓⵙⵔⴰⵖ ⵜⴰⵏⵏⴰⵢⵜ ⵏ ⵓⵎⵙⵓⵊⵊⵉ?',
          answer:
            'ⵜⴳⴰ ⵜⴰⵏⵏⴰⵢⵜ ⵏ ⵓⵎⵙⵓⵊⵊⵉ ⵜⴰⵎⵓⴼⴰⵢⵜ, ⵙ ⵓⵎⴰⵜⴰ ⵉ ⵓⵔⴰⵔ ⵏ ⵜⵎⵙⵙⵓⵔⵜ ⵏ ⵓⵃⵟⵟⵓ. ⵜⵣⵎⵔⵜ ⵎⴰⵛ ⴰⴷ ⴰⵖ ⵜⵎⵢⴰⵡⴰⴹⵜ ⴱⵍⴰ ⵜⵜ: ⵔⴰⴷ ⴰⴽ ⵏⵎⵍ ⴰⴱⵔⵉⴷ, ⴷ ⵉⵖ ⵉⵍⴰⵇ, ⵏⵉⵏⵉ ⴰⴽ ⴰⴷ ⵜⵥⵕⵜ ⴰⵎⵙⵓⵊⵊⵉ ⵏⵏⴽ.',
        },
        {
          question: 'ⵎⵏⵛⴽ ⵜⵜⵇⵇⵉⵎ ⵜⵖⵉⵎⵉⵜ?',
          answer:
            'ⵜⵜⵇⵇⵉⵎ ⵜⵖⵉⵎⵉⵜ ⵙ ⵓⵎⴰⵜⴰ ⴳⵔ 30 ⴷ 45 ⵏ ⵜⵓⵙⴷⵉⴷⵜ. ⴰⵎⵙⴰⴳⴰⵔ ⴰⵎⵣⵡⴰⵔⵓ ⵉⵖⵣⵣⵉⴼ ⵛⵡⵉⵢ, ⴰⵛⴽⵓ ⵢⵓⵎⴰ ⴰⵙⵙⵜⴳ ⵉⵙⵎⴷⵏ ⴷ ⵓⵙⵔⵓⵙ ⵏ ⵉⵡⵜⵜⴰⵙⵏ ⵏⵏⴽ.',
        },
        {
          question: 'ⵎⴰⵎⴽ ⴰⴷ ⴰⵡⵉⵖ ⴰⵎⵙⴰⴳⴰⵔ?',
          answer:
            'ⴰⴱⵔⵉⴷ ⵉⴼⵙⵓⵙⵏ ⵉⴳⴰ ⵜ ⴰⴷ ⵜⴰⵣⵏⵜ ⵜⴰⴱⵔⴰⵜ ⴳ ⵡⴰⵜⵙⴰⴱ ⵏⵖ ⴰⴷ ⵜⵖⵔⵜ ⵉ ⵡⴰⵎⵎⴰⵙ. ⵉⵏⵉ ⴰⵖ ⵎⴰⴷ ⵜⵔⵉⵜ ⴷ ⵎⴰⵏⴰⴳⵓ ⵜⵣⵎⵔⵜ, ⵔⴰⴷ ⴰⴽ ⵏⴼⴽ ⵙ ⵣⵔⴱ ⴰⵣⵎⵣ ⴳ ⵡⴰⵎⵎⴰⵙ ⵏⵖ ⴳ ⵜⴰⴷⴷⴰⵔⵜ.',
        },
        {
          question: 'ⵎⴰⴷ ⴰⴷ ⴰⵡⵉⵖ ⴷ ⵎⴰⵎⴽ ⴰⴷ ⵍⵙⵖ?',
          answer:
            'ⴰⵡⵉ ⵜⴰⵏⵏⴰⵢⵜ ⵏ ⵓⵎⵙⵓⵊⵊⵉ, ⵉⵙⵙⵉⴳⴳⵍⵏ ⵏⵏⴽ ⵉⵎⴳⴳⵓⵔⴰ (ⵕⴰⴷⵢⵓ, IRM, ⵉⵏⵇⵇⵉⵙⵏ) ⴷ ⵉⵛⴹⴰⴹⵏ ⵉⴼⵙⵓⵙⵏ ⵉⵜⵜⴰⵊⵊⴰⵏ ⴰⴷ ⵏⵍⴽⵎ ⴰⵏⵙⴰ ⵏ ⵓⵙⵓⵊⵊⵉ.',
        },
        {
          question: 'ⵉⵙ ⵜⵖⵍⴰⵏⵜ ⵜⵖⵉⵎⵉⵜⵉⵏ ⵏ ⵜⴰⴷⴷⴰⵔⵜ ⵓⴳⴳⴰⵔ?',
          answer:
            'ⵉⵣⵎⵔ ⴰⴷ ⵢⵉⵍⵉ ⵢⴰⵏ ⵓⵔⵏⵓ ⵏ ⵓⵎⵓⴷⴷⵓ ⵙ ⵡⴰⵏⵙⴰ. ⵜⵜⵓⵎⵍⴰⵏ ⵡⴰⵜⵉⴳⵏ ⵙ ⵜⵉⴼⴰⵡⵜ ⴷⴰⵜ ⵜⵖⵉⵎⵉⵜ ⵜⴰⵎⵣⵡⴰⵔⵓⵜ.',
        },
        {
          question: 'ⵎⴰⵏ ⵜⵖⴰⵔⴰⵙⵉⵏ ⵏ ⵓⴼⵔⴰ ⴰⴷ ⵜⵇⴱⵍⵎ?',
          answer: 'ⴰⴼⵔⴰ ⵉⵜⵜⵉⵍⵉ ⴳ ⴽⵓ ⵜⵉⵖⵉⵎⵉⵜ ⵏⵖ ⵙ ⵓⵎⵓⵍⵍⵉ ⵙ ⵓⵖⴰⵡⴰⵙ ⵏⵏⴽ.',
        },
      ],
    },
    contact: {
      eyebrow: 'ⴰⵎⵢⴰⵡⴰⴹ',
      title: 'ⴰⵡⵉ ⴰⵎⵙⴰⴳⴰⵔ ⵏⵏⴽ ⵖⴰⵙⵙⴰ',
      subtitle: 'ⵢⴰⵜ ⵜⴱⵔⴰⵜ ⵜⵇⴰⴷⴰ ⵃⵎⴰ ⴰⴷ ⵜⴰⵡⵉⵜ ⴰⵣⵎⵣ. ⵉⵏⵉ ⴰⵖ ⵎⴰⴷ ⵜⵔⵉⵜ, ⵔⴰⴷ ⴰⴽ ⵏⵔⴰⵔ ⵙ ⵣⵔⴱ.',
      phoneLabel: 'ⴰⵜⵉⵍⵉⴼⵓⵏ ⴰⵎⵓⵜⵜⵉ',
      whatsappLabel: 'ⵡⴰⵜⵙⴰⴱ',
      whatsappHint: 'ⵜⵉⵔⵔⴰⵔⵜ ⵜⴰⵣⵔⴱⴰⵏⵜ, ⵙⴳ ⵡⴰⵢⵏⴰⵙ ⴰⵔ ⴰⵙⵉⴹⵢⴰⵙ',
      landlineLabel: 'ⴰⵜⵉⵍⵉⴼⵓⵏ ⵏ ⵡⴰⵎⵎⴰⵙ',
      addressLabel: 'ⵜⴰⵏⵙⴰ',
      addressValue: '176 Bd Nil, 1er étage, Hay Mabrouka — Sidi Othmane, Casablanca',
      mapsCta: 'ⵕⵥⵎ ⴳ Google Maps',
      locationShort: 'ⵙⵉⴷⵉ ⵄⵜⵎⴰⵏ, ⵜⵉⴳⵎⵎⵉ ⵜⵓⵎⵍⵉⵍⵜ',
      hoursLabel: 'ⵉⵙⵔⴰⴳⵏ',
      hoursValue: 'ⵙⴳ ⵡⴰⵢⵏⴰⵙ ⴰⵔ ⴰⵙⵉⴹⵢⴰⵙ, ⵙ ⵓⵎⵙⴰⴳⴰⵔ',
      languagesLabel: 'ⵜⵓⵜⵍⴰⵢⵉⵏ',
      languagesValue: 'ⵜⴰⴼⵕⴰⵏⵙⵉⵙⵜ · ⵜⴰⵄⵔⴰⴱⵜ · ⵜⴰⵏⴳⵍⵉⵣⵜ',
      followLabel: 'ⴹⴼⵕ ⴰⵖ',
      ctaWhatsapp: 'ⴰⵔⴰ ⴳ ⵡⴰⵜⵙⴰⴱ',
      ctaCall: 'ⵖⵔ ⵖⵉⵍⴰ',
    },
    footer: {
      tagline: 'ⵜⴰⴷⵓⵙⵉ ⵏⵏⴽ ⵜⴳⴰ ⴰⵎⵣⵡⴰⵔⵓ ⵏⵏⵖ.',
      rights: 'ⴽⵓⵍⵍⵓ ⵉⵣⵔⴼⴰⵏ ⵜⵜⵓⵃⴹⴰⵏ.',
      disclaimer:
        'ⵉⵏⵖⵎⵉⵙⵏ ⵏ ⵡⴰⵙⵉⵜ ⴰⴷ ⵓⵔ ⵙⵎⵎⴽⵜⵉⵏ ⵜⴰⵏⵏⴰⵢⵜ ⵏ ⵓⵎⵙⵓⵊⵊⵉ. ⴳ ⵜⵎⵙⴰⵔⵜ ⵜⴰⵣⵔⴱⴰⵏⵜ, ⵖⵔ ⵉ ⵜⵏⴰⴼⵓⵜⵉⵏ ⵏ ⵜⵡⵉⵙⵉ ⵜⴰⵣⵔⴱⴰⵏⵜ.',
    },
    whatsappMessage:
      'ⴰⵣⵓⵍ, ⵔⵉⵖ ⴰⴷ ⴰⵡⵉⵖ ⴰⵎⵙⴰⴳⴰⵔ ⵏ ⵓⵙⵓⵊⵊⵉ ⵙ ⵓⵎⵓⵙⵙⵓ ⴳ ⵜⴳⵎⵎⵉ ⵜⵓⵎⵍⵉⵍⵜ. (Bonjour, je souhaite prendre rendez-vous pour une séance de kinésithérapie à Casablanca.)',
    floating: 'ⵙⴰⵡⵍ ⴰⵖ ⴳ ⵡⴰⵜⵙⴰⴱ',
  },
}
