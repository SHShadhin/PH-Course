import React from 'react';

const FormAction = () => {
  const handleFormAction = (formData) => {
    console.log(formData.getAll('name','password'))
  }
  return (
    <div>
      <form action={handleFormAction}>
        <input type="text" name="name" placeholder="Name" />
        <br />
        <input type="password" name="password" id="" placeholder="Password" required />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default FormAction;