import  { useEffect , useState } from 'react';
import product from "../../public/dummy";
// import Display from './Components/Display';


function Dummy() {

  
  type Product = {
  id: Number,
  name: String,
  price: Number,
  stock: Number,
  category: String,
  tags: String[],

  dimensions:
  {
    width: Number,
    height: Number,
    depth: Number
  },

  isAvailable: Boolean,

}

const [Prod , SetProd] = useState<Product[]>([]);


const abc = function () {
  console.log(product)
}



useEffect(() => {

   function DumpData()
   {
      SetProd(product);
   }

   DumpData();


},[])



  return (
    <div>

        <table border={3} cellPadding={5} cellSpacing={3}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Category</th>
              <th>Tags</th>
              <th>Dimensions (W x H x D)</th>
              <th>Availability</th>
            </tr>
            </thead>

            {
               Prod.length===0    ? 
               <div>
                <h1>No Product Avaliable</h1>
               </div> : 

               <tbody>
                  {Prod.map((p : Product) => 
                  <tr key={p.id}>
                       <td>{p.id}</td>
                       <td>{p.name}</td>
                       <td>{p.price}</td>
                       <td>{p.stock}</td>
                       <td>{p.category}</td>
                       {/* //map  for tags*/}
                       <td>
                        <ul>
                          {
                          p.tags.map((x) => <li>{x} </li>)
                        }
                        </ul></td>
                       {/* dimension calc */}
                       <td>{p.dimensions.width * p.dimensions.height * p.dimensions.depth}</td>
                       <td>{p.isAvailable ? <p>True</p> : <p>False</p>}</td>
                  </tr>)}
               </tbody>
            }
        </table>

          

      <button onClick={abc}>print in Console</button>
    </div>
  )
}

export default Dummy
