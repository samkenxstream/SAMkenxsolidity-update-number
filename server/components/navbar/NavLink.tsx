import React from "react";
import { useRouter } from "next/router";
import Link from "components/link/Link";

type Props = { className?: string };

const NavLink: React.FC<Props> = ({ className }) => {
  const router = useRouter();
  const active = { [router.pathname as string]: "active" };

  return (
    <ul className={`lg:flex ${className || ""}`}>
      <li className="nav-item">
        <Link
          href="/upload"
          text={"uploadNft"}
          className={`nav-link ${active["/upload"]}`}
          aria-current="page"
        ></Link>
      </li>
    </ul>
  );
};

export default NavLink;
