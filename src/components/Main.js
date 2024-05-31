import restaurantfood from '../images/restauranfood.jpg'
import Card from './Card';
import greekSalad from '../images/greek salad.jpg';
import lemonDesert from '../images/lemon dessert.jpg'
import bruchetta from '../images/bruchetta.svg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import aboutImage from '../images/home-about-sec.png'
import Testimonial from './Testimonial';
import testim1 from '../images/testim1.jpg'
import testim2 from '../images/testim2.jpg'
import testim3 from '../images/testim3.jpg'
import {Link} from 'react-router-dom'

const Main = () => {
    let settings = {
       
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        
    };
    return (
        <>
            <section className="hero-section">
                <div className="overlay">
                    <div className="row container">
                        <div className="col-lg-6 image-col col-sm-12">
                            <img src={restaurantfood} alt="restaurantfood" />
                        </div>
                        <div className="col-lg-6 content-col col-sm-12">
                            <h1 className='banner-heading'>Little Lemon</h1>
                            <span className='banner-subheading'>Chicago</span>
                            <p className='banner-text'>Experience farm-to-table dining with locally sourced ingredients and exquisite wines!</p>
                            <Link className='btn btn-warning banner-btn' to="/booking">Book a Table</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className='specials'>
                <div className='container row'>
                    <div className='col-6'>
                        <h2>Specials</h2>
                    </div>
                    <div className='col-6 text-right'>
                        <button className='btn btn-success'>Online Menu</button>
                    </div>
                </div>

                <div className='container row desk-slider'>
                   
                    <div className='col-lg-4 col-sm-12'>
                        <Card image={greekSalad} title={'Greek Salad'}/>
                    </div>
                    <div className='col-lg-4 col-sm-12'>
                        <Card image={lemonDesert} title={'Lemon Desert'}/>
                    </div>
                    <div className='col-lg-4 col-sm-12'>
                        <Card image={bruchetta} title={'Bruchetta'}/>
                    </div>
                   
                </div>

                <div className='container row mob-slider'>
                   <Slider {...settings}>
                    <div className='col-lg-4 col-sm-12'>
                        <Card image={greekSalad} title={'Greek Salad'}/>
                    </div>
                    <div className='col-lg-4 col-sm-12'>
                        <Card image={lemonDesert} title={'Lemon Desert'}/>
                    </div>
                    <div className='col-lg-4 col-sm-12'>
                        <Card image={bruchetta} title={'Bruchetta'}/>
                    </div>
                    </Slider>
                </div>
            </section>

            <section className='testimonial'>
                <div className='container row'>
                    <div className='col-6'>
                    <h2>Testimonials</h2>
                    </div>
                </div>
                <div className='container row desk-slider'>
                    <div className='col-lg-4'>
                        <Testimonial image={testim1} title='John' review='Delicious food, cozy atmosphere, excellent service!'/>
                    </div>
                    <div className='col-lg-4'>
                        <Testimonial image={testim2} title='Lauren' review='Fresh ingredients, creative dishes, worth every penny.'/>
                    </div>
                    <div className='col-lg-4'>
                        <Testimonial image={testim3} title='David' review='Friendly staff, vibrant decor, highly recommend!'/>
                    </div>
                </div>

                <div className='container row mob-slider'>
                   <Slider {...settings}>
                   <div className='col-lg-4'>
                        <Testimonial image={testim1} title='John' review='Delicious food, cozy atmosphere, excellent service!'/>
                    </div>
                    <div className='col-lg-4'>
                        <Testimonial image={testim2} title='Lauren' review='Fresh ingredients, creative dishes, worth every penny.'/>
                    </div>
                    <div className='col-lg-4'>
                        <Testimonial image={testim3} title='David' review='Friendly staff, vibrant decor, highly recommend!'/>
                    </div>
                    </Slider>
                </div>
            </section>

            <section className='about' id='about'>
                <div className='container row'>
                    <div className='col-lg-6 col-sm-12'>
                        <div className='about-img'>
                        <img src={aboutImage} alt='about'/>
                        </div>
                        
                    </div>
                    <div className='col-lg-6 col-sm-12'>
                        <h2>About Little Lemon Restaurant</h2>
                        <p>Nestled in the heart of downtown, Little Lemon is a delightful culinary gem known for its vibrant Mediterranean cuisine and warm, inviting atmosphere. This cozy restaurant, adorned with rustic wooden tables and a charming array of lemon-themed decor, creates an ambiance that feels both intimate and lively. The menu at Little Lemon is a celebration of fresh, locally-sourced ingredients, with a focus on Greek and Italian flavors.</p>
                        <p>Signature dishes include succulent grilled lamb skewers, fragrant lemon-herb chicken, and a variety of fresh seafood options that transport diners straight to the Mediterranean coast. Vegetarian offerings are equally enticing, featuring dishes like stuffed grape leaves and a robust Greek salad bursting with the flavors of ripe tomatoes, crisp cucumbers, and tangy feta cheese.</p>
                        <p>Little Lemon's commitment to quality extends to their wine list, which features a curated selection of Mediterranean wines that perfectly complement their dishes. The friendly and attentive staff enhance the dining experience, making guests feel like part of the family.</p>
                       
                    </div>
                </div>
            </section>

            
        </>

    )
}

export default Main