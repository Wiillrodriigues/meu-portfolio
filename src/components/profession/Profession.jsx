import Roles from "./Roles";import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";


// Mantivemos os 3 blocos originais, alterando os títulos e descrições para a sua stack técnica
const rolesData = [
  {
    id: 1,
    title: "Desenvolvimento Backend",
    description:
      "Construção de APIs robustas e seguras utilizando Python e manipulação de dados estruturados com SQL, garantindo regras de negócio eficientes e integridade dos dados.",
  },
  {
    id: 2,
    title: "Cultura DevOps",
    description:
      "Automatização de ambientes utilizando conteinerização com Docker e Docker Compose, gerenciamento de servidores Linux e virtualização local com Proxmox para deploys estáveis.",
  },
  {
    id: 3,
    title: "Cibersegurança",
    description:
      "Aplicação de conceitos de segurança defensiva baseados no modelo OSI e TCP/IP, com foco em proteção contra vulnerabilidades em APIs e auditoria de código seguro.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">O que eu faço?</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            Sou focado em engenharia de software backend, automação de infraestrutura 
            e implementação de práticas modernas de segurança no ciclo de desenvolvimento.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            Minha abordagem une a escrita de código limpo com o gerenciamento de ambientes 
            resilientes, garantindo aplicações escaláveis, performáticas e protegidas.
          </p>
        </div>
        {/* Link corrigido de "#!" para "#contact" para funcionar como scroll real na Home */}
<div className="w-full flex justify-center mt-4">
  <a
    className="inline-flex items-center justify-center bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-medium text-sm px-5 py-2.5 rounded-md transition-colors duration-300 shadow-sm w-fit"
    href="https://wa.me/5511967613438?text=Ol%C3%A1%2C%20William!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar."
    target="_blank" 
    rel="noopener noreferrer"
  >
    Whatsapp
  </a>
</div>
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;