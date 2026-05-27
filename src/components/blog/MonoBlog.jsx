const MonoBlog = ({ data }) => {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-100 hover:shadow-2xl bg-white shadow-gray-300 transition-all duration-300">
      <a href={data?.link}>
        <img
          src={data?.image}
          alt="Blog"
          className="w-full h-56.5 object-cover"
        />
        <div className="m-6">
          {/* Exibe apenas a data formatada, removendo a dependência de comentários */}
          <p className="text-[10px] xs:text-[14px] font-normal text-gray-400 mb-2">
            {data?.date}
          </p>
          {/* Aumentado o limite do corte do texto de 40 para 75 caracteres para não quebrar títulos técnicos */}
          <p className="text-[14px] xs:text-lg font-medium text-[#333333] leading-snug">
            {data?.title.length > 75
              ? `${data?.title.slice(0, 75)}...`
              : data?.title}
          </p>
        </div>
      </a>
    </div>
  );
};

export default MonoBlog;