"use client";
import { useState, useEffect, useRef } from "react";
import { Search } from "lucide-react";
import Link from "next/link";
import { client } from "@/sanity/lib/client";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState<any[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const searchRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await client.fetch(
        `*[_type == "car"]{
          _id,
          name,
          brand,
          type,
          seatingCapacity,
          fuelCapacity,
          transmission,
          pricePerDay,
          originalPrice,
          tags[],
          "imageUrl": image.asset->url,
          _createdAt,
          _updatedAt
        }`
      );
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setShowSuggestions(true);

    // Clear the timeout if the user is typing
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Hide suggestions after 2 seconds of inactivity
    timeoutRef.current = setTimeout(() => {
      setShowSuggestions(false);
    }, 2000);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
      setShowSuggestions(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={searchRef}>
      <div className="flex items-center gap-[10px] px-[15px] py-[5px] border border-bordercoloryello rounded-2xl">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearch}
          className="bg-transparent outline-none text-whitetext text-[14px] placeholder:text-whitetext w-full"
        />
        <Search className="text-whitetext w-[20px] h-[20px]" />
      </div>

      {searchQuery && showSuggestions && filteredProducts.length > 0 && (
        <div className="absolute bg-white w-full mt-1 border border-gray-300 rounded-md shadow-lg z-10">
          <ul>
            {filteredProducts.map((product: any) => (
              <li
                key={product._id}
                className="px-4 py-2 text-black hover:bg-gray-200 cursor-pointer"
              >
                <Link href={`/Description/${product._id}`}>
                  {product.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
