import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
const onClick = (provider: "google" | "github") => {
  signIn(provider);
};

const Social = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <div className=" flex gap-3">
      <Button
        type="submit"
        disabled={isLoading}
        onClick={() => onClick("google")}
        className="w-full bg-primary mt-6 py-3 flex justify-center items-center rounded-3xl font-bold text-muted hover:text-white "
      >
        <>
          <FcGoogle className="mr-2 h-10 w-10" />
          Google
        </>
      </Button>
      <Button
        type="submit"
        disabled={isLoading}
        onClick={() => onClick("github")}
        className="w-full bg-primary mt-6 py-3 flex justify-center items-center rounded-3xl font-bold text-muted hover:text-white "
      >
        <>
          <FaGithub className="mr-2 h-10 w-10" />
          Github
        </>
      </Button>
    </div>
  );
};

export default Social;
