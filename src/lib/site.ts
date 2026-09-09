export const site = {
  name: 'Centre de Kinésithérapie El Kandari',
  nameAr: 'مركز الترويض الطبي الكندري',
  city: 'Casablanca',
  district: 'Sidi Othmane',
  phoneE164: '+212664200260',
  phoneDisplay: '06 64 200 260',
  landlineE164: '+212529574290',
  landlineDisplay: '05 29 574 290',
  address: '176 Bd Nil, 1er étage, Hay Mabrouka, Sidi Othmane, Casablanca',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=176+Boulevard+Nil+Hay+Mabrouka+Sidi+Othmane+Casablanca',
  url: 'https://kinesitherapie-casa.pages.dev',
  social: {
    tiktok: 'https://www.tiktok.com/@kinesitherapieelkandari',
    facebook: 'https://www.facebook.com/share/19RBZ65Jgb/',
    instagram: 'https://www.instagram.com/centrekineelkandari/',
  },
} as const

export const telHref = `tel:${site.phoneE164}`
export const landlineHref = `tel:${site.landlineE164}`

export function whatsappHref(message: string) {
  const number = site.phoneE164.replace('+', '')
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}
