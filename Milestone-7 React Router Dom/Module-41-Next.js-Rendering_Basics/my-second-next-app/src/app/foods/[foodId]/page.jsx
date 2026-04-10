import Image from 'next/image';
import React from 'react';

const FoodDetailPage = async({ params }) => {
  const { foodId } = await params;
  const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`);
  const data = await res.json();
  const food = data.data;
  const { dish_name, id, image_link } = food;
  // console.log('Food in food Details page', food)
  return (
    <div>
      <h2>Food Details: {foodId} </h2>
      <h2>{dish_name}</h2>
      <Image src={image_link}
        height='150'
        width='200'
        alt='dish_name'
        ></Image>
    </div>
  );
};

export default FoodDetailPage;