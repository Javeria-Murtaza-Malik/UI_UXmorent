"use client";

import React from "react";
import { useCart } from "../../context/CartContext";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Rent: React.FC = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const router = useRouter();

  const subtotal = cart.reduce(
    (total, item) => total + (item.pricePerDay || 0) * item.quantity,
    0
  );

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty. Add some products before proceeding to checkout.");
    } else {
      router.push("/payment");
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-center text-slate-800 mt-4 mb-4 text-2xl font-bold">
        Rented Cars ({totalItems} {totalItems === 1 ? "item" : "items"})
      </h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Rent a car. Explore them!</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            {cart.map((item) => (
              <div
                key={item._id}
                className="flex justify-between items-center bg-white shadow-md rounded-lg p-4"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-20 h-auto object-contain rounded-lg"
                  />
                  <div>
                    <p className="text-lg font-medium text-slate-900">{item.name}</p>
                    <p className="text-sm text-blue-600">{item.brand}</p>
                    <p className="text-sm text-gray-600">Type: {item.type}</p>
                    <p className="text-sm text-gray-600">Seats: {item.seatingCapacity}</p>
                    <p className="text-sm text-gray-600">Fuel Capacity: {item.fuelCapacity}</p>
                    <p className="text-sm text-gray-600">Transmission: {item.transmission}</p>
                    <div className="flex items-center mt-2 space-x-2">
                      <button
                        onClick={() => updateQuantity(item._id, Math.max(1, item.quantity - 1))}
                        className="bg-gray-200 text-gray-600 px-2 rounded"
                      >
                        -
                      </button>
                      <span className="text-sm text-gray-700">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item._id, item.quantity + 1)}
                        className="bg-gray-200 text-gray-600 px-2 rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-bold text-slate-800 mb-4">Summary</h3>
            <div className="flex justify-between text-sm text-gray-600">
              <p>Subtotal</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between text-sm text-gray-600 mt-2">
              <p>Estimated Delivery & Handling</p>
              <p>Free</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between font-bold text-slate-800">
              <p>Total</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full mt-6 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Rent;
