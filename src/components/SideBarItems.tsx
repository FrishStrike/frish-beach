import Link from "next/link";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface SideBarItemsProps {
  Icon: IconType;
  title: string;
  href: string;
  active: boolean;
}

const SideBarItems: React.FC<SideBarItemsProps> = ({
  Icon,
  title,
  href,
  active,
}) => {
  return (
    <Link
      href={href}
      className="
        p-3
      text-white
        [text-shadow:_0_0_3px_black]
        text-2xl
        font-semibold
        cursor-pointer
        flex
        gap-x-4
      "
    >
      <Icon size={30} />
      <div className={twMerge("text-neutral-400", active && "text-white")}>
        {title}
      </div>
    </Link>
  );
};

export default SideBarItems;
