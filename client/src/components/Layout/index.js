import React from "react";

export const DashboardLayout = ({ children }) => {
  return (
    <>
      <nav className="w-full p-4 bg-green-400">
          <p className="bold text-white text-center text-2xl">Fundwise</p>
      </nav>
      {children}
    </>
  );
};
