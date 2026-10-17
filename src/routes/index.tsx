import { createFileRoute } from "@tanstack/react-router";
import { Experience, Hero, Projects, Skills } from "@/components/site/HomeTop";
import { About, Beyond, Contact, Insights } from "@/components/site/HomeBottom";

const title = "Hajar El Khouchali | Data Engineering, AI & Data Science";
const description =
  "Explore Hajar El Khouchali's projects in Data Engineering, AI, Machine Learning, NLP and software development, alongside leadership and entrepreneurship.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Beyond />
      <About />
      <Insights />
      <Contact />
    </main>
  );
}
