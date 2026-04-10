import Image from "next/image";
import Link from "next/link";

const FoodCard = ({ food }) => {
  const { dish_name, image_link, category, price, id } = food;
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <Image
          src={image_link}
          height="200"
          width="250"
          alt={dish_name}
        ></Image>
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {dish_name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>
          <small>Category: {category} </small>
        </p>
        <p>Price: ${price}</p>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Add to cart</button>
          <Link href={`/foods/${id}`}>
            <button className="btn btn-success">Show Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;