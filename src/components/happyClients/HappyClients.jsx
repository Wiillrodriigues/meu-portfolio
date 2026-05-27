import Marquee from "react-fast-marquee";

// Trocamos os logos SVG complexos por Badges modernos de texto com estilo técnico
const techItems = [
  "Python",
  "SQL",
  "Docker",
  "Proxmox",
  "Linux (Ubuntu/Debian)",
  "Git & GitHub",
  "Bash Scripting",
  "APIs RESTful",
  "CI/CD",
  "Redes de Computadores",
];

const HappyClients = () => {
  return (
    <div className="content py-10 md:py-25 flex flex-col items-center px-2" id="tech-stack">
      <div className="max-w-144.25 text-center mb-10">
        {/* Título alterado para fazer sentido com o seu momento de mercado */}
        <p className="section-title mb-6">Tecnologias & Ferramentas</p>
        <p className="text-[14px] sm:text-lg text-soft-dark font-normal">
          O ecossistema técnico e as ferramentas que utilizo no dia a dia para desenvolver aplicações 
          backend e automatizar ambientes de infraestrutura.
        </p>
      </div>
      
      {/* O Marquee continua ativo, mas agora rodando os seus blocos de tecnologia */}
      <Marquee pauseOnHover={true} speed={60} className="py-4">
        <div className="flex items-center">
          {techItems?.map((tech, index) => (
            <span 
              className="mx-4 md:mx-8 text-lg md:text-2xl font-bold bg-[#EDD8FF80] text-picto-primary px-6 py-3 rounded-xl border border-[#9929fb]/20 tracking-wide shadow-sm"
              key={index}
            >
              {tech}
            </span>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default HappyClients;