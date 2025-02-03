<<<<<<< HEAD
import React, { useEffect, useRef, useState } from 'react';
import Slider from "react-slider"; // Changed to react-slick
import "slick-carousel/slick/slick.css"; // Added import for slick-carousel styles
import "slick-carousel/slick/slick-theme.css"; // Added import for slick-carousel theme
=======
"use client"
import React, {useEffect, useRef, useState} from 'react';
import Slider from "react-slick";
>>>>>>> d2279559e34aa55aa5f93536c6dd07da46fbc730
import arrowRightIcon from "../../../public/images/icons/right-arrow.svg";
import arrowLeftIcon from "../../../public/images/icons/left-arrow.svg";
import Card from './Cards/Card';
import Image from 'next/image';
import { ProductCardTypes } from '../@types/types';
<<<<<<< HEAD
import { fetchProductListByWomens } from '../api/nike-products/productApi';
=======
import { fetchProductListByWomens } from "../api/productApi";
>>>>>>> d2279559e34aa55aa5f93536c6dd07da46fbc730

const ShopWomensSlider = () => {
    const sliderRef = useRef<Slider | null>(null);
    const [womensProducts, setWomensProducts] = useState<ProductCardTypes[]>([]);

    useEffect(() => {
      const fetchData = async () => {
        const products = await fetchProductListByWomens();
        setWomensProducts(products);
      };
      fetchData();
    }, []);

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <Image src={arrowRightIcon} alt="Next" />,
      prevArrow: <Image src={arrowLeftIcon} alt="Previous" />,
    };

    return (
      <div className="pb-10">
        <Slider {...settings} ref={sliderRef}>
          {womensProducts.map((product) => (
            <Card
              key={product._id}
              _id={product._id}
              status={product.status}
              name={product.name}
              color={product.color}
              currentPrice={product.currentPrice}
              shortDescription={product.shortDescription}
              discountedPrice={product.discountedPrice}
              image_url={product.image_url}
            />
          ))}
        </Slider>
      </div>
    );
};

export default ShopWomensSlider;
