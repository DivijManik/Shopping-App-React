import './ProductDetails.css';

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { useState, useEffect } from 'react';

import TopBar from '../TopBar/TopBar';
import Footer from '../Footer/Footer';

const API_URL = 'https://fakestoreapi.com/products';

function ProductDetails() {

    //const { state } = useLocation();

    // Instead of getting from state we are taking id from URL
    const search = window.location.search;
    const query = new URLSearchParams(search);

    //let id = state.id;
    let id = query.get('id');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [productData, setProductData] = useState("");

    const fetchProducts = async () => {

        const response = await fetch(API_URL + "/" + id)//this.props.location.state.id);
        const data = await response.json();

        setProductData(data);
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className='MainParent'>
            <br /><br />
            {/* <Link to={"/"}>Go Back</Link> */}

            <img className='ProductImg' src={productData.image}></img>
            <div className='AboutProduct'>
                <h3 style={{ fontWeight: 500 }}>{productData.title}</h3>

                <h4 className='ratingTop'>{productData.rating?.rate} </h4>
                <a> ({productData.rating?.count} Ratings)</a>

                {productData.price != null ?
                    <h1>₹{(productData.price * 80).toString().split(".")[0]}</h1>
                    :
                    <h1>₹</h1>}


                <div className='OffersDiv'>
                    <h3>Available offers</h3>

                    <a style={{ fontWeight: 600 }} className='OfferSubHead'>Bank Offer </a> <a>5% Unlimited Cashback on Shopkart Credit Card <a href='#'>T&C</a></a>
                    <br /> <br />
                    <a style={{ fontWeight: 600 }} className='OfferSubHead'>Bank Offer </a> <a>Flat 10% off on HDBR Bank Credit Card EMI Txns on 6 and 9 months tenure, Min. Txn Value: $50 <a href='#'>T&C</a></a>
                    <br /> <br />
                    <a style={{ fontWeight: 600 }} className='OfferSubHead'>Bank Offer </a> <a>Special Price Get extra $10 off (price inclusive of cashback/coupon) Min. Txn Value: $70 <a href='#'>T&C</a></a>
                    <br /> <br />
                </div>

                <br />

                <h3>Product Description</h3>
                <hr />
                <p className='Description'>
                    {productData.description}</p>

                <br />

                <h3>Product Category</h3>
                <hr />
                <a href='#' className='CategoryBody'>{productData.category}</a>

                <br /><br />

                <h3>Ratings & Reviews</h3>
                <hr />

                <h2 className='ratingBottom'>{productData.rating?.rate} </h2>
                <br></br>
                <a>Total No. of Ratings : </a> <a className='RateCount'>{productData.rating?.count}</a>

                <br /><br />

                <button className='CartBtn'> Add to cart</button>

                <br /><br />
            </div>

            <TopBar />
            <Footer />
        </div>
    )
}

export default ProductDetails;