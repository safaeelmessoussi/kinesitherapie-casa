export const site = {
  name: 'Kinésithérapie Casa',
  practitioner: 'Walid',
  city: 'Casablanca',
  phoneE164: '+212700000000',
  phoneDisplay: '+212 7 00 00 00 00',
} as const

export const telHref = `tel:${site.phoneE164}`

export function whatsappHref(message: string) {
  const number = site.phoneE164.replace('+', '')
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}
