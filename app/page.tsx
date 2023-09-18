import Header from "../components/Header";
import MoeCounter from "../components/MoeCounter";

// TODO: [ToggleThemeButton] を適切な場所(例えばFooter)に移動する

export default function Page() {
  return (
    <body className={"dark:bg-black dark:text-white"}>
      <Header />
      <MoeCounter />
    </body>
  );
}
