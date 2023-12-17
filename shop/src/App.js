import React from "react";
import Header from "./components/Header";
import PopularCategories from "./components/PopularCategories";
import PopularProducts from "./components/PopularProducts";
import Subscriber from "./components/Subscriber";
import Footer from "./components/Footer";
import FollowUsInstagram from "./components/FollowUsInstagram";
import PromotionalBanner from "./components/PromotionalBanner";
import SummerSaleBanner from "./components/SummerSaleBanner";
import HeaderOptions from "./components/HeaderOptions";
import Serach from "./components/Serach";

function App() {
  return (
    <div>
      <div className="mx-52 ">
        <HeaderOptions />
        <Serach />
      </div>

      <Header />
     <div className="mx-52">
      <PromotionalBanner />
      <PopularCategories />
      <PopularProducts />
      <SummerSaleBanner />
      <FollowUsInstagram />
      <Subscriber />
      </div>

      <Footer />
    </div>
  );
}

export default App;
