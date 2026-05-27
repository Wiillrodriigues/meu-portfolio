import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/card-1.png";
import card2 from "../../assets/images/portfolio-images/card-2.png";
import card3 from "../../assets/images/portfolio-images/card-3.png";
import card4 from "../../assets/images/portfolio-images/card-4.png";
import card5 from "../../assets/images/portfolio-images/card-5.png";
import card6 from "../../assets/images/portfolio-images/card-6.png";

// Seus projetos reais focados em Backend, DevOps e Infraestrutura
const projectData = [
  {
    id: 1,
    image: card1,
    category: "BACKEND / API",
    title: "Desenvolvimento de API RESTful",
    description:
      "Criação de uma API robusta utilizando Python, com validação de dados estruturados e integração com banco de dados relacional SQL.",
    link: "https://github.com/seu-usuario", // Adicione o link real do repositório
  },
  {
    id: 2,
    image: card2,
    category: "DEV_OPS / INFRA",
    title: "Conteinerização e Orquestração",
    description:
      "Isolamento de serviços backend utilizando Docker e Docker Compose, garantindo ambientes de desenvolvimento e produção idênticos.",
    link: "https://github.com/seu-usuario",
  },
  {
    id: 3,
    image: card3,
    category: "VIRTUALIZAÇÃO",
    title: "Home Lab com Servidor Proxmox",
    description:
      "Configuração de um ambiente de virtualização local via terminal Proxmox, gerenciando instâncias Linux e monitorando logs de saúde de rede.",
    link: "https://github.com/seu-usuario",
  },
  {
    id: 4,
    image: card4,
    category: "BANCO DE DADOS",
    title: "Modelagem e Otimização SQL",
    description:
      "Criação, manipulação e otimização de consultas em bancos de dados relacionais estruturados, aplicando integridade referencial.",
    link: "https://github.com/seu-usuario",
  },
  {
    id: 5,
    category: "CYBERSECURITY",
    image: card5,
    title: "Testes de Invasão em Redes Locais",
    description:
      "Laboratório de segurança utilizando Kali Linux para simulação de ataques em ambientes controlados, analisando o tráfego nas camadas OSI.",
    link: "https://github.com/seu-usuario",
  },
  {
    id: 6,
    image: card6,
    category: "DEV_SEC_OPS",
    title: "Auditoria de Código Seguro",
    description:
      "Análise defensiva contra vulnerabilidades em aplicações backend, incluindo mitigação de Prompt Injection em conexões com inteligências artificiais.",
    link: "https://github.com/seu-usuario",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title">Portfólio</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Uma seleção dos meus projetos práticos recentes, demonstrando competências em arquitetura backend, automação de infraestrutura e segurança da informação.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      <div className="text-center">
        <a
          href="https://github.com/seu-usuario" // Link direto para o seu perfil geral do GitHub
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold text-white"
        >
          Ver Mais no GitHub
        </a>
      </div>
    </div>
  );
};

export default Portfolio;