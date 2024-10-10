// import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const Modal = ({ title, desc, src, setModal, modal }) => {
 const width = window.innerWidth;
 return (
  <div
   className={`${
    modal ? "scale-100 opacity-100" : "scale-90 opacity-0"
   } fixed inset-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 z-10 md:h-max h-full w-full  p-4 rounded grid  md:grid-cols-2 justify-center items-center md:items-top bg-slate-50 `}
  >
   <div className="flex flex-col justify-center text-center gap-5">
    <h1 className="font-bold text-lg md:text-2xl">{title}</h1>
    <p className="text-md md:text-xl">{desc}</p>
   </div>
   {width > 750 ? (
    <div className="flex flex-col justify-center text-center gap-4">
     <img
      className="w-3/4 md:w-2/4 h-1/2 md:h-96 mx-auto"
      src={`https://image.tmdb.org/t/p/original/${src}`}
      alt=""
     />
     <button
      onClick={() => setModal(false)}
      className="text-xs w-max mx-auto hover:scale-110 duration-300 bg-red-700 text-slate-50 p-2 rounded-md"
     >
      Fechar Detalhes
     </button>
    </div>
   ) : (
    <div className="flex flex-col text-center gap-4">
     <button
      onClick={() => setModal(false)}
      className="text-xs w-max mx-auto hover:scale-110 duration-300 bg-red-700 text-slate-50 p-2 rounded-md"
     >
      Fecha Detalhes
     </button>
    </div>
   )}
  </div>
 );
};

export default Modal;
