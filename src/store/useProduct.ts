import { create } from "zustand";
import axiosInstance from "../lib/axios";
interface ProductImages {
    productImageId: number
    productImageType: string
    productImageName: string
    productImageUrl: string
}
interface ProductSizes {
    productSizeId: number
    sizeLabel: string
    quantityAvailable: number
}
interface ProductRatings {
    productRating: number
    productComment : string
    firstName: string
}



export interface Product {
    productId: number
    productName: string
    productDescription: string
    productPrice: number
    productQuantityInStock: number
    productRatings: ProductRatings[]
    productSizes: ProductSizes[]
    productImages: ProductImages[]
    topSelling: boolean
    productInStock: boolean
}

interface ProductInterface  {
    products: Product[] | null
    getTopSellingProducts: () => Promise<Product[]>
    fetchingTopSelling: boolean
    fetchTopSellingError: string | null
}


export const useProductStore = create<ProductInterface>((set,get) => ({
    products: [] ,
    fetchingTopSelling: false,
    fetchTopSellingError: null,
    getTopSellingProducts : async () => {
        set({fetchingTopSelling:true, fetchTopSellingError: null});
        try {
            const response = await axiosInstance.get("/product/top-selling");
            const products = response.data as Product[];
            set({products, fetchingTopSelling:false, fetchTopSellingError: null});
            return products;
            
        } catch (error: any ) {
            console.error("Error fetching top selling products:", error);
            set({fetchingTopSelling:false, fetchTopSellingError: "Failed to fetch top selling products"});
            throw error;
        }
    } 
}))