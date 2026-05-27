import { useEffect, useState } from "react";
import logo from "/src/assets/logo.png";
import { Link } from "react-scroll";

// Itens de navegação limpos
const navItems = [
  { id: 1, name: "Início", url: "introduction" },
  { id: 2, name: "Sobre", url: "profile" },
  { id: 4, name: "Portfólio", url: "portfolio" },
  { id: 5, name: "Blog", url: "blog" },
  { id: 6, name: "Serviços", url: "services" },
  { id: 7, name: "Contato", url: "contact" }, 
];

const handleMenuClick = () => {
  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }
};

const menu = navItems.map((item) => (
  <li key={item.id} onMouseDown={(e) => e.preventDefault()} className="list-none">
    <Link
      onClick={handleMenuClick}
      to={item.url.toLowerCase()}
      smooth={true}
      duration={1000}
      spy={item.url !== "contact"}
      offset={-140}
      activeClass="bg-[#9929fb] text-white"
      className="hover:text-picto-primary px-5 py-3 mx-1 transition-all duration-300 rounded-md block"
    >
      {/* Forçamos uma tag limpa com conteúdo restrito para o navegador não inventar texto */}
      <span className="bg-transparent text-current pointer-events-none">
        {item.name}
      </span>
    </Link>
  </li>
));

const NavBar = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 ${
        position > 50
          ? "bg-soft-white border-b border-gray-300"
          : "bg-white border-white"
      } z-50 transition-all duration-1000`}
    >
      <div className="navbar flex justify-between w-full px-4 sm:px-8 items-center">
        
        {/* LADO ESQUERDO: Apenas a Logo e o seu Nome */}
        <div className="flex items-center">
          <Link
            href="#introduction"
            to={`introduction`}
            smooth={true}
            duration={900}
            className="flex items-center border-0 cursor-pointer"
          >
            <img src={logo} className="h-8 sm:h-14 rounded-2xl" alt="logo" />
            <p className="text-2xl sm:text-[32px] my-auto ms-[12px] font-semibold whitespace-nowrap">
              Will Rodrigues
            </p>
          </Link>
        </div>

        {/* LADO DIREITO: Menu Desktop, Botão Contato e Menu Hambúrguer */}
        <div className="flex items-center gap-2">
          
          {/* Menu de Links para PC */}
          <ul className="hidden lg:flex menu menu-horizontal text-[16px] font-medium md:shrink-0 [&_li:last-child]:hidden">
            {menu}
          </ul>

          {/* Botão de Contato Roxo para PC */}
          <p className="hidden lg:block">
            <Link
              className="btn btn-sm xs:btn-md sm:btn-lg btn-primary text-white"
              href="#contact"
              to={`contact`}
              smooth={true}
              duration={900}
            >
              Contato
            </Link>
          </p>

          {/* Menu Hambúrguer Móvel */}
          <div className="dropdown dropdown-end lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            {/* Adicionado a classe modal/isolated do Tailwind para limpar textos fantasmas de acessibilidade */}
            <ul
              tabIndex={0}
              className="menu menu-lg dropdown-content rounded-box z-[999] mt-3 w-56 p-2 shadow font-semibold bg-white text-black absolute right-0 list-none"
            >
              {menu}
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
};

export default NavBar;