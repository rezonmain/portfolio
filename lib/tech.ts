import { title } from "process";

export enum Tech {
  js = "js",
  css = "css",
  html = "html",
  reactjs = "reactjs",
  ts = "ts",
  next = "next",
  d3 = "d3",
  tailwind = "tailwind",
  vba = "vba",
  mongo = "mongo",
  docker = "docker",
  trpc = "trpc",
  vscode = "vscode",
  three = "three",
  python = "python",
  redis = "redis",
  vite = "vite",
  pwa = "pwa",
  puppeteer = "puppeteer",
  sqlite = "sqlite",
}

const tech = {
  reactjs: {
    src: "https://raw.githubusercontent.com/Pedro-Murilo/icons-for-readme/main/.github/react-icon.svg",
    alt: "reactjs icon",
    url: "https://reactjs.org/",
    title: "React.js",
  },
  ts: {
    src: "https://raw.githubusercontent.com/Pedro-Murilo/icons-for-readme/main/.github/typescript-icon.svg",
    alt: "typescript icon",
    url: "https://www.typescriptlang.org",
    title: "Typescript",
  },
  next: {
    src: "https://raw.githubusercontent.com/Pedro-Murilo/icons-for-readme/main/.github/nextjs-icon.svg",
    alt: "nextjs icon",
    url: "https://nextjs.org",
    title: "Next.js",
  },
  d3: {
    src: "https://raw.githubusercontent.com/d3/d3-logo/master/d3.png",
    alt: "d3js icon",
    url: "https://d3js.org/",
    title: "D3.js",
  },
  tailwind: {
    src: "https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg",
    alt: "tailwind css icon",
    url: "https://tailwindcss.com/",
    title: "Tailwind CSS",
  },
  three: {
    src: "/img/three.png",
    alt: "threejs icon",
    url: "https://threejs.org/",
    title: "Three.js",
  },
  js: {
    src: "https://raw.githubusercontent.com/Pedro-Murilo/icons-for-readme/main/.github/js-icon.svg",
    alt: "javascript icon",
    url: "https://developer.mozilla.org/en-US/docs/Web/javascript",
    title: "Javascript",
  },
  html: {
    src: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    alt: "html icon",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    title: "Html 5",
  },
  css: {
    src: "https://raw.githubusercontent.com/Pedro-Murilo/icons-for-readme/main/.github/css-icon.svg",
    alt: "css icon",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    title: "CSS 3",
  },
  vba: {
    src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-k8cyYC06VjI%2FXm9Uaj76SZI%2FAAAAAAAALkc%2FMqiKk07ZN2cJ9z1rlIxgI0WgAI3FWE7wACLcBGAsYHQ%2Fs1600%2F1920px-VB.NET_Logo.svg.png&f=1&nofb=1",
    alt: "vba icon",
    url: "https://docs.microsoft.com/en-us/office/vba/api/overview/",
    title: "Visual Basic",
  },
  mongo: {
    src: "https://avatars.githubusercontent.com/u/45120?s=200&v=4",
    alt: "mongodb icon",
    url: "https://www.mongodb.com/",
    title: "MongoDB",
  },
  docker: {
    src: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png",
    alt: "docker icon",
    url: "https://www.docker.com/",
    title: "Docker",
  },
  trpc: {
    src: "https://trpc.io/img/logo.svg",
    alt: "trpc icon",
    url: "https://trpc.io/",
    title: "tRPC",
  },
  vscode: {
    src: "https://raw.githubusercontent.com/Pedro-Murilo/icons-for-readme/5bbe933ecb81a1650e0041ec6e47ebde0dd4ffb1/.github/vscode-icon.svg",
    alt: "vscode",
    url: "https://code.visualstudio.com/",
    title: "Visual studio code",
  },
  python: {
    src: "/img/python.png",
    alt: "python",
    url: "https://www.python.org/",
    title: "Python",
  },
  redis: {
    src: "/img/redis.png",
    alt: "redis",
    url: "https://redis.io/",
    title: "Redis",
  },
  vite: {
    src: "https://vitejs.dev/logo.svg",
    alt: "vitejs",
    url: "https://vitejs.dev/",
    title: "Vitejs",
  },
  pwa: {
    src: "/img/pwa.png",
    alt: "pwa",
    url: "https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps",
    title: "Progressive web apps",
  },
  puppeteer: {
    src: "https://user-images.githubusercontent.com/10379601/29446482-04f7036a-841f-11e7-9872-91d1fc2ea683.png",
    alt: "puppeteer",
    url: "https://pptr.dev/",
    title: "Puppeteer",
  },
  sqlite: {
    src: "https://upload.wikimedia.org/wikipedia/commons/9/97/Sqlite-square-icon.svg",
    alt: "sqlite",
    url: "https://www.sqlite.org/index.html",
    title: "SQLite",
  },
};

export default tech;
