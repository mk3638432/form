import React, { useState } from "react";

const Auction = () => {
  const [addItem, setAddItem] = useState(false);
  const [input ,setInput] = useState({})

  const handleBidAdded = () => {
    setAddItem(true);
  };

  const handleChange = (e) => {
    setInput({...input , [e.target.name] : e.target.value})
    console.log(input)
  }
 const handleAddedButton = (e) => {
    setInput({[e.target.name] : ''})
 }
  return (
    <div>
      <div className="flex justify-center items-center h-[20vh]">
        <button
          className="mt-[300px] bg-red-300 px-4 py-2"
          onClick={handleBidAdded}
        >
          Add bid
        </button>
      </div>
      <div className="flex justify-center gap-2 items-center h-[60vh]">
        {addItem ? (
          <div className="">
            <input
              className="border p-2 text-center"
              type="text"
              placeholder="add bid"
              name="addbid"
              value={input?.name}
              onChange={handleChange}
              
            />
            <input  className="border p-2 text-center" 
             type="number"
             name="addnumber"
             value={input?.name}
             onChange={handleChange}
              placeholder="add Number" />
          </div>
        ) : (
          ""
        )}
        {addItem ? (
          <div>
            <button onClick={handleAddedButton} className="px-8 bg-green-400 py-2">Add</button>
          </div>
        ) : (
          ""
        )}
      </div>
      {
        input.map((ele ,ind) => {
            return(
                <div>
                    <p> {ele?.name} </p>
                    </div>
            )
        })
      }
    </div>
  );
};

export default Auction;
