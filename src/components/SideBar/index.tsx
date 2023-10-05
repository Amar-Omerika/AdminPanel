import React, { useEffect, useState } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
const SideBar = () => {
  const [isMobile, setIsMobile] = useState(false);

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
    <>
      {isMobile ? (
        <nav className="w-full h-1/6 bg-green flex flex-col">
          <p>tsst</p>
        </nav>
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
    </>
  );
};

export default SideBar;
