import { createFileRoute } from "@tanstack/react-router";
import { GlobalPresencePage } from "@/components/site/SitePages";

export const Route = createFileRoute("/global-presence")({
  head: () => ({
    meta: [
      { title: "Global Presence | Global Trade" },
      { name: "description", content: "Discuss a destination, sourcing origin and the details that shape a cross-border trade opportunity." },
      { property: "og:title", content: "Global Presence | Global Trade" },
      { property: "og:description", content: "Explore regional trade considerations and start a conversation about your target market." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GlobalPresencePage,
});