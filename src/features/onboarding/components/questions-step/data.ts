import type { Question } from "@/models";
import { assets } from "@/assets/assets";

export const questions: Question[] = [
  {
    id: 0,
    suggestions: [],
    answer: {
      text: "",
      suggestions: [],
    },
    text: "What Does Your Business Do & Why Should People Care?",
    description:
      "This is your starting point – your brand story begins here. The clearer you are, the better we can create names that truly fit you.",
    ai_help: {
      video_link: assets.video_01,
      why_matters:
        "This is the core of your story. A clear value proposition ensures the names we generate are relevant and meaningful, helping customers instantly understand your purpose.",
      image_link: assets.image_01,
      example:
        "We help small business owners (who) struggling with their social media marketing (problem) by providing an AI-powered tool that automatically creates and schedules engaging content (solution)",
      resources: [
        {
          text: "How to Create a Compelling Value Proposition",
          link: "https://www.close.com/blog/irresistible-value-propositions#value-proposition-template",
        },
        {
          text: "The Value Proposition Canvas",
          link: "https://www.strategyzer.com/library/the-value-proposition-canvas",
        },
        {
          text: "How to Write a Great Value Proposition",
          link: "https://blog.hubspot.com/marketing/write-value-proposition",
        },
      ],
    },
  },
  {
    id: 1,
    suggestions: [],
    answer: {
      text: "",
      suggestions: [],
    },
    text: "Who Is Your Ideal Customer?  Be specific.",
    description: "Strong brands stand for something – what's your big 'why'?",
    ai_help: {
      video_link: assets.video_02,
      why_matters:
        "You can't be everything to everyone. Knowing your ideal customer allows us to create a name that speaks directly to them, building a stronger and more immediate connection.",
      image_link: "",
      example:
        "Our ideal customer is *'Marketing Mary,' a 28-45 year old marketing manager at a mid-size tech company, who is time-pressed and measured on generating qualified leads.",
      resources: [
        {
          text: "User Interviews 101",
          link: "https://www.nngroup.com/articles/user-interviews/",
        },
        {
          text: "Why Customer Personas are Essential for Business Success: A Step-by-Step Guide",
          link: "https://www.linkedin.com/pulse/why-customer-personas-essential-business-success-guide-didisheim/",
        },
      ],
    },
  },
  {
    id: 2,
    suggestions: [
      { title: "Bold and daring", desc: "Bold and daring...........etc" },
      { title: "Warm and caring", desc: "Warm and caring............etc" },
      {
        title: "Creative and adventurous",
        desc: "Creative and adventurous.............etc",
      },
      { title: "Luxurious", desc: "Luxurious............etc" },
      { title: "Competent", desc: "Competent............etc" },
    ],
    answer: {
      text: "",
      suggestions: [],
    },
    text: "What is the primary emotion you want customers to feel when interacting with your brand? ",
    description:
      "Think of your brand as a character your audience would love to meet",
    ai_help: {
      video_link: assets.video_03,
      why_matters: "",
      image_link: assets.image_03,
      example:
        "We want our customers to feel empowered and in control of their financial future",
      resources: [
        {
          text: "How Brands Make Emotional Connections",
          link: "https://brandingstrategyinsider.com/how-brands-make-emotional-connections/",
        },
        {
          text: "How Brands Create an Emotional Connection with Their",
          link: "https://www.brandingmag.com/daniel-todaro/how-brands-create-an-emotional-connection-with-their-customers/",
        },
      ],
    },
  },
  {
    id: 3,
    suggestions: [],
    answer: {
      text: "",
      suggestions: [],
    },
    text: "If your brand was a person, describe its personality in 3 adjectives.",
    description:
      "Playful? Professional? Bold? Calming? Let us know the emotional tone.",
    ai_help: {
      video_link: assets.video_04,
      why_matters:
        "A consistent personality builds trust. This helps us choose a name that feels authentic to your brand's character, whether it's a 'trusted expert' or a 'creative rebel'.",
      image_link: assets.image_04,
      example:
        "⦁	Ideal Answer Example: Our brand is authentic, adventurous, and reliable. ----- ⦁	Is your brand reliable, honest, and down-to-earth? ----- ⦁	Or is it daring, imaginative, and trendy?",
      resources: [
        {
          text: "What’s Your Blog Brand Personality?",
          link: "https://buildingtheblog.com/whats-your-blog-brand-personality/",
        },
        {
          text: "9 Essential Tips for Adding More Personality to Your Training Videos",
          link: "https://www.wellsaid.io/resources/blog/tips-more-personality-training-videos",
        },
      ],
    },
  },
  {
    id: 4,
    suggestions: [],
    answer: {
      text: "",
      suggestions: [],
    },
    text: "How do you want your brand to sound and communicate? What's your target brand tone of voice?",
    description: "Give us hints – metaphors, imagery, or ideas you love.",
    ai_help: {
      video_link: assets.video_05,
      why_matters:
        "Your tone of voice is how your brand 'speaks' to the world. A consistent tone, reflected in your name, ensures you attract the right audience and build a recognizable identity.",
      image_link: assets.image_05,
      example:
        "Our tone is professional yet approachable, like a trusted expert who explains complex things simply.",
      resources: [
        {
          text: "Brand Tone of Voice—Everything You Need To Know",
          link: "https://marlostudios.co/blogs/journal/brand-tone-of-voice",
        },
        {
          text: "Brand voice: What it is and why it matters",
          link: "https://sproutsocial.com/insights/brand-voice/",
        },
      ],
    },
  },
  {
    id: 5,
    suggestions: [],
    answer: {
      text: "",
      suggestions: [],
    },
    text: "What makes you different and better than your competitors?",
    description:
      "Help us understand the landscape so we can help you differentiate.",
    ai_help: {
      video_link: assets.video_06,
      why_matters:
        "Your unique advantage is why customers choose you. Highlighting this 'secret sauce' helps us create a distinctive name that stands out in a crowded market",
      image_link: assets.image_06,
      example:
        "Unlike other project management tools, ours integrates natively with every major CRM and accounting software, eliminating the need for manual data entry",
      resources: [
        {
          text: "https://b-plannow.com/en/create-a-competitive-advantage-and-stand-out-from-the-competition/",
          link: "Create a competitive advantage and stand out from the competition",
        },
        {
          text: "Finding Your Competitive Advantage—Learn These 7 Things Before Your Competitors Do",
          link: "https://breadcrumbs.io/blog/finding-your-competitive-advantage/",
        },
      ],
    },
  },
  {
    id: 6,
    suggestions: [],
    answer: {
      text: "",
      suggestions: [],
    },
    text: "What Is Your Brand's Core Personality Archetype?",
    description:
      "Your preferences matter – share examples of what resonates (or doesn't).",
    ai_help: {
      video_link: assets.video_07,
      why_matters:
        "Customers connect with personalities, not just services. An archetype provides a timeless framework that shapes your entire brand experience, making it more relatable and human.",
      image_link: assets.image_07,
      example:
        "We are primarily The Caregiver (nurturing, protective) and secondarily The Sage (wise, knowledgeable).",
      resources: [
        {
          text: "Brand Archetypes 101: How To Choose One + Top Examples",
          link: "https://www.digitalsilk.com/digital-trends/brand-archetypes/",
        },
        {
          text: "How to Use Brand Archetypes: A Complete Implementation Guide",
          link: "https://iconicfox.com.au/how-to-use-brand-archetypes/",
        },
      ],
    },
  },
];
