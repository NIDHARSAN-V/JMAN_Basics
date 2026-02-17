"use client";

import { useState } from "react";
import api from "@/lib/axios";
import { useRouter } from "next/navigation";

export default function Register() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
    role: "EMP",
  });

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await api.post("/auth/register", form);

    router.push("/login");
  };

  return (
    <div>
      <h1>Register</h1>

      <form onSubmit={handleSubmit}>
        <input placeholder="Name"
          onChange={(e)=>setForm({...form,name:e.target.value})}
        />

        <input placeholder="Email"
          onChange={(e)=>setForm({...form,email:e.target.value})}
        />

        <input type="password" placeholder="Password"
          onChange={(e)=>setForm({...form,password:e.target.value})}
        />

        <select
          onChange={(e)=>setForm({...form,role:e.target.value})}
        >
          <option value="EMP">Employee</option>
          <option value="MANAGER">Manager</option>
        </select>

        <button>Register</button>
      </form>
    </div>
  );
}
