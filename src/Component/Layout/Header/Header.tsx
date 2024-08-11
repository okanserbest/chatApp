import { useNavigate } from "react-router-dom";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { useState } from "react";
import { Menu } from "lucide-react";
import { RootState } from "../../../Store/store";
import { useSelector } from "react-redux";
import UserCard from "../Sidebar/UserCard";

const Header = () => {
  const userList = useSelector((state: RootState) => state.users.userList);
  const navigate = useNavigate();

  const handleLogOut = () => {
    navigate("/login");
    localStorage.clear();
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <header className="bg-white">
          <nav
            className="flex items-center justify-between p-6 md:px-8"
            aria-label="Global"
          >
            <div className="flex md:flex-1">
              <a className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                InChat
              </a>
            </div>

            <div className="hidden md:flex md:flex-1 md:justify-end">
              <a
                className="cursor-pointer text-sm font-semibold leading-6 text-gray-900"
                onClick={handleLogOut}
              >
                Çıkış Yap <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
            <div className="flex md:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <Dialog
              as="div"
              className="lg:hidden"
              open={mobileMenuOpen}
              onClose={setMobileMenuOpen}
            >
              <div className="fixed inset-0 z-10" />
              <Dialog.Panel className="fixed inset-y-0 right-0 z-10 mt-16 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="mt-10 flow-root">
      
                  <ul  className="space-y-2 font-medium">
                    {userList.map((user) => (
                      <li key={user.id} onClick={()=>setMobileMenuOpen(false)}>
                        <UserCard user={user} />
                      </li>
                    ))}
                  </ul>
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="py-6">
                      <a
                        onClick={handleLogOut}
                        className="cursor-pointer -mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Çıkış Yap
                      </a>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Dialog>
          </nav>
        </header>
      </nav>
    </>
  );
};

export default Header;
