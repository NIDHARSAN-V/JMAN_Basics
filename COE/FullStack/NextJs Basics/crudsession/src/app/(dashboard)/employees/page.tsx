"use client";

import { useEffect, useState } from "react";
import api from "@/lib/axios";
import EmployeeForm from "@/components/EmployeeForm";
import EmployeeTable from "@/components/EmployeeTable";
import { useAuth } from "@/context/AuthContext";

export default function Employees() {
  const [employees, setEmployees] = useState([]);
  const { user } = useAuth();

  const fetchEmployees = async () => {
    const res = await api.get("/employees");
    setEmployees(res.data);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const addEmployee = async (data: any) => {
    await api.post("/employees", data);
    fetchEmployees();
  };

  const deleteEmployee = async (id: number) => {
    await api.delete(`/employees/${id}`);
    fetchEmployees();
  };

  return (
    <div>
      <h1>Employees</h1>

      {/* Only Manager can add */}
      {user?.role === "MANAGER" && (
        <EmployeeForm onSubmit={addEmployee} />
      )}

      <EmployeeTable
        data={employees}
        onDelete={deleteEmployee}
      />
    </div>
  );
}
