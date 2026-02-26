export const metadata = {
  title: "Wuan | Open Source Solutions",
  description: "Construimos software escalable, transparente y colaborativo.",
};

import Hero from "@/components/hero-home";
import FeaturesPlanet from "@/components/features-planet";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesPlanet />
    </>
  );
}
