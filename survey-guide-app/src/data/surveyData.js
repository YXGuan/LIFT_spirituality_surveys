// Decision-Tree Spirituality Survey Framework Data
// This data drives the entire survey guide UI

export const frameworkPurpose =
  "This framework is for exploratory design, not for forcing a scripted conversation. The core idea is: start light if needed, triage the respondent's current posture, then adjust the next question based on their worldview, openness, and level of familiarity with Christianity.";

export const iceBreakers = [
  {
    id: "funny",
    category: "Funny / Light",
    icon: "😄",
    color: "#f59e0b",
    usage: "Use when you need to lower tension quickly.",
    questions: [
      "What is a very overrated thing everyone else seems to love?",
      "What is your most controversial food opinion?",
      "What's the best worst campus food spot on campus?",
      "If you can rename a campus building, what would it be?",
    ],
  },
  {
    id: "practical",
    category: "Practical / Campus Life",
    icon: "🎓",
    color: "#3b82f6",
    usage: "Good default opener because it feels natural and situational.",
    questions: [
      "What program are you in, and what year?",
      "What has been the hardest part of this semester so far?",
      "What do you do to de-stress when school gets heavy?",
    ],
  },
  {
    id: "personal",
    category: "Personal Interests",
    icon: "💡",
    color: "#8b5cf6",
    usage: "Useful if you want to humanize the interaction first.",
    questions: [
      "What are you into outside school right now?",
      "What kind of content have you been consuming lately?",
      "What is something you have been excited about recently?",
    ],
  },
  {
    id: "reflective",
    category: "Reflective but Safe",
    icon: "🌿",
    color: "#10b981",
    usage: "Good bridge from casual talk into deeper themes.",
    questions: [
      "What has been taking up most of your mental energy lately?",
      "What gives you hope when life feels heavy?",
      "What makes a week feel meaningful to you?",
    ],
  },
];

export const triageQuestion = {
  prompt: "Are you spiritual? How would you describe your spirituality?",
  description:
    "Use one broad classification question to decide the conversation path. Keep it simple and broad.",
};

export const mainBranches = [
  {
    id: "atheist",
    number: 1,
    label: "Atheist / Non-Belief",
    icon: "🔬",
    color: "#ef4444",
    gradient: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
    signal:
      "The respondent likely values evidence, coherence, and honesty. They may also carry frustration with religion, or they may simply be unconvinced.",
    guidance:
      'Do not rush into "Would you like to hear the gospel?" Start by understanding why they do not believe and what they think gives life meaning. The follow-up should be exploratory and respectful, not corrective.',
    questions: [
      "What led you to that view?",
      "Do you think life has meaning or purpose without God?",
      "How do you think morality works—objective, personal, or social?",
      "Have you ever seriously explored Christianity, or did it never become persuasive to you?",
    ],
    cautions: [
      "Avoid assuming they are angry at God; many are calm and thoughtful.",
      "Avoid churchy language early.",
      "A good next step is often Jesus as a historical or moral figure before moving to gospel language.",
    ],
    subBranches: null,
  },
  {
    id: "agnostic",
    number: 2,
    label: "Agnostic / Unsure",
    icon: "🤔",
    color: "#f97316",
    gradient: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
    signal:
      "The respondent is undecided, under-informed, conflicted, or open but unconvinced.",
    guidance:
      "The next follow-up should clarify what keeps them uncertain: lack of evidence, too many religions, bad examples, or simply not enough thought. Keep the tone curious and invitational.",
    questions: [
      "What makes the question of God hard to answer for you?",
      "Have you ever wanted to explore it more seriously?",
      "If God did exist, what kind of God would make sense to you?",
      "How open are you to hearing different perspectives?",
    ],
    cautions: [
      "This branch often has the most openness.",
      'Do not collapse "unsure" into "basically atheist."',
      "A gentle bridge into Jesus or Christianity can happen earlier here than with a firm atheist.",
    ],
    subBranches: null,
  },
  {
    id: "spiritual",
    number: 3,
    label: "Spiritual but Not Religious",
    icon: "✨",
    color: "#a855f7",
    gradient: "linear-gradient(135deg, #a855f7 0%, #9333ea 100%)",
    signal:
      "The respondent may believe in transcendence, meaning, healing, energy, inner life, or personal spiritual practice, but may distrust institutions.",
    guidance:
      "The next follow-up should connect with their spiritual vocabulary before introducing Christian categories. Explore whether they imagine a personal God, an impersonal force, or a self-directed spirituality.",
    questions: [
      "How would you describe your spirituality in your own words?",
      "Do you think of the divine as personal, impersonal, or something else?",
      "Where do your spiritual ideas mostly come from?",
      "What comes to mind when you think about Jesus?",
    ],
    cautions: [
      "Avoid framing religion as the obvious next step.",
      "Institutional distrust may be stronger than theological resistance.",
      "Use bridges such as meaning, longing, peace, forgiveness, identity, and hope.",
    ],
    subBranches: null,
  },
  {
    id: "religious-non-christian",
    number: 4,
    label: "Religious but Not Christian",
    icon: "🕌",
    color: "#0ea5e9",
    gradient: "linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)",
    signal:
      "The respondent already has a faith identity, community, and vocabulary for God or the sacred.",
    guidance:
      "The follow-up should first honor that identity and ask them to describe it, rather than flattening all religions into the same bucket. Then explore their current understanding of Christianity and Jesus.",
    questions: [
      "What role does your faith play in your life right now?",
      "What do you appreciate most about your tradition?",
      "How familiar are you with Christianity?",
      "Who do you understand Jesus to be?",
    ],
    cautions: [
      "Do not turn the next question into debate mode too fast.",
      "The aim at this stage is understanding and respectful contrast, not argument.",
      "Keep comparison questions careful and non-combative.",
    ],
    subBranches: [
      {
        id: "jewish",
        label: "Jewish",
        icon: "✡️",
        questions: [
          "What does being Jewish mean for you: religious, cultural, ethnic, or some combination?",
          "How do you think about God, covenant, and Scripture?",
          "What do you understand Christians to mean when they call Jesus the Messiah?",
        ],
      },
      {
        id: "muslim",
        label: "Muslim",
        icon: "☪️",
        questions: [
          "How central is Islam in your daily life?",
          "What do you understand about Isa (Jesus) in Islam?",
          "How do you see the relationship between Allah, revelation, and previous scriptures?",
        ],
      },
      {
        id: "hindu",
        label: "Hindu",
        icon: "🕉️",
        questions: [
          "Is your practice more philosophical, devotional, temple-based, or cultural?",
          "How do you understand the divine: one reality, many expressions, many gods, or something else?",
        ],
      },
      {
        id: "buddhist",
        label: "Buddhist",
        icon: "☸️",
        questions: [
          "Is your approach more cultural, meditative, philosophical, or devotional?",
          "How do you think about suffering, desire, liberation, and whether ultimate reality is personal?",
        ],
      },
      {
        id: "sikh",
        label: "Sikh",
        icon: "🙏",
        questions: [
          "How do you understand God, devotion, service, and the role of the Gurus?",
          "How familiar are you with Jesus beyond general respect for him?",
        ],
      },
      {
        id: "other",
        label: "Other / Mixed Tradition",
        icon: "🌍",
        questions: [
          "Ask the person to describe the tradition in their own words before comparing it with Christianity.",
        ],
      },
    ],
  },
  {
    id: "christian",
    number: 5,
    label: "Christian",
    icon: "✝️",
    color: "#22c55e",
    gradient: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
    signal:
      "The respondent identifies as Christian, but the depth, clarity, and personal commitment may vary widely.",
    guidance:
      "The next follow-up should distinguish between active faith, cultural identity, inherited label, and uncertain belief. Ask for their own understanding of Jesus and the gospel instead of assuming it.",
    questions: [
      "How would you describe your faith right now—active, cultural, inherited, or uncertain?",
      "What does Jesus mean to you personally?",
      "How would you explain the gospel in your own words?",
      "How much does your faith shape your daily life?",
    ],
    cautions: [
      'This branch is important because some who say "Christian" may have little actual understanding.',
      "Avoid both flattery and suspicion; just clarify.",
      "This path may lead either to encouragement or to a clearer presentation of the gospel.",
    ],
    subBranches: null,
  },
  {
    id: "ex-christian",
    number: 6,
    label: "Used to Be Christian",
    icon: "🚪",
    color: "#f43f5e",
    gradient: "linear-gradient(135deg, #f43f5e 0%, #e11d48 100%)",
    signal:
      "The respondent likely has prior exposure, and may carry disappointment, pain, intellectual objections, or fatigue.",
    guidance:
      "The next follow-up should focus on their story before content. Ask what changed, what they left, and what still feels unresolved. This branch often requires more empathy than explanation at first.",
    questions: [
      "What changed for you?",
      "Was it more intellectual, personal, church-related, or gradual?",
      "Are there parts of Christianity you still find meaningful?",
      "What was your experience with Christians or church communities like?",
    ],
    cautions: [
      'Do not assume they "just want to sin" or that they secretly still believe.',
      "Many ex-Christians know Christian language well, so generic explanations can feel superficial.",
      "Listening well here is more important than speed.",
    ],
    subBranches: null,
  },
  {
    id: "indifferent",
    number: 7,
    label: "Not Really Thought About It",
    icon: "😐",
    color: "#64748b",
    gradient: "linear-gradient(135deg, #64748b 0%, #475569 100%)",
    signal:
      "The respondent is not necessarily resistant; they may simply be busy, unengaged, or untouched by the topic.",
    guidance:
      "The follow-up should be light and relevance-focused. Instead of abstract theology first, ask whether purpose, meaning, stress, suffering, or identity questions matter to them personally.",
    questions: [
      "Have questions about meaning or purpose ever felt important to you?",
      "What tends to matter most to you day to day?",
      "Do spiritual questions feel irrelevant, uninteresting, or just distant?",
      "Would you be open to exploring them if it connected to real life?",
    ],
    cautions: [
      "Do not overload this branch with heavy doctrinal questions too soon.",
      "Concrete life questions work better than abstract apologetics.",
      "This branch often benefits from strong ice-breaker use before triage.",
    ],
    subBranches: null,
  },
  {
    id: "scientific",
    number: 8,
    label: "Scientific / Skeptical Lens",
    icon: "🧪",
    color: "#06b6d4",
    gradient: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",
    signal:
      "The respondent likely values evidence, method, critical thinking, and intellectual consistency. This may overlap with atheism or agnosticism, but should still be treated distinctly.",
    guidance:
      "The next follow-up should explore how they see the relationship between science and faith, instead of assuming those are automatically opposed. This lets the conversation engage their actual framework.",
    questions: [
      "How do you see science and religion relating to each other?",
      "Do you think science can address questions of meaning and morality, or only mechanism?",
      "What kind of evidence would make spiritual claims more plausible to you?",
      "Have you encountered thoughtful Christian perspectives on science?",
    ],
    cautions: [
      "Do not present faith as anti-reason.",
      'Avoid lazy "science cannot explain everything" statements unless handled carefully.',
      "This branch often responds well to precise language and fewer clichés.",
    ],
    subBranches: null,
  },
  {
    id: "ethics",
    number: 9,
    label: "Ethics / Society Focused",
    icon: "⚖️",
    color: "#d946ef",
    gradient: "linear-gradient(135deg, #d946ef 0%, #c026d3 100%)",
    signal:
      "The respondent may care deeply about justice, compassion, service, community, inequality, or social healing, while seeing religion as secondary, mixed, or harmful.",
    guidance:
      "The next follow-up should begin with moral concern and lived values. Explore where they think human dignity, justice, and moral obligation come from, and whether religion helps or harms those goals.",
    questions: [
      "What most shapes your concern for society or justice?",
      "Where do you think human dignity comes from?",
      "Do you see religion as more helpful or harmful in society?",
      "Do you think moral progress needs something beyond social agreement?",
    ],
    cautions: [
      "This branch is often more open to the practical and ethical teachings of Jesus than to religious systems.",
      "Avoid sounding defensive about all religious failures.",
      "A strong bridge here is the person of Jesus and the kind of kingdom he announced.",
    ],
    subBranches: null,
  },
];
