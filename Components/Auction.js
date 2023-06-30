import React, { useEffect, useRef, useState } from "react";

const Auctions = () => {
  const [isAddList, setIsAddList] = useState(false);
  const [item, setItem] = useState([]);
  const [filteredItem, setFilteredItem] = useState([]);
  const inputRef = useRef();
  const addHandler = () => {
    const value = inputRef.current.value;
    const id = Date.now();
    const val = {
      id,
      value,
    };
    setItem([...item, val]);
  };
  console.log(item);

  useEffect(() => {
    const filterItem = () => {
        const sorted = item.sort((a,b)=>a.value - b.value)
        setFilteredItem(sorted);
    };
    filterItem();
  
  }, [item]);

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
    console.log(newEditItem.value)
    setItem(newEditItem.value)
 };
  return (
    <div>
      <div>
        <button onClick={() => setIsAddList(!isAddList)}> ADD List</button>
        {isAddList && (
          <div className="">
            <input
              className="border p-2 text-center"
              type="text"
              placeholder="add bid"
              ref={inputRef}
            />
            <button onClick={addHandler}> ADD</button>
          </div>
        )}
      </div>
      {filteredItem.map((ele) => {
        return (
          <div key={ele.id}>
            
            <h3>{ele.value} </h3>
            <button
              onClick={() => handleDelete(ele.id)}
              className="border bg-red-800 px-4 py-2"
            >
              Delete
           </button>
           <button
              onClick={() => handleEdit(ele.id)}
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

export default Auctions;
