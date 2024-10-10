import Card from "./Card.jsx";
import Modal from "./Modal.jsx";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { useEffect, useState } from "react";

const Lançamentos = () => {
 const [dados, setDados] = useState({});
 const [carregando, setCarregando] = useState(true);
 const [width, setWidth] = useState(window.innerWidth);
 const [modal, setModal] = useState(false);
 const [currentSlide, setCurrentSlide] = useState(0);

 const handleResize = () => {
  setWidth(window.innerWidth);
 };

 useEffect(() => {
  window.addEventListener("resize", handleResize);

  return () => {
   window.removeEventListener("resize", handleResize);
  };
 }, []);

 useEffect(() => {
  const options = {
   method: "GET",
   headers: {
    accept: "application/json",
    Authorization:
     "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjM2E2ZmQ0Yzk0M2M3NmFlY2ZhMzQ2MTFjYmFmMWM1YSIsIm5iZiI6MTcyNTIzNzkwMi42Mjk3OTMsInN1YiI6IjY2Y2QxY2E2ZDQ2ZmQxMGFmMmEyOTQwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TTKHLA7LWSbmojT3JKBLmJvbJVQ7SNgM06-nE53TOCs",
   },
  };
  const fetchDados = async () => {
   try {
    const response = await fetch(
     "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
     options
    );
    const resultado = await response.json();
    setDados(resultado.results); // Atualiza o estado com os dados recebidos
   } catch (error) {
    console.error("Erro ao buscar os dados:", error);
   } finally {
    setCarregando(false); // Define o estado de carregamento como falso após a requisição
   }
  };
  fetchDados();
 }, []);

 if (carregando) {
  return <div>Carregando...</div>;
 }

 const openModal = () => setModal(true);
 const closeModal = () => setModal(false);

 return (
  <div className="relative p-14 md:py-12 md:px-16 bg-black">
   <h2 className="font-bold text-5xl text-white mb-10">Lançamentos</h2>
   {width > 750 ? (
    <div className="flex gap-4 flex-wrap">
     {dados ? (
      dados.map((filme) => (
       <Card
        key={filme.id}
        title={filme.original_title}
        desc={filme.overview}
        src={filme.poster_path}
       ></Card>
      ))
     ) : (
      <h1>Nenhum dado encontrado</h1>
     )}
    </div>
   ) : (
    <Swiper
     spaceBetween={50}
     onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
    >
     {dados.map((filme, index) => (
      <SwiperSlide key={filme.id}>
       <Card
        title={filme.original_title}
        desc={filme.overview}
        src={filme.poster_path}
        onClick={openModal}
       ></Card>

       {modal && currentSlide === index && (
        <Modal
         title={filme.original_title}
         desc={filme.overview}
         src={filme.poster_path}
         onClick={closeModal}
        />
       )}
      </SwiperSlide>
     ))}
    </Swiper>
   )}
  </div>
 );
};

export default Lançamentos;
