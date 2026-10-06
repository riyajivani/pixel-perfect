import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site/SitePages";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Global Trade | Connecting markets with care" },
      { name: "description", content: "Thoughtful sourcing, dependable import and export coordination, and clear international trade support." },
      { property: "og:title", content: "Global Trade | Connecting markets with care" },
      { property: "og:description", content: "Thoughtful sourcing and dependable trade, from first conversation to final delivery." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <HomePage />;
}
