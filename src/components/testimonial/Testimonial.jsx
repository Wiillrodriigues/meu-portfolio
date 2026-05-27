import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import TestimonialTemplate from "./TestimonialTemplate";
import "./testimonial.css";

// Adaptado para os pilares técnicos que guiam o seu trabalho
const testimonialData = [
  {
    message: "Automação e Cultura DevOps",
    quote: "Qualquer tarefa repetitiva executada mais de três vezes deve ser automatizada. O foco de DevOps é eliminar o trabalho manual para garantir entregas rápidas, consistentes e livres de falhas humanas na infraestrutura.",
    name: "Cultura DevOps",
    designation: "Infraestrutura como Código & Automação",
  },
  {
    message: "Segurança por Padrão (Security by Design)",
    quote: "A segurança de uma API não deve ser um pensamento tardio adicionado na hora do deploy. Ela deve nascer na modelagem do banco de dados e na escrita do código backend, blindando o sistema contra riscos desde a primeira linha.",
    name: "Mentalidade DevSecOps",
    designation: "Desenvolvimento Backend Seguro",
  },
  {
    message: "Alta Disponibilidade e Resiliência",
    quote: "Monitorar recursos, antecipar gargalos de hardware em servidores Linux e isolar aplicações usando containers Docker são as chaves fundamentais para construir sistemas modernos que resistem a picos de tráfego e falhas isoladas.",
    name: "Estabilidade de Sistemas",
    designation: "Virtualização & Containers",
  },
];

const Testimonial = () => {
  return (
    <div className="flex mx-auto justify-center px-2 max-w-218 pb-10 md:pb-25">
      <div className="w-full h-full cursor-grab">
        {/* Título traduzido e adaptado */}
        <p className="section-title mb-6 text-center">Pilares de Engenharia</p>
        <Swiper
          id="testimonialSwiper"
          spaceBetween={30}
          navigation={false}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
        >
          {testimonialData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialTemplate testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;