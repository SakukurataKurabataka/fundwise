import { useEffect } from "react";
import Image from "next/image";
import clsx from "clsx";

import { SidebarNavItem } from "./SidebarNavItem";
import { SidebarGenericItem } from "./SidebarGenericItem";


export function Sidebar({
  onCollapseButtonClick,
  isMenuOpen,
}) {
  // const { pathname } = useRouter();

  useEffect(() => {
    // Retrieve the user profile picture here (and/or some other logics)
    console.log(isMenuOpen)
  }, [isMenuOpen]);


  return (
    <nav
      className={clsx(
        "bg-primary-500 flex-shrink-0 sticky w-full overflow-hidden top-0 p-4 text-white flex flex-col justify-between transition-all z-50",
        "md:h-screen md:w-max",
        isMenuOpen && "h-screen",
        !isMenuOpen && "h-16",
        isMenuOpen && size.width > 768 && "md:w-[240px]"
      )}
    >
      <div>
        {/* <div
          className={clsx(
            "header flex flex-row justify-center mb-7",
            (isMenuOpen || size.width < 768) && "justify-between"
          )}
        >
          {(isMenuOpen || size.width < 768) && (
            <div className="logo-container relative h-9 w-25 ">
              <Image
                src="/assets/logo/swipein-logo-secondary.webp"
                layout="fill"
                objectFit="contain"
                alt="SwipeIn Official Logo"
              />
            </div>
          )}

          <SidebarGenericItem
            component="button"
            icon={CollapseIcon}
            onClick={onCollapseButtonClick}
            isMenuOpen={isMenuOpen}
            withRotateIcon
          />
        </div> */}
        <div>
          <SidebarNavItem
            isMenuOpen={isMenuOpen}
            href="/dashboard/overview"
            text="Overview"
          />
          <SidebarNavItem
            isMenuOpen={isMenuOpen}
            href="/dashboard/finances"
            text="Finances"
          />
        </div>
      </div>
    </nav>
  );
}