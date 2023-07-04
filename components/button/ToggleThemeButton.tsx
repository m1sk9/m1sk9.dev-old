"use client";

import { Button, Tooltip } from "@mantine/core";

// NOTE: 当初はテーマ切り替えを実装しようとしていたが、面倒になったので実装していない
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
  const themeStorageStore = localStorage.theme;
  if (
    document.documentElement.classList.contains("dark") ||
    themeStorageStore === "dark"
  ) {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  } else {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  }
}

export default ToggleThemeButton;
