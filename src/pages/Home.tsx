
import {useRef} from 'react';
import { Button } from '@mui/material';


import BlogSection from '../sections/BlogSection';
import { Team } from '../sections/BlogSection';
import HeroSection from '../sections/heroSections/FullTextHero';


import boxingImage from '../assets/images/boxingtraining.jpg';
import Frereane from '../assets/images/productFrereana.jpg';
import Remedy from '../assets/images/native.jpg';
import Cancer from '../assets/images/environment.jpg';
import native from '../assets/images/native.jpg';
import worker from '../assets/images/product.jpeg';

import skincare from '../assets/images/skincare.jpg';
import carteriProduct from '../assets/images/productFrankincense.jpg';
import myrr from '../assets/images/productMyrr.jpg';

import TeamDetailSection, { Detail } from '../sections/DetailSection';
import BufferSection from '../sections/BufferSection';
import MapSection from '../sections/MapSection';
import AdvantageSection from '../sections/AdvantageSection';
import ProductSection from '../sections/ProductSection';
import ParallexSection from '../sections/ParallexContainer';


function Home() {

    const myRef = useRef(null);


    const scrollToRef = (ref: React.MutableRefObject<any>) => {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };


    
  


    const products: Detail[] = [
        {
            title: 'Carterii Resin:',
            description: 'Perfect for perfumery and medicinal applications.'
,
            image: carteriProduct,
       
        }
        ,
        {
            title: 'Frereana Resin',
            description: ' Ideal for skincare and ceremonial uses.'
,
            image: Frereane,
       
        },{
            title: 'Commiphora Myrrha',
            description: 'Known for its healing properties and aromatic allure.'
,
            image: myrr
       
        }

    ]

    const articles: Detail[] = [
        {
            title: 'Frankincense for Meditation',
            description: 'Discover how frankincense can enhance your meditation practice and promote relaxation and focus.',
            image: worker },
           
        {
            title: 'Frankincense for Cancer Treatment',
            description: 'Learn about the Cancer benefits of frankincense, including its anti-aging and moisturizing properties.',
            image: Cancer 
        },
        {
            title: 'Frankincense for Respiratory Health',
            description: 'Explore how frankincense can support respiratory health and help alleviate symptoms of respiratory conditions.',
            image: Remedy
        },
        {
            title: 'Frankincense for Skin Care',
            description: 'Explore how frankincense can support respiratory health and help alleviate symptoms of respiratory conditions.',
            image: skincare
        }
    ]


    return (



        <div >


            <div >
                <HeroSection scrollTo={()=>scrollToRef(myRef)} ></HeroSection>
            </div>




            <div ref={myRef} >
                <ProductSection details={products} subject='Explore Our Premium Selection'></ProductSection>
            </div>


            <div >
                <BufferSection buttonText='read more'></BufferSection>
            </div>
           
         <div >
                <BlogSection teams={articles}></BlogSection>
            </div>

            
            
       


           
          
    



            


        </div>
    )

}

export default Home;