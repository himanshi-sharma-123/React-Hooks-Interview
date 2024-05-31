import React, { useState } from "react";

//********************* EXAMPLE 1 ************************* */
// const UseState = () => {
//   const [toggleText, setToggleText] = useState(false);
//   console.log(toggleText);
//   function handleToggleText() {
//     setToggleText(!toggleText);
//   }

//   return (
//     <div>
//       <h1>UseState Hook</h1>
//       <div>
//         {toggleText ? <p>Hello World</p> : null}
//         <button onClick={handleToggleText}>Toggle Text</button>
//       </div>
//     </div>
//   );
// };

// export default UseState;

const UseState = () => {
  const [formData, setFormData] = useState({ name: "", city: "" });

  function handleNameChange(e) {
    setFormData({ ...formData, name: e.target.value });
  }

  function handleCityChange(e) {
    setFormData({ ...formData, city: e.target.value });
  }

  console.log(formData);

  return (
    <div>
      <input
        onChange={handleNameChange}
        type="text"
        name="name"
        placeholder="Enter the name"
      />
      <select onChange={handleCityChange} name="city">
        <option value="" id="">
          Select City
        </option>
        <option value="bengaluru" id="bengaluru">
          Bengaluru
        </option>
        <option value="delhi" id="delhi">
          Delhi
        </option>
      </select>
      <div>
        Name is {formData.name}
        City is {formData.city}
      </div>
    </div>
  );
};

export default UseState;
