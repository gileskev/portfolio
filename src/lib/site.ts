export const site = {
  name: "Kevin Giles",
  title: "Kevin Giles | Builder & Travel Entrepreneur",
  tagline: "I build software and plan unforgettable cruise journeys.",
  description:
    "Portfolio of Kevin Giles: web apps, a cruise excursion finder and an aircraft tracker, plus notes from building them.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: "hello@example.com", // TODO: replace with your real address
  links: {
    github: "https://github.com/your-username", // TODO
    linkedin: "https://www.linkedin.com/in/your-profile", // TODO
    agency: "https://www.theevertravelingnest.com", // TODO: confirm agency URL
  },
} as const;

export type Project = {
  slug: string;
  name: string;
  summary: string;
  status: "Live" | "In progress" | "Planned";
  stack: string[];
  description: string[];
  href?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    slug: "portfolio",
    name: "This Portfolio",
    summary: "The site you are on, built with Next.js and deployed on Vercel.",
    status: "Live",
    stack: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Vercel"],
    description: [
      "A fast, accessible portfolio built with the Next.js App Router and Tailwind CSS.",
      "Blog posts are written in MDX, the contact form runs on a serverless route, and every push to GitHub deploys automatically through Vercel.",
    ],
  },
  {
    slug: "cruise-excursions",
    name: "Cruise Excursion Finder",
    summary:
      "Find shore excursions by port of call for ocean and river cruises, powered by the Viator API.",
    status: "In progress",
    stack: ["Next.js", "TypeScript", "Viator API", "Tailwind CSS"],
    description: [
      "A tool for my travel agency clients. Pick your cruise port, whether on an ocean or river itinerary, and see available excursions with pricing, duration and reviews.",
      "Built on the Viator Partner API with server-side caching so results stay fast and API keys stay private.",
    ],
  },
  {
    slug: "plane-tracker",
    name: "Overhead Plane Tracker",
    summary: "A Python tracker that identifies aircraft flying over my house.",
    status: "Planned",
    stack: ["Python", "ADS-B", "Raspberry Pi"],
    description: [
      "A Python app that listens to ADS-B data, works out which aircraft are passing overhead, and logs flight, airline, route and altitude.",
      "Planned features include a live view, notifications for interesting flights, and a history of everything that has flown over.",
    ],
  },
];

export const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Python",
  "REST APIs",
  "Git & GitHub",
  "Vercel",
];
