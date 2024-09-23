// src/services/mailService.ts
import axios from 'axios';
import { Detail } from '../sections/ProductSection';



const getProducts = async (): Promise<Detail[]> => {
    try {
        const response = await axios.get('../db/products.json');
        return response.data.products;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

export default getProducts;

