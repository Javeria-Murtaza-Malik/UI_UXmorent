"use client";

import React, { useEffect, useState } from "react";
import sanityClient from "@sanity/client";
import { useCart } from "../../context/CartContext";
import Link from "next/link";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const sanity = sanityClient({
  projectId: "ioh5ztho",
  dataset: "production",
  apiVersion: "2021-08-31",
  useCdn: true,
});

interface Product {
  _id: string;
  name: string;
  brand: string;
  type: string;
  seatingCapacity: number;
  fuelCapacity: number;
  transmission: string;
  pricePerDay: number;
  originalPrice: number;
  tags: string[];
  imageUrl: string;
  _createdAt: string;
  _updatedAt: string;
}

const ProductCards: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [liked, setLiked] = useState<{ [key: string]: boolean }>({});
  const { addToCart } = useCart();

  const fetchProducts = async () => {
    try {
      const query = `*[_type == "car"]{
        _id,
        name,
        brand,
        type,
        seatingCapacity,
        fuelCapacity,
        transmission,
        pricePerDay,
        originalPrice,
        tags,
        "imageUrl": image.asset->url,
        _createdAt,
        _updatedAt
      }`;
      const data = await sanity.fetch(query);
      setProducts(data);
    } catch (error) {
      console.error("Error Fetching Products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleLike = (id: string) => {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="bg-gray-100 px-4 sm:px-6 lg:px-8 py-6 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Our Cars
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product._id}
            className="relative bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200 p-4"
          >
            <div className="flex justify-between items-start">
              {/* Product Name */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500">{product.type}</p>
              </div>
              {/* Like Icon */}
              <button onClick={() => handleLike(product._id)}>
                {liked[product._id] ? (
                  <FaHeart className="text-red-500" />
                ) : (
                  <FaRegHeart className="text-gray-400" />
                )}
              </button>
            </div>
            {/* Product Image */}
            <Link href={`/Description/${product._id}`} passHref>
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-40 object-contain mt-2 cursor-pointer"
              />
            </Link>
            {/* Features */}
            <div className="flex justify-between items-center mt-3 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <span className="font-medium">⛽ {product.fuelCapacity}L</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="font-medium">{product.transmission}</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="font-medium">👤 {product.seatingCapacity} People</span>
              </div>
            </div>
            {/* Price and Rent Now */}
            <div className="flex justify-between items-center mt-4">
              <div>
                {product.originalPrice && (
                  <p className="text-sm text-gray-400 line-through">
                    ${product.originalPrice}
                  </p>
                )}
                <p className="text-lg font-bold text-gray-800">
                  {product.pricePerDay}
                </p>
              </div>
              <Link href={`/Description/${product._id}`} passHref>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-600 transition-colors">
                Rent Now
              </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCards;
