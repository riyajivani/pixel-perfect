import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/site/SitePages";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Global Trade" },
      { name: "description", content: "Send a trade enquiry with your product, company, country and sourcing or shipping requirements." },
      { property: "og:title", content: "Contact | Global Trade" },
      { property: "og:description", content: "Start a conversation about your sourcing, import or export requirements." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});