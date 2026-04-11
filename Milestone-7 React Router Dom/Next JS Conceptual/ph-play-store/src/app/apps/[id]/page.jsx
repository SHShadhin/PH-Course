import React from 'react';
export const metadata = {
  title: 'App Details | PH Play Store',
  description: 'PH Play Store is an App management website portal',
};

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