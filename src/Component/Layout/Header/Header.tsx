import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    navigate("/login");
    localStorage.clear();
  };


  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <header className="bg-white">
          <nav
            className="flex items-center justify-between p-6 lg:px-8"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
             
                <a className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            InChat
          </a>
             
            </div>

            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a
                className="cursor-pointer text-sm font-semibold leading-6 text-gray-900"
                onClick={handleLogOut}
              >
                Çıkış Yap <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </nav>
         
        </header>
      </nav>
    </>
  );
};

export default Header;
