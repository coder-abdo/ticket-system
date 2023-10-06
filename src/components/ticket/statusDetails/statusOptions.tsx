import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { FC } from "react";

interface Props {
  status: Status[];
  statue: Status;
}
export const StatusOptions: FC<Props> = ({ status, statue }) => {
  const bg =
    statue.name?.toLowerCase() === "Open".toLowerCase()
      ? "yellow"
      : statue.name?.toLowerCase() === "Closed".toLowerCase()
      ? "green"
      : "primaryBlue";
  return (
    <Select>
      <SelectTrigger
        className={`bg-${bg} text-white outline-none border-none w-[360px] active:outline-none`}
      >
        <SelectValue placeholder={statue.toString()} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {status?.map(({ id, name }) => (
            <SelectItem key={id} value={name}>
              {name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
