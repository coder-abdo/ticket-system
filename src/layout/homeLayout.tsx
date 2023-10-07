import { FC, ReactNode } from "react";
import Navbar from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import StatusSideBar from "@/components/statusSide";
interface Props {
  children: ReactNode;
}
export const HomeLayout: FC<Props> = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 container">
        <Navbar />
        <main className="flex pt-4 gap-2">
          <StatusSideBar />
          {children}
        </main>
      </div>
    </div>
  );
};
