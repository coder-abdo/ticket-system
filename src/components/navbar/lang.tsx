import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectGroup } from "@radix-ui/react-select";
export const Lang = () => {
  return (
    <Select>
      <SelectTrigger className="bg-[#fcfcfc] text-mediumGray rounded-sm border-none outline-none p-2 flex justify-center items-center hover:cursor-pointer">
        <SelectValue placeholder="EN" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="EN">EN</SelectItem>
          <SelectItem value="AR">AR</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
