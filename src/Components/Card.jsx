import { useState, useEffect } from "react";
import Modal from "./Modal";
// import Modal from "./Modal";

// eslint-disable-next-line react/prop-types
const Card = ({ title, src, desc }) => {
 const [visible, setVisible] = useState(false); // Controla a visibilidade da animação
 const [modal, setModal] = useState(false);
 function handleClick() {
  setModal(true);
 }

 useEffect(() => {
  if (modal) {
   setVisible(true); // Mostra o modal com animação de entrada
  } else {
   // Espera a transição terminar (300ms) antes de desmontar
   setTimeout(() => setVisible(false), 700);
  }
 }, [modal]);

 return (
  <div>
   {visible && (
    <Modal
     title={title}
     src={src}
     desc={desc}
     modal={modal}
     setModal={setModal}
    />
   )}
   <div className="relative bg-gray-900 text-white md:hover:scale-110 hover:cursor-pointer duration-300 md:max-w-80 pb-3 rounded-md md:w-64  flex flex-col md:gap-4 justify-center mb-4">
    <div>
     <img
      className="max-h-96  w-full"
      src={`https://image.tmdb.org/t/p/original/${src}`}
      alt="Imagem do cartaz"
     />
    </div>
    <div className="px-3 md:pt-1">
     <h3 className="font-bold text-md ">{title}</h3>
     <button
      onClick={handleClick}
      className="text-xs md:hover:scale-110 duration-300 bg-red-700 text-slate-50 p-2 rounded-md"
     >
      Ver mais detalhes
     </button>
    </div>
   </div>
  </div>
 );
};

export default Card;
