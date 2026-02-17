import { useState } from 'react';


type FormType = {

   empid : String,
   empname : String,
   empsalary : Number,
   
}


function FormsData() {
    const [FormData , SetFormData] = useState<FormType>({empid:"",empname:"",empsalary:0});
    const [allData  , SetAllData] =  useState<FormType[]>([])

    const handleSubmit = function(event):void
    {   event.preventDefault();
        SetAllData((prev) => [...prev , FormData]);
        console.log(FormData)
    }

    const Change = function(event) : void{

         const {name , value} = event.target;
        //  console.log(name , value)
         SetFormData(prev => ({...prev, [name]: value}));

    }

  return (
    <div>
      <h1>Form Data</h1>

      <form onSubmit={handleSubmit}> 


        <input type="text" name="empid"   placeholder='Employee ID' onChange={Change}/>
        <br />
        <br />

        <input type="text" name="empname"   placeholder='Employee Name' onChange={Change}/>
        <br />
        <br />

        <input type="number" name="empsalary"   placeholder='Employee Salary' onChange={Change}/>
        <br />
        <br />
        <br />

        <button type='submit'>Submit</button>
      </form>

      <br />
      <hr />
      <h1>Diplaying Output</h1>
      <ul>
         {allData.map((p : FormType) => 
                   
                   <div key={p.empid}>
                      <ul   key={p.empid}>
                        <li>EmpId : {p.empid}</li>
                        <li>EmpName : {p.empname}</li>
                        <li>EmpSalary : {p.empsalary}</li>
                      </ul>
                      <br />
                      <br />
                   </div>

                  )}
      </ul>
    </div>
  )
}

export default FormsData
