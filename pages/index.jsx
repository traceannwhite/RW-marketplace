import Head from "next/head";
import NavBar from "../components/NavBar";
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
