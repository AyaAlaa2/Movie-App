import React from "react";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="w-full h-[80vh] flex-col gap-5 flex items-center justify-center">
      <p className="text-primary font-semibold text-[25px]">
        Oops , There Is No Film Here
      </p>
      <Link href="/">
        <Button>Back To Home Page</Button>
      </Link>
    </div>
  );
};

export default NotFound;
