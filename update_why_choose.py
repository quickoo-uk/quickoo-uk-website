import re

# Define the updates for each file
updates = [
    {
        'file': r'client\pages\SafetyFirst.tsx',
        'old_pattern': r'<div className="flex items-center justify-center h-64 mb-6">\s*<Shield className="h-48 w-48 text-\[#487307\]/20" strokeWidth=\{0\.5\} />\s*</div>',
        'new_content': '''<div className="overflow-hidden rounded-2xl mb-4">
                                    <img
                                        src="/why-choose-safety-first-hero.png"
                                        alt="Safety First - Secure luxury chauffeur service"
                                        className="w-full h-64 object-cover"
                                    />
                                </div>'''
    },
    {
        'file': r'client\pages\TransparentPricing.tsx',
        'old_pattern': r'<div className="flex items-center justify-center h-64 mb-6">\s*<Calculator className="h-48 w-48 text-\[#487307\]/20" strokeWidth=\{0\.5\} />\s*</div>',
        'new_content': '''<div className="overflow-hidden rounded-2xl mb-4">
                                    <img
                                        src="/why-choose-transparent-pricing-hero.png"
                                        alt="Transparent Pricing - Clear and honest pricing"
                                        className="w-full h-64 object-cover"
                                    />
                                </div>'''
    },
    {
        'file': r'client\pages\LuxuryFleet.tsx',
        'old_pattern': r'<div className="flex items-center justify-center h-64 mb-6">\s*<Car className="h-48 w-48 text-\[#487307\]/20" strokeWidth=\{0\.5\} />\s*</div>',
        'new_content': '''<div className="overflow-hidden rounded-2xl mb-4">
                                    <img
                                        src="/why-choose-luxury-fleet-hero.png"
                                        alt="Luxury Fleet - Premium vehicles"
                                        className="w-full h-64 object-cover"
                                    />
                                </div>'''
    },
    {
        'file': r'client\pages\EliteChauffeurs.tsx',
        'old_pattern': r'<div className="flex items-center justify-center h-64 mb-6">\s*<Users className="h-48 w-48 text-\[#487307\]/20" strokeWidth=\{0\.5\} />\s*</div>',
        'new_content': '''<div className="overflow-hidden rounded-2xl mb-4">
                                    <img
                                        src="/services/business-chauffeur-portrait.jpg"
                                        alt="Elite Chauffeurs - Professional drivers"
                                        className="w-full h-64 object-cover"
                                    />
                                </div>'''
    }
]

# Process each file
for update in updates:
    filepath = update['file']
    print(f"Processing {filepath}...")
    
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Replace the pattern
        new_content = re.sub(update['old_pattern'], update['new_content'], content, flags=re.DOTALL)
        
        # Write back
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"✅ Updated {filepath}")
    except Exception as e:
        print(f"❌ Error updating {filepath}: {e}")

print("\n✅ All Why Choose pages updated!")
