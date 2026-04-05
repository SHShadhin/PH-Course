import React, { useState } from 'react';

const ControlledField = () => {
  const [password, setPassword] = useState('')
  const handleControlledField = (e) => {
    e.preventDefault()
    // console.log('Submitted')
  }
  const handleOnChange = (e) => {
    console.log(e.target.value)
  }
  return (
    <div>
      <form onSubmit={handleControlledField}>
        <input type="email" name="email" id="" placeholder='Email' required />
        <br />
        <input type="password" onChange={handleOnChange} defaultValue={password} name="password" id="" placeholder='Password' required />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ControlledField;