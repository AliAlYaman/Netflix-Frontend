import { useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate

export const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSignInClick = () => {
    navigate('/login'); // Navigate to the '/login' path
  };

  return (
    <nav className="w-full bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20 lg:h-24">
          <div className="flex-shrink-0" onClick={() => navigate('/')}>
            <img
              src="/assets/logos/logo.png"
              alt="Logo"
              className="h-4 w-auto sm:h-5 md:h-7 lg:h-10 cursor-pointer"
            />
          </div>
          <div className="flex items-center">
            {location.pathname === '/' && (
              <button
                className="bg-[#E50814] text-white w-[76px] h-[32px] rounded-md hover:bg-[#C11119] transition-colors duration-200 text-sm sm:text-base font-semibold cursor-pointer"
                onClick={handleSignInClick}
              >
                Sign in
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};