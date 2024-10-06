const Skeleton = () => {
  return (
    <div className="space-y-4 w-full border border-white p-[20px] rounded-md">
      <div className="bg-gray-300 rounded-lg w-full h-20 animate-pulse"></div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-300 rounded w-3/4 animate-pulse"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2 animate-pulse"></div>
      </div>
    </div>
  );
};

export default Skeleton;
