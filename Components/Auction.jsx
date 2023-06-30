import React, { useState } from "react";

const Auction = () => {
  const [addBid, setaddBid] = useState(false);
  const [inputData, setInputData] = useState("");
  const [item, setItem] = useState([]);

  const handleBidAdded = () => {
    setaddBid(true);
  };

  const handleAddButton = () => {
    if (!inputData) {
    } else {
      setItem([...item, inputData]);
      setInputData("");
    }
  };
  const handleDelete = (ind) => {
    let final = item.filter((ele, i) => {
      return ind !== i;
    });
    setItem(final);
  };
  const handleEdit = (ind) => {
    setInputData(ind);
  };

  return (
    <div>
      <div className="flex justify-center items-center h-[30vh]">
        <button
          className="mt-[300px] bg-red-300 px-4 py-2"
          onClick={handleBidAdded}
        >
          Add bid
        </button>
      </div>
      <div className="flex justify-center gap-2 items-center h-[30vh]">
        {addBid ? (
          <div className="">
            <input
              className="border p-2 text-center"
              type="text"
              placeholder="add bid"
              name="addbid"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            {/* <input  className="border p-2 text-center" 
             type="number"
             name="addnumber"
             onChange={handleChange}
              placeholder="add Number" /> */}
          </div>
        ) : (
          ""
        )}
        {addBid ? (
          <div>
            <button
              onClick={handleAddButton}
              className="px-8 bg-green-400 py-2"
            >
              Add
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
      {item.map((ele, ind) => {
        return (
          <div className="flex gap-10 items-center justify-center ">
            <h1>{ele} </h1>
            <button
              onClick={() => handleDelete(ind)}
              className="border bg-red-800 px-4 py-2"
            >
              Delete
            </button>
            <button
              onClick={() => handleEdit(ele)}
              className="border bg-red-800 px-4 py-2"
            >
              Edit
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Auction;
