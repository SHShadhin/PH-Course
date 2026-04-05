import React, { useState } from 'react';

const ControlledField = () => {
  const [name, setName] = useState('')
  const [email, setEamil] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const handleControlledField = (e) => {
    e.preventDefault()
    console.log(name, email, password)

    if (password.length < 6) {
      setError('Password must be 6 characters or more longer')
    } else {
      setError('')
    }
  }
  const handleEmailChange = e => {
    setEamil(e.target.value)
  }
  const hangleNameChange = e => {
    setName(e.target.value)
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
        <input type="text" onChange={hangleNameChange} typeof='name' defaultValue={name} />
        <br />
        <input type="email" onChange={handleEmailChange} defaultValue={email} name="email" id="" placeholder="Email" required />
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