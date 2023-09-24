import Navbar from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import StatusSideBar from "@/components/statusSide";
import Main from "@/components/main/nav";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 container">
        <Navbar />
        <main className="flex pt-4 gap-2">
          <StatusSideBar />
          <Main />
        </main>
      </div>
    </div>
  );
}

export default App;
