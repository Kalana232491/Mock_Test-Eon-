import type { UserResponse } from '../types/Type';
import { Link } from 'react-router-dom';
import  FavoriteStore  from '../store/favorite';

interface UserProps {
  user: UserResponse;
}

function UserCard({ user }: UserProps) {

  const id = user.login.uuid;;
  const photo = user.picture.medium;
  const name = `${user.name.title}. ${user.name.first} ${user.name.last}`;
  const email = user.email;

  const { toggleFavorite, isFavorite } = FavoriteStore();
  const favorited = isFavorite(id);

  return (
    <Link to={`/user/${id}`} state={{ user }}>
    <div className="shadow-lg rounded-2xl hover:shadow-xl duration-300 hover:scale-105 border border-gray-300 overflow-hidden">
      <div className="flex item-center gap-4 p-4">
        <img className="w-20 h-20 rounded-full border-3 border-gray-300 shadow-lg" src={photo} alt={name} />
        <div className="relative">
          <h1 className="font-serif font-bold text-lg">{name}</h1>
          <p className="text-sm text-gray-600">{user.location.city}, {user.location.country}</p>
          <p className="italic text-sm text-gray-500">{email}</p>
        </div>
      </div>
    </div>
    </Link>
  )
}

export default UserCard