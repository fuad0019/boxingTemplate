import IntroSection from "../sections/IntroSection";
import ScheduleSection from "../sections/ScheduleSection";
import environemnt from '../assets/images/environment.jpeg'
import ProductSection, { Detail } from "../sections/ProductSection";
import { useState, useEffect, useRef } from "react";
import getProducts from "../services/productService";
import ProductDetail from "../sections/ProductDetail";
import { useLocation } from "react-router-dom";
import { useLanguageContext } from "../contexts/LanguageContext";

function Products() {

    const [products, setProducts] = useState<Detail[]>([]);

    const location = useLocation();
    const state = location.state;
    const [productIndex, setProductIndex] = useState<number>(0);
    const productDetailRef = useRef<HTMLDivElement>(null);
    const { languages, setActiveLanguage, language } = useLanguageContext();

    const handleProductIndex = (index: number) => {
        console.log(index)
        setProductIndex(index);
        if (productDetailRef.current) {
            const navbarHeight = 100; // Replace with the actual height of your navbar
            const offset = productDetailRef.current.offsetTop - navbarHeight;
            window.scrollTo({ top: offset, behavior: 'smooth' });
        }
    };

    // Usage example:
    // handleProductIndex(2);
    console.log(productIndex)

    useEffect(() => {



        (async () => {

            console.log("onActionClick function:", handleProductIndex);
            setProductIndex(state)


            try {
                let newProducts = await getProducts()
                console.log(newProducts)
                setProducts(newProducts);
            } catch (error) {
                console.error('Error fetching products:', error);
            }


        })();


    }, []);



    return (
        <div >

            <div>
                <IntroSection title={language.file.products.intro.title} description={language.file.products.intro.description} image={environemnt} backgroundPosition="25% 20%"></IntroSection>
            </div>

            <div style={{marginTop: 70}} >
                <ProductDetail productDetailRef={productDetailRef} products={products} productIndex={productIndex}></ProductDetail>
            </div>

            <div>
                <ProductSection details={products as Detail[]} subject='Explore Our Premium Selection' onActionClick={handleProductIndex}></ProductSection>
            </div>



        </div>



    )

}

export default Products;