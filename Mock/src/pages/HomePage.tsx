import { GetUsers } from '../api/Users'
import { useQuery } from '@tanstack/react-query'
import UserCard from '../components/UserCard';
import type { UserResponse } from '../types/Type';
import Head_img from '../assets/Header_img.png';

function HomePage() {

  const { data, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: GetUsers
  });


  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-500 text-2xl">Loading.....</p>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-blue-300 via-white to-green-300 p-6">
      <div className="max-w-5xl mx-auto m-3 p-6 rounded-3xl border border-gray-300">
        <div className="flex justify-center">
          <img className="w-80" src={Head_img} alt="Header_img" />
        </div>  
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
          {data.results.map((user : UserResponse) => (
            <UserCard key={user.login.uuid} user={user} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomePage
