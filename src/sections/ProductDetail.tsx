import React, { useEffect, useState } from 'react';
import { Grid, Typography, Button, Card, CardMedia, CardContent, Box } from "@mui/material";
import { TextField } from "@mui/material";
import LazyLoad from 'react-lazyload';

import { Detail } from './ProductSection';
import { useStyleContext } from '../contexts/StyleContext';


import { useLanguageContext } from '../contexts/LanguageContext';
import RatingComponent from '../components/Rating';
import { useNavigatorContext } from '../contexts/NavigateContext';

interface Order {
    product: Detail,
    quantity: number
}

interface ProductProp {

    products: Detail[],
    productIndex: number,
    productDetailRef: React.RefObject<HTMLDivElement>;


}

function ProductDetail({ products, productIndex, productDetailRef }: ProductProp) {
    const { themer } = useStyleContext();

    const [quantity, setQuantity] = useState<number>(0);
    const { languages, setActiveLanguage, language } = useLanguageContext();

    const { navigateToPage, findPageByPath } = useNavigatorContext();

    const handleRequestQuota = () => {
        navigateToPage(findPageByPath('/Contact', { quota: { product: selectedProduct, quantity: quantity, totalPrice: selectedProduct.price * quantity } }));
    };





    const handleAddQuantity = () => {
        setQuantity(quantity + 10);
    };

    const handleRemoveQuantity = () => {
        setQuantity(quantity - 10);
    };

    const [selectedImage, setSelectedImage] = useState<string>();

    const [selectedProduct, setSelectedProduct] = useState<Detail>();




    useEffect(() => {
        console.log(productIndex)
        console.log(products)
        console.log(language.file.products.productDetail)
        if (products && products.length > 0) {

            console.log(products[productIndex ? productIndex : 0])
            setSelectedProduct(products[productIndex ? productIndex : 0]);
            setSelectedImage(products[productIndex ? productIndex : 0].images[0]);
            setQuantity(products[productIndex ? productIndex : 0].minQuantity);

        }


    }, [products, productIndex, language]);

    return (
        <div ref={productDetailRef}>

            <Card sx={{
                flexGrow: 1,
                paddingY: 2,
                paddingX: 20,
            }}>
                <Grid container spacing={2}> 
                    <Grid container xs={12} sm={7} gap={2}>

                        <Grid item xs={12}>
                            <CardMedia
                                sx={{
                                    height: 500,
                                    maxWidth: 700,
                                    objectFit: 'cover',
                                    borderRadius: 2
                                }}
                                image={selectedImage}
                                title={selectedProduct ? selectedProduct.title : ''}
                            />
                        </Grid>
                        <Grid item  display={"flex"} flexDirection={"row"} justifyContent={"left"} flex={1} gap={2}>
                            {selectedProduct && selectedProduct.images && selectedProduct.images.map((image, index) => (
                                <Grid item key={index}>

                                    <CardMedia
                                        sx={{
                                            height: 70,
                                            width: 90,
                                            objectFit: 'cover',
                                            cursor: 'pointer',
                                            borderRadius: 2
                                        }}
                                        image={image}
                                        onClick={() => setSelectedImage(image)}
                                    />

                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={5}>
                        <CardContent sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            padding: 2
                        }}>
                            <Box display={'flex'} flexDirection={'column'} gap={5}>
                                <Box>
                                    <Typography variant="body1" color={themer.palette.accent.main}>
                                        Product
                                    </Typography>
                                    <Typography fontWeight="600" variant="h4" component="h2" color={'black'}>
                                        {selectedProduct ? selectedProduct[language.language].title : ''}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="h5" color="textSecondary">
                                        ${selectedProduct ? selectedProduct.price: ""}/{language.file.products.productDetail.unit}
                                    </Typography>
                                    <RatingComponent></RatingComponent>
                                </Box>
                                <Box>
                                    <Typography variant="body1" color="textSecondary">
                                        {selectedProduct ? selectedProduct[language.language].longDescription : ''}
                                    </Typography>
                                </Box>
                                <Box display={'flex'} flexDirection={'column'} alignItems={'flex-start'} >
                                    <Typography variant="body1" color="textSecondary">
                                    {language.file.products.productDetail.amount}: <b>{quantity}</b>
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary">
                                    {language.file.products.productDetail.unit}
                                    </Typography>
                                    <Box display={'flex'} gap={2} flexDirection={'row'}>
                                        <Button
                                            variant="outlined"
                                            onClick={handleRemoveQuantity}
                                            disabled={selectedProduct ? (quantity <= selectedProduct.minQuantity) : quantity <= 0}
                                            color='secondary'
                                        >
                                            {language.file.products.productDetail.quantityButtons.decrease}
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            onClick={handleAddQuantity}
                                            disabled={selectedProduct ? (quantity >= selectedProduct.maxQuantity) : quantity >= 0}
                                            color='secondary'
                                        >{language.file.products.productDetail.quantityButtons.increase}</Button>
                                    </Box>


                                </Box>
                                <Box display={'flex'} flexDirection={'column'} alignItems={'flex-start'}>
                                    <Box>
                                        <Button
                                            onClick={handleRequestQuota}
                                            variant="contained"
                                            color='secondary'
                                        >{language.file.products.productDetail.requestButton}</Button>
                                    </Box>
                                </Box>
                            </Box>
                        </CardContent>
                    </Grid>
                </Grid>

            </Card>        </div>

    );
};

export default ProductDetail;