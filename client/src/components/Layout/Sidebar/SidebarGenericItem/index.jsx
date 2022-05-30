import clsx from "clsx";

import { IconContainer } from "../../../Icon";

export function SidebarGenericItem({
  component,
  icon,
  className,
  isMenuOpen,
  text,
  withRotateIcon,
  ...props
}) {
  const Component = component || "a";

  return (
    <Component
      className={clsx(
        `flex flex-row items-center p-2 rounded-lg bg-white bg-opacity-0 hover:bg-opacity-40 active:bg-opacity-50 transition-all mb-2 last:mb-0 ${className}`,
        isMenuOpen && "justify-start",
        !isMenuOpen && "justify-center"
      )}
      {...props}
    >
      <IconContainer
        icon={icon}
        className={clsx(
          "transition-all child:h-5 child:w-5",
          isMenuOpen && withRotateIcon && "rotate-180"
        )}
      />
      {isMenuOpen && text && (
        <p className="ml-4 text-text-md font-medium h-full">{text}</p>
      )}
    </Component>
  );
}
