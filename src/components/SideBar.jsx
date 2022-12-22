import Profile from "../img/profile.jpeg";

import "../styles/components/sidebar.sass";

export function SideBar() {
  return (
    <aside id="sidebar">
      <img src={Profile} alt="foto de perfil Herlon Costa" />
      <p className="title">Desenvolvedor</p>
    </aside>
  );
}
