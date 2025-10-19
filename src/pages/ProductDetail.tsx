import { useEffect, useState } from "react";
import { useProductStore } from "../store/useProduct"
import { useParams } from "react-router-dom";

interface RouteParams {
    id: string
}
const ProductDetail = () => {

    const { id } = useParams<{ id: string | undefined }>()
    const { fetchingSingleProduct, singleProductContainer, getSingleProduct } = useProductStore();

    const [selectedImage, setSelectedImage] = useState<any | null>(null);


    const numericId = id ? Number(id) : NaN



    useEffect(() => {
        if (getSingleProduct) {
            getSingleProduct(numericId)
        }
    }, [getSingleProduct])

    useEffect(() => {
        if (singleProductContainer?.productImages.length) {
            setSelectedImage(singleProductContainer.productImages[0]);
        }
    }, [singleProductContainer])

    const centerImage = singleProductContainer ? singleProductContainer.productImages[0] : null



    return (
        <main>
            <section className="w-full flex gap-2 items-start mt-4">
                <div className="flex flex-col gap-2 w-[50%] ">

                    <div className="p-4  aspect-[6/4]">

                        {
                            selectedImage &&
                            <img className="object-cover rounded-md"
                                src={selectedImage?.productImageUrl}
                                alt={selectedImage?.productImageName}
                            />
                        }



                    </div>

                    {
                        singleProductContainer && singleProductContainer.productImages.length > 1 &&
                        <div className="flex items-center justify-center gap-2">
                            {
                                singleProductContainer.productImages.map((image) => (
                                    <div key={image.productImageId} className={`w-20 h-20 flex rounded-2xl items-center justify-center px-2 cursor-pointer border-2 ${selectedImage?.productImageId === image.productImageId
                                        ? "border-black"
                                        : "border-gray-300"
                                        }`} onClick={() => setSelectedImage(image)}>
                                        <img src={image.productImageUrl} className=" object-cover  " />
                                    </div>
                                ))
                            }
                        </div>
                    }
                </div>

                <div className="w-[50%] mt-6 flex flex-col gap-4">
                    {/* Product Name */}
                    <h1 className="text-3xl font-bold text-gray-900">
                        {singleProductContainer?.productName}
                    </h1>

                    {/* Product Description */}
                    <p className="text-gray-700 text-base">
                        {singleProductContainer?.productDescription}
                    </p>

                    {/* Price */}
                    <div className="text-xl font-semibold text-green-600">
                        ${singleProductContainer?.productPrice.toFixed(2)}
                    </div>

                    {/* Stock */}
                    <div className="flex items-center gap-2">
                        {singleProductContainer?.productInStock ? (
                            <span className="text-sm text-green-600 font-medium">In Stock</span>
                        ) : (
                            <span className="text-sm text-red-600 font-medium">Out of Stock</span>
                        )}
                        <span className="text-gray-500 text-sm">
                            ({singleProductContainer?.productQuantityInStock} items available)
                        </span>
                    </div>

                    {/* Ratings */}
                    <div className="flex items-center gap-1">
                        {singleProductContainer?.productRatings?.length ? (
                            singleProductContainer.productRatings.map((rating, index) => (
                                <span key={index} className="text-yellow-500">
                                    ★
                                </span>
                            ))
                        ) : (
                            <span className="text-gray-400">No ratings yet</span>
                        )}
                    </div>

                    {/* Sizes */}
                    {singleProductContainer && singleProductContainer?.productSizes?.length > 0 && (
                        <div className="flex items-center gap-2 mt-2">
                            <span className="text-gray-700 font-medium">Sizes:</span>
                            {singleProductContainer && singleProductContainer.productSizes.map((size) => (
                                <span
                                    key={size.productSizeId}
                                    className="border px-2 py-1 rounded-md text-sm cursor-pointer hover:bg-gray-200"
                                >
                                    {size.sizeLabel}
                                </span>
                            ))}
                        </div>
                    )}

                    {/* Add to Cart Button */}

                    <div className=" pr-4">
                        <button
                            className={`mt-4  w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-700 transition ${!singleProductContainer?.productInStock ? "opacity-50 cursor-not-allowed" : ""
                                }`}
                            disabled={!singleProductContainer?.productInStock}
                        >
                            Add to Cart
                        </button>

                    </div>
                </div>

            </section>

        </main>
    )
}

export default ProductDetail
