"use client";

import { useEffect, useState } from "react";
import UserType from "@/types/usertype";
import Link from "next/link";
import { useParams } from "next/navigation";
// import UserType from "../../../types/usertype";

export default function Page() {

    const params = useParams();

    const { id } = params;
    const [loading, setLoading] = useState(false)
    const [userData, setUserData] = useState<UserType>({
        address: {
            geolocation: {
                lat: 0,
                long: 0
            },
            city: "",
            street: "",
            number: 7682,
            zipcode: ""
        },
        id: 0,
        email: "",
        username: "",
        password: "",
        name: {
            firstname: "",
            lastname: ""
        },
        phone: "",
        __v: 0

    })


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            const response = await fetch("https://fakestoreapi.com/users");
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            const data = await response.json();
            const details = data.find((u: UserType) => (u.id == id))
            console.log(details)
            setUserData(details)
            setLoading(false)

        };

        fetchData();
    }, [id])


    if (loading)
        return <div>Loading.......</div>



    return (
        <div>

            <div className="bg-red-400">
                <h1>UserDetails : {userData.id}</h1>
                <br />

                <table border={2} cellPadding={5} cellSpacing={5}>
                    <thead>
                        <th>id</th>
                        <th>Address</th>
                        <th>email</th>
                        <th>Passowrd</th>
                        <th>username</th>
                        <th>Name</th>
                        <th>phone</th>
                        <th>_v</th>
                        <th>Cart Details</th>

                    </thead>

                    {userData.email == "" ? (
                        <tbody>
                            <tr>
                                <td colSpan={2}><h1>Loading......</h1></td>
                            </tr>
                        </tbody>
                    ) : (
                        <tbody>
                            <tr>
                                <td>{userData.id}</td>
                                <td>{userData.address.city} , {userData.address.street} , {userData.address.number} , {userData.address.zipcode}</td>
                                <td>{userData.email}</td>
                                <td>{userData.username}</td>
                                <td>{userData.password}</td>
                                <td>{userData.name.firstname} ,{userData.name.lastname} </td>
                                <td>{userData.phone}</td>
                                <td>{userData._v}</td>

                                
                                <td>

                                    <Link href={`/carts/${userData.id}`}>
                                        <button>Click to Cart</button>
                                    </Link>

                                </td>
                            </tr>
                        </tbody>
                    )}


                </table>
            </div>
        </div>
    )

}