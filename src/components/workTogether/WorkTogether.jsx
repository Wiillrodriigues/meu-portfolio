import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WorkTogether = () => {
  return (
    <div className="py-25 max-w-169 mx-auto px-2">
      <div className="text-center">
        {/* Título adaptado para o ecossistema de desenvolvimento e infra */}
        <p className="text-white md:font-semibold text-2xl sm:text-3xl md:text-5xl pb-8">
          Tem um desafio técnico ou vaga aberta? Vamos conversar!
        </p>
        <p className="text-[#A5ACB5] text-xs sm:text-lg font-normal text-center pb-8">
          Estou pronto para integrar times de tecnologia, otimizar arquiteturas backend 
           e automatizar esteiras de infraestrutura. Vamos nos conectar.
        </p>
        {/* Link corrigido de "#!" para "#contact" para acionar o scroll funcional */}
        <a
          href="https://wa.me/5511967613438?text=Ol%C3%A1%2C%20William!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar" target="_blank" 
  rel="noopener noreferrer"
          className="btn btn-primary px-4 md:px-6.5 py-3 md:py-6 text-[12px] md:text-[16px] text-white"
        >
          Vamos Trabalhar Juntos
          <FontAwesomeIcon
            icon={faArrowRight}
            size="lg"
            style={{ color: "#FFFFFF" }}
            className="ms-3"
          />
        </a>

         
      </div>
    </div>
  );
};

export default WorkTogether;