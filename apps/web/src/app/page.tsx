import CallToAction from "./components/call-to-action";
import FeaturedJobs from "./components/featured-jobs";
import Hero from "./components/hero";
import HowItWorks from "./components/how-it-works";
import MostPopular from "./components/most-popular";
import Navbar from "./components/navbar";
import ProductCategory from "./components/product-category";
import TopNavbar from "./components/top-nav";

export default function Home() {
  return (
    <>
      <Hero />
      <MostPopular />
      <HowItWorks />
      <ProductCategory />
      <FeaturedJobs />
      <CallToAction />
    </>
  );
}
