import Banners from './Banners';

import './App.css';
import { useState, useEffect } from 'react';
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import TopBar from './Components/TopBar/TopBar.jsx';
import Footer from './Components/Footer/Footer.jsx';

// Carousel Btns - Custom Component
import CarouselBtns from './Components/CarouselBtns/CarouselBtns.js';

import { Link } from 'react-router-dom';
// ----------------------------------------------------------------//

// API url ->
const API_URL = 'https://fakestoreapi.com/products';

// Pages
const Pages = ['Home', 'ProductPage'];

function App() {
  const [productData, setProductData] = useState("");

  const fetchProducts = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();

    setProductData(data);
  }

  const [CurrentPage, setCurrentPage] = useState(Pages[0]);
  const [productId, setProductID] = useState(1);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="App">

      {/* Pages */}
      {
        CurrentPage == "Home" ?
          <HomePage productData={productData} SetCurrentPage={setCurrentPage} SetProductID={setProductID} />
          :
          <></>
        // <Link to={'product'}>Blog</Link>
        // <ProductDetails ProductId={productId} SetCurrentPage={setCurrentPage} />
      }

      <TopBar />
      <Footer />
    </div >
  );
}

// Home Page -
function HomePage({ productData, SetCurrentPage, SetProductID }) {
  return (
    <div className='Content'>

      <div className='CarouselParent'>
        <Carousel autoPlay={true} showStatus={false} showThumbs={false} infiniteLoop={true} renderArrowNext={CarouselBtns[0]} renderArrowPrev={CarouselBtns[1]}>
          <div className='CarouselItem'>
            <img src={Banners[0]}></img>
          </div>
          <div className='CarouselItem'>
            <img src={Banners[1]}></img>
          </div>
          <div className='CarouselItem'>
            <img src={Banners[2]}></img>
          </div>
        </Carousel>
      </div>

      <ProductList Data={productData} SetCurrentPage={SetCurrentPage} SetProductID={SetProductID} />
      <ProductList Data={productData} Category='electronics' SetCurrentPage={SetCurrentPage} SetProductID={SetProductID} />
      <ProductList Data={productData} Category='jewelery' SetCurrentPage={SetCurrentPage} SetProductID={SetProductID} />
    </div >
  )
}

function ProductList({ Data, Category = "", SetCurrentPage, SetProductID }) {
  return (
    <div className='ProductListParent'>
      {Category != "" ?
        <h2 className='PL_Heading'>{Category}</h2> :
        <h2>Best seller</h2>}

      <div className='ProductList'>

        {Data?.length > 0 ? (
          <>
            {
              Data.map((data) =>
                (<Product ProductData={data} ProductCategory={Category} SetCurrentPage={SetCurrentPage} SetProductID={SetProductID} />))
            }
          </>)
          : (
            <div className='empty'>
              <h2>No products found</h2>
            </div>)}

      </div>
    </div>
  )
}

function Product({ ProductData, ProductCategory = "", SetCurrentPage, SetProductID }) {
  return (

    // Check if product info will be shown or not
    // Based on category
    <>
      {
        ProductCategory == "" ?
          (
            <ProductInfo ProductData={ProductData} SetCurrentPage={SetCurrentPage} SetProductID={SetProductID} />
          )
          :
          ProductData.category == ProductCategory ?
            (
              <ProductInfo ProductData={ProductData} SetCurrentPage={SetCurrentPage} SetProductID={SetProductID} />
            )
            : <></>
      }
    </>
  )
}

function ProductInfo({ ProductData, SetCurrentPage, SetProductID }) {

  // function OnProductClick(ProductId) {
  //   SetProductID(ProductId);
  //   SetCurrentPage(Pages[1]);
  // }

  let data = { id: ProductData.id };
  let id_ = ProductData.id;

  return (
    <Link to={'product?id=' + id_} state={data} style={{ color: 'black' }} className='ProductLink'>
      <div className='Product'> {/*onClick={() => OnProductClick(ProductData.id)}> */}
        <div className='ProductImgContainer'>
          <img src={ProductData.image}></img>
        </div>
        <p className='ProductTitle'>{ProductData.title}</p>
        <h5 className='ProductPrice'>${ProductData.price}</h5>
      </div>
    </Link>
  )
}

// User Data

export default App;
