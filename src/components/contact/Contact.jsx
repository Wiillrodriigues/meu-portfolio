import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Address from "./Address";
import Form from "./Form";
import SocialMedia from "../common/socialMedia/SocialMedia";

// Altere os valores abaixo com as suas informações reais se desejar exibir na tela
const addressData = [
  {
    icon: faLocationDot,
    title: "Localização",
    description: "São Paulo, SP",
  },
  {
    icon: faEnvelope,
    title: "Meu E-mail",
    description: "will.rodrigues@exemplo.com", // Adicione seu e-mail de contato
  },
  {
    icon: faPhone,
    title: "Telefone",
    description: "+55 (11) 99999-0000", // Adicione seu telefone celular
  },
];

const Contact = () => {
  return (
    <div className="relative -bottom-15 -mt-15 z-10 px-2">
      <div
        className="content p-4 md:p-10 lg:p-22 bg-white rounded-2xl shadow-[0px_0px_90px_9px_rgba(0,_0,_0,_0.1)]"
        id="contact"
      >
        <div className="flex flex-col-reverse lg:gap-5 xl:gap-25.75 lg:flex-row justify-between">
          <div>
            <div>
              <p className="text-[35px] max-lg:hidden font-semibold text-nowrap text-[#132238]">
                Vamos construir algo juntos?
              </p>
              <p className="text-[12px] xs:text-[14px] sm:text-lg md:text-lg max-lg:text-center pt-4 font-normal text-soft-dark">
                Se você tem uma oportunidade que se encaixa no meu perfil ou quer trocar uma ideia sobre desenvolvimento backend e DevOps, sinta-se à vontade para mandar uma mensagem.
              </p>
            </div>
            <div className="my-8.75 sm:max-lg:flex justify-between items-center">
              {addressData.map((item, index) => (
                <Address item={item} key={index} />
              ))}
            </div>
            <div className="w-full max-lg:text-center max-md:mb-4">
              <SocialMedia />
            </div>
          </div>
          <div className="w-full overflow-y-scroll py-6.5">
            <p className="text-xl mb-2 xs:text-2xl sm:text-2xl md:text-[38px] font-semibold text-[#132238] lg:hidden text-center">
              Vamos construir algo juntos?
            </p>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;