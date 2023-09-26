import type { FC } from "react";
import type { IconType } from "react-icons";
interface Props {
  icon: IconType;
  isSecondary?: boolean;
}
export const ModalIcon: FC<Props> = ({ icon: Icon, isSecondary }) => {
  return (
    <div
      className={`${isSecondary ? "modal-icon is-secondary" : "modal-icon"}`}
    >
      <Icon
        className={`text-primaryBlue ${isSecondary ? "text-sm" : "text-xl"}`}
      />
    </div>
  );
};
