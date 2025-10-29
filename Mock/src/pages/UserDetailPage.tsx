import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { GetUsers } from "../api/Users";
import type { UserResponse } from "../types/Type";
import { Link } from "react-router-dom";

export default function UserDetailPage() {
  const { id } = useParams();
  const { data } = useQuery({ queryKey: ["users"], queryFn: GetUsers });

  const user = data?.results.find((u: UserResponse) => u.login.uuid === id);
  const title = user.name.title;
  const fName = user.name.first;
  const lName = user.name.last;
  const email = user.email;
  const phone = user.phone;
  const city = user.location.city;
  const state = user.location.state;
  const postalCode = user.location.postcode;
  const country = user.location.country;
  const dob = user.dob.date.substring(0,10);
  const age = user.dob.age;
  const nationality = user.nat;

  if (!user) return (
    <div className="flex justify-center items-center min-h-screen">
      <p>User not found</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-linear-to-b from-blue-300 via-white to-green-300 flex flex-col items-center justify-center">
      <div className="border-2 border-gray-300 w-full max-w-md rounded-2xl pt-10 pb-10 m-5 shadow-2xl">
        <div className="flex flex-col items-center text-center">
          <img className="w-32 h-32 rounded-full border-4 border-white shadow-md mb-4"src={user.picture.large} alt={user.name.first} />
          <h2 className="font-serif text-2xl font-bold text-gray-800 mb-2 shadow-">{title}. {fName} {lName}</h2>
          <p className="text-gray-500 italic">{email}</p>
          <p className="text-gray-700 mb-2">{phone}</p>
          <p className="text-gray-600 mt-2">{city}, {postalCode}, <br/> {state}, {country}</p>
          <p className="text-gray-600 mb-2">Nationality : {nationality}</p>
          <p className="mt-2">D.O.B : {dob}</p>
          <p className="mb-2">Age : {age} years</p>
        </div>
      </div>
      <Link to="/" className="p-2 inline block text-lg text-gray-700 font-bold border-1 border-white rounded-full shadow-lg hover:shadow-2xl hover:shadow"> ← Back to Users</Link>
    </div>
  );
}