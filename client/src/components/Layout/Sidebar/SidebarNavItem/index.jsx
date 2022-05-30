import Link from "next/link";
import { useRouter } from "next/router";

import { SidebarGenericItem } from "../SidebarGenericItem";

export function SidebarNavItem({ icon, href, isMenuOpen, text, withRotateIcon }) {
  const { pathname } = useRouter();
  const isActive = href === pathname;

  return (
    <Link href={href} passHref>
      <SidebarGenericItem
        component="a"
        icon={icon}
        isMenuOpen={isMenuOpen}
        text={text}
        className={isActive && "bg-opacity-20"}
        withRotateIcon={withRotateIcon}
      />
    </Link>
  );
}
