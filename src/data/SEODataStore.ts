export const SERVICE_AREAS = [
  {
    id: 'naples',
    name: 'Naples, FL',
    metaTitle: 'Professional Plumber in Naples, FL | Buckeye Plumbing',
    metaDescription: 'Top-rated plumbing services in Naples, Florida. We provide 24/7 emergency leak repair, water heater installation, and drain cleaning.',
    heading: 'Expert Plumbers in Naples, FL',
    content: 'Buckeye Plumbing of Southwest Florida proudly serves the Naples community with top-tier residential and commercial plumbing solutions. Whether you have a burst pipe in Pelican Bay or need a new water heater in Golden Gate, our experts are just a call away.'
  },
  {
    id: 'fort-myers',
    name: 'Fort Myers, FL',
    metaTitle: 'Expert Plumber in Fort Myers, FL | Buckeye Plumbing',
    metaDescription: 'Reliable plumbing services in Fort Myers, Florida. From residential pipe leak repairs to commercial grease trap cleanouts, we are available 24/7.',
    heading: 'Reliable Plumbers in Fort Myers, FL',
    content: 'Homeowners and business owners in Fort Myers trust Buckeye Plumbing for fast, affordable, and professional service. We tackle everything from historic home repipes to modern commercial build-outs.'
  },
  {
    id: 'cape-coral',
    name: 'Cape Coral, FL',
    metaTitle: 'Affordable Plumber Cape Coral, FL | Buckeye Plumbing',
    metaDescription: 'Need a plumber in Cape Coral fast? Buckeye Plumbing offers rapid 24/7 emergency service, repiping, and whole-home water filtration.',
    heading: 'Trusted Plumbing Services in Cape Coral, FL',
    content: 'With its expansive canal system and unique plumbing challenges, Cape Coral requires knowledgeable plumbers. We specialize in fast leak detection, water heater replacements, and comprehensive drain cleanouts across the Cape.'
  },
  {
    id: 'bonita-springs',
    name: 'Bonita Springs, FL',
    metaTitle: 'Plumber Bonita Springs, FL | Buckeye Plumbing near you',
    metaDescription: 'Licensed and insured plumbers serving Bonita Springs. Experiencing a sudden leak or need emergency service? We respond 24/7.',
    heading: 'Prompt & Professional Plumbers in Bonita Springs, FL',
    content: 'Residents of Bonita Springs trust our team to keep the water flowing. We handle routine maintenance, emergency bursts, and commercial tenant build-outs with 25 years of proven experience.'
  },
  {
    id: 'marco-island',
    name: 'Marco Island, FL',
    metaTitle: 'Best Plumber Marco Island, FL | 24/7 Buckeye Plumbing',
    metaDescription: 'Professional Marco Island plumbers available 24/7. Avoid costly water damage with our rapid leak detection and repiping services.',
    heading: 'Your Go-To Plumber on Marco Island, FL',
    content: 'Island life shouldn\'t include plumbing stress. We provide rapid-response emergency services and premium plumbing upgrades for luxury homes and condos across Marco Island.'
  },
  {
    id: 'lehigh-acres',
    name: 'Lehigh Acres, FL',
    metaTitle: 'Plumber Lehigh Acres, FL | Expert Buckeye Plumbing',
    metaDescription: 'Looking for a reliable plumber in Lehigh Acres? We offer comprehensive drain cleaning, well pump service, and emergency leak repairs.',
    heading: 'Expert Plumbing Solutions in Lehigh Acres, FL',
    content: 'From well-water systems to municipal connections, Lehigh Acres homes demand a versatile plumbing team. Buckeye Plumbing brings decades of experience to every service call.'
  },
  {
    id: 'port-charlotte',
    name: 'Port Charlotte, FL',
    metaTitle: 'Plumber Port Charlotte, FL | Commercial & Residential',
    metaDescription: 'Commercial and residential plumbing experts in Port Charlotte. We specialize in water heaters, drain jetting, and 24-hour emergencies.',
    heading: 'Dedicated Plumbers in Port Charlotte, FL',
    content: 'Buckeye Plumbing serves the growing Port Charlotte community with dedicated, honest, and affordable plumbing service. Your 100% satisfaction is guaranteed.'
  }
];

export const DETAILED_SERVICES = [
  {
    id: 'leak-and-pipe-repair',
    name: 'Leak & Pipe Repair',
    metaTitle: 'Expert Leak Detection & Pipe Repair in SWFL',
    metaDescription: 'Fast leak detection and pipe repair services in Southwest Florida. We fix slab leaks, pinhole leaks, and offer full home repiping.',
    heading: 'Precision Leak & Pipe Repair Services',
    content: 'Don\'t let a hidden leak destroy your home. We utilize advanced electronic leak detection and thermal imaging technology to pinpoint moisture problems behind walls or under slabs without unnecessary demolition. From a dripping faucet to a major underground slab leak, our licensed experts repair it right the first time.',
    bullets: ['Non-invasive leak detection technology', 'Slab leak isolation and repair', 'Pinhole leak patching and CPVC replacement'],
    commonSigns: [
      'Unexplained spikes in your monthly water bill',
      'The sound of running water when all fixtures are turned off',
      'Warm spots on your floor (indicating a hot water slab leak)',
      'Musty odors or visible mold growth under cabinets',
      'A continuously spinning water meter dial'
    ],
    processSteps: [
      { title: 'Diagnostic Isolation', description: 'We pressure test your hot and cold water lines to determine exactly which system is failing.' },
      { title: 'Electronic Detection', description: 'Using ultrasonic listening devices and thermal cameras, we pinpoint the exact origin of the leak.' },
      { title: 'Surgical Repair', description: 'We access the pipe with minimal damage to your home, excising the failing section and installing high-grade replacement pipe.' },
      { title: 'Pressure Verification', description: 'Once repaired, we repressurize the system and verify the integrity of the patch.' }
    ],
    faqs: [
      { question: 'Will you have to break my concrete floor for a slab leak?', answer: 'Not always. While direct access requires jackhammering, we often recommend "rerouting" the pipe through the attic or walls as a less invasive, longer-lasting alternative.' },
      { question: 'Does insurance cover leak repairs?', answer: 'Homeowners insurance typically covers the structural damage caused by the water (drywall, flooring), but usually does not cover the plumbing repair itself. We can help document the damage for your claim.' }
    ]
  },
  {
    id: 'water-heater-services',
    name: 'Water Heater Services',
    metaTitle: 'Water Heater Repair & Installation Plumber SWFL',
    metaDescription: 'Is your water heater leaking or not producing hot water? We repair, replace, and install electric, gas, and tankless water heaters.',
    heading: 'Comprehensive Water Heater Solutions',
    content: 'A failing water heater is an emergency. Whether you have a burnt-out heating element, a faulty thermostat, or a tank that has completely rusted through and is flooding your garage, we provide same-day service. We install premium Bradford White and Rheem heaters, as well as high-efficiency Navien tankless systems.',
    bullets: ['Same-day tank replacements', 'High-efficiency tankless water heater upgrades', 'Thermostat, anode rod, and heating element repair'],
    commonSigns: [
      'Rust-colored water coming from your hot water taps',
      'Popping or rumbling noises coming from inside the tank',
      'Puddles of water pooling around the base of the unit',
      'Water doesn\'t get as hot as it used to',
      'The unit is over 10 years old (the average lifespan of a tank)'
    ],
    processSteps: [
      { title: 'System Evaluation', description: 'We test your thermostats, elements, and pressure relief valve to see if repair is possible before recommending replacement.' },
      { title: 'Safe Drainage & Removal', description: 'If replacing, we drain the old tank, disconnect the power/gas, and safely haul away the heavy unit.' },
      { title: 'Code-Compliant Installation', description: 'We install the new unit with a new drain pan, expansion tank (if required by local code), and secure water connections.' },
      { title: 'Testing & Calibration', description: 'We fill the tank, bleed the lines, and calibrate the thermostat to a safe 120 degrees.' }
    ]
  },
  {
    id: 'drain-cleaning-and-jetting',
    name: 'Drain Cleaning & Hydro Jetting',
    metaTitle: 'Drain Cleaning & Hydro Jetting Services in SWFL',
    metaDescription: 'Clogged drain? We provide professional snaking, rooter services, and high-pressure hydro jetting for tough main line blockages.',
    heading: 'Professional Drain Cleaning',
    content: 'Store-bought liquid drain cleaners often do more harm than good, eating away at your pipes while failing to clear the actual blockage. Our professional drain cleaning services physically remove the obstruction. For heavy grease or scale buildup, we utilize high-pressure hydro jetting to scour the inside of your pipes back to a "like-new" condition.',
    bullets: ['Kitchen sink and tub drain snaking', 'High-pressure hydro jetting for main sewer lines', 'CCTV sewer camera inspections'],
    commonSigns: [
      'Water backing up into the shower when flushing the toilet',
      'Gurgling sounds coming from your sinks',
      'Foul sewage odors in your home or yard',
      'Multiple fixtures draining slowly at the same time'
    ],
    processSteps: [
      { title: 'Camera Inspection', description: 'We send a high-resolution camera down the line to visually identify exactly what is causing the blockage (roots, grease, collapsed pipe).' },
      { title: 'Mechanical Clearing', description: 'For standard soft clogs, we use professional-grade steel cable augers to break up the blockage.' },
      { title: 'Hydro Jetting (If Needed)', description: 'For massive grease blockages or heavy scale, we blast the pipe walls with 3000 PSI of water to completely scour them clean.' }
    ],
    faqs: [
      { question: 'Why does my toilet bubble when the shower is running?', answer: 'This is a classic sign of a main line blockage. Air is trapped in the pipe and is being pushed out through the toilet trap. You need an immediate camera inspection.' }
    ]
  },
  {
    id: 'repiping-services',
    name: 'Whole-Home Repiping',
    metaTitle: 'Whole Home Repiping Plumbers SWFL | CPVC & Copper Replacement',
    metaDescription: 'Constantly fixing leaks in your older Florida home? It may be time for a whole-home repipe using durable PEX routing.',
    heading: 'Whole-Home Repiping Experts',
    content: 'Many older homes in Southwest Florida were plumbed with defective polybutylene or aging copper that has pitted due to our hard water. If you are experiencing frequent slab leaks or pinhole bursts, a full home repipe is often the most cost-effective long-term solution. We replace your entire vulnerable water system with flexible, highly durable PEX piping.',
    bullets: ['Replacement of failing Polybutylene, CPVC, and Copper', 'Durable, freeze-resistant PEX-A installations', 'Minimal drywall intrusion methodology'],
    commonSigns: [
      'You have had 3 or more pipe leaks in the last 2 years',
      'Your home was built between 1978 and 1995 (Polybutylene era)',
      'A sudden drop in water pressure across the entire house',
      'Yellow or brown tinted water from galvanized pipe corrosion'
    ],
    faqs: [
      { question: 'How long does a whole house repipe take?', answer: 'For standard 2-3 bathroom homes, the actual plumbing replacement usually takes 1 to 2 days. The water is only turned off during the day.' },
      { question: 'Will you tear up all my walls?', answer: 'No. We make small, strategic surgical cuts in the drywall just large enough to fish the new flexible PEX pipe through the walls and attic.' }
    ]
  },
  {
    id: 'commercial-plumbing',
    name: 'Commercial Plumbing',
    metaTitle: 'Commercial Plumbing Services SWFL | Buckeye Plumbing',
    metaDescription: '24/7 commercial plumbing for restaurants, retail, and offices. We handle grease traps, flushometers, and high-capacity water heaters.',
    heading: 'Commercial Plumbing Contractors',
    content: 'We understand that when your business has a plumbing issue, downtime costs you money. We provide rapid-response commercial service for restaurants, retail centers, HOAs, and medical facilities. Our team handles specialized equipment like large grease interceptors, commercial tankless racks, and automated flush valve systems.',
    bullets: ['Restaurant grease trap cleaning and replacement', 'Commercial water heater rack installations', 'Touchless fixture upgrades and ADA compliance']
  },
  {
    id: 'garbage-disposal',
    name: 'Garbage Disposal Repair & Installation',
    metaTitle: 'Garbage Disposal Repair & Installation | Buckeye Plumbing',
    metaDescription: 'Expert garbage disposal repair, unjamming, and replacement services. We install heavy-duty Insinkerator disposals.',
    heading: 'Garbage Disposal Services',
    content: 'A jammed or leaking garbage disposal can severely disrupt your kitchen activities. Our licensed SWFL plumbers specialize in rapid diagnosis of disposal motor failures, seized impellers, and severe drain clogs. Whether it\'s clearing advanced blockages, fixing under-sink trap leaks, or installing heavy-duty, noise-reducing Insinkerator Badger and Evolution series disposers, we guarantee durable, code-compliant kitchen plumbing solutions. Trust our 25 years of local expertise to protect your home\'s plumbing infrastructure.',
    bullets: ['Advanced disposal unjamming and motor repair', 'Premium Insinkerator disposal unit installations', 'Under-sink plumbing leak detection', 'Clog prevention and kitchen drain hydro-cleaning']
  },
  {
    id: 'kitchen-and-bathroom-plumbing',
    name: 'Kitchen & Bathroom Plumbing',
    metaTitle: 'Kitchen & Bathroom Plumber | Fixture Install & Repair',
    metaDescription: 'Professional kitchen and bathroom plumbing services. We install faucets, toilets, showers, sinks, and handle complete remodels.',
    heading: 'Kitchen & Bathroom Plumbing',
    content: 'The heart of your home deserves expert care. From minor toilet repairs to luxurious master suite bathroom remodels, Buckeye Plumbing provides flawless workmanship and high-quality fixture installations. We handle complex shower valve replacements, custom vanity sink rough-ins, and high-efficiency dual-flush toilet upgrades. Partner with Southwest Florida\'s premier plumbing contractor for top-tier Kohler, Moen, and Delta fixture installations that enhance your home\'s value and daily comfort.',
    bullets: ['High-efficiency toilet repair and installation', 'Thermostatic shower valve replacement and custom rough-ins', 'Luxury kitchen sink, faucet, and pot-filler upgrades', 'Complete bathroom remodel plumbing and code compliance']
  },
  {
    id: 'new-construction-and-remodel',
    name: 'New Construction & Remodels',
    metaTitle: 'New Construction & Remodel Plumber | SWFL Contractors',
    metaDescription: 'Trusted plumbing contractor for new construction and home remodels in Southwest Florida. Blueprint reading, rough-ins, and final trim.',
    heading: 'New Construction & Remodel Plumbing',
    content: 'Buckeye Plumbing partners with Southwest Florida\'s leading general contractors, custom home builders, and homeowners to deliver top-tier plumbing systems. Our expertise spans complex architectural blueprint reading, precise under-slab drainage, PEX water supply rough-ins, and meticulous final fixture trims. Whether you are building a custom estate, adding an ADU, or executing a full-scale commercial renovation, our master plumbers ensure strict adherence to Florida building codes and flawlessly executed systems.',
    bullets: ['Comprehensive custom home plumbing system design', 'Precision kitchen and bathroom remodel rough-ins', 'Building code-compliant under-slab sewer and drainage', 'Medical gas and commercial kitchen piping installations']
  },
  {
    id: 'backflow-prevention',
    name: 'Backflow Prevention & Testing',
    metaTitle: 'Backflow Testing & Prevention Installation | Buckeye Plumbing',
    metaDescription: 'Certified backflow testing, repair, and installation for residential and commercial properties. Stay compliant with local water authority codes.',
    heading: 'Backflow Prevention Services',
    content: 'Safeguard your potable water supply from dangerous cross-contamination. Buckeye Plumbing’s certified technicians provide mandatory annual backflow assembly testing, rapid repairs, and completely new RPZ (Reduced Pressure Zone) and double-check valve installations. We manage all compliance documentation with local SWFL water authorities directly, ensuring your commercial enterprise, restaurant, or residential irrigation system remains legally compliant and strictly protected against back-siphonage and back-pressure hazards.',
    bullets: ['Certified annual backflow testing and municipal reporting', 'RPZ and double-check valve assembly repairs and rebuilds', 'New commercial and residential backflow preventer installations', 'Cross-connection control surveys and compliance consulting']
  },
  {
    id: 'grease-trap-services',
    name: 'Grease Trap Services',
    metaTitle: 'Commercial Grease Trap Pumping & Install | SWFL',
    metaDescription: 'Commercial grease trap and interceptor services. We pump, clean, repair, and install grease traps for restaurants and commercial kitchens.',
    heading: 'Grease Trap specific solutions',
    content: 'Fats, oils, and grease (FOG) are the enemy of commercial kitchen plumbing. Restaurants, cafeterias, and food service facilities rely on Buckeye Plumbing for specialized grease trap and interceptor care. We offer comprehensive, environmentally responsible grease trap pumping, emergency block-clearing, and complete installation of high-capacity exterior interceptors. Stay ahead of Department of Health violations and avoid catastrophic sewer backups with our rapid-response commercial plumbing solutions.',
    bullets: ['Routine, compliant grease trap pumping and deep cleaning', 'Under-sink stainless steel grease trap installations', 'Large-scale exterior commercial grease interceptor replacements', 'Emergency FOG (Fats, Oils, Grease) sewer line jetting']
  }
];

export const EMERGENCY_SERVICES = [
  {
    id: 'leak-repair',
    name: 'Emergency Leak Repair',
    metaTitle: '24/7 Emergency Leaking Pipe Repair Plumber SWFL',
    metaDescription: 'Visible leak spraying water? Shut off your main valve and call us immediately! Available 24/7 for emergency water leak repairs.',
    heading: '24/7 Emergency Leak Response',
    content: 'When a pipe bursts under pressure, every minute counts. Our emergency response team arrives fully stocked to isolate the leak, stop the flooding, and repair the damaged pipe immediately.',
    bullets: ['Rapid 24/7 dispatch', 'Immediate water shut-off assistance', 'Permanent burst pipe repairs']
  },
  {
    id: 'burst-pipe-response',
    name: 'Burst Pipe Response',
    metaTitle: 'Emergency Burst Pipe Plumber in SWFL | 24/7',
    metaDescription: 'Burst PVC, copper, or CPVC pipe? We provide immediate 24-hour response to isolate and repair burst pipes in homes and businesses.',
    heading: 'Immediate Burst Pipe Repair',
    content: 'A burst pipe can dump hundreds of gallons of water into your property in minutes. Call our 24/7 hotline and a licensed plumber will be dispatched to secure your property.',
    bullets: ['Immediate damage mitigation', 'CPVC, Copper, and PEX repairs', 'Insurance documentation support']
  },
  {
    id: 'sewer-line-emergency',
    name: 'Sewer Line Emergency',
    metaTitle: 'Emergency Sewer Line Plumber SWFL | 24/7 Backups',
    metaDescription: 'Raw sewage backing up into your home? We provide 24/7 emergency main line clearing and hydro jetting to restore flow immediately.',
    heading: 'Emergency Sewer Backups',
    content: 'A total main sewer line backup is a devastating, bio-hazardous emergency that demands instant action. Buckeye Plumbing deploys 24/7 with industrial-grade sewer augers and high-pressure hydro jetting trailers to obliterate severe tree root intrusions, grease clogs, and collapsed pipe debris. To guarantee the line is fully restored, we perform high-definition fiber-optic sewer camera inspections, offering trenchless pipe repair or exact spot-repairs if structural damage is discovered.',
    bullets: ['24/7 main sewer line clearing and biohazard mitigation', 'High-pressure commercial hydro jetting for stubborn blockages', 'HD fiber-optic sewer camera video inspections', 'Trenchless pipe repair and collapsed sewer line replacements']
  },
  {
    id: 'water-heater-emergency',
    name: 'Emergency Water Heater Service',
    metaTitle: 'Emergency Water Heater Repair & Replacement SWFL',
    metaDescription: 'No hot water or a flooded garage? We offer emergency water heater repairs, leak isolation, and rapid replacements.',
    heading: 'Emergency Water Heater Solutions',
    content: 'A catastrophically ruptured water heater can flood your property in minutes, while a sudden loss of hot water disrupts your entire routine. Our 24/7 emergency hotline dispatches licensed plumbers instantly to stop devastating leaks, drain failed tanks, and restore your hot water. We carry premium Rheem and Navien tankless and standard water heaters on our trucks, allowing for rapid, same-day emergency replacements and thermostat repairs with zero hassle.',
    bullets: ['Immediate emergency leak isolation and property protection', 'Rapid tank drain-downs and emergency pump-outs', 'Same-day conventional and tankless water heater replacements', '24/7 thermostat, heating element, and TPR valve repairs']
  }
];

export const TIPS_AND_ARTICLES = [
  {
    id: 'preventing-leaks',
    name: 'Preventing Hidden Plumbing Leaks',
    metaTitle: 'How to Prevent Hidden Plumbing Leaks | SWFL Plumber Tips',
    metaDescription: 'Learn exactly how to check your home for hidden plumbing leaks, understand your water bill, and when to call a professional leak detector.',
    heading: 'How to Prevent Hidden Plumbing Leaks',
    content: 'The most damaging leaks are the ones you can\'t see. By the time water seeps through your drywall, the damage is already done. Start regularly inspecting your water meter. Ensure all fixtures are off, and if the small dial is spinning, you have a concealed leak.',
    bullets: ['Monitor your water bill for sudden, unexplained spikes', 'Check the water meter indicator triangle', 'Regularly inspect under sink cabinets for warp or moisture']
  }
];
