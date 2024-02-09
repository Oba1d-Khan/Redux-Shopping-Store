import axios from "axios";


export default async function productsData() {
    try {
        const response = await axios.get("https://api.escuelajs.co/api/v1/products")
        return response.data;
    } catch (error) {
        console.log(error.message);
        return error;
    }
}


