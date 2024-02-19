import { useState } from "react";

export default function Form() {
  //form values with initaqila values
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
  });
  function handleSubmit(event) {
    event.preventDefault();
    console.log("the form values are", formValues);
  }
  //handle input field being changed by user
  function handleInputChange(event) {
    setFormValues({
      ...formValues, // spread operator adds to all existing values
      [event.target.name]: event.target.value, //then we add the new  value using the form field "name" attribute and the value
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formValues.name}
        //connect handler to onchange event
        onChange={handleInputChange}
      />
      {/* //same for email */}
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        value={formValues.email}
        onChange={handleInputChange}
      />

      {/* display current value */}
      <p>Current value is :{formValues.name}</p>
      <p>Current value is :{formValues.email}</p>
      <button type="submit">Submit</button>
    </form>
  );
}
