import { NavMenu } from "@/components/navbar/menu";
import Welcome from "@/components/navbar/welcome";

const Navbar = () => {
  return (
    <nav
      className="flex justify-between items-center h-20"
      role="navigation"
      aria-label="Main"
    >
      <Welcome />
      <NavMenu />
    </nav>
  );
};
export default Navbar;
