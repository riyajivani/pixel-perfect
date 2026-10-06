import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/site/SitePages";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Global Trade" },
      { name: "description", content: "Learn about the clear, careful approach behind Global Trade's import, export and sourcing support." },
      { property: "og:title", content: "About | Global Trade" },
      { property: "og:description", content: "A thoughtful international trade partner, focused on clarity, quality and coordination." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});