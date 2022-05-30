import React from "react";
import Image from 'next/image'

export const DashboardLayout = ({ children }) => {
  return (
    <>
      <nav className="w-full p-4">
          <div className="relative h-9">
            <Image src="/assets/img/fundwise-logo.png" layout="fill" objectFit="contain" alt="Fundwise Logo"/>
          </div>
      </nav>
      {children}
    </>
  );
};
