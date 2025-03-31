import { useState } from "react";
import "./App.css";

function App() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [num, setNum] = useState("");
  // const [yesno, setYesNo] = useState(true);
  // const [text, setText] = useState("");

  const [inputs, setInputs] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleInputs = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setInputs({ ...inputs, [e.target.name]: value });
    console.log(inputs);
  };
const on_sub =() =>{
  const queryParams = new URLSearchParams({
    firstName: inputs.first_name || "",
    lastName: inputs.last_name || "",
    age: inputs.age || "",
    gender:inputs.gender || "",
    destination: inputs.destination || "",
    lactoseFree: inputs.lactose || "",
    nutsFree: inputs.nuts || "",
    Vegan:  inputs.vegan || "",
  }).toString()
  window.location.href = `http://localhost:3000/?${queryParams}`;
}

  return (
    <>
      <h2>Sample Form</h2> 
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          placeholder='First name'
          name='first_name'
          onChange={(e) => handleInputs(e)}
        />
        <br />
        <input
          placeholder='Last name'
          name='last_name'
          onChange={(e) => handleInputs(e)}
        />
        <br />
        <input
          placeholder='Age'
          name='age'
          onChange={(e) => handleInputs(e)}
        />
        <br />
        <input 
        type="radio" 
        name="gender"
        value='Male'
        onChange={(e) => handleInputs(e)}
        /> Male
        <br/>
        <input 
        type="radio" 
        name="gender" 
        value='Female'
        onChange={(e) => handleInputs(e)}
        /> Female
        <br/>
        <select name='destination' onChange={(e) => handleInputs(e)}>
          <option value={-1}>Please select your destination</option>
          <option value='Thailand'>Thailand</option>
          <option value='Japan'>Japan</option>
          <option value='Brazil'>Brazil</option>
        </select>
        <br />
        Dietary restrictions <br/>
        <input
          type='checkbox'
          name='nuts'
          value='yes'
          // checked={yesno}
          onChange={(e) => handleInputs(e)}
        /> Nuts
        <br />
        <input
          type='checkbox'
          name='lactose'
          value='yes'
          // checked={yesno}
          onChange={(e) => handleInputs(e)}
        /> Lactose free
        <br />
        <input
          type='checkbox'
          name='vegan'
          value='yes'
          // checked={yesno}
          onChange={(e) => handleInputs(e)}
        /> Vegan
        <br />
        <input onClick={on_sub} type='submit' value='Submit' />
      </form>

      <div name='result'>
        <h5>Your name: {inputs?.first_name} {inputs?.last_name} </h5>
        <h5>Your age: {inputs?.age}</h5>
        <h5>Your gender: {inputs?.gender}</h5>
        <h5>Your destination: {inputs?.destination}</h5>
        <h5>Your dietary restrictions:</h5>
        <h6>** Nuts free: {inputs?.nuts ? 'Yes' : 'No'}</h6>
        <h6>** Lactose free: {inputs?.lactose? 'Yes' : 'No'}</h6>
        <h6>** Vegan meal: {inputs?.vegan? 'Yes' : 'No'}</h6>
      </div>
    </>
  );
}

export default App;