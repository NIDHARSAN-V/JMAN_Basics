"use client";

import { useEffect, useState } from "react";
import productData, { Product } from "@/data/product";

export default function Dummy() {
  const [prod, setProd] = useState<Product[]>([]);

  const abc = () => {
    console.log(prod);
  };

  useEffect(() => {
    setProd(productData);
  }, []);

  return (
    <div>
      {prod.length === 0 ? (
        <h1>No Product Available</h1>
      ) : (
        <table border={3} cellPadding={5} cellSpacing={3}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Category</th>
              <th>Tags</th>
              <th>Dimensions</th>
              <th>Availability</th>
            </tr>
          </thead>

          <tbody>
            {prod.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.price}</td>
                <td>{p.stock}</td>
                <td>{p.category}</td>

                {/* Tags */}
                <td>
                  <ul>
                    {p.tags.map((tag, index) => (
                      <li key={index}>{tag}</li>
                    ))}
                  </ul>
                </td>

                {/* Volume */}
                <td>
                  {p.dimensions.width *
                    p.dimensions.height *
                    p.dimensions.depth}
                </td>

                {/* Availability */}
                <td>{p.isAvailable ? "True" : "False"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <button onClick={abc}>Print in Console</button>
    </div>
  );
}
