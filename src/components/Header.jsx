import { useNavigate } from 'react-router-dom';

const Header = () => {
  const nagivate = useNavigate();
  const handleSignin = (path) => {
    nagivate(path);
  };

  return (
    <div className="flex justify-center outline p-2 justify-between">
      <h3>Blog Application</h3>
      <button
        className="outline  px-2"
        onClick={() => handleSignin('/addBlog')}
      >
        Add Blog
      </button>
      <button className="outline  px-2" onClick={() => handleSignin('/signin')}>
        Sign In
      </button>
    </div>
  );
};

export default Header;
