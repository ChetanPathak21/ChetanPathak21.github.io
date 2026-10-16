export interface LearningCategory {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  badge?: string;
  description: string;
  items: string[];
}

export interface SocialLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface ProfileData {
  name: string;
  role: string;
  degree: string;
  hero: {
    nameDisplay: string;
    tagline: string;
    headline: string;
    intro: string;
  };
  about: {
    heading: string;
    paragraphs: string[];
  };
  skills: {
    heading: string;
    description: string;
    categories: SkillCategory[];
  };
  learning: {
    heading: string;
    subheading?: string;
    categories: LearningCategory[];
  };
  currentFocus: {
    heading: string;
    text: string;
  };
  contact: {
    heading: string;
    description: string;
    email: string;
    github?: string;
    linkedin?: string;
  };
  footer: {
    degree: string;
    description: string;
  };
}

export const profileData: ProfileData = {
  name: "Chetan Pathak",
  role: "B.Tech CSE (Artificial Intelligence) Student",
  degree: "B.Tech CSE (Artificial Intelligence)",
  hero: {
    nameDisplay: "CHETAN PATHAK",
    tagline: "B.Tech CSE (Artificial Intelligence) Student",
    headline: "Curious mind. Constant learning. Building what's next.",
    intro:
      "I'm a computer science student exploring programming, problem-solving, and the foundations of software development. I'm focused on learning the fundamentals, improving through practice, and gradually turning ideas into useful things.",
  },
  about: {
    heading: "A little about me.",
    paragraphs: [
      "I'm Chetan, a B.Tech student specializing in Computer Science and Engineering (Artificial Intelligence). I'm developing my programming skills and building a strong foundation in computer science.",
      "I enjoy understanding how technology works, approaching problems logically, and learning concepts step by step. My goal is to grow into a capable software engineer through consistent practice and practical learning.",
    ],
  },
  skills: {
    heading: "Technical Skills",
    description:
      "Languages and foundations studied as part of my B.Tech coursework, alongside core topics I am actively practicing.",
    categories: [
      {
        title: "Programming Languages",
        badge: "Coursework",
        description:
          "Studied in college coursework for procedural logic, system concepts, and scripting.",
        items: ["C", "Python"],
      },
      {
        title: "Data Structures & Algorithms",
        badge: "Active Focus",
        description:
          "Currently learning and practicing core DSA implementations using C.",
        items: [
          "Pointers & Memory",
          "Arrays & Strings",
          "Linked Lists",
          "Stacks & Queues",
          "Basic Recursion",
        ],
      },
      {
        title: "Core Computer Science",
        badge: "Academic",
        description:
          "Foundational theory and practical skills supporting structured software development.",
        items: [
          "Object-Oriented Concepts",
          "Algorithm Logic",
          "Problem Decomposition",
          "Git & Terminal Basics",
        ],
      },
    ],
  },
  learning: {
    heading: "What I'm Learning",
    categories: [
      {
        id: "programming",
        number: "01",
        title: "Programming",
        description:
          "Learning programming fundamentals, code structure, and writing readable code.",
      },
      {
        id: "problem-solving",
        number: "02",
        title: "Problem Solving",
        description:
          "Improving logical reasoning and learning to break complex problems into smaller steps.",
      },
      {
        id: "computer-science",
        number: "03",
        title: "Computer Science",
        description:
          "Exploring data structures, algorithms, and core computer science concepts.",
      },
      {
        id: "artificial-intelligence",
        number: "04",
        title: "Artificial Intelligence",
        description:
          "Developing an understanding of AI fundamentals and the ideas behind intelligent systems.",
      },
    ],
  },
  currentFocus: {
    heading: "One step at a time.",
    text: "Right now, I'm focused on strengthening my programming fundamentals, improving my problem-solving skills, and learning the concepts that form the foundation of good software engineering.",
  },
  contact: {
    heading: "Have something in mind?",
    description:
      "I'm open to connecting with fellow students, developers, and people who enjoy learning and building things.",
    email: "aayanshpathak130@gmail.com",
    github: "https://github.com/ChetanPathak21",
    linkedin: "https://www.linkedin.com/in/chetan-pathak-7b74b3424/",
  },
  footer: {
    degree: "B.Tech CSE (Artificial Intelligence)",
    description:
      "Dedicated to foundational computer science, logical problem solving, and modern software development.",
  },
};
