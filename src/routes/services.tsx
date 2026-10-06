import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage } from "@/components/site/SitePages";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Global Trade" },
      { name: "description", content: "Explore global sourcing, supplier coordination, quality considerations, documentation and logistics support." },
      { property: "og:title", content: "Services | Global Trade" },
      { property: "og:description", content: "Practical support through the import and export journey, from first brief to final delivery." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});