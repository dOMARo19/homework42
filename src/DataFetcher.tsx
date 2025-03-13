import React from 'react'
import axios from 'axios'


const DataFetcher = async () => {
    try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        return response.data;
    } catch (error:unknown) {
        if (axios.isAxiosError(error)) {
            throw new Error(`Error fetching data: ${error.message}`);
        }
        throw new Error(`Unknown error occurred`);
    }
    }


export default DataFetcher
