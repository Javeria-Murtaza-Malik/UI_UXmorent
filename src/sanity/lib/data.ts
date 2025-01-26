import {client} from "@/sanity/lib/client"


export  interface IProduct{
    _updatedAt: any;
    price:number;
    _id: string; // Unique identifier for the car
    name: string; // Name of the car
    brand: string; // Brand of the car
    type: string; // Type (e.g., Sport, SUV, Sedan)
    seatingCapacity: number; // Number of seats
    fuelCapacity: number; // Fuel tank capacity in liters
    transmission: string; // Transmission type (e.g., Manual, Automatic)
    pricePerDay: number; // Price per day for renting
    originalPrice?: number; // Original price (if applicable, optional)
    tags: string[]; // Array of tags for additional categorization
    imageUrl: string; // URL for the car's image
    _createdAt: string; //
}

export const getAllProducts=async()=>{
    try {

        const queryAllProducts='*[_type == "car"]{_id,name,brand,type,seatingCapacity,fuelCapacity,transmission,pricePerDay,originalPrice,tags[],"imageUrl": image.asset->url,_createdAt,_updatedAt}';
        const products =await client.fetch(queryAllProducts);
        return products;
    } catch (error) {
        console.log(error)
    }
}

// Fetch a single product by its ID
export const getProductById = async (id: string): Promise<IProduct | null> => {
    try {
      const queryProductById = `*[_type == "car" && _id == $id][0]{
    _id,name,brand,type,seatingCapacity,fuelCapacity,transmission,pricePerDay,originalPrice,tags[],"imageUrl": image.asset->url,_createdAt,_updatedAt
}`;
      const product = await client.fetch(queryProductById, { id });
      return product || null;
    } catch (error) {
      console.error("Error fetching product by ID:", error);
      return null;
    }
  };