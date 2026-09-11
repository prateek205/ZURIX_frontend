import React from "react";
import HeroSection from "../components/HomePage/HeroSection";
import Category from "../components/homePage/Category";
import PaletteEdit from "../components/homePage/PalletteSection";
import CuratedCollections from "../components/homePage/CurattedSection";
import TrendingProducts from "../components/homePage/TrendingProduct";
import StylingGuide from "../components/homePage/StylingGuide";
import CollectionBanner from "../components/homePage/CollectionBanner";
import EditorialCollections from "../components/homePage/EditorialCollection";
import Testimonials from "../components/homePage/Testimonail";

const HeroPage = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <Category />
      <PaletteEdit />
      <CuratedCollections />
      <TrendingProducts />
      <StylingGuide />
      <CollectionBanner />
      <EditorialCollections />
      <Testimonials />
    </div>
  );
};

export default HeroPage;
