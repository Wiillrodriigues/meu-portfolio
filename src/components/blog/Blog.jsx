import img1 from "../../assets/images/blog/blog-1.jpg";
import img2 from "../../assets/images/blog/blog-2.jpg";
import img3 from "../../assets/images/blog/blog-3.jpg";
import img4 from "../../assets/images/blog/blog-4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import MonoBlog from "./MonoBlog";
import "swiper/css";
import "swiper/css/pagination";
import "./blog.css";

// Breakpoints for swiperJS
const custom_breakpoints = {
  640: {
    slidesPerView: 2,
    spaceBetween: 15,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 15,
  },
  1220: {
    slidesPerView: 4,
    spaceBetween: 24,
  },
};

// Seus artigos reais e atualizados do portfólio
const blogData = [
  {
    id: 1,
    image: img1,
    date: "24 Mai, 2026",
    title: "Como montei meu laboratório de testes de invasão com Kali Linux e Proxmox",
    link: "/posts/como-montei-meu-laboratorio",
  },
  {
    id: 2,
    image: img2,
    date: "24 Mai, 2026",
    title: "Manipulação e tratamento de dados estruturados com Python e SQL",
    link: "/posts/manipulacao-tratamento-dados-python",
  },
  {
    id: 3,
    image: img3,
    date: "24 Mai, 2026",
    title: "Desmistificando o Modelo OSI e os riscos na Camada de Transporte (TCP/IP)",
    link: "/posts/desmistificando-modelo-osi",
  },
  {
    id: 4,
    image: img4,
    date: "24 Mai, 2026",
    title: "A Revolução ARM e Hardware Dedicado para IA nos Data Centers Modernos",
    link: "/posts/revolucao-arm-hardware-ia",
  },
  {
    id: 5,
    image: img2,
    date: "24 Mai, 2026",
    title: "Guia Definitivo: Como Começar na Área de TI e Construir uma Base Sólida",
    link: "/posts/guia-definitivo-comecar-ti",
  },
  {
    id: 6,
    image: img1,
    date: "24 Mai, 2026",
    title: "Engenharia de Prompt e Segurança: O Risco de Prompt Injection em APIs Backend",
    link: "/posts/engenharia-prompt-seguranca-backend",
  },
];

const Blog = () => {
  return (
    <div className="content py-25 px-2 relative" id="blog">
      <div className="max-w-135 text-center mx-auto pb-17.5">
        <p className="section-title pb-6">Artigos & Publicações</p>
        <p className="text-xs xs:text-[16px] md:text-lg text-gray-400">
          Acompanhe meus artigos recentes sobre engenharia backend, automações DevOps, 
          infraestrutura de redes e segurança defensiva.
        </p>
      </div>
      <Swiper
        grabCursor={true}
        breakpoints={custom_breakpoints}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {blogData?.map((data, index) => (
          <SwiperSlide
            key={index}
            className="mb-10" /* pagination margin bottom to 40px */
            style={{ backgroundColor: "rgba(0,0,0,0)" }}
          >
            <MonoBlog data={data} key={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Blog;