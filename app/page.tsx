import ToggleThemeButton from "../components/button/ToggleThemeButton";

// TODO: [ToggleThemeButton] を適切な場所(例えばFooter)に移動する

export default function Page() {
  return (
    <body className={"dark:bg-gray-800 dark:text-white"}>
      <ToggleThemeButton />
    </body>
  );
}
