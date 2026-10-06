import { createFileRoute } from "@tanstack/react-router";
import { ProductsPage } from "@/components/site/SitePages";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products | Global Trade" },
      { name: "description", content: "Explore illustrative agricultural, industrial and consumer product areas for import and export enquiries." },
      { property: "og:title", content: "Products | Global Trade" },
      { property: "og:description", content: "Discover product categories and start a focused sourcing conversation." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProductsPage,
});