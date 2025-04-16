"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image
        src="/images/logo.svg"
        width={48}
        height={48}
        alt={`${APP_NAME} logo`}
        priority
      />

      <div className="p-6 shadow-md text-center w-1/3 rounded-lg">
        <h1 className="text-3xl font-bold mb-4">Not Found</h1>
        <p className="text-destructive">Could not find requested page</p>
        <Button
          className="mt-4 ml-2"
          onClick={() => (window.location.href = "/")}
          variant={"outline"}
        >
          Back to Home Page
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
