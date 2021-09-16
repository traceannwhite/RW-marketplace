import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import Component from "../utils/user";

export default function Home() {
  return (
    <div className="home-page">
      <Component />
      <Hero />
      <FeaturedProducts />
    </div>
  );
}
