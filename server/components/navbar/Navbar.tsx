import Link from "components/link/Link";
import NavLink from "components/navbar/NavLink";

export default function RootNavbar() {
  return (
    <div className="navbar flex justify-between content-center">
      <Link href="/" text={"title"} className="text-2xl uppercase" />
      <NavLink />
    </div>
  );
}
