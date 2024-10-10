// eslint-disable-next-line react/prop-types
const Modal = ({ title, desc, src, setModal }) => {
 return (
  <div className=" z-10 p-6 w-10/12 rounded  absolute grid grid-cols-2 justify-center items-top bg-slate-50">
   <div className=" flex flex-col justify-center text-center gap-4">
    <h1>{title}</h1>
    <p>{desc}</p>
   </div>
   <div className="h-3/4 flex flex-col text-center gap-4">
    <img
     className="h-10/12 w-3/4 mx-auto"
     src={`https://image.tmdb.org/t/p/original/${src}`}
     alt=""
    />

    <button
     onClick={() => setModal(false)}
     className="text-xs w-max mx-auto hover:scale-110 duration-300 bg-red-700 text-slate-50 p-2 rounded-md"
    >
     Fecha Detalhes
    </button>
   </div>
  </div>
 );
};

export default Modal;
