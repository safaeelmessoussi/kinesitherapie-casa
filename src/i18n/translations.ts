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
      title: 'Kinésithérapie Casa — Cabinet de kinésithérapie à Casablanca | Walid',
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
      language: 'Langue',
    },
    hero: {
      eyebrow: 'Cabinet de kinésithérapie · Casablanca',
      title: 'Retrouvez le mouvement,',
      highlight: 'sans la douleur.',
      subtitle:
        'Walid vous accompagne avec une kinésithérapie moderne, humaine et efficace : au cabinet ou directement chez vous, à Casablanca. Un bilan précis, un plan clair, et des résultats que vous ressentez.',
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
      title: 'Walid, l\u2019énergie d\u2019un jeune kiné, l\u2019écoute d\u2019un vrai partenaire',
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
      imageAlt: 'Portrait de Walid, kinésithérapeute à Casablanca',
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
      title: 'Kinésithérapie Casa — Physiotherapy Clinic in Casablanca | Walid',
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
      language: 'Language',
    },
    hero: {
      eyebrow: 'Physiotherapy clinic · Casablanca',
      title: 'Move freely again,',
      highlight: 'without the pain.',
      subtitle:
        'Walid offers modern, human and effective physiotherapy — at the clinic or in the comfort of your home in Casablanca. A precise assessment, a clear plan, and results you can feel.',
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
      title: 'Walid: the energy of a young physio, the attention of a true partner',
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
      imageAlt: 'Portrait of Walid, physiotherapist in Casablanca',
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

  ar: {
    meta: {
      title: 'كينيزيتيرابي كازا — عيادة العلاج الطبيعي في الدار البيضاء | وليد',
      description:
        'عيادة العلاج الطبيعي في الدار البيضاء: إعادة التأهيل، العلاج الطبيعي الرياضي، آلام الظهر، الترويض التنفسي وحصص في المنزل. حجز سريع عبر الهاتف أو واتساب.',
    },
    nav: {
      services: 'العلاجات',
      about: 'المعالج',
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
      eyebrow: 'عيادة العلاج الطبيعي · الدار البيضاء',
      title: 'استعد حركتك،',
      highlight: 'بدون ألم.',
      subtitle:
        'يرافقك وليد بعلاج طبيعي حديث وإنساني وفعّال: في العيادة أو مباشرة في منزلك بالدار البيضاء. تشخيص دقيق، خطة واضحة، ونتائج تشعر بها.',
      ctaWhatsapp: 'احجز عبر واتساب',
      ctaCall: 'اتصل بالعيادة',
      badgeHome: 'حصص في المنزل',
      badgeReply: 'رد سريع على واتساب',
      imageAlt: 'قاعة علاج مضيئة في عيادة العلاج الطبيعي بالدار البيضاء',
    },
    trust: [
      {
        title: 'رعاية شخصية',
        description: 'كل جلسة تُبنى على تشخيصك وأهدافك ووتيرتك.',
      },
      {
        title: 'في العيادة أو في المنزل',
        description: 'أنت تختار: في العيادة أو في منزلك، بنفس المعدات ونفس الجودة.',
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
        'من الألم الحاد إلى العودة إلى الرياضة، ترافق العيادة الكبار والرياضيين وكبار السن بتقنيات يدوية ونشطة معتمدة.',
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
          title: 'الترويض التنفسي',
          description:
            'تنظيف الشعب الهوائية وإعادة تأهيل التنفس للرضّع والأطفال والكبار، في الحالات الحادة أو المزمنة.',
        },
        {
          title: 'إعادة التأهيل العصبي',
          description:
            'مواكبة بعد السكتة الدماغية، أو في حالة مرض باركنسون أو إصابات عصبية أخرى للحفاظ على الاستقلالية اليومية.',
        },
        {
          title: 'العلاج الطبيعي لكبار السن',
          description: 'التوازن، الوقاية من السقوط، الحفاظ على الحركة والاستقلالية، في العيادة أو في المنزل.',
        },
      ],
      note: 'لم تجد ما تحتاجه؟ راسلنا على واتساب وسنوجهك.',
    },
    about: {
      eyebrow: 'معالجك الطبيعي',
      title: 'وليد: حيوية معالج شاب، وإصغاء شريك حقيقي',
      paragraphs: [
        'معالج طبيعي في الدار البيضاء، يؤمن وليد بفكرة بسيطة: نتعافى بشكل أفضل عندما نفهم ما يحدث في أجسامنا وعندما نتقدم مع شخص يؤمن بذلك مثلنا.',
        'تجمع ممارسته بين العلاج اليدوي والتمارين النشطة وتوعية المريض. لا جلسات روتينية: لكل موعد هدف، وكل تقدم يُقاس، والخطة تتكيف مع تطورك.',
        'ديناميكي، صريح ومتعاطف، يرافق الرياضي المتعجل للعودة كما يرافق من يرغب ببساطة في حياة يومية بلا ألم.',
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
      imageAlt: 'صورة وليد، معالج طبيعي في الدار البيضاء',
      quote: '«دوري ليس فقط تخفيف الألم، بل أن أجعلك مستقلًا وواثقًا في جسدك.»',
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
      imageAlt: 'جلسة علاج يدوي للكتف في العيادة',
    },
    home: {
      eyebrow: 'حصص في المنزل',
      title: 'نفس جودة الرعاية، مباشرة في منزلك بالدار البيضاء',
      subtitle:
        'حركة محدودة، خروج من المستشفى، جدول مزدحم أو مجرد تفضيل: ينتقل المعالج إليك بالمعدات اللازمة.',
      points: [
        'التنقل داخل الدار البيضاء وضواحيها',
        'معدات مهنية تُنقل في كل جلسة',
        'مواعيد نهارية وفي بداية المساء حسب التوفر',
        'مثالي لكبار السن، وإعادة التأهيل بعد الجراحة، والترويض التنفسي',
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
            'أسهل طريقة هي إرسال رسالة واتساب أو الاتصال بالعيادة. حدد حاجتك وأوقاتك المتاحة، وسنقترح عليك بسرعة موعدًا في العيادة أو في المنزل.',
        },
        {
          question: 'ماذا أحضر معي وكيف ألبس؟',
          answer:
            'أحضر وصفتك وفحوصاتك الأخيرة (أشعة، رنين مغناطيسي، تقارير) وملابس مريحة تسهّل الوصول إلى المنطقة المعالجة.',
        },
        {
          question: 'هل الحصص المنزلية أغلى؟',
          answer:
            'قد تُطبق زيادة للتنقل حسب المنطقة. تُبلَّغ الأسعار بوضوح قبل الجلسة الأولى: تواصل معنا للحصول على تقدير دقيق.',
        },
        {
          question: 'ما وسائل الدفع المقبولة؟',
          answer: 'يتم الدفع في كل جلسة أو على شكل باقة حسب خطة علاجك. تُسلَّم لك فاتورة لأي تعويض محتمل.',
        },
      ],
    },
    contact: {
      eyebrow: 'اتصل بنا',
      title: 'احجز موعدك اليوم',
      subtitle: 'رسالة واحدة تكفي للحصول على موعد. صف حاجتك ونرد عليك بسرعة.',
      phoneLabel: 'الهاتف',
      whatsappLabel: 'واتساب',
      whatsappHint: 'رد سريع، من الاثنين إلى السبت',
      hoursLabel: 'أوقات العمل',
      hoursValue: 'من الاثنين إلى السبت، بموعد مسبق',
      locationLabel: 'الموقع',
      locationValue: 'الدار البيضاء — العيادة والتنقل إلى المنازل',
      languagesLabel: 'اللغات',
      languagesValue: 'الفرنسية · العربية · الإنجليزية',
      ctaWhatsapp: 'راسلنا على واتساب',
      ctaCall: 'اتصل الآن',
    },
    footer: {
      tagline: 'عيادة العلاج الطبيعي في الدار البيضاء — في العيادة وفي المنزل.',
      rights: 'جميع الحقوق محفوظة.',
      disclaimer: 'المعلومات في هذا الموقع لا تعوض الاستشارة الطبية. في حالة الطوارئ، اتصل بخدمات الإسعاف.',
    },
    whatsappMessage: 'مرحبًا، أرغب في حجز موعد لجلسة علاج طبيعي في الدار البيضاء.',
    floating: 'تحدث معنا على واتساب',
  },

  zgh: {
    meta: {
      title: 'ⴽⵉⵏⵉⵣⵉⵜⵉⵔⴰⴱⵉ ⴽⴰⵣⴰ — ⴰⵙⴰⵢⵔⴰⵔ ⵏ ⵓⵙⵓⵊⵊⵉ ⵙ ⵓⵎⵓⵙⵙⵓ ⴳ ⵜⴳⵎⵎⵉ ⵜⵓⵎⵍⵉⵍⵜ | ⵡⴰⵍⵉⴷ',
      description:
        'ⴰⵙⴰⵢⵔⴰⵔ ⵏ ⵓⵙⵓⵊⵊⵉ ⵙ ⵓⵎⵓⵙⵙⵓ ⴳ ⵜⴳⵎⵎⵉ ⵜⵓⵎⵍⵉⵍⵜ: ⴰⵙⵓⵊⵊⵉ ⵏ ⵓⵣⴰⴳⵓⵔ, ⴰⴷⴷⴰⵍ, ⵓⵏⴼⴰⵙ ⴷ ⵜⵖⵉⵎⵉⵜⵉⵏ ⴳ ⵜⴰⴷⴷⴰⵔⵜ. ⴰⵎⵙⴰⴳⴰⵔ ⵙ ⵜⵜⵉⵍⵉⴼⵓⵏ ⵏⵖ ⵡⴰⵜⵙⴰⴱ.',
    },
    nav: {
      services: 'ⴰⵙⵓⵊⵊⵉ',
      about: 'ⴰⵎⵙⵓⵊⵊⵉ',
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
      eyebrow: 'ⴰⵙⴰⵢⵔⴰⵔ ⵏ ⵓⵙⵓⵊⵊⵉ ⵙ ⵓⵎⵓⵙⵙⵓ · ⵜⵉⴳⵎⵎⵉ ⵜⵓⵎⵍⵉⵍⵜ',
      title: 'ⵔⴰⵔ ⴰⵎⵓⵙⵙⵓ ⵏⵏⴽ,',
      highlight: 'ⴱⵍⴰ ⴰⵇⵔⴰⵃ.',
      subtitle:
        'ⵡⴰⵍⵉⴷ ⴰⴷ ⴽ ⵢⵉⵍⵉ ⵜⴰⵎⴰ ⵙ ⵢⴰⵏ ⵓⵙⵓⵊⵊⵉ ⴰⵜⵔⴰⵔ, ⴰⵏⴰⴼⴳⴰⵏ ⴷ ⵉⵎⵓⵔⵙⵏ: ⴳ ⵓⵙⴰⵢⵔⴰⵔ ⵏⵖ ⴳ ⵜⴰⴷⴷⴰⵔⵜ ⵏⵏⴽ ⴳ ⵜⴳⵎⵎⵉ ⵜⵓⵎⵍⵉⵍⵜ. ⴰⵙⵙⵜⴳ ⵉⵖⵓⴷⴰⵏ, ⴰⵖⴰⵡⴰⵙ ⵉⴼⴰⵡⵏ, ⴷ ⵉⴳⵎⴰⴹ ⵜⵜⵃⵓⵙⵙⵓⵜ.',
      ctaWhatsapp: 'ⴰⵡⵉ ⴰⵎⵙⴰⴳⴰⵔ ⴳ ⵡⴰⵜⵙⴰⴱ',
      ctaCall: 'ⵖⵔ ⵉ ⵓⵙⴰⵢⵔⴰⵔ',
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
        title: 'ⴰⵙⴰⵢⵔⴰⵔ ⵏⵖ ⵜⴰⴷⴷⴰⵔⵜ',
        description: 'ⴽⵢⵢⵉ ⴰⴷ ⵉⵙⵜⵉⵏ: ⴳ ⵓⵙⴰⵢⵔⴰⵔ ⵏⵖ ⴳ ⵜⴰⴷⴷⴰⵔⵜ ⵏⵏⴽ, ⵙ ⵢⴰⵏ ⵓⵎⴰⵙⵙⵏ ⴷ ⵢⴰⵜ ⵜⵖⵓⴷⵉ.',
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
        'ⵙⴳ ⵓⵇⵔⴰⵃ ⴰⵔ ⵜⵓⵖⵓⵍⵜ ⵙ ⵡⴰⴷⴷⴰⵍ, ⵏⵜⵜⵉⵍⵉ ⵜⴰⵎⴰ ⵏ ⵉⵎⵇⵇⵔⴰⵏⵏ, ⵉⵎⴰⴷⴷⴰⵍⵏ ⴷ ⵉⵎⵖⴰⵔⵏ ⵙ ⵜⵉⴳⴳⵉⵜⵉⵏ ⵏ ⵓⴼⵓⵙ ⴷ ⵓⵎⵓⵙⵙⵓ ⵉⵜⵜⵓⵙⵙⴰⵏⵏ.',
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
          title: 'ⴰⵙⵓⵊⵊⵉ ⵏ ⵓⵏⴼⴰⵙ',
          description: 'ⴰⵙⵉⵣⴷⴳ ⵏ ⵜⵓⵔⵉⵏ ⴷ ⵓⵙⵓⵊⵊⵉ ⵏ ⵓⵏⴼⴰⵙ ⵉ ⵉⵍⵓⴼⴰⵏⵏ, ⵉⵎⵥⵥⵢⴰⵏⵏ ⴷ ⵉⵎⵇⵇⵔⴰⵏⵏ.',
        },
        {
          title: 'ⴰⵙⵓⵊⵊⵉ ⴰⵏⵓⵔⵓⵍⵓⵊⵉ',
          description:
            'ⴰⴹⴼⴰⵕ ⴷⴼⴼⵉⵔ ⵏ ⵜⵢⵢⵉⵜⵉ ⵏ ⵓⵍⵍⵖ, ⴰⵟⵟⴰⵏ ⵏ ⴱⴰⵔⴽⵉⵏⵙⵓⵏ ⵏⵖ ⵉⵎⵓⴽⵔⵉⵙⵏ ⵢⴰⴹⵏ, ⵃⵎⴰ ⴰⴷ ⵜⵇⵇⵉⵎ ⵜⴷⵔⴼⵉⵜ ⴳ ⵜⵓⴷⵔⵜ ⵏ ⴽⵓ ⴰⵙⵙ.',
        },
        {
          title: 'ⴰⵙⵓⵊⵊⵉ ⵏ ⵉⵎⵖⴰⵔⵏ',
          description: 'ⴰⵎⵙⴰⵙⴰ, ⴰⵃⵟⵟⵓ ⵙⴳ ⵜⵢⵢⵉⵜⴰ ⵏ ⵡⴰⴽⴰⵍ, ⴰⵎⵓⵙⵙⵓ ⴷ ⵜⴷⵔⴼⵉⵜ, ⴳ ⵓⵙⴰⵢⵔⴰⵔ ⵏⵖ ⴳ ⵜⴰⴷⴷⴰⵔⵜ.',
        },
      ],
      note: 'ⵓⵔ ⵜⵓⴼⵉⵜ ⵎⴰⴷ ⵜⵔⵉⵜ? ⴰⵔⴰ ⴰⵖ ⴳ ⵡⴰⵜⵙⴰⴱ, ⵔⴰⴷ ⴰⴽ ⵏⵎⵍ ⴰⴱⵔⵉⴷ.',
    },
    about: {
      eyebrow: 'ⴰⵎⵙⵓⵊⵊⵉ ⵏⵏⴽ',
      title: 'ⵡⴰⵍⵉⴷ: ⵜⴰⵣⵎⵔⵜ ⵏ ⵢⴰⵏ ⵓⵎⵙⵓⵊⵊⵉ ⴰⵎⵥⵥⵢⴰⵏ, ⴰⵙⴼⵍⴷ ⵏ ⵢⴰⵏ ⵓⵎⴷⴷⴰⴽⴽⵍ ⵏ ⵜⵉⴷⵜ',
      paragraphs: [
        'ⴰⵎⵙⵓⵊⵊⵉ ⵙ ⵓⵎⵓⵙⵙⵓ ⴳ ⵜⴳⵎⵎⵉ ⵜⵓⵎⵍⵉⵍⵜ, ⵡⴰⵍⵉⴷ ⵢⵓⵎⵏ ⵙ ⵢⴰⵜ ⵜⵖⴰⵔⴰⵙⵜ ⵜⴰⴼⵙⵓⵙⵜ: ⵏⵊⵊⵉ ⵓⴳⴳⴰⵔ ⵉⵖ ⵏⵙⵙⵏ ⵎⴰⴷ ⵉⵜⵜⵎⵙⴰⵔⵏ ⴳ ⵜⴼⴽⴽⴰ ⵏⵏⵖ ⴷ ⵉⵖ ⵏⴷⴷⴰ ⴷ ⵢⴰⵏ ⵢⵓⵎⵏ ⵙⵔⵙ ⵣⵓⵏⴷ ⵏⴽⴽⵏⵉ.',
        'ⵜⴰⵡⵓⵔⵉ ⵏⵏⵙ ⵜⵙⵎⵓⵏ ⴰⵙⵓⵊⵊⵉ ⵙ ⵓⴼⵓⵙ, ⵉⵍⵓⵖⵎⴰ ⴷ ⵓⵙⵙⵍⵎⴷ ⵏ ⵓⵎⵓⴹⵉⵏ. ⵓⵔ ⵍⵍⵉⵏⵜ ⵜⵖⵉⵎⵉⵜⵉⵏ ⵣⵓⵏⴷ ⵜⵉⵢⴰⴹ: ⴽⵓ ⴰⵎⵙⴰⴳⴰⵔ ⵖⵓⵔⵙ ⴰⵡⵜⵜⴰⵙ, ⴽⵓ ⴰⵙⵙⴰⵔⵓ ⵉⵜⵜⵓⵙⵖⴰⵍ, ⴷ ⵓⵖⴰⵡⴰⵙ ⵉⵜⵜⵎⵙⴰⵙⴰ ⴷ ⵓⵙⵙⴰⵔⵓ ⵏⵏⴽ.',
        'ⵉⵎⵓⵙⵙⵓ, ⵉⵏⵏⴰ ⵜⵉⴷⵜ, ⵉⵃⵏⵏⴰ: ⴰⵔ ⵉⵜⵜⵉⵍⵉ ⵜⴰⵎⴰ ⵏ ⵓⵎⴰⴷⴷⴰⵍ ⵉⵔⴰⵏ ⴰⴷ ⵢⴰⵖⵓⵍ ⵙ ⵣⵔⴱ, ⴷ ⵡⴰⵏⵏⴰ ⵉⵔⴰⵏ ⵖⴰⵙ ⵜⵓⴷⵔⵜ ⴱⵍⴰ ⴰⵇⵔⴰⵃ.',
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
      imageAlt: 'ⵜⴰⵡⵍⴰⴼⵜ ⵏ ⵡⴰⵍⵉⴷ, ⴰⵎⵙⵓⵊⵊⵉ ⵙ ⵓⵎⵓⵙⵙⵓ ⴳ ⵜⴳⵎⵎⵉ ⵜⵓⵎⵍⵉⵍⵜ',
      quote: '« ⵜⴰⵡⵓⵔⵉ ⵏⵓ ⵓⵔ ⵜⴳⵉ ⵖⴰⵙ ⴰⵙⴼⵙⵓⵙ ⵏ ⵓⵇⵔⴰⵃ: ⵜⴳⴰ ⴰⴷ ⴽ ⵙⵙⴷⵔⴼⵉⵖ ⴷ ⴰⴷ ⵜⴰⵎⵏⵜ ⵙ ⵜⴼⴽⴽⴰ ⵏⵏⴽ. »',
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
      imageAlt: 'ⵜⵉⵖⵉⵎⵉⵜ ⵏ ⵓⵙⵓⵊⵊⵉ ⵙ ⵓⴼⵓⵙ ⵏ ⵜⵖⵔⵓⴹⵜ ⴳ ⵓⵙⴰⵢⵔⴰⵔ',
    },
    home: {
      eyebrow: 'ⵜⵉⵖⵉⵎⵉⵜⵉⵏ ⴳ ⵜⴰⴷⴷⴰⵔⵜ',
      title: 'ⵜⵉⵖⵓⴷⵉ ⵏ ⵓⵙⵓⵊⵊⵉ ⵏⵏⵉⵜ, ⴳ ⵜⴰⴷⴷⴰⵔⵜ ⵏⵏⴽ ⴳ ⵜⴳⵎⵎⵉ ⵜⵓⵎⵍⵉⵍⵜ',
      subtitle:
        'ⴰⵎⵓⵙⵙⵓ ⵉⴷⵔⵓⵙⵏ, ⵜⵓⴼⴼⵖⴰ ⵙⴳ ⵓⵙⴳⵏⴰⴼ, ⴰⴽⵓⴷ ⵉⵄⵎⵕⵏ ⵏⵖ ⵖⴰⵙ ⵜⵉⵔⴰⵜ: ⴰⵎⵙⵓⵊⵊⵉ ⴰⴷ ⴽ ⴷ ⵢⴰⵛⴽ ⵙ ⵓⵎⴰⵙⵙⵏ ⵉⵍⴰⵇⵏ.',
      points: [
        'ⴰⵎⵓⴷⴷⵓ ⴳ ⵜⴳⵎⵎⵉ ⵜⵓⵎⵍⵉⵍⵜ ⴷ ⵎⴰ ⵜ ⵉⵏⵏⴹⵏ',
        'ⴰⵎⴰⵙⵙⵏ ⴰⵣⵣⵓⵍⴰⵏ ⵉⵜⵜⵓⵙⵎⵓⵜⵜⵉⵏ ⴳ ⴽⵓ ⵜⵉⵖⵉⵎⵉⵜ',
        'ⵉⵣⵎⴰⵣ ⴳ ⵡⴰⵙⵙ ⴷ ⵜⴰⵣⵡⴰⵔⴰ ⵏ ⵜⴷⴳⴳⵯⴰⵜ',
        'ⵉⵖⵓⴷⴰ ⵉ ⵉⵎⵖⴰⵔⵏ, ⴰⵙⵓⵊⵊⵉ ⴷⴼⴼⵉⵔ ⵜⵡⵓⵔⵉ ⵜⴰⵎⵙⵓⵊⵊⵉⵜ ⴷ ⵓⵙⵓⵊⵊⵉ ⵏ ⵓⵏⴼⴰⵙ',
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
            'ⴰⴱⵔⵉⴷ ⵉⴼⵙⵓⵙⵏ ⵉⴳⴰ ⵜ ⴰⴷ ⵜⴰⵣⵏⵜ ⵜⴰⴱⵔⴰⵜ ⴳ ⵡⴰⵜⵙⴰⴱ ⵏⵖ ⴰⴷ ⵜⵖⵔⵜ ⵉ ⵓⵙⴰⵢⵔⴰⵔ. ⵉⵏⵉ ⴰⵖ ⵎⴰⴷ ⵜⵔⵉⵜ ⴷ ⵎⴰⵏⴰⴳⵓ ⵜⵣⵎⵔⵜ, ⵔⴰⴷ ⴰⴽ ⵏⴼⴽ ⵙ ⵣⵔⴱ ⴰⵣⵎⵣ ⴳ ⵓⵙⴰⵢⵔⴰⵔ ⵏⵖ ⴳ ⵜⴰⴷⴷⴰⵔⵜ.',
        },
        {
          question: 'ⵎⴰⴷ ⴰⴷ ⴰⵡⵉⵖ ⴷ ⵎⴰⵎⴽ ⴰⴷ ⵍⵙⵖ?',
          answer:
            'ⴰⵡⵉ ⵜⴰⵏⵏⴰⵢⵜ ⵏ ⵓⵎⵙⵓⵊⵊⵉ, ⵉⵙⵙⵉⴳⴳⵍⵏ ⵏⵏⴽ ⵉⵎⴳⴳⵓⵔⴰ (ⵕⴰⴷⵢⵓ, IRM, ⵉⵏⵇⵇⵉⵙⵏ) ⴷ ⵉⵛⴹⴰⴹⵏ ⵉⴼⵙⵓⵙⵏ ⵉⵜⵜⴰⵊⵊⴰⵏ ⴰⴷ ⵏⵍⴽⵎ ⴰⵏⵙⴰ ⵏ ⵓⵙⵓⵊⵊⵉ.',
        },
        {
          question: 'ⵉⵙ ⵜⵖⵍⴰⵏⵜ ⵜⵖⵉⵎⵉⵜⵉⵏ ⵏ ⵜⴰⴷⴷⴰⵔⵜ ⵓⴳⴳⴰⵔ?',
          answer:
            'ⵉⵣⵎⵔ ⴰⴷ ⵢⵉⵍⵉ ⵢⴰⵏ ⵓⵔⵏⵓ ⵏ ⵓⵎⵓⴷⴷⵓ ⵙ ⵡⴰⵏⵙⴰ. ⵜⵜⵓⵎⵍⴰⵏ ⵡⴰⵜⵉⴳⵏ ⵙ ⵜⵉⴼⴰⵡⵜ ⴷⴰⵜ ⵜⵖⵉⵎⵉⵜ ⵜⴰⵎⵣⵡⴰⵔⵓⵜ: ⵎⵢⴰⵡⴰⴹ ⴰⵖ ⵉ ⵢⴰⵏ ⵓⵙⵙⵜⴳ ⵉⵖⵓⴷⴰⵏ.',
        },
        {
          question: 'ⵎⴰⵏ ⵜⵖⴰⵔⴰⵙⵉⵏ ⵏ ⵓⴼⵔⴰ ⴰⴷ ⵜⵇⴱⵍⵎ?',
          answer: 'ⴰⴼⵔⴰ ⵉⵜⵜⵉⵍⵉ ⴳ ⴽⵓ ⵜⵉⵖⵉⵎⵉⵜ ⵏⵖ ⵙ ⵓⵎⵓⵍⵍⵉ ⵙ ⵓⵖⴰⵡⴰⵙ ⵏⵏⴽ. ⵜⵜⴰⵡⵉⵜ ⵜⴰⴼⴰⵜⵓⵔⵜ ⵉ ⵓⵔⴰⵔ ⵏⵏⴽ.',
        },
      ],
    },
    contact: {
      eyebrow: 'ⴰⵎⵢⴰⵡⴰⴹ',
      title: 'ⴰⵡⵉ ⴰⵎⵙⴰⴳⴰⵔ ⵏⵏⴽ ⵖⴰⵙⵙⴰ',
      subtitle: 'ⵢⴰⵜ ⵜⴱⵔⴰⵜ ⵜⵇⴰⴷⴰ ⵃⵎⴰ ⴰⴷ ⵜⴰⵡⵉⵜ ⴰⵣⵎⵣ. ⵉⵏⵉ ⴰⵖ ⵎⴰⴷ ⵜⵔⵉⵜ, ⵔⴰⴷ ⴰⴽ ⵏⵔⴰⵔ ⵙ ⵣⵔⴱ.',
      phoneLabel: 'ⴰⵜⵉⵍⵉⴼⵓⵏ',
      whatsappLabel: 'ⵡⴰⵜⵙⴰⴱ',
      whatsappHint: 'ⵜⵉⵔⵔⴰⵔⵜ ⵜⴰⵣⵔⴱⴰⵏⵜ, ⵙⴳ ⵡⴰⵢⵏⴰⵙ ⴰⵔ ⴰⵙⵉⴹⵢⴰⵙ',
      hoursLabel: 'ⵉⵙⵔⴰⴳⵏ',
      hoursValue: 'ⵙⴳ ⵡⴰⵢⵏⴰⵙ ⴰⵔ ⴰⵙⵉⴹⵢⴰⵙ, ⵙ ⵓⵎⵙⴰⴳⴰⵔ',
      locationLabel: 'ⴰⵏⵙⴰ',
      locationValue: 'ⵜⵉⴳⵎⵎⵉ ⵜⵓⵎⵍⵉⵍⵜ — ⴰⵙⴰⵢⵔⴰⵔ ⴷ ⵉⵎⵓⴷⴷⵓⵜⵏ ⵙ ⵜⵓⴷⴷⴰⵔ',
      languagesLabel: 'ⵜⵓⵜⵍⴰⵢⵉⵏ',
      languagesValue: 'ⵜⴰⴼⵕⴰⵏⵙⵉⵙⵜ · ⵜⴰⵄⵔⴰⴱⵜ · ⵜⴰⵏⴳⵍⵉⵣⵜ',
      ctaWhatsapp: 'ⴰⵔⴰ ⴳ ⵡⴰⵜⵙⴰⴱ',
      ctaCall: 'ⵖⵔ ⵖⵉⵍⴰ',
    },
    footer: {
      tagline: 'ⴰⵙⴰⵢⵔⴰⵔ ⵏ ⵓⵙⵓⵊⵊⵉ ⵙ ⵓⵎⵓⵙⵙⵓ ⴳ ⵜⴳⵎⵎⵉ ⵜⵓⵎⵍⵉⵍⵜ — ⴳ ⵓⵙⴰⵢⵔⴰⵔ ⴷ ⴳ ⵜⴰⴷⴷⴰⵔⵜ.',
      rights: 'ⴽⵓⵍⵍⵓ ⵉⵣⵔⴼⴰⵏ ⵜⵜⵓⵃⴹⴰⵏ.',
      disclaimer:
        'ⵉⵏⵖⵎⵉⵙⵏ ⵏ ⵡⴰⵙⵉⵜ ⴰⴷ ⵓⵔ ⵙⵎⵎⴽⵜⵉⵏ ⵜⴰⵏⵏⴰⵢⵜ ⵏ ⵓⵎⵙⵓⵊⵊⵉ. ⴳ ⵜⵎⵙⴰⵔⵜ ⵜⴰⵣⵔⴱⴰⵏⵜ, ⵖⵔ ⵉ ⵜⵏⴰⴼⵓⵜⵉⵏ ⵏ ⵜⵡⵉⵙⵉ ⵜⴰⵣⵔⴱⴰⵏⵜ.',
    },
    whatsappMessage:
      'ⴰⵣⵓⵍ, ⵔⵉⵖ ⴰⴷ ⴰⵡⵉⵖ ⴰⵎⵙⴰⴳⴰⵔ ⵏ ⵓⵙⵓⵊⵊⵉ ⵙ ⵓⵎⵓⵙⵙⵓ ⴳ ⵜⴳⵎⵎⵉ ⵜⵓⵎⵍⵉⵍⵜ. (Bonjour, je souhaite prendre rendez-vous pour une séance de kinésithérapie à Casablanca.)',
    floating: 'ⵙⴰⵡⵍ ⴰⵖ ⴳ ⵡⴰⵜⵙⴰⴱ',
  },
}
