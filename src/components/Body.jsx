import Blog from './Blog';

const Body = () => {
  return (
    <div className="mb-2">
      <div className="m-2 flex justify-center p-2">
        <input className="border-solid border-2 border-black  p-1 px-2 w-1/4" />
        <button className="border-solid border-2 border-black  px-2 ml-2">
          Search
        </button>
      </div>
      {[0, 1, 2, 3, 4].map((i) => (
        <Blog key={i} />
      ))}
      <Blog />
    </div>
  );
};

export default Body;
