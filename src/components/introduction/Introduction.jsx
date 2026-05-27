import person from "../../assets/images/person.png";
import "./introduction.css";

// Dados do sumário focados no ecossistema DevOps, Backend e Segurança Defensiva
const informationSummaryData = [
  {
    id: 1,
    title: "Especialidade",
    description: "Backend",
  },
  {
    id: 2,
    title: "Cultura Atual",
    description: "DevOps",
  },
  {
    id: 3,
    title: "Especialização",
    description: "Defesa",
  },
];

const Introduction = () => {
  return (
    <div
      className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-31.5 lg:mb-27.5 max-xl:gap-2 p-2 max-xxl:px-4"
      id="introduction"
    >
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <div className="pt-13 me-31.5 w-full lg:w-auto transition-all duration-500">
          <p className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full">
            <span>Olá, eu sou o </span>
            <span className="text-nowrap lg:block lg:mt-2">
              William Rodrigues
            </span>
          </p>
          <p className="text-xs xxs:text-lg lg:text-[18px] my-6 text-gray-600 dark:text-darkmode-light">
            Sou formado em <span className="bg-highlight font-medium">Análise e Desenvolvimento de Sistemas</span> e pós-graduando em <span className="bg-highlight font-medium">Cibersegurança</span>. Desenvolvo APIs robustas e seguras com Python e SQL, integrando práticas de <span className="bg-highlight font-medium">DevOps</span>, conteinerização com Docker e monitoramento de servidores no Proxmox.
          </p>
          <p className="text-center lg:text-start">
            <a
  className="btn-primary btn btn-xs xxs:btn-lg text-white"
  href="https://wa.me/5511967613438?text=Ol%C3%A1%2C%20William!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar."
  target="_blank" 
  rel="noopener noreferrer"
>
  Whatsapp 
            </a>
          </p>
        </div>
        <div className="mx-auto lg:mx-0 relative">
          <div className="grid max-xxs:grid-flow-col grid-cols-3 w-fit mt-10 gap-1">
            {informationSummaryData.map((item) => (
              <InformationSummary key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
      <div
        className={`max-w-134 w-full h-full max-lg:mx-auto aspect-[536/636] relative`}
      >
        <img
          className={`shadow-2xl shadow-gray-200 w-full h-full absolute bottom-0 object-cover bg-white rounded-3xl`}
          src={person}
          alt="Will Rodrigues"
          title="Will Rodrigues"
        />
      </div>
    </div>
  );
};

// Componente de suporte mantido no mesmo arquivo perfeitamente
const InformationSummary = ({ item }) => {
  return (
    <div className={`bg-[#F6EBFE] text-center`}>
      <div className="w-auto h-auto mx-2 sm:mx-4 my-5 xxs:my-5 sm:my-[17px]">
        <p
          className={`text-[16px] xxs:text-[18px] sm:text-[32px] font-semibold text-gray-700`}
        >
          {item.description}
        </p>
        <p
          className={`text-[8px] xxs:text-[9px] sm:text-[16px] font-normal px-[0.90rem] sm:px-[1rem] text-wrap text-gray-500`}
        >
          {item.title}
        </p>
      </div>
    </div>
  );
};

export default Introduction;