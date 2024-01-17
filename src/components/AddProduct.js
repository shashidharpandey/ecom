import React,{useState,useEffect} from "react";
import axios from 'axios';

const AddProduct =()=>{
    const [name,setName] = useState("");
    const [price,setPrice] = useState("");
    const [category,setCategory] = useState("");
    const [company,setCompany] = useState("");



    const collectData = async() =>{
        const baseUrl = 'http://localhost:5000/add-product';
        const data = {name,price,category,company};
        const result = await axios.post(baseUrl, data);
        console.log(result.data);
        localStorage.setItem("user",JSON.stringify(result));

        }
    return(
        <div className='register'>
            <h1>Add Products</h1>
            <input type='text' placeholder='Enter product name' value={name} onChange={(e)=>setName(e.target.value)} className='inputBox' />
            <input type='text' placeholder='Enter product price' value={price} onChange={(e)=>setPrice(e.target.value)} className='inputBox'/>
            <input type='text' placeholder='Enter product category' value={category} onChange={(e)=>setCategory(e.target.value)} className='inputBox'/>
            <input type='text' placeholder='Enter product company' value={company} onChange={(e)=>setCompany(e.target.value)} className='inputBox'/>
            <button onClick={collectData} className="appButton" type="button">Add Product</button>

        </div>
    )
}

export default AddProduct;