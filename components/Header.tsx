"use client";

import { FaGithub, FaKeybase, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import LinkButton from "./button/LinkButton";
import { Stack } from "@chakra-ui/react";

const Header = () => {
  return (
    <div
      className={
        "max-w-10 pt-8 pb-20 flex flex-col items-center justify-center"
      }
    >
      <Image src={"/icon.png"} alt={"lisのアイコン"} width={200} height={200} />
      <p className={"text-4xl font-bold mt-5"}>りす</p>
      <p className={"text-2xl mt-2"}>liliscats</p>

      <Stack className={"text-1xs mt-3"} direction={"row"} spacing={12}>
        <LinkButton
          icon={<FaGithub />}
          domain={"github.com"}
          id={"liliscats"}
        />
        <LinkButton
          icon={<FaTwitter />}
          domain={"twitter.com"}
          id={"liliscats2"}
        />
        <LinkButton icon={<FaKeybase />} domain={"keybase.io"} id={"lis2a"} />
      </Stack>
    </div>
  );
};

export default Header;
