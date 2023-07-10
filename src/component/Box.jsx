import React, { useState } from "react";
import "./Box.css";
function Box() {
    const [boxColors, setBoxColor] = useState([
        { id: 1, text: "red", color: "red", originalColor: "red", checked: true },
        {
          id: 2,
          text: "green",
          color: "green",
          originalColor: "green",
          checked: false,
        },
        { id: 3, text: "blue", color: "blue", originalColor: "blue", checked: false },
        { id: 4, text: "aqua", color: "aqua", originalColor: "aqua", checked: false }
    ])
   const handleCheckboxChange = (e) =>{
    const {id,checked,name} = e.target;
        const upDateColor = boxColors.map((item)=>{
          return {
            ...item,
            color : checked ? name : item.originalColor,
            checked: id === item.text ? checked : false
          }
        })
        setBoxColor(upDateColor)
        console.log(upDateColor)
   }
  return (
    <>
      <div className="row">
       {boxColors.map(item => (
        <div key={item.id} className="box" style={{backgroundColor:item.color}} >
          <label className="box_wrapper" htmlFor={item.text}>
          </label>
          <input
            id={item.text}
            checked={item.checked}
            name={item.originalColor}
            type="checkbox"
            onChange={(e) => handleCheckboxChange(e)}
            hidden
          />
        </div>

       ))}
      </div>
    </>
  );
}
export default Box;
