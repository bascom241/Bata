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
    productComment: string
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

interface ProductInterface {
    products: Product[] | null
    getTopSellingProducts: () => Promise<Product[]>
    fetchingTopSelling: boolean
    fetchTopSellingError: string | null
    fetchingSingleProduct: boolean
    getSingleProduct: (productId: number) => Promise<void>
    singleProductContainer: Product | null 
}


export const useProductStore = create<ProductInterface>((set, get) => ({
    products: [],
    fetchingTopSelling: false,
    fetchTopSellingError: null,
    fetchingSingleProduct: false, 
    singleProductContainer: null, 

    getTopSellingProducts: async () => {
        set({ fetchingTopSelling: true, fetchTopSellingError: null });
        try {
            const response = await axiosInstance.get("/product/top-selling");
            const products = response.data as Product[];
            set({ products, fetchingTopSelling: false, fetchTopSellingError: null });
            return products;

        } catch (error: any) {
            console.error("Error fetching top selling products:", error);
            set({ fetchingTopSelling: false, fetchTopSellingError: "Failed to fetch top selling products" });
            throw error;
        }
    },
    getSingleProduct: async (productId) => {
        set({ fetchingSingleProduct: true })
        try {
            const response = await axiosInstance.get(`/product/single-product/${productId}`);
            console.log(response)
            set({ fetchingSingleProduct: false, singleProductContainer: response.data })
        } catch (error) {
            set({ fetchingSingleProduct: false })
        }
    }
}))