import { FiBell } from "react-icons/fi";
export const Notification = () => {
  return (
    <div className="relative hover:cursor-pointer">
      <div className="w-4 h-4 rounded-full bg-red-500 flex justify-center items-center text-white font-medium text-[10px] absolute -right-1 -top-2">
        3
      </div>
      <FiBell className="text-mediumGray text-xl" />
    </div>
  );
};
