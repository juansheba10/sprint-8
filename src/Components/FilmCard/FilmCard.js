function FilmCard({ name, imageUrl }) {
  return (
    <div className="flex flex-col items-center p-4 bg-gray-700 rounded-lg shadow-md">
      <img src={imageUrl} alt={name} className="w-32 h-32 rounded-full object-cover" />
      <h3 className="text-lg font-medium mt-4 text-yellow-400">{name}</h3>
    </div>
  );
}

export default FilmCard;
