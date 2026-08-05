export type MissileData = {
  slug: string;
  name: string;
  type: string;
  range: string;
  guidance: string;
  purpose: string;
  history: string;
  technology: string;
  timeline: string[];
  gallery: string[];
  specifications: Record<string, string>;
};

export const missiles: MissileData[] = [
  {
    slug: 'agni',
    name: 'Agni',
    type: 'Ballistic Missile',
    range: '1,000 – 5,000 km',
    guidance: 'Inertial navigation with satellite updates',
    purpose: 'Strategic deterrence and long-range precision delivery.',
    history: 'Agni is India’s premier long-range ballistic missile family developed for strategic defence. It represents the nation’s core deterrent capability with multiple variants tailored to reach continental targets.',
    technology: 'Solid-fuel propulsion, composite airframes, and modular warhead integration with advanced guidance packages.',
    timeline: ['1994 first test', '2004 Agni-II induction', '2012 Agni-V successful flight', '2024 ongoing enhancements'],
    gallery: ['Agni missile on launch pad', 'Agni system illustration'],
    specifications: {
      Weight: '7,000 – 18,000 kg',
      Speed: 'Mach 20+',
      Warhead: 'Conventional/Nuclear',
      Launch: 'Mobile road-mobile launcher'
    }
  },
  {
    slug: 'prithvi',
    name: 'Prithvi',
    type: 'Surface-to-Surface Missile',
    range: '150 – 350 km',
    guidance: 'Onboard inertial navigation and radar tracking',
    purpose: 'Tactical strike support for battlefield and theatre-level missions.',
    history: 'Prithvi is among India’s first indigenously developed battlefield missile systems, created to provide fast-response tactical strike capability.',
    technology: 'Liquid propulsion, radar terminal guidance, and hardened transport erector launcher systems.',
    timeline: ['1988 development began', '1994 first test', '2002 operational induction', '2025 modern upgrades'],
    gallery: ['Prithvi in field deployment', 'Prithvi mobile launcher'],
    specifications: {
      Weight: '3,400 – 5,000 kg',
      Speed: 'Mach 2.5+',
      Warhead: 'Conventional',
      Launch: 'Mobile TEL'
    }
  },
  {
    slug: 'akash',
    name: 'Akash',
    type: 'Surface-to-Air Missile',
    range: '25 – 30 km',
    guidance: 'RF seeker with command guidance support',
    purpose: 'Area air defence against aircraft and cruise missiles.',
    history: 'Akash is India’s indigenous air defence missile system developed for medium-range aerial threat engagement.',
    technology: 'Solid rocket motor, phased array radar integration, and networked fire control.',
    timeline: ['2004 first flight', '2015 squadron induction', '2023 export-ready variant'],
    gallery: ['Akash battery deployment', 'Akash interceptor flight'],
    specifications: {
      Weight: '720 kg',
      Speed: 'Mach 2.5',
      Warhead: 'High-explosive fragmentation',
      Launch: 'Mobile launcher vehicle'
    }
  },
  {
    slug: 'brahmos',
    name: 'BrahMos',
    type: 'Cruise Missile',
    range: '290 km',
    guidance: 'Inertial navigation with active radar homing',
    purpose: 'High-speed precision strike against critical targets.',
    history: 'BrahMos is a joint Indo-Russian supersonic cruise missile program focused on fast engagement and long-range precision.',
    technology: 'Ramjet propulsion, sea/land/air launch variants, and modular payload options.',
    timeline: ['2001 project launch', '2005 first test', '2012 naval induction', '2024 air-launched variants'],
    gallery: ['BrahMos missile on launcher', 'BrahMos launch sequence'],
    specifications: {
      Weight: '2,500 kg',
      Speed: 'Mach 2.8 – 3.0',
      Warhead: 'Conventional',
      Launch: 'Land/sea/air platforms'
    }
  },
  {
    slug: 'nag',
    name: 'Nag',
    type: 'Anti-Tank Guided Missile',
    range: '4 – 7 km',
    guidance: 'Imaging infrared seeker with fire-and-forget capability',
    purpose: 'Precision engagement of armoured vehicles and field fortifications.',
    history: 'Nag is India’s primary indigenous anti-tank missile system designed for armour defeat under varied battlefield conditions.',
    technology: 'Fire-and-forget seeker, autonomous target tracking, and land/vehicle launch modes.',
    timeline: ['2007 first test', '2019 service induction', '2024 upgraded versions'],
    gallery: ['Nag launcher detail', 'Nag system field exercise'],
    specifications: {
      Weight: '42.5 kg',
      Speed: '230 m/s',
      Warhead: 'Tandem-charge HEAT',
      Launch: 'Tripod/vehicle mount'
    }
  },
  {
    slug: 'helina',
    name: 'Helina',
    type: 'Helicopter Launched Anti-Tank Missile',
    range: '7 – 8 km',
    guidance: 'Lock-on before launch with imaging infrared seeker',
    purpose: 'Air-launched precision engagement of armoured targets.',
    history: 'Helina adapts the Nag anti-tank missile into a helicopter-launched system for improved battlefield reach.',
    technology: 'Helicopter integration, lock-on seeker, and mobile targeting support.',
    timeline: ['2010 development start', '2018 trial successes', '2024 operational evaluations'],
    gallery: ['Helina missile on helicopter', 'Helina targeting systems'],
    specifications: {
      Weight: '49.7 kg',
      Speed: '230 m/s',
      Warhead: 'Tandem-charge HEAT',
      Launch: 'Helicopter pylons'
    }
  },
  {
    slug: 'astra',
    name: 'Astra',
    type: 'Air-to-Air Missile',
    range: '80 – 110 km',
    guidance: 'Active radar homing with mid-course updates',
    purpose: 'Beyond-visual-range aerial threat interception.',
    history: 'Astra is India’s first indigenous beyond-visual-range air-to-air missile for fighter aircraft defence networks.',
    technology: 'Solid rocket motor, multi-mode seeker, and avionics-synch with fighter jet platforms.',
    timeline: ['2008 program launch', '2021 squadron trials', '2025 full operational clearance'],
    gallery: ['Astra missile launch from fighter', 'Astra seeker test'],
    specifications: {
      Weight: '154 kg',
      Speed: 'Mach 4+',
      Warhead: 'High explosive fragmentation',
      Launch: 'Fighter aircraft pylons'
    }
  },
  {
    slug: 'shaurya',
    name: 'Shaurya',
    type: 'Hypersonic Tactical Missile',
    range: '750 km',
    guidance: 'Inertial navigation with GPS and terminal guidance',
    purpose: 'Tactical strike with high maneuverability and rapid response.',
    history: 'Shaurya is a hypersonic tactical missile designed for strategic theatre-level deterrence and precision.' ,
    technology: 'Hypersonic airframe, composite fuel, and terminal navigation systems.',
    timeline: ['2008 first test', '2011 user trials', '2024 ongoing refinement'],
    gallery: ['Shaurya launch vehicle', 'Shaurya range demonstration'],
    specifications: {
      Weight: '6,200 kg',
      Speed: 'Mach 7+',
      Warhead: 'Conventional',
      Launch: 'Rail-mobile launcher'
    }
  },
  {
    slug: 'nirbhay',
    name: 'Nirbhay',
    type: 'Subsonic Cruise Missile',
    range: '1,000 km',
    guidance: 'Terrain contour matching with satellite navigation',
    purpose: 'Long-range precision strike over denied airspace.',
    history: 'Nirbhay is a long-range subsonic cruise missile concept intended for precision engagement and strategic flexibility.',
    technology: 'Turbojet propulsion, stealthy cruise flight, and autonomous guidance.',
    timeline: ['2009 project start', '2013 test flights', '2024 advanced variants under study'],
    gallery: ['Nirbhay in flight', 'Nirbhay launch preparation'],
    specifications: {
      Weight: '1,500 kg',
      Speed: '0.7 Mach',
      Warhead: 'Conventional',
      Launch: 'Mobile launcher'
    }
  },
  {
    slug: 'k-series',
    name: 'K Series',
    type: 'Ballistic Missile',
    range: 'Up to 3,500 km',
    guidance: 'Inertial guidance with satellite corrections',
    purpose: 'Intermediate-range strategic deterrence and payload delivery.',
    history: 'The K Series is a range of submarine-launched ballistic missiles engineered for maritime strategic deterrence.',
    technology: 'Solid-fuel submarine launch, compact boost design, and resilient guidance packages.',
    timeline: ['2000 program launch', '2016 SLBM tests', '2024 operational deployment enhancements'],
    gallery: ['K Series submarine launch', 'Ballistic missile test'],
    specifications: {
      Weight: '1,600 – 5,000 kg',
      Speed: 'Mach 20+',
      Warhead: 'Conventional/Nuclear',
      Launch: 'Submarine silo'
    }
  },
  {
    slug: 'surface-to-air',
    name: 'Surface to Air',
    type: 'Air Defence Category',
    range: '15 – 110 km',
    guidance: 'Varied seeker packages with radar guidance',
    purpose: 'Layered air defence across theatre and tactical zones.',
    history: 'Surface-to-air systems provide multi-tiered aerial protection against aircraft, missiles, and UAVs.',
    technology: 'Command-guided radars, interceptor missiles, and networked defence systems.',
    timeline: ['2010 system integrations', '2022 expanded coverage', '2025 next-generation upgrades'],
    gallery: ['Air defence battery', 'Interceptor launch'],
    specifications: {
      Weight: 'Platform dependent',
      Speed: 'Mach 2.5+',
      Warhead: 'Fragmentation/HE',
      Launch: 'Radar-directed nodes'
    }
  },
  {
    slug: 'air-to-air',
    name: 'Air to Air',
    type: 'Air Defence Category',
    range: '20 – 120 km',
    guidance: 'Active radar and IR seekers',
    purpose: 'Aerial combat and beyond visual range interception.',
    history: 'Air-to-air missile systems are critical for fighter fleet self-protection and contested airspace dominance.',
    technology: 'High-speed seekers, thrust vectoring, and avionics integration.',
    timeline: ['2008 continuous development', '2023 upgraded seeker trials', '2025 integration with next-gen fighters'],
    gallery: ['Aerial missile launch', 'Fighter bay ready'],
    specifications: {
      Weight: '150 – 200 kg',
      Speed: 'Mach 4+',
      Warhead: 'High explosive fragmentation',
      Launch: 'Aircraft pylons'
    }
  }
];
