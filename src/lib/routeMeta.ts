/**
 * Per-route metadata.
 *
 * The site is one HTML document, so without this every route would share the
 * homepage's title and description. The prerender step (scripts/prerender.mjs)
 * captures the DOM after these have been applied, which is how each route ends
 * up with its own metadata baked into a real HTML file.
 *
 * Keep descriptions to roughly 150-160 characters and factual - anything stated
 * here should be true of the page it describes.
 */

export const SITE_URL = 'https://dearbornwoodsnh.com';

export interface RouteMeta {
  title: string;
  description: string;
}

export const routeMeta: Record<string, RouteMeta> = {
  '/': {
    title: 'Dearborn Woods - New Custom Homes in Greenland, NH',
    description:
      'A 13-lot custom home community in Greenland, New Hampshire, built by River Birch Builders. View available lots, floor plans and the site plan.',
  },
  '/floor-plans': {
    title: 'Floor Plans - Dearborn Woods, Greenland NH',
    description:
      'Three home designs at Dearborn Woods: The Belknap (4 bed, 2,770 sq ft), The Birchwood (3 bed, 2,544 sq ft) and The Dearborn (3 bed plus office, 3,071 sq ft).',
  },
  '/site-plan': {
    title: 'Site Plan and Lot Availability - Dearborn Woods',
    description:
      'Interactive site plan for Dearborn Woods in Greenland, NH. See all 13 lots on Dearborn Road and Wentworth Drive, with acreage and current availability.',
  },
  '/gallery': {
    title: 'Gallery - River Birch Builders Homes | Dearborn Woods',
    description:
      'Photographs of homes built by River Birch Builders across the New Hampshire Seacoast, showing the craftsmanship and finishes coming to Dearborn Woods.',
  },
  '/about': {
    title: 'About River Birch Builders - Dearborn Woods',
    description:
      'River Birch Builders builds Dearborn Woods in Greenland, NH. Proulx Real Estate of Portsmouth is the listing brokerage for the community.',
  },
  '/contact': {
    title: 'Contact - Dearborn Woods, Greenland NH',
    description:
      'Ask about available lots or schedule a walk of Dearborn Woods in Greenland, New Hampshire. Call 603-205-4463 or email info@dearbornwoodsnh.com.',
  },
  '/privacy-policy': {
    title: 'Privacy Policy - Dearborn Woods',
    description: 'How Dearborn Woods collects, uses and protects information submitted through this website.',
  },
  '/terms-of-service': {
    title: 'Terms of Service - Dearborn Woods',
    description: 'Terms governing use of the Dearborn Woods website, including accuracy of lot and floor plan information.',
  },
};

/** Every route the prerender step should generate. */
export const routePaths = Object.keys(routeMeta);
