import { MainContent } from "./components/MainContent";
import { SideBar } from "./components/SideBar";

import "./styles/components/app.sass";

export function App() {
  return (
    <div id="portfolio">
      <h1>Herlon Costa</h1>
      <SideBar />
      <MainContent />
    </div>
  );
}
