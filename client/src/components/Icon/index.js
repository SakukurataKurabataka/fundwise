import React from "react";

export const IconContainer = ({ icon: Icon, className, ...props }) => {
  return (
    <div className={`${className}`} {...props}>
      <Icon />
    </div>
  );
};
