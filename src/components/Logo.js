import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <Link
        href="/"
        className="w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold"
      >
        AS
      </Link>
    </div>
  );
};

export default Logo;
