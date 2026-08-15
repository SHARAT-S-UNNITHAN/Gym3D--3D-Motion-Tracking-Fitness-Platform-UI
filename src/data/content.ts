export const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Programs", href: "#programs" },
  { label: "Pricing", href: "#pricing" },
  { label: "Reviews", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export const stats = [
  { value: 250, suffix: "+", label: "3D Motion Programs" },
  { value: 95, suffix: "%", label: "Form Accuracy Score" },
  { value: 10, suffix: "+", label: "Certified Coaches" },
  { value: 24, suffix: "/7", label: "Live Session Access" },
];

export const features = [
  {
    title: "Volumetric Form Tracking",
    text: "Your lifts, rebuilt as live 3D meshes so every rep is measured, not guessed.",
    icon: "Scan",
    size: "lg",
    accent: "orange",
  },
  {
    title: "Adaptive Load Engine",
    text: "Weight and tempo recalculated set-to-set from real output, not a fixed plan.",
    icon: "Activity",
    size: "md",
    accent: "green",
  },
  {
    title: "Spatial Coaching",
    text: "Cues placed exactly where the movement breaks down.",
    icon: "Radar",
    size: "sm",
    accent: "orange",
  },
  {
    title: "Recovery Twin",
    text: "A living model of your fatigue, sleep, and readiness.",
    icon: "HeartPulse",
    size: "sm",
    accent: "green",
  },
  {
    title: "Depth-Sensing Rig Compatible",
    text: "Works with any depth camera or sensor bar — no dedicated hardware lock-in required to start training in full 3D.",
    icon: "Boxes",
    size: "lg",
    accent: "green",
  },
  {
    title: "Squad Sync",
    text: "Train alongside your crew in the same rendered space.",
    icon: "Users",
    size: "md",
    accent: "orange",
  },
];

export const programs = [
  {
    id: "01",
    title: "Forge",
    subtitle: "Strength Foundations",
    icon: "Dumbbell",
    difficulty: 35,
    weeks: 6,
    sessions: "4 / week",
    details:
      "Compound-lift mechanics rebuilt from the ground up using 3D bar-path overlays and joint-angle scoring.",
  },
  {
    id: "02",
    title: "Ignite",
    subtitle: "Metabolic Power",
    icon: "Flame",
    difficulty: 68,
    weeks: 8,
    sessions: "5 / week",
    details:
      "High-output circuits paced by your live heart-rate volume, rendered as a pulsing force field around you.",
  },
  {
    id: "03",
    title: "Apex",
    subtitle: "Performance Peak",
    icon: "Mountain",
    difficulty: 92,
    weeks: 10,
    sessions: "6 / week",
    details:
      "Competition-grade programming with full-body volumetric capture and week-over-week movement diffing.",
  },
];

export const pricing = [
  {
    name: "Starter",
    price: 0,
    period: "forever",
    tagline: "Get a feel for the space.",
    featured: false,
    features: [
      "3 guided 3D sessions / month",
      "Basic form scoring",
      "Community leaderboard",
      "Mobile app access",
    ],
  },
  {
    name: "Momentum",
    price: 49,
    period: "month",
    tagline: "For lifters who train with intent.",
    featured: true,
    features: [
      "Unlimited 3D sessions",
      "Adaptive Load Engine",
      "Live coach overlays",
      "Recovery Twin dashboard",
      "Squad Sync for up to 4",
    ],
  },
  {
    name: "Apex Elite",
    price: 129,
    period: "month",
    tagline: "Full rig, full roster, full data.",
    featured: false,
    features: [
      "Everything in Momentum",
      "1:1 coach review weekly",
      "Priority rig scheduling",
      "Full biomechanics export",
      "Early access to new programs",
    ],
  },
];

export const testimonials = [
  {
    name: "Mara Okonkwo",
    role: "Powerlifter, 3 yrs on Gym3D",
    quote:
      "Watching my squat as a live 3D mesh caught a knee cave I'd missed for a year of training on my own.",
    color: "#F97316",
  },
  {
    name: "Theo Lindqvist",
    role: "Marathon Coach",
    quote:
      "I program for twelve athletes now instead of four. The spatial cues do half of my job for me.",
    color: "#22C55E",
  },
  {
    name: "Priya Ramaswami",
    role: "Momentum Member",
    quote:
      "The Recovery Twin talked me out of a session I would've regretted. That's worth the subscription alone.",
    color: "#F97316",
  },
  {
    name: "Diego Fuentes",
    role: "Apex Elite Member",
    quote:
      "Squad Sync makes remote training with my old training partners actually feel like the same room.",
    color: "#22C55E",
  },
  {
    name: "Hannah Kessler",
    role: "First-year lifter",
    quote:
      "I was intimidated by the gym floor. Training the form privately in 3D first changed that completely.",
    color: "#F97316",
  },
];

export const faqs = [
  {
    q: "Do I need special hardware to train in 3D?",
    a: "No dedicated rig required. Gym3D works with any depth-sensing camera or a compatible sensor bar, including several models you may already own.",
  },
  {
    q: "How accurate is the form scoring, really?",
    a: "The Adaptive Load Engine cross-references joint-angle data against a library of over four hundred thousand verified reps to flag deviations in real time.",
  },
  {
    q: "Can I train with my existing training partners?",
    a: "Yes — Squad Sync renders everyone in your session into the same 3D space, regardless of where each person is physically training from.",
  },
  {
    q: "What happens to my data?",
    a: "Your movement data builds your private Recovery Twin and is never sold. You can export or delete your full biomechanics history at any time.",
  },
  {
    q: "Can I cancel a paid plan whenever I want?",
    a: "Plans are month-to-month with no lock-in contract. Cancel from your account in a couple of clicks and keep access through the paid period.",
  },
];

export const footerLinks = {
  Product: ["Features", "Programs", "Pricing", "Changelog"],
  Company: ["About", "Careers", "Press", "Contact"],
  Resources: ["Blog", "Support", "Community", "Partners"],
};
