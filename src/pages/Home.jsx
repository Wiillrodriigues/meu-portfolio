import Introduction from "../components/introduction/Introduction";
import Profile from "../components/profile/Profile";
import WorkProcess from "../components/workProcess/WorkProcess";
import Portfolio from "../components/portfolio/Portfolio";
import WorkTogether from "../components/workTogether/WorkTogether";
import Blog from "../components/blog/Blog";
import Profession from "../components/profession/Profession";
import HappyClients from "../components/happyClients/HappyClients";
import Testimonial from "../components/testimonial/Testimonial";
import Contact from "../components/contact/Contact";
import "../../index.css";

const Home = () => {
  return (
    <div className="relative">
      {/* ID do Início */}
      <section id="introduction" className="introduction-profile-background">
        <div className="content">
          <Introduction />
          {/* ID do Sobre inserido aqui para mapear o perfil */}
          <div id="sobre">
            <Profile />
          </div>
        </div>
      </section>

      {/* ID do Processo (Removido o comentário caso queira usar, se não quiser, o ID já está pronto) */}
      <section id="processo" className="bg-soft-white pt-30">
        <WorkProcess />
      </section>

      <div className="bg-soft-white pt-40"></div>
      
      {/* ID do Portfólio */}
      <section id="portfolio">
        <Portfolio />
      </section>

      <div className="bg-gray-900">
        <WorkTogether />
      </div>

      {/* ID do Blog / Artigos */}
      <section id="blog" className="blog-background">
        <Blog />
      </section>

      {/* ID dos Serviços */}
      <section id="servicos" className="bg-soft-white">
        <Profession />
      </section>

      <HappyClients />
      <Testimonial />

      {/* ID do Contato */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;