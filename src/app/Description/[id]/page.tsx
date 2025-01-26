"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getProductById, IProduct } from "@/sanity/lib/data";
import { useCart } from "@/context/CartContext";

export default function ProductDescriptionPage() {
  const { id } = useParams();
  const router = useRouter();
  const [product, setProduct] = useState<IProduct | null>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        const productData = await getProductById(id as string);
        setProduct(productData);
      };

      fetchProduct();
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    if (product) {
      const cartItem = {
        ...product,
        quantity: 1,
        originalPrice: product.originalPrice ?? 0,
        _updatedAt: product._updatedAt,
      };
      addToCart(cartItem);
      router.push("/Rent");
    }
  };

  return (
    <>
      <section className="p-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-md">
          {/* Product Image */}
          <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center items-center p-4">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="rounded-md object-contain w-full h-auto max-h-72"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-center md:w-1/2 p-6">
            <h2 className="text-2xl font-semibold text-gray-800">{product.name}</h2>
            <p className="text-gray-600 mt-4">{product.brand}</p>
            <p className="text-lg font-bold text-green-600 mt-4">
              {product.pricePerDay} per day
            </p>
            <p className="text-sm text-gray-600 mt-2">
              <strong>Brand:</strong> {product.brand}
            </p>
            <p className="text-sm text-gray-600 mt-2">
              <strong>Type:</strong> {product.type}
            </p>
            <p className="text-sm text-gray-600 mt-2">
              <strong>Seating Capacity:</strong> {product.seatingCapacity}
            </p>
            <p className="text-sm text-gray-600 mt-2">
              <strong>Fuel Capacity:</strong> {product.fuelCapacity}
            </p>
            <p className="text-sm text-gray-600 mt-2">
              <strong>Transmission:</strong> {product.transmission}
            </p>
            <p className="text-sm text-gray-600 mt-2">
              <strong>Original Price:</strong> $
              {product.originalPrice ?? "N/A"}
            </p>
            <div className="mt-4">
              <strong>Tags:</strong>
              <ul className="list-disc pl-5">
                {product.tags.map((tag, index) => (
                  <li key={index} className="text-sm text-gray-600">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="mt-6 bg-[#039fad] text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-500"
            >
              Rent Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
