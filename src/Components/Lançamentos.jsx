import Card from "./Card.jsx";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { useEffect } from "react";

const Lançamentos = () => {
 const options = {
  method: "GET",
  headers: {
   accept: "application/json",
   Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjM2E2ZmQ0Yzk0M2M3NmFlY2ZhMzQ2MTFjYmFmMWM1YSIsIm5iZiI6MTcyNTIzNzkwMi42Mjk3OTMsInN1YiI6IjY2Y2QxY2E2ZDQ2ZmQxMGFmMmEyOTQwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TTKHLA7LWSbmojT3JKBLmJvbJVQ7SNgM06-nE53TOCs",
  },
 };

 const filmes = fetch(
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
  options
 )
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

 return (
  <div className="p-14 md:py-12 md:px-16 bg-black">
   <h2 className="font-bold text-5xl text-white mb-10">Lançamentos</h2>
   {window.innerWidth > 750 ? (
    <div className="flex gap-4 flex-wrap"></div>
   ) : (
    <Swiper spaceBetween={50}>
     <SwiperSlide>
      <Card />
     </SwiperSlide>
     <SwiperSlide>
      <Card />
     </SwiperSlide>
     <SwiperSlide>
      <Card />
     </SwiperSlide>
     <SwiperSlide>
      <Card />
     </SwiperSlide>
     <SwiperSlide>
      <Card />
     </SwiperSlide>
     <SwiperSlide>
      <Card />
     </SwiperSlide>
    </Swiper>
   )}
  </div>
 );
};

export default Lançamentos;
