import React from 'react';
import HeroSection from '../components/LandingPages/HeroSection';
import TrendingCategories from '../components/LandingPages/TrendingCategories';
import PopularFonts from '../components/LandingPages/PopularFonts';
import PopularGraphics from '../components/LandingPages/PopularGraphics';
import StaffPicks from '../components/LandingPages/StaffPicks';
import BlogsSlide from '../components/LandingPages/BlogsSlide';
import JoinShop from '../components/LandingPages/JoinShop';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <TrendingCategories />
      <PopularFonts />
      <PopularGraphics />
      <StaffPicks />
      <BlogsSlide />
      <JoinShop />
    </>
  );
};

export default HomePage;
