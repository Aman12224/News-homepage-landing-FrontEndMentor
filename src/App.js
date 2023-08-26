import Footer from "./components/Footer";
import Main from "./components/Main";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <div className="App">
      <Header openSidebar={openSidebar} />
      <Main />
      <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      <Footer />
    </div>
  );
}

export default App;
