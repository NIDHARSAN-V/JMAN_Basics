"use client";

import { useState } from "react";

export default function EmployeeForm({ onSubmit }: any) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    salary: 0,
    role: "EMP",
  });

  return (
    <div>
      <h3>Add Employee</h3>

      <input
        placeholder="Name"
        onChange={(e)=>setForm({...form,name:e.target.value})}
      />

      <input
        placeholder="Email"
        onChange={(e)=>setForm({...form,email:e.target.value})}
      />

      <input
        type="number"
        placeholder="Salary"
        onChange={(e)=>setForm({...form,salary:Number(e.target.value)})}
      />

      <select
        onChange={(e)=>setForm({...form,role:e.target.value})}
      >
        <option value="EMP">EMP</option>
        <option value="MANAGER">MANAGER</option>
      </select>

      <button onClick={()=>onSubmit(form)}>Add</button>
    </div>
  );
}
