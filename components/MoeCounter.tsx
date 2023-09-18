"use client";

import Image from "next/image";
import { Stack } from "@chakra-ui/react";

const MoeCounter = () => {
  return (
    <div
      className={
        "max-w-10 flex flex-col items-center justify-center pb-20 pt-8"
      }
    >
      <Stack>
        <Image
          src={"https://count.getloli.com/get/@m1sk9?theme=rule34"}
          alt={"@m1sk9"}
          width={300}
          height={300}
        />
      </Stack>
    </div>
  );
};

export default MoeCounter;
