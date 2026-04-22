import Link from "next/link";
export const metadata = {
  title: 'Users Details',
  description: '...',
};
const UsersPage = async ({ params }) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();

  return (
    <div>
      <h2>This is users page</h2>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
        {users.map(user => (
          <div key={user.id} className="card bg-primary text-primary-content">
            <div className="card-body">
              <h2 className="card-title">Card title!</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="card-actions justify-end">
                <Link href={`/users/${user.id}`}>
                  <button className="btn">Show Info</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
