"use client";

import { Button, Tooltip } from "@mantine/core";

function ToggleThemeButton() {
  return (
    <Tooltip label={"テーマ切り替え"}>
      <Button
        variant={"outline"}
        color={"gray"}
        radius={"xl"}
        onClick={ToggleTheme}
      >
        🎨
      </Button>
    </Tooltip>
  );
}

function ToggleTheme() {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  } else {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  }
}

export default ToggleThemeButton;
