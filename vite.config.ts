import { defineConfig } from "vite";

export default defineConfig({
  // Vercel serves at the domain root; GitHub Pages serves this project below its repository name.
  base: process.env.GITHUB_ACTIONS ? "/Engineer-Portfolio/" : "/"
});
