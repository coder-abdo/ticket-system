import { FC } from "react";
import { IconType } from "react-icons";

interface Props {
  icon: IconType;
  text: string;
}
export const SidebarListItem: FC<Props> = ({ icon: Icon, text }) => {
  return (
    <li className="flex w-full items-center pl-4 gap-5 text-white py-6 hover:rounded-l-full hover:cursor-pointer hover:bg-white hover:text-primaryBlue transition-all group">
      <Icon className="text-2xl group-hover:text-primaryBlue" />
      <span className="hidden md:inline-block">{text}</span>
    </li>
  );
};
