import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
  Collapse,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../store/auth";

export default function Header() {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navItems = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Service",
      link: "/service",
    },
    {
      title: "Contact",
      link: "/contact",
    },
  ];

  return (
    <div>
      <Navbar
        shadow={false}
        className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4"
      >
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium font-poppins"
          >
            Material Tailwind
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">
              <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                {navItems.map(({ title, link }, index) => {
                  return (
                    <li key={index} className="text-sm">
                      <Link to={link}>{title}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="flex items-center gap-x-1">
              {isLoggedIn ? (
                <div>
                  <Button
                    onClick={() => navigate("/register")}
                    variant="text"
                    size="sm"
                    className="hidden lg:inline-block"
                  >
                    <span>Sign Up</span>
                  </Button>
                  <Button
                    onClick={() => navigate("/login")}
                    variant="filled"
                    color="red"
                    size="sm"
                    className="hidden lg:inline-block"
                  >
                    <span>Sign in</span>
                  </Button>
                </div>
              ) : (
                <Button
                  onClick={() => navigate("/logout")}
                  variant="text"
                  size="sm"
                  className="hidden lg:inline-block"
                >
                  <span>Log Out</span>
                </Button>
              )}
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          <ul className="mt-2 mb-4 flex flex-col gap-6 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            {navItems.map(({ title, link }, index) => {
              return (
                <li key={index} className="text-sm text-black">
                  <Link to={link}>{title}</Link>
                </li>
              );
            })}
          </ul>
          <div className="">
            {isLoggedIn ? (
              <div className="flex items-center gap-x-1 justify-center">
                <Button
                  onClick={() => navigate("/register")}
                  fullWidth
                  variant="text"
                  size="sm"
                  className="w-1/2"
                >
                  <span>Sign Up</span>
                </Button>
                <Button
                  onClick={() => navigate("/login")}
                  fullWidth
                  variant="filled"
                  color="red"
                  size="sm"
                  className="w-1/2"
                >
                  <span>Sign in</span>
                </Button>
              </div>
            ) : (
              <Button
                onClick={() => navigate("/logout")}
                fullWidth
                variant="filled"
                color="red"
                size="sm"
                className=""
              >
                <span>Log Out</span>
              </Button>
            )}
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}
