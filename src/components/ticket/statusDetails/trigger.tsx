import { FC } from "react";
import { IconType } from "react-icons";
interface Props {
  title: string;
  icon: IconType;
}
export const Trigger: FC<Props> = ({ title, icon: Icon }) => {
  return (
    <>
      <Icon />
      <h5 className="text-base font-medium">{title}</h5>
    </>
  );
};
