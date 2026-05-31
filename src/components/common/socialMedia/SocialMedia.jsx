import { 
  faLinkedinIn, 
  faGithub, 
  faWhatsapp 
} from "@fortawesome/free-brands-svg-icons";
import { 
  faEnvelope 
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socialIcons = [
  { icon: faLinkedinIn, link: "https://www.linkedin.com/in/william07/" },
  { icon: faGithub, link: "https://github.com/Wiillrodriigues" },
  { icon: faEnvelope, link: "mailto:wamaralr@gmail.com" },
  { icon: faWhatsapp, link: "https://wa.me/5511967613438?text=Ol%C3%A1%2C%20William!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar." },
];
 
const SocialMedia = () => {
  return socialIcons.map((item, index) => {
    // Verifica se o link é de e-mail para não forçar uma nova aba desnecessária
    const isEmail = item.link.startsWith("mailto:");

    return (
      <a
        href={item.link}
        target={isEmail ? "_self" : "_blank"}
        rel={isEmail ? undefined : "noopener noreferrer"}
        className={`text-picto-primary hover:bg-picto-primary p-2 pt-3 xs:p-2.5 xs:pt-3.75 sm:pt-4 md:pt-5 sm:p-3 md:p-3.75 hover:text-white rounded-md`}
        key={index}
      >
        <FontAwesomeIcon
          icon={item.icon}
          className={`text-xl w-4.5 aspect-square`}
        />
      </a>
    );
  });
};

export default SocialMedia;