"use client";

import { useState } from "react";

type FormType = {
  empid: string;
  empname: string;
  empsalary: number;
};

export default function FormsData() {
  const [formData, setFormData] = useState<FormType>({
    empid: "",
    empname: "",
    empsalary: 0,
  });

  const [allData, setAllData] = useState<FormType[]>([]);

  // ✅ Submit handler
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    setAllData((prev) => [...prev, formData]);

    console.log(formData);

    // reset form
    setFormData({
      empid: "",
      empname: "",
      empsalary: 0,
    });
  };

  // ✅ Change handler
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "empsalary"
          ? Number(value) // convert to number
          : value,
    }));
  };

  return (
    <div>
      <h1>Form Data</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="empid"
          placeholder="Employee ID"
          value={formData.empid}
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="text"
          name="empname"
          placeholder="Employee Name"
          value={formData.empname}
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="number"
          name="empsalary"
          placeholder="Employee Salary"
          value={formData.empsalary}
          onChange={handleChange}
        />

        <br />
        <br />

        <button type="submit">Submit</button>
      </form>

      <hr />

      <h1>Displaying Output</h1>

      {allData.length === 0 ? (
        <p>No Data</p>
      ) : (
        <ul>
          {allData.map((p) => (
            <li key={p.empid}>
              <p>EmpId: {p.empid}</p>
              <p>EmpName: {p.empname}</p>
              <p>EmpSalary: {p.empsalary}</p>
              <br />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
