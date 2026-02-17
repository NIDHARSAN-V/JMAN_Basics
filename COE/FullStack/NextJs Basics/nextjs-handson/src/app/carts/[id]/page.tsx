"use client";

import { useEffect, useState } from "react";
import UserType from "@/types/usertype";
import Link from "next/link";
import { useParams } from "next/navigation";
// import UserType from "../../../types/usertype";


type CartType = 
     {
    id: Number,
    userId: Number,
    date: String,
    products: [
        {
            productId: Number,
            quantity: Number
        },
        {
            productId: Number,
            quantity: Number
        }
    ],
    __v: Number
}




export default function Page() {

    const params = useParams();

    const { id } = params;
    const [loading, setLoading] = useState(false)
   
    const [cartData, setcartData] = useState<CartType[]>([]);

    


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            const response = await fetch("https://fakestoreapi.com/carts");
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }

            const data = await response.json();
            // setcartData(data)

            setcartData(data.filter((d) => (id == d.userId)))
            const dum  = data.filter((d) => (id == d.userId))
          

            console.log(dum)
            // const details = data.find((u: UserType) => (u.id == id))
            console.log(data)
            // setUserData(details)
            setLoading(false)

        };

        fetchData();
    }, [id])


    if (loading)
        return <div>Loading.......</div>



    return (
        <div>

           {cartData.length==0 ? (
            <h1>No Products in Cart</h1>
           ) :
           
           (


            <div>
                {cartData.map((c)=>(
                    <div key={c.id}>

                        <h3>Cart ID: {c.id}</h3>
                        <h3>User Id : {c.userId}</h3>
                        <br />
                        {c.products.map((p) => (
                            <div>
                            <h4>Product Id : {p.productId} </h4>
                            <h4>Product Quantity : {p.quantity} </h4>
                            </div>
                        ))}
                        <br />
                        <hr />

                    </div>
                ))}
            </div>

           )}

        </div>
    )

}