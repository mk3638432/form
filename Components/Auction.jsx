import React, { useState } from "react";
import Auctions from './Auction'
const Auction = () => {
  const [addBid, setaddBid] = useState(false);
  const [inputData, setInputData] = useState("");
  const [item, setItem] = useState([]);
  const [editItem , setEditItem] = useState(null)

  const handleBidAdded = () => {
    setaddBid(true);
  };

  const handleAddButton = () => {
    if (!inputData) return;
    else if(inputData && !addBid) {
        console.log('oo');
        setItem(
            item.map((elem) => {
                if(elem.id === editItem) {
                    return {...elem , name : inputData}
                }
                return elem
            })
        )
        setInputData('')
        setEditItem(null)
    }
    else {
        console.log('oo');

        const allInputData = {id : new Date().getTime().toString(), name : inputData}
      setItem([...item, allInputData]);
      setInputData("");
    }
  };
  const handleDelete = (ind) => {
    let final = item.filter((ele) => {
      return ind !== ele.id;
    });
    setItem(final);
  };

  const handleEdit = (ind) => {
     let newEditItem = item.find((ele) => {
        return ele.id === ind
     })
     console.log(newEditItem)
     setInputData(newEditItem.name)
     setEditItem(ind)
  };

//   return (
//     <div>
//       <div className="flex justify-center items-center h-[30vh]">
//         <button
//           className="mt-[300px] bg-red-300 px-4 py-2"
//           onClick={handleBidAdded}
//         >
//           Add bid
//         </button>
//       </div>
//       <div className="flex justify-center gap-2 items-center h-[30vh]">
//         {addBid && (
//           <div className="">
//             <input
//               className="border p-2 text-center"
//               type="text"
//               placeholder="add bid"
//               name="addbid"
//               value={inputData}
//               onChange={(e) => setInputData(e.target.value)}
//             />
//           </div>
//         ) }
        
//         {addBid && (
//           <div>
//             <button
//               onClick={handleAddButton}
//               className="px-8 bg-green-400 py-2"
//             >
//               Add
//             </button>
//           </div>
//         )}
//       </div>
//       {item.map((ele) => {
//         return (
//           <div key={ele.id} className="flex gap-10 items-center justify-center ">
            
//             <h1>{ele.name} </h1>
//             <button
//               onClick={() => handleDelete(ele.id)}
//               className="border bg-red-800 px-4 py-2"
//             >
//               Delete
//             </button>
//             <button
//               onClick={() => handleEdit(ele.id)}
//               className="border bg-red-800 px-4 py-2"
//             >
//               Edit
//             </button>
//           </div>
//         );
//       })}
//     </div>
//   );
return(
    <Auctions/>
)
};

export default Auction;
