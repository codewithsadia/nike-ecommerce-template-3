"use client"
import { client } from "@/sanity/lib/client";
import { product } from "../../../../types/product";
import { urlFor } from "@/sanity/lib/image";
import { allproducts } from "@/lib/queries";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Shoes = () => {
  const [product, setProduct] = useState<product[]>([]);

  useEffect(() => {
    async function fetchproduct() {
      const fetchedProduct = await client.fetch(allproducts);
      setProduct(fetchedProduct);
    }
    fetchproduct();
  }, []);


  return (
    <div className='max-w-6xl mx-auto px-4 py-8'>
      <h1>Our Latest Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {product.map((product) => (
          <div key={product.id} className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200">
            <Link href={`/product/${product.slug}`}>
              {product.image && (
                <Image
                  src={urlFor(product.image).url()}
                  alt="image"
                  width={200}
                  height={200}
                />
              )}
              <h1 className="text-lg font-semibold mt-4">
                {product.name}
              </h1>
              <p className="text-gray-500 mt-2">
                {product.price ? `${product.price}` : "Price not available"}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Shoes;
