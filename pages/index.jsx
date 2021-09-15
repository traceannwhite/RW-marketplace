import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";

export default function Home() {
  return (
    <div className="home-page">
      <Hero />
      <FeaturedProducts />
    </div>
  );
}
