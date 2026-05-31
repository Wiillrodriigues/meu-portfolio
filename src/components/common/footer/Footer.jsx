import logo from "../../../assets/logo.png";

const navItems = [
  { id: 1, name: "Início", url: "introduction" },
  { id: 2, name: "Sobre", url: "sobre" },
  { id: 3, name: "Processo", url: "processo" },
  { id: 4, name: "Portfólio", url: "portfolio" },
  { id: 5, name: "Artigos", url: "blog" },
  { id: 6, name: "Serviços", url: "servicos" },
  { id: 7, name: "Contato", url: "contact" },
];
const copyrightYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="pt-25 md:pt-40 content max-2xl:px-3">
      <div className="flex max-md:flex-col justify-between mx-0 items-center h-full w-full text-neutral-200">
        <a href="#introduction" className="flex items-center border-0">
          <img src={logo} className="h-8 sm:h-14 rounded-2xl" alt="logo" />
          <p className="text-3xl sm:text-[32px] my-auto ms-[12px] font-semibold">
            Will Rodrigues
          </p>
        </a>
        <div className="mx-7 max-md:my-7 text-center">
          {navItems.map((item) => (
            <a
              key={item.id}
              className="mx-2 group inline-block relative w-fit text-[12px] sm:text-[16px]"
              href={`#${item.url}`}
            >
              {item.name}
              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-white scale-x-0 duration-300 group-hover:scale-x-100"></span>
            </a>
          ))}
        </div>
        <p className="text-[12px] sm:text-[16px]">
          &copy; {copyrightYear} Will Rodrigues.
        </p>
      </div>
      <p className="text-white/70 text-center max-xs:text-[12px] max-md:text-[14px] w-full py-10 border-t border-white/10 mt-10">
        Desenvolvido com ❤️ por <span className="font-bold text-white">Will Rodrigues</span> | Backend & DevOps
      </p>
    </div>
  );
};

export default Footer;