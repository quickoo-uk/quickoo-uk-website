// Script to update Why Choose pages with hero images
// This file documents the exact changes needed

const updates = [
    {
        file: 'client/pages/SafetyFirst.tsx',
        line: 160,
        find: '<Shield className="h-48 w-48 text-[#487307]/20" strokeWidth={0.5} />',
        image: '/why-choose-safety-first-hero.png',
        alt: 'Safety First - Secure luxury chauffeur service'
    },
    {
        file: 'client/pages/TransparentPricing.tsx',
        line: 176,
        find: '<Calculator className="h-48 w-48 text-[#487307]/20" strokeWidth={0.5} />',
        image: '/why-choose-transparent-pricing-hero.png',
        alt: 'Transparent Pricing - Clear and honest pricing'
    },
    {
        file: 'client/pages/LuxuryFleet.tsx',
        line: 209,
        find: '<Car className="h-48 w-48 text-[#487307]/20" strokeWidth={0.5} />',
        image: '/why-choose-luxury-fleet-hero.png',
        alt: 'Luxury Fleet - Premium vehicles'
    },
    {
        file: 'client/pages/EliteChauffeurs.tsx',
        line: 215,
        find: '<Users className="h-48 w-48 text-[#487307]/20" strokeWidth={0.5} />',
        image: '/services/business-chauffeur-portrait.jpg',
        alt: 'Elite Chauffeurs - Professional drivers'
    }
];

// For each file, replace:
// <div className="flex items-center justify-center h-64 mb-6">
//     <IconName className="h-48 w-48 text-[#487307]/20" strokeWidth={0.5} />
// </div>

// With:
// <div className="overflow-hidden rounded-2xl mb-4">
//     <img
//         src="IMAGE_PATH"
//         alt="ALT_TEXT"
//         className="w-full h-64 object-cover"
//     />
// </div>
