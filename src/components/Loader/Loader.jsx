const Loader = ({ size = "10", padding = "4" }) => {
  return (
    <div className={`flex justify-center items-center p-${padding}`}>
      <div
        className={`w-${size} h-${size} border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin`}
      ></div>
    </div>
  );
};

export default Loader;
