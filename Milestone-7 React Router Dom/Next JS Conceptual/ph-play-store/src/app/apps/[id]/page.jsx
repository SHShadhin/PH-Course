import React from 'react';

const AppsDetailPage = async({ params }) => {
  const {id} = await params;
  console.log(id, 'From Dynamic Id')
  return (
    <div>
      <h2>This is Apps Detail Page</h2>
    </div>
  );
};

export default AppsDetailPage;