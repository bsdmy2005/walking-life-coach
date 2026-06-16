/**
 * Shared landing copy (from the Canva deck). All landing variants render this
 * same content in their own design — so wording stays consistent across designs.
 */

export const brand = {
  name: "Sazi Ngcobo",
  titleLead: "The",
  titleAccent: "Walking",
  titleTail: "Life Coach",
  tagline: "Move your body. Clear your mind. Move your life forward.",
  role: "Walking Life Coach",
  pillars: "Mind. Body. Purpose."
}

export const problem = {
  n: "01",
  title: "The Problem",
  points: [
    "Modern life is overwhelming. People feel stuck, burnt out, or disconnected.",
    "Traditional coaching or therapy can feel intimidating or expensive.",
    "Many struggle to open up in formal settings."
  ],
  result: "People stay in the same patterns for too long."
}

export const insight = {
  n: "02",
  title: "The Insight",
  lead: "People don’t open up sitting across a table.",
  openUp: ["While walking", "While breathing", "While not being stared at"],
  closer: "Movement creates honesty. Nature creates safety."
}

export const solution = {
  n: "03",
  title: "The Solution",
  subtitle: "Walking Coaching",
  intro: "A guided coaching experience that combines:",
  combines: [
    "Walking in nature",
    "Structured conversation",
    "Practical life guidance"
  ],
  closer: "This is not therapy. This is forward-focused, action-based coaching."
}

export const different = {
  title: "What Makes This Different",
  points: [
    "Coaching happens side-by-side, not face-to-face",
    "Movement reduces pressure and overthinking",
    "Nature supports emotional clarity",
    "Real conversations, not theory-heavy sessions"
  ],
  closer: "This is coaching that feels natural, not clinical."
}

export const audience = {
  title: "Who This Is For",
  points: [
    "Professionals feeling stuck or burnt out",
    "People going through life transitions",
    "Entrepreneurs or creatives seeking clarity",
    "Individuals who struggle with traditional coaching formats"
  ]
}

export const coach = {
  eyebrow: "The Coach",
  name: "Sazi Ngcobo",
  question: "Why choose me?",
  bio: [
    "My background spans Psychology, Marketing, corporate leadership, entrepreneurship, and personal transformation.",
    "After years working with leading brands such as SAB and Moët Hennessy, I transitioned into entrepreneurship and now run two successful businesses. Alongside this journey, walking, hiking, meditation, and spirituality became powerful tools for self-discovery, healing, and clarity in my own life.",
    "What began as informal conversations during hikes evolved naturally into coaching — helping others navigate life, reconnect with themselves, and gain perspective through movement, reflection, and intentional conversation.",
    "My coaching approach is grounded in lived experience, emotional awareness, optimism, and genuine human connection. Having experienced both adversity and success, I believe growth happens when people feel safe, seen, inspired, and empowered to move forward with purpose."
  ]
}

export const walkMethod = {
  title: "The Coaching Framework",
  subtitle: "The WALK Method",
  tagline: "Simple. Practical. Repeatable.",
  steps: [
    {
      letter: "W",
      title: "Where are you now?",
      body: "We start by understanding your current situation, challenges, and goals."
    },
    {
      letter: "A",
      title: "Awareness (patterns & blockers)",
      body: "We uncover patterns, beliefs, and blockers that are keeping you stuck."
    },
    {
      letter: "L",
      title: "Leverage (strengths & control)",
      body: "We identify your strengths, resources, and what you can influence to create change."
    },
    {
      letter: "K",
      title: "Keep moving (clear next steps)",
      body: "We define clear, practical next steps and keep you moving forward."
    }
  ]
}

export const journey = {
  title: "The Coaching Journey",
  lead: "A clear, supportive process designed to create real, lasting change.",
  steps: [
    {
      n: "01",
      title: "Enneagram assessment",
      body: "Gain self-awareness and insight into your personality, motivations, and patterns."
    },
    {
      n: "02",
      title: "Introductory walking session",
      body: "We connect, set intentions, and explore what matters most to you right now."
    },
    {
      n: "03",
      title: "6-session coaching cycle",
      body: "Structured, purposeful sessions that help you gain clarity, overcome blocks, and take action."
    },
    {
      n: "04",
      title: "Reflection & next steps",
      body: "We reflect on your progress, celebrate wins, and map out your path forward."
    }
  ]
}

export const ctaActions = [
  { title: "Book your first session", body: "Let’s start the conversation." },
  {
    title: "Take the Enneagram test",
    body: "Gain clarity and deeper self-awareness."
  },
  {
    title: "Join a group walk",
    body: "Connect, reflect and grow together in nature."
  }
]

/** Maps section -> the cropped background image in /public/images. */
export const sectionImages = {
  hero: "/images/hero.jpg",
  problem: "/images/problem.jpg",
  insight: "/images/insight.jpg",
  solution: "/images/solution.jpg",
  walk: "/images/walk.jpg",
  journey: "/images/journey.jpg",
  pricing: "/images/pricing.jpg",
  cta: "/images/cta.jpg",
  coach1: "/images/coach-1.jpg",
  coach2: "/images/coach-2.jpg",
  coach3: "/images/coach-3.jpg"
}
