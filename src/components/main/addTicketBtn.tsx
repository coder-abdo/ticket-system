import { AiOutlinePlus } from "react-icons/ai";
import { Button } from "../ui/button";
import { FC } from "react";
interface Props {
  handleClick: () => void;
}
export const AddTicketButton: FC<Props> = ({ handleClick }) => {
  return (
    <Button
      onClick={handleClick}
      className="bg-primaryBlue text-white hover:bg-white hover:text-primaryBlue border border-primaryBlue transition-colors"
    >
      <AiOutlinePlus className="text-xl mr-2" />
      <span className="capitalize text-sm font-medium">new ticket</span>
    </Button>
  );
};
