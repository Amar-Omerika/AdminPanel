import React, { useEffect, useState } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  UserIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
const SideBar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleHambureger = () => {
    setIsOpen((prevValue) => !prevValue);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      {isMobile ? (
        <div className="h-[60px] grid bg-green">
          <button onClick={handleHambureger}>
            <Bars3Icon className="h-12 w-12 ml-auto p-1 text-white" />
          </button>
          {isOpen && (
            <AnimatePresence>
              <motion.ul
                layout="position"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={`py-6 text-white text-center font-customfont w-full mt-10 bg-green fixed flex flex-col basis-full uppercase`}
              >
                <Link to={"/"}>
                  <motion.li
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    Dashboard
                  </motion.li>
                </Link>
                <Link to={"/customers"}>
                  <motion.li
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    Customers
                  </motion.li>
                </Link>
              </motion.ul>
            </AnimatePresence>
          )}
        </div>
      ) : (
        <Card className="h-full w-full max-w-[20rem] p-4 shadow-xl rounded-none bg-green shadow-blue-gray-900/5">
          <div className="mb-2 p-4">
            <Typography variant="h5" color="white">
              User
            </Typography>
          </div>
          <List>
            <Link to={"/"}>
              <ListItem className="text-white">
                <ListItemPrefix>
                  <PresentationChartBarIcon className="h-5 w-5 text-white" />
                </ListItemPrefix>
                Dashboard
              </ListItem>
            </Link>
            <Link to={"/customers"}>
              <ListItem className="text-white">
                <ListItemPrefix>
                  <UserIcon className="h-5 w-5" />
                </ListItemPrefix>
                Customers
              </ListItem>
            </Link>
          </List>
        </Card>
      )}
    </div>
  );
};

export default SideBar;
