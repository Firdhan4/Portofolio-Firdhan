export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Graphic Design' | 'UI / UX' | 'Web Development' | 'Video Editing';
  categoryLabel: string;
  image: string;
  tagline: string;
  description: string;
  tags: string[];
  client: string;
  completionDate: string;
  gradient: string;
  previewType: 'logo' | 'cards' | 'web' | 'poster' | 'monogram' | 'responsive';
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: 'palette' | 'devices' | 'code' | 'video';
  deliverables: string[];
  startingPrice: string;
}

export const PERSONAL_INFO = {
  name: 'Firdhan Maulana',
  shortName: 'FM',
  tagline: '2D & 3D Animator, Creative Artist & Information Systems Student.',
  roles: ['2D/3D Animator', '3D Asset & Character Modeler', 'Creative Artist', 'Information Systems Student'],
  experienceYears: '3+',
  location: 'Indonesia',
  bio: 'Mahasiswa Sistem Informasi Universitas Komputama dengan fondasi 3 tahun di bidang Animasi (SMK Komputama Majenang). Terampil dalam alur produksi animasi 2D dan 3D meliputi modelling karakter dan aset, coloring, hingga rigging, serta memiliki pengalaman praktis di industri periklanan dan percetakan banner.',
  userPhoto: '/assets/aistudio/ChatGPT_Image_18_Jul_2026__16.24.25_8ac9ce9e.png',
  originalReferenceImage: '/assets/aistudio/850e765e1aba6f4b64af6f96350f2de5_bef9f2be.jpg',
  contact: {
    email: 'firdhanmaulana04@gmail.com',
    phone: '+62 851 7699 6816',
    phoneDisplay: '+62 851 7699 6816',
    whatsappUrl: 'https://wa.me/6285176996816?text=Hello%20Firdhan,%20I%20am%20interested%20in%20working%20with%20you!',
    facebookUrl: 'https://www.facebook.com/firdhanmaulana',
    facebookDisplay: 'Firdhan Maulana',
    instagramUrl: 'https://www.instagram.com/danzephyrr',
    instagramDisplay: '@danzephyrr',
    telegramUrl: 'https://t.me/Firdhan123',
    telegramDisplay: 'https://t.me/Firdhan123',
    githubUrl: 'https://github.com/firdhanmaulana',
    linkedinUrl: 'https://linkedin.com/in/firdhanmaulana',
  },
  stats: [
    { label: 'Years Experience', value: '5+' },
    { label: 'Completed Projects', value: '140+' },
    { label: 'Happy Clients', value: '85+' },
    { label: 'Client Satisfaction', value: '99%' },
  ]
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'graphic-design',
    title: 'Graphic Designing',
    shortDesc: 'Brand identity, logos, promotional posters, and social media creative assets.',
    fullDesc: 'Creating standout visual communication that commands attention. From complete brand identity guidelines to advertising banners, product mockups, and corporate materials.',
    iconName: 'palette',
    deliverables: ['Logo & Brand Guidelines', 'Social Media Templates', 'Vector Illustrations', 'Print & Merchandise Assets'],
    startingPrice: '$150'
  },
  {
    id: 'ui-ux',
    title: 'UI / UX Designing',
    shortDesc: 'Intuitive user experiences, wireframes, and modern app & website interfaces in Figma.',
    fullDesc: 'Human-centered interfaces crafted with Figma and modern design principles. Thorough user research, high-fidelity wireframing, and design systems with clear handoff tokens.',
    iconName: 'devices',
    deliverables: ['Figma UI Systems', 'Mobile App Layouts', 'Responsive Web Prototypes', 'User Flow & Wireframing'],
    startingPrice: '$250'
  },
  {
    id: 'web-dev',
    title: 'Web Development',
    shortDesc: 'Modern, blazing-fast web applications built with React, TypeScript, and Tailwind CSS.',
    fullDesc: 'End-to-end frontend and web development. Optimized for fast loading speeds, responsive layouts across phones and tablets, clean architecture, and smooth interactive animations.',
    iconName: 'code',
    deliverables: ['React & Next.js Apps', 'Landing Pages', 'Tailwind CSS Layouts', 'REST API & CMS Integration'],
    startingPrice: '$350'
  },
  {
    id: 'video-editing',
    title: 'Video Editing',
    shortDesc: 'High-retention video editing, motion graphics, color grading, and commercial reels.',
    fullDesc: 'Dynamic pacing, synchronized sound design, smooth transitions, and captivating typography for YouTube videos, TikTok & Reels shorts, commercial promos, and corporate showcases.',
    iconName: 'video',
    deliverables: ['Shorts & Reels Editing', 'YouTube Long-form Edits', 'Motion Graphics & Titles', 'Color Grading & Sound FX'],
    startingPrice: '$120'
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: '3d-lowpoly-truck',
    title: '3D Low-Poly Truck Environment',
    category: 'Graphic Design',
    categoryLabel: '3D Modelling & Scene',
    image: '/assets/aistudio/1793426129191153_62715894417276_9a8f2ffe.jpg',
    previewType: 'logo',
    tagline: 'Stylized 3D vehicle & nature low-poly scene',
    description: 'Stylized 3D low-poly vehicle asset modelled with custom textures, lighting, and low-poly nature props.',
    tags: ['Blender', '3D Modelling', 'Low Poly', 'Stylized Art'],
    client: '3D Animation Project',
    completionDate: '2026',
    gradient: 'from-[#2c2016] via-[#1a1410] to-[#0a0705]'
  },
  {
    id: '3d-house-render',
    title: 'Modern Architecture 3D Render',
    category: 'Graphic Design',
    categoryLabel: '3D Architecture & Lighting',
    image: '/assets/aistudio/rumah_render_0a318159.png',
    previewType: 'cards',
    tagline: 'Minimalist 2-story residence with night illumination & carport',
    description: 'Detailed 3D architectural rendering of a modern two-story residence complete with exterior lighting, foliage, and vehicle asset.',
    tags: ['3D Render', 'Architecture', 'Lighting', 'Environment Design'],
    client: '3D Project',
    completionDate: '2026',
    gradient: 'from-[#521319] via-[#3a0d11] to-[#1a0709]'
  },
  {
    id: 'banner-finishing',
    title: 'Banner Production & Finishing QC',
    category: 'Graphic Design',
    categoryLabel: 'Documentation & Finishing QC',
    image: '/assets/aistudio/IMG_20261031_124915_f0231c52.jpg',
    previewType: 'web',
    tagline: 'Hands-on print finishing, manual cutting, eyelet & quality control',
    description: 'Documentation of hands-on internship at an advertising and digital printing company, handling precision banner cutting, gluing, eyelet installation, and quality assurance.',
    tags: ['Advertising', 'Banner Finishing', 'Quality Control', 'Documentation'],
    client: 'Advertising Internship',
    completionDate: '2026',
    gradient: 'from-[#141b24] via-[#10141a] to-[#0a0c10]'
  },
  {
    id: 'banner-design-pc',
    title: 'Advertising Layout & Graphic Design',
    category: 'Graphic Design',
    categoryLabel: 'Documentation & Design Workstation',
    image: '/assets/aistudio/IMG_20261031_125012_b3608d18.jpg',
    previewType: 'poster',
    tagline: 'Digital design workstation crafting promotional print banners',
    description: 'Active design process creating commercial promotional banners for food and beverage clients on the workstation.',
    tags: ['Graphic Design', 'Banner Layout', 'Commercial Print', 'Workstation'],
    client: 'Advertising Production',
    completionDate: '2026',
    gradient: 'from-[#2a1708] via-[#1f1005] to-[#120903]'
  }
];

export const FREELANCE_PLATFORMS = [
  {
    name: 'FIVERR',
    subtitle: 'Level 2 Seller',
    rating: '5.0 / 5.0 (120+ reviews)',
    tag: 'Quick Delivery & Custom Offers',
    url: 'https://www.fiverr.com',
    iconColor: '#1dbf73'
  },
  {
    name: 'UPWORK',
    subtitle: 'Top Rated Plus',
    rating: '100% Job Success Score',
    tag: 'Hourly & Fixed Price Contracts',
    url: 'https://www.upwork.com',
    iconColor: '#14a800'
  },
  {
    name: 'GURU',
    subtitle: 'Verified Professional',
    rating: '99% Milestone Completion',
    tag: 'Long-term Retainer & Dedicated Dev',
    url: 'https://www.guru.com',
    iconColor: '#55a5ff'
  }
];
