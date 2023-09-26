import { FC } from "react";
import { AiOutlineRight } from "react-icons/ai";
interface Props {
  status: string;
  label: string;
  counter: number;
  isAll?: boolean;
}
export const StatusMenuItem: FC<Props> = ({
  status,
  label,
  counter = 0,
  isAll = false,
}) => {
  return (
    <li className="flex items-center justify-between border-b border-ligthGray py-4">
      <span>
        {!isAll && (
          <span
            className={`${
              status === "Closed"
                ? "bg-green-500"
                : status === "Open"
                ? "bg-yellow-500"
                : "bg-primaryBlue"
            } w-2 h-2 rounded-full inline-block mr-2
        `}
          />
        )}
        <span className="text-blackColor text-xs capitalize">
          {label}
          <small className="text-[10px] font-medium text-mediumGray ml-2">
            ({counter})
          </small>
        </span>
      </span>
      <AiOutlineRight className="text-mediumGray" />
    </li>
  );
};
