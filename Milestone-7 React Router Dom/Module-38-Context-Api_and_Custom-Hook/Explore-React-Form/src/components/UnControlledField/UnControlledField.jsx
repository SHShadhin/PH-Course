import React, { useRef } from 'react';

const UnControlledField = () => {
  const emailRef = useRef('');
  const passRef = useRef()

  const handleSubmit = e => {
    e.preventDefault();
    console.log(emailRef.current.value)
    const email = emailRef.current.value;

    const pass = passRef.current.value;
    console.log(email, pass);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={emailRef} type="email" name="" />
        <br />
        <input ref={passRef} type="password" name="" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default UnControlledField;