import React, { useState } from "react";
import type { Product } from "../store/useProduct";
import { useNavigate } from "react-router-dom";
const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const [hovered, setHovered] = useState(false);

  const firstImage =
    product.productImages && product.productImages.length > 0
      ? product.productImages[0].productImageUrl
      : "";
  const secondImage =
    product.productImages && product.productImages.length > 1
      ? product.productImages[1].productImageUrl
      : firstImage;


  const navigate = useNavigate();
  return (
    <div
      className="bg-white shadow-lg rounded-md transition-transform duration-300 hover:scale-105 cursor-pointer flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => navigate(`/product/${product.productId}`)}
    >
      {/* Image container */}
      <div className="relative aspect-[3/4] overflow-hidden rounded-t-md">
        {/* First image */}
        <img
          src={firstImage}
          alt={product.productName}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1200ms] ease-in-out ${hovered ? "opacity-0" : "opacity-100"
            }`}
        />

        {/* Second image (fades in on hover) */}
        <img
          src={secondImage}
          alt={product.productName}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1200ms] ease-in-out ${hovered ? "opacity-100" : "opacity-0"
            }`}
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-col justify-center items-center flex-grow p-4">
        <h2 className="text-lg font-semibold">{product.productName}</h2>
        <p className="text-gray-600 text-sm mb-2 hover:underline hover:decoration-black">{product.productDescription}</p>
        <p className="text-xl font-bold ">${product.productPrice.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
