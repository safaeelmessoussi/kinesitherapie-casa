export const site = {
  name: 'Kinésithérapie Casa',
  practitioner: 'Lechheb Walid',
  city: 'Casablanca',
  phoneE164: '+212783366579',
  phoneDisplay: '+212 7 83 36 65 79',
} as const

export const telHref = `tel:${site.phoneE164}`

export function whatsappHref(message: string) {
  const number = site.phoneE164.replace('+', '')
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}
