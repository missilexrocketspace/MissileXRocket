export type RocketData = {
  slug: string;
  name: string;
  category: string;
  payload: string;
  mission: string;
  history: string;
  specifications: Record<string, string>;
  launches: string[];
  gallery: string[];
};

export const rockets: RocketData[] = [
  {
    slug: 'slv',
    name: 'SLV',
    category: 'Satellite Launch Vehicle',
    payload: 'Up to 40 kg to low Earth orbit',
    mission: 'Demonstration of indigenous satellite launch capability.',
    history: 'SLV was India’s first experimental launch vehicle developed to place a small satellite into orbit.',
    specifications: {
      Height: '23 m',
      Mass: '17,500 kg',
      Stages: '4',
      Propellant: 'Solid rocket motors'
    },
    launches: ['1980 first successful launch', '1981 follow-up launch'],
    gallery: ['SLV launch pad', 'SLV assembly']
  },
  {
    slug: 'aslv',
    name: 'ASLV',
    category: 'Augmented Satellite Launch Vehicle',
    payload: 'Up to 150 kg to low Earth orbit',
    mission: 'Improve satellite injection performance and guidance stability.',
    history: 'ASLV extended India’s launch capability beyond SLV by introducing a strap-on stage and improved guidance.',
    specifications: {
      Height: '23.5 m',
      Mass: '42,000 kg',
      Stages: '5',
      Propellant: 'Solid rocket motors'
    },
    launches: ['1987 first launch', '1994 mission completion'],
    gallery: ['ASLV on pad', 'ASLV stage separation']
  },
  {
    slug: 'pslv',
    name: 'PSLV',
    category: 'Polar Satellite Launch Vehicle',
    payload: 'Up to 3,800 kg to polar orbit',
    mission: 'Deliver Earth observation and navigation payloads into polar and sun-synchronous orbits.',
    history: 'PSLV is India’s workhorse launch vehicle, renowned for its reliability and multiple orbit-injection capability.',
    specifications: {
      Height: '44 m',
      Mass: '295,000 kg',
      Stages: '4',
      Propellant: 'Solid and liquid propulsion mix'
    },
    launches: ['1993 maiden flight', 'Multiple successful missions since'],
    gallery: ['PSLV launch', 'PSLV payload fairing']
  },
  {
    slug: 'gslv',
    name: 'GSLV',
    category: 'Geosynchronous Satellite Launch Vehicle',
    payload: 'Up to 2,500 kg to GTO',
    mission: 'Place communication and weather satellites into geostationary orbit.',
    history: 'GSLV brought India into geostationary launch capability with a cryogenic upper stage and modular core.',
    specifications: {
      Height: '49 m',
      Mass: '414,000 kg',
      Stages: '3',
      Propellant: 'Solid, liquid and cryogenic'
    },
    launches: ['2001 first flight', 'Ongoing operational missions'],
    gallery: ['GSLV launch', 'GSLV upper stage']
  },
  {
    slug: 'lvm3',
    name: 'LVM3',
    category: 'Launch Vehicle Mark 3',
    payload: 'Up to 4,000 kg to GTO / 8,000 kg to LEO',
    mission: 'Support heavy satellite launches, deep space missions, and crewed mission architecture.',
    history: 'LVM3 is India’s heavy-lift vehicle designed for large payloads, deep space probes, and future human-rated missions.',
    specifications: {
      Height: '43.4 m',
      Mass: '640,000 kg',
      Stages: '2 + strap-ons',
      Propellant: 'Solid and liquid engines'
    },
    launches: ['2017 first flight', 'Chandrayaan-2 mission'],
    gallery: ['LVM3 launch', 'LVM3 mobile service tower']
  },
  {
    slug: 'sslv',
    name: 'SSLV',
    category: 'Small Satellite Launch Vehicle',
    payload: 'Up to 500 kg to SSO',
    mission: 'Provide on-demand launch for small satellites with rapid turnaround.',
    history: 'SSLV is a lightweight, cost-effective launch vehicle designed for responsive deployment of small orbital payloads.',
    specifications: {
      Height: '34 m',
      Mass: '120,000 kg',
      Stages: '3',
      Propellant: 'Solid rocket motors'
    },
    launches: ['2022 first flight', '2024 operational readiness'],
    gallery: ['SSLV launch pad', 'SSLV payload integration']
  },
  {
    slug: 'sounding-rockets',
    name: 'Sounding Rockets',
    category: 'Scientific Research Rockets',
    payload: 'Small scientific instruments',
    mission: 'Conduct suborbital research for atmospheric science and technology demonstration.',
    history: 'Sounding rockets are used for short-duration scientific missions and technology validation above the atmosphere.',
    specifications: {
      Height: 'Varies by mission',
      Mass: 'Varies by design',
      Stages: '1 – 3',
      Propellant: 'Solid motors'
    },
    launches: ['Ongoing research campaigns', 'Atmospheric campaign launches'],
    gallery: ['Sounding rocket launch', 'Sounding rocket payloads']
  }
];
