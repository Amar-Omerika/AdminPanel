import React from "react";

interface Props {
  children?: React.ReactNode;
}
function MainLayout({ children }: Props) {
  return <div className="bg-lightGrey h-screen w-screen">{children}</div>;
}
export default MainLayout;
