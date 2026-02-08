"use client";
import { Button } from "@/src/components/ui/button";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();
  const handleButton = () => {
    router.push("/");
  };
  return (
    <div className="w-full h-[80vh] flex-col gap-5 flex items-center justify-center">
      <p className="text-primary font-semibold text-[25px]">
        Oops , There Is No Film Here
      </p>

      <Button onClick={handleButton}>Back To Home Page</Button>
    </div>
  );
};

export default NotFound;
