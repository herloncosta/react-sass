import Profile from "../img/profile.jpeg";

import "../styles/components/sidebar.sass";

export function SideBar() {
  return (
    <aside id="sidebar">
      <img src={Profile} alt="foto de perfil Herlon Costa" />
      <p className="title">Desenvolvedor</p>
      <p>informações</p>
      <p>redes sociais</p>
      <p>informações de contato</p>
      <a href="" className="btn">
        Download Currículo
      </a>
    </aside>
  );
}
