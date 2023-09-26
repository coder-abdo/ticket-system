import type { FC } from "react";
import type { IconType } from "react-icons";
interface Props {
  icon: IconType;
  isSecondary?: boolean;
}
export const ModalIcon: FC<Props> = ({ icon: Icon, isSecondary }) => {
  return (
    <div className="w-10 h-10 flex justify-center items-center rounded-full bg-[#95BFD7] relative before:w-12 before:h-12 before:absolute before:bg-transparent before:border-[5px] before:border-[#E4EDF2] before:rounded-full">
      <Icon className={"text-primaryBlue text-xl"} />
    </div>
  );
};
