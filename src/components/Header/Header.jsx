import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
export default function Header() {
  const cartItemsCount = useSelector((state) => state.cart);
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="https://t3.ftcdn.net/jpg/01/14/16/78/360_F_114167833_n8VkKfsCSbJ2IsfYRpiLwkM41HU7tvFW.jpg"
              className="mr-3 w-24"
              alt="Logo"
            />
          </Link>

          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto "
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-orange-700 " : "text-gray-700"
                    } block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>{" "}
              <li>
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-orange-700 " : "text-gray-700"
                    } block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Products
                </NavLink>
              </li>{" "}
              <li>
                <NavLink
                  to="about-us"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-orange-700 " : "text-gray-700"
                    } block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  About Us
                </NavLink>
              </li>{" "}
              <li>
                <NavLink
                  to="contact-us"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-orange-700 " : "text-gray-700"
                    } block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>

          <Link
            to="/cart"
            className=" py-2 px-5 mr-6  font-medium tracking-wide text-orange-600 transition duration-200 rounded-lg shadow-md bg-orange-100 hover:bg-orange-200 "
          >
            My Cart : <b> {cartItemsCount.length}</b>
          </Link>
        </div>
      </nav>
    </header>
  );
}
