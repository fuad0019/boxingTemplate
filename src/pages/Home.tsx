
import { useEffect, useRef, useState } from 'react';


import BlogSection from '../sections/BlogSection';
import HeroSection from '../sections/heroSections/FullTextHero';



import BufferSection from '../sections/BufferSection';
import ProductSection, { Detail } from '../sections/ProductSection';
import getProducts from '../services/productService';
import getArticles from '../services/articleService';
import { useNavigatorContext } from '../contexts/NavigateContext';
import { ShowcaseItem } from '../components/ShowcaseCard';
import { useLanguageContext } from '../contexts/LanguageContext';
function Home() {

    const myRef = useRef(null);

    const { navigateToPage, findPageByPath } = useNavigatorContext();

    const { languages, setActiveLanguage, language } = useLanguageContext();

    const scrollToRef = (ref: React.MutableRefObject<any>) => {
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const [products, setProducts] = useState<Detail[]>([]);
    const [articles, setArticles] = useState<ShowcaseItem[]>([]);

    const handleProductClick = (index: number) => {
        console.log(index)
        navigateToPage(findPageByPath('/Products', index));
    };


    useEffect( () => {   

        (async () => {
            try {
                setProducts(await getProducts());
            } catch (error) {
                console.error('Error fetching products:', error);
            }

            try {
                let tempArticles = (await getArticles()).map((article, index) => {

                    console.log(index)

                    return ({ ...article, index })
                }) as ShowcaseItem[];

                setArticles(tempArticles);
            } catch (error) {
                console.error('Error fetching Articles:', error);
            }
        })();
    

    }, []);



 

    return (

        <div >

            <div >
                <HeroSection scrollTo={() => scrollToRef(myRef)} ></HeroSection>
            </div>

            <div ref={myRef} >
                <ProductSection details={products} subject='Explore Our Premium Selection' onActionClick={handleProductClick}></ProductSection>
            </div>

            <div>
                <BufferSection buttonText={language.file.about.bufferSection.button} title={language.file.about.bufferSection.title} description={language.file.about.bufferSection.description}></BufferSection>
            </div>

            <div>
                <BlogSection articles={articles}></BlogSection>
            </div>

        </div>
    )

}

export default Home;