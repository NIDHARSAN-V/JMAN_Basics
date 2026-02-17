"use client";

import { useEffect, useState } from "react";
import UserType from "@/types/usertype";
import Link from "next/link";


export default function Home() {



    const [Users, SetUsers] = useState<UserType[]>([])

    useEffect(() => {

        const fetchData = async () => {
            const response = await fetch("https://fakestoreapi.com/users");
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            const data = await response.json();
            SetUsers(data)
            console.log(Users)
            return data;
        };

        fetchData();

    })


    const handleViewDetails = function () {

    }




    return (
        <div>

            <table border={3} cellPadding={15} cellSpacing={5}>

                <thead>
                    <tr>


                        <th>UserName</th>
                        <th>ViewDetails</th>


                    </tr>
                </thead>



                {Users.length === 0 ? (
                    <tbody>
                        <tr>
                            <td colSpan={2}><h1>Loading......</h1></td>
                        </tr>
                    </tbody>
                ) : (
                    <tbody>
                        {Users.map((u) => (
                            <tr key={u.id}>
                                {/* <td><li>GeoLocation :{u.address.geolocation.lat},{u.address.geolocation.long}</li>
                <br />
                <li>City : {u.address.city}</li>
                <li>Street : {u.address.street}</li>
                <li>Number : {u.address.number}</li>
                <li>ZipCode : {u.address.zipcode}</li>
                </td> */}

                                <td>{u.username}</td>
                                <td>




                                    <Link href={`/users/${u.id}`}>
                                        View Details
                                    </Link>



                                </td>



                            </tr>
                        ))}
                    </tbody>

                )}





            </table>

        </div>
    );
}
