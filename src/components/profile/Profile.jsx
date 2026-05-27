import person from "../../assets/images/person2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from "../common/socialMedia/SocialMedia";

const Profile = () => {
  return (
    <div
      className={`relative mx-4 xxl:mx-0.5 -bottom-20 lg:-bottom-28 z-10 rounded-2xl bg-white drop-shadow-2xl max-xl:mb-5 shadow-white xl:p-28 lg:p-20 md:p-16 sm:p-10 p-4`}
      id="profile"
    >
      <div className="flex max-md:flex-col justify-between items-center gap-6">
        {/* Profile image */}
        <div className="xxl:max-w-106 w-auto h-auto xxl:max-h-126">
          <div className="max-w-106 h-117 object-fill overflow-hidden rounded-xl">
            <img
              className="bg-soft-white h-[120%] object-cover"
              src={person}
              alt="William Rodrigues"
            />
          </div>
          {/* Social media section */}
          <div className="relative bottom-9">
            <div className="flex justify-center">
              <div className="px-6 max-w-66 py-3 z-50 text-center bg-white rounded-[4px] center shadow-2xl drop-shadow-2xl shadow-white">
                <SocialMedia />
              </div>
            </div>
          </div>
        </div>

        <div className="max-sm:w-full w-[33rem]">
          <h2
            className={`text-2xl xxs:text-3xl sm:text-4xl lg:text-[32px] text-[min(24px,32px)] max-md:text-center font-semibold mb-8 text-dark`}
          >
            Construindo Aplicações Seguras e Infraestruturas Resilientes
          </h2>
          <div
            className={`text-xs xs:text-[16px] lg:text-lg font-normal max-md:text-center text-gray-600`}
          >
            <p className={``}>
              Como graduado em Análise e Desenvolvimento de Sistemas e especialista em Cibersegurança em formação, busco alinhar a eficiência no desenvolvimento de software com as melhores práticas de infraestrutura e automação.
            </p>
            <p className="mt-3">
              Foco na criação de APIs RESTful estruturadas, administração de servidores Linux, virtualização local via Proxmox e automação de deploys com conteinerização (Docker), sempre visando a estabilidade e a defesa cibernética das aplicações.
            </p>
          </div>
          <div className="mt-8 flex max-md:justify-center">
            <a
              className="btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 btn-primary text-xs xxs:text-[14px] sm:text-[16px] text-white"
              href="#introduction" // Ou aponte para "#portfolio" se tiver uma seção de projetos
            >
              Meus Projetos
            </a>
            <a
              className={`btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 hover:border-picto-primary bg-white duration-300 transition-all hover:text-picto-primary ms-4 text-xs xxs:text-[14px] sm:text-[16px] border border-gray-300`}
              href="/curriculo.pdf" // Caminho onde você vai jogar o arquivo PDF do seu CV
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faDownload} className="mr-1.5" /> Baixar CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;