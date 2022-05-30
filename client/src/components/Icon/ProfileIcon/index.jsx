import Image from "next/image";
import Link from "next/link";
import React from "react";

export const ProfileIcon = ({ src, href, className, ...props }) => {
  return (
    <div className={`relative h-full aspect-square ${className}`} {...props}>
      <Image
        src={src || "/assets/img/dummy-profile.png"}
        className="rounded-full"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        alt="User Profile Icon"
      />
    </div>
  );
};
