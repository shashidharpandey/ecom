import React,{useEffect, useState} from "react";
//import axios from 'axios';
import {useParams, useNavigate} from 'react-router-dom';

const UpdateProduct =()=>{
    const [name,setName] = useState("");
    const [price,setPrice] = useState("");
    const [category,setCategory] = useState("");
    const [company,setCompany] = useState("");
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() =>{
        
        getProductDetails();
        // eslint-disable-next-line
    },[])

    const getProductDetails = async ()=>{
        //console.warn(params);
        let result = await fetch(`http://localhost:5000/product/${params.id}`);
        result = await result.json();
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company);
    }


    const updateData = async() =>{
        let result = await fetch(`http://localhost:5000/product/${params.id}`, {
            method:'Put',
            body: JSON.stringify({name,price,category,company}),
            headers:{
                'Content-Type':"application/json",
                
            }
           
        });
        navigate("/")
        //result = await result.json()
        console.warn(result)
        
        }
    return(
        <div className='register'>
            <h1>Update Products</h1>
            <input type='text' placeholder='Enter product name' value={name} onChange={(e)=>setName(e.target.value)} className='inputBox' />
            <input type='text' placeholder='Enter product price' value={price} onChange={(e)=>setPrice(e.target.value)} className='inputBox'/>
            <input type='text' placeholder='Enter product category' value={category} onChange={(e)=>setCategory(e.target.value)} className='inputBox'/>
            <input type='text' placeholder='Enter product company' value={company} onChange={(e)=>setCompany(e.target.value)} className='inputBox'/>
            <button onClick={updateData} className="appButton" type="button">Update Product</button>

        </div>
    )
}

export default UpdateProduct;