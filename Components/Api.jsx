import React, { useEffect, useState } from "react";
import axios from "axios";


const Api = () => {

  const [formData, setFormData] = useState({});
  const [data , setData] = useState([]);

  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    
  };
  
   const fetchData = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((responce) => {
        setData(responce.data)
    })
   }
   
   useEffect(() => {
    fetchData()
   } , [])

   const handleSubmit = (e) => {
   e.preventDefault()
   axios.post('https://jsonplaceholder.typicode.com/posts' , formData)
    .then((response) => {
        console.log(response)
    })
    setFormData('')
   };

   const handleUpdate = (e) => {
    e.preventDefault()
    axios.put(`https://jsonplaceholder.typicode.com/posts/${e}`)
     .then((response) => {
         console.log(response.data)
     })
     setFormData('')
    } 

   const handleDelete = (ind) => {
    const newData = data.filter((ele, i) => {
        return i !== ind
    })
    setData(newData)
   }

    const handleEdit =(ind) => {
        console.log(ind)
       axios.get(`https://jsonplaceholder.typicode.com/posts/${ind}`)
       .then((res) => {
        setFormData(res.data)
       })
    }

  return (
    <div> 
    <div className=" flex justify-center">
      <form onSubmit={handleSubmit} className="flex flex-col gap-10">
        <div className="flex flex-col">
          <label className="text-center">User Id</label>
          <input
            className="w-[600px] border p-2"
            type="text"
            placeholder="Enter User id"
            name="userId"
            value={formData?.userId}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-center">Id</label>
          <input
            className="w-[600px] border p-2"
            type="text"
            placeholder="Enter User id"
            name="id"
            value={formData?.id}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col ">
          <label className="text-center">Title</label>
          <input
            className="w-[600px] border p-2"
            type="text"
            placeholder="Enter User id"
            name="title"
            value={formData?.title}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col">
          <label className="text-center">Body</label>
          <input
            className="w-[600px] border p-2"
            type="text"
            placeholder="Enter User id"
            name="body"
            value={formData?.body}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-evenly"> 
        <button className="border p-2  w-[200px] text-center bg-gray-500 hover:bg-red-500">
          Submit
        </button>
        <button onClick={() => {handleUpdate}} className="border p-2  w-[200px] text-center bg-gray-500 hover:bg-red-500">
          Update
        </button>
        </div>
      </form>
      </div>

      <table className="flex justify-center gap-10 items-center">
        <thead>
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Body</th>   
            </tr>
        </thead>    
        <tbody>
            {data.map((item , index) => {
                return(
                    <div className=""> 
                <td key={index}>
               <td className="text-center w-[400px] my-10">Id {item.id} </td>
               <p className="text-center">Title</p>
               <td className="border p-2 w-[400px]">{item.title} </td>
               <p className="text-center">Body</p>
               <td className="w-[400px] border p-4">{item.body} </td>
               <div className="flex justify-evenly mt-4"> 

                <button className="border  p-2 bg-red-400" onClick={() => {handleEdit(item.id)}}>Edit </button>
                <button className="border p-2 bg-red-400" onClick={() => {handleDelete(item.id)}}>Delete</button>
                </div>
                </td>
                </div>
                )
            })}
        </tbody>
      </table>
    
    </div>
  );
};

export default Api;
