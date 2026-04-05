import React, { useState } from 'react';

const ControlledField = () => {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const handleControlledField = (e) => {
    e.preventDefault()
    // console.log('Submitted')

    if (password.length < 6) {
      setError('Password must be 6 characters or more longer')
    } else {
      setError('')
    }
  }
  const handleOnChange = (e) => {
    console.log(e.target.value)
    setPassword(e.target.value)

    // if (password.length < 6) {
    //   setError('Password must be 6 characters or longer');
    // } else {
    //   setError('')
    // }

   
  }
  return (
    <div>
      <form onSubmit={handleControlledField}>
        <input type="email" name="email" id="" placeholder="Email" required />
        <br />
        <input
          type="password"
          onChange={handleOnChange}
          defaultValue={password}
          name="password"
          id=""
          placeholder="Password"
          required
        />
        <br />

        <input type="submit" value="Submit" />
      </form>
      <p style={{ color: 'red' }}>
        <small>{error}</small>
      </p>
    </div>
  );
};

export default ControlledField;