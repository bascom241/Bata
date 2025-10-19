
import { useProductStore } from "../store/useProduct"
import { Loader } from "lucide-react"
import ProductCard from "../cards/ProductCard";
import { useEffect } from "react";
const BestSellerList = () => {
    const { products, getTopSellingProducts, fetchingTopSelling, fetchTopSellingError } = useProductStore();

    useEffect(() => {
        getTopSellingProducts();
    }, [])

    if(fetchTopSellingError){
        return <p className="text-red-500">Error: {fetchTopSellingError}</p>
    }
    return <>

        {
            fetchingTopSelling ? (

                <Loader className="animate-spin mx-auto" />
            ) : (
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-6">

                    {
                        products && products.length > 0 ? (

                            products.map((product) => (
                                <ProductCard key={product.productId} product={product} />
                            ))
                        ) : (
                            <p>No best selling products available.</p>
                        )
                    }
                </div>
            )
        }
    </>
}

export default BestSellerList
