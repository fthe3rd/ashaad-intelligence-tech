/**
 * Camera product data — single source of truth for homepage carousel and /products page.
 *
 * To add a product: push a new entry to cameraProducts.
 * To add a product image: drop the file in /public/images/cameras/ and set the `image` field
 *   to the filename (e.g. "my-camera.png"). If omitted, a styled placeholder renders.
 * To update the contact number shown on the products page: change CONTACT_NUMBER below.
 */

export interface Product {
  id: string;
  /** Short product model code displayed as a sub-label */
  model?: string;
  name: string;
  brand: string;
  /** Word label badge — e.g. 'Camera', 'Bullet', 'Dome', 'Turret' */
  category: string;
  /** One-sentence summary used in the homepage carousel */
  description: string;
  /** Short highlight badge — e.g. 'ANPR', 'ColorVu', '4K', 'Starlight' */
  badge?: string;
  /** Key feature bullet points — displayed on the products page cards */
  features?: string[];
  /** Filename inside /public/images/products/ — omit to show a branded placeholder */
  image?: string;
  /** Alt text used when image is present */
  imageAlt?: string;
}

/** Phone/WhatsApp number shown in the hero of the /products page. */
export const CONTACT_NUMBER = '+263 780 000 000';

export const cameraProducts: Product[] = [
  {
    id: 'hik-deepinview-anpr',
    model: 'iDS-2CD7A46G0/P-IZHS(Y)',
    name: 'Licence Plate Recognition Camera',
    brand: 'Hikvision',
    category: 'Bullet',
    description:
      'Reads and records vehicle number plates automatically — ideal for entrances, car parks, and estate gates. Crystal-clear images day or night.',
    badge: 'ANPR',
    features: [
      '4 MP high-quality resolution',
      'DarkFighter excellent low-light performance',
      '140 dB WDR — clear against strong backlight',
      'Automatic Licence Plate Recognition (ANPR)',
      'Efficient H.265+ compression',
      '5 simultaneous streams',
      'IP67 weatherproof & IK10 vandal-proof',
    ],
    image: 'HikiVision Varifocal Bullet Camera.png',
    imageAlt: 'Hikvision Varifocal Bullet Camera',
  },
  {
    id: 'hik-colorvu-turret',
    model: 'DS-2CD1347G3-LIU',
    name: 'Full-Colour Night Vision Turret',
    brand: 'Hikvision',
    category: 'Turret',
    description:
      'See everything in vivid colour even at night — no more grainy black-and-white footage. Built-in strobe and siren warn off intruders on the spot.',
    badge: 'ColorVu 3.0',
    features: [
      'Full-colour 24/7 imaging — even in pitch darkness',
      'Smart AI distinguishes people from vehicles',
      'Built-in strobe light & audio alarm deters intruders',
      'Two-way audio via the Hik-Connect mobile app',
      'Smart Hybrid Light — auto switches IR and white light',
      'On-board storage up to 512 GB (SD card)',
      'IP67 weatherproof',
    ],
    image: 'HikVision Fixed Turret Network Camera.png',
    imageAlt: 'Hikvision Fixed Turret Network Camera',
  },
  {
    id: 'dahua-4k-bullet',
    model: 'HAC-HFW2802E-A',
    name: '4K Outdoor Bullet Camera with Audio',
    brand: 'Dahua',
    category: 'Bullet',
    description:
      'Ultra-sharp 4K footage with a built-in microphone, long-range Smart IR, and advanced WDR so subjects remain clear even against bright lights or sunlight.',
    badge: '4K Starlight',
    features: [
      'Ultra-sharp 4K resolution',
      'Smart IR — even brightness, no overexposed centres',
      '40 m night-vision range',
      'Built-in microphone for audio evidence',
      '3DNR & 120 dB WDR for backlit scenes',
    ],
    image: 'Dahua Fixed-focal Bullet Camera.png',
    imageAlt: 'Dahua Fixed-focal Bullet Camera',
  },
  {
    id: 'dahua-4k-dome',
    name: '4K Auto-Zoom Dome Camera with Audio',
    brand: 'Dahua',
    category: 'Dome',
    description:
      'Motorized zoom lens lets you dial in the exact view you need — no ladders required after installation. 4K clarity with long-range night vision and built-in audio.',
    badge: '4K Starlight',
    features: [
      'Ultra-sharp 4K resolution',
      'Motorized varifocal lens — zoom adjusted remotely',
      'Smart IR — even brightness in night mode',
      '60 m night-vision range',
      'Built-in microphone for audio evidence',
    ],
    image: 'Dahua Motorized Vari-focal IR Dome Camera.png',
    imageAlt: 'Dahua Motorized Vari-focal IR Dome Camera',
  },
];
