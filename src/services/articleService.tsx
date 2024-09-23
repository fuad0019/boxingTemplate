// src/services/mailService.ts
import axios from 'axios';
import { ShowcaseItem } from '../components/ShowcaseCard';



const getArticles = async (): Promise<ShowcaseItem[]> => {
    try {
        const response = await axios.get('../db/articles.json');
        return response.data.articles;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

export default getArticles;
