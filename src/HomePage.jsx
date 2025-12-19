import { CiUser } from "react-icons/ci";
import { GoPlay } from "react-icons/go";
import Modeling from './img/modeling.png';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Model1 from './img/model1.jpg'
import Model2 from './img/model2.jpg';
import Model3 from './img/model3.jpg';
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Model4 from './img/model4.jpg';
import Model5 from './img/model5.jpg';
import {products} from './product.js';
import { useParams } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { LuTwitter } from "react-icons/lu";
import { PiLinkedinLogoBold } from "react-icons/pi";



function HomePage() {

    const { slug } = useParams();

    const brandProducts = products.filter(
        (product) => product.brand === slug
    );

    gsap.registerPlugin(ScrollTrigger,ScrollSmoother);

    useGSAP(() => {

        let section4 = gsap.timeline({
            scrollTrigger: {
                trigger: '.section4',
                start: '60% 40%',
                toggleActions: 'play none none none'
            }
        });


        section4.from([
            '#paragraph',
            '#paragraph1',
            '#title'
        ], {
            opacity: 0, duration: 0.8, scale: 0, ease: 'power1.in'
        })
        .from('.product-box', { opacity: 0, y: 100, duration: 1, ease: 'power1'})


        let tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: '.section2',
                pin: true,
                start: '100% 100%',
                end: '+=100%',
                toggleActions: 'play none none none',
          }
        });



        tl1.addLabel('start')
        .fromTo('.leftSection', { opacity: '0', x: -200, duration: 1 }, { opacity: '1', x: 0, duration: 1 })
        .fromTo('.middleSection', { opacity: '0', scale: 0, duration: 1}, { opacity: '1', scale: 1, duration: 1})
        .fromTo('.rightSection', { opacity: 0, duration: 1, y: 500 }, { opacity: 1, duration: 0.5, y:0})
        .fromTo('#paragh1', { opacity: 0, x: 200, duration: 0.5}, { opacity: 1, x:0 , duration: 0.5})
        .fromTo('#paragh2', { opacity: 0, x: -200, duration: 0.5}, { opacity: 1, x:0 , duration: 0.5})


        let tl = gsap.timeline();

        tl.fromTo('#ModelPhoto', {
            position: 'absolute',
            top: '15%',
            right: '31%',
            delay: '2',
            ease: 'power1.in',
        },
        {
            position: 'absolute',
            top: '38%',
            right: '31%',
            delay: '2',
            ease: 'power1.in',
        })
        .fromTo([
            '.navContent',
            '.navSection',
            '.navSection1'], {
                display: 'none',
                opacity: '0.2',
                delay: '0.3',
                ease: 'power1',
                x: '-300'
            },
            {
                display: 'flex',
                opacity: '1',
                delay: '0.3',
                ease: 'power1',
                x: 0
            }
        )
        

    })


    return (
        <>
        <div className="container">
            <div className="navBar">
                <img id="ModelPhoto" src={Modeling} alt="Model" />
                <div className="logo">
                    <h1>Ammar</h1>
                </div>
                <div className="navLinks">
                    <a href="1">SHOP</a>
                    <a href="2">MEN</a>
                    <a href="3">WOMEN</a>
                    <a href="4">TRENDING</a>
                </div>
                <div className="navLinks1">
                    <a href="5">SESONAL</a>
                    <a href="6">ACCESSORIES</a>
                    <a style={{backgroundColor: 'black', color: 'white'}} href="7">SHOP NOW</a>
                    <a style={{borderRadius: '50%', width: '23px', color: 'white', backgroundColor: 'black'}} href="8"><CiUser size={20} /></a>
                </div>
                <div className="navContent">
                    <h1 style={{fontSize: '43px', fontWeight: '500'}}>GEAR UP EVERY SEASON &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EVERY WOR</h1>
                    <div className="buttons">
                    <button style={{color: 'white', backgroundColor: 'black'}}>
                        SHOP NOW
                    </button>
                    <button id="ExpAll" style={{color: 'black', backgroundColor: 'white'}}>
                        EXPLORE ALL
                    </button>
                    </div>
                </div>
                <div className="navSection">
                    <GoPlay size={60}/>
                </div>
                <div className="navSection1">
                    <p>Stay cozy withou compromising your range of motion.Our women's winter range is perfect for those chilly outdoor workouts.</p>
                </div>
            </div>
            <div className="section2">
                <h1>WOODOUT</h1>
                <div className="leftSection">
                    <img src={Model1} alt="Model" />
                </div>
                <div className="middleSection">
                    <img src={Model2} alt="" />
                </div>
                <div className="rightSection">
                    <img src={Model3} alt="Model" /> 
                </div>
                <p id="paragh1" style={{top: '7.5%', right: '7.8%'}}>Stay warm, stay fit. Our winter workout wear blends insulation with flexiblity to keep you goind in toughest conditions.</p>
                <p id="paragh2" style={{bottom: '5%', left: '6%'}}>Performance-driven gear for men-built for summer heat and winted cold.</p>
            </div>
            <div className="section3">
                <p style={{ position: 'absolute', left: '5.5%'}}>
                    OUR TOP PICKS
                </p>
                <h2>
                    TOP WORKOUT GEAR FOR PEAK PERFOMANCE!s
                </h2>
                <p style={{ opacity: '0.7' ,position: 'absolute', right: '5%', top: '5%'}}>
                    Discover the best of our collection, designed to power your workouts all year round.
                </p>
                <div className="cards">
                    <div className="card1">
                        <h1 style={{ color: '#ffffffff', top: '30%', left: '23%'}}>TOP GEAR FOR PEAK PERFORMA NICE!</h1>
                        <img src={Model4} alt="Model" />
                    </div>
                    <div className="card2">
                        <h1 style={{ top: '60%', right: '28%', color: '#ffffff'}}>LATEST STYLES AND INNOVATIONS IN GEAR</h1>
                        <img src={Model5} alt="Model" />
                    </div>
                </div>
            </div>
            <div className="section4">
                <div className="aboutBox">
                    <p id="paragraph">NEW ARRIVAL</p>
                    <h1 id="title">FRESH FITS FOR YOU</h1>
                    <p id="paragraph1">ALL BRANDS</p>
                </div>
                <div className="boxes">
                        {brandProducts.map((product) => (
                            <div key={product.id} className="product-box">
                            <img id="images" src={product.image} alt={product.name} />
                            <div className="product-card-dtl">
                                <p>${product.price}</p>
                                <h5>{product.name}</h5>
                                <IoIosArrowForward id="icon" size={25} />
                            </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
            <div className="footer">
                <div className="leftFooter">
                    <div className="aboutUs">
                        <p>2261 MARKET STREET 409 SAN FRANCISCO 94112</p>
                        <p id="prgh"><span></span>All systems normal</p>
                        <div className="socialMedia">
                            <FaInstagram size={30} />
                            <LuTwitter size={30} />
                            <PiLinkedinLogoBold size={30} />
                        </div>
                    </div>
                </div>
                <div className="rightFooter">
                    <div className="links1">
                        <p><strong>Documentation</strong></p>
                        <p>Getting Started</p>
                        <p>API Reference</p>
                        <p>Integrations</p>
                        <p>Examples</p>
                        <p>SDKs</p>
                    </div>
                    <div className="links2">
                        <p><strong>Resource</strong></p>
                        <p>Changelog</p>
                        <p>Pricing</p>
                        <p>Status</p>
                        <p>Webhooks</p>
                    </div>
                    <div className="links3">
                        <p><strong>Company</strong></p>
                        <p>Blog</p>
                        <p>Contact</p>
                        <p>Costumers</p>
                        <p>Brand</p>
                    </div>
                    <div className="links4">
                        <p><strong>Legal</strong></p>
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                    </div>
                </div>
            </div>
            </>
    )
};

export default HomePage;