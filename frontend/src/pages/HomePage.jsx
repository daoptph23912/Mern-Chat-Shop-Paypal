import React from 'react'
import Header from "../components/Layout/Header";
import Hero from "../components/Route/Hero/Hero";
import Categories from "../components/Route/Categories/Categories";
import BestDeals from "../components/Route/BestDeals/BestDeals";
import FeaturedProduct from "../components/Route/FeaturedProduct/FeaturedProduct";
import Events from "../components/Events/Events";
import Footer from "../components/Layout/Footer";
import { useSelector } from 'react-redux';
import Loader from '../components/Layout/Loader';

const HomePage = () => {
   const { allProducts, isLoading } = useSelector((state) => state.products);
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header activeHeading={1} />
          <Hero />
          <Categories />
          <BestDeals />
          {/* <Events /> */}
          {/* <FeaturedProduct /> */}
          <Footer /></>
      )}
    </div>
  )
}

export default HomePage