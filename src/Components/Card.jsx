// eslint-disable-next-line react/prop-types
const Card = ({ title, src }) => {
 return (
  <div className="bg-white min-w-56 pb-3 rounded-md md:w-48 flex flex-col md:gap-4 justify-center">
   <div>
    <img
     className="h-full"
     src={`https://image.tmdb.org/t/p/original/${src}`}
     alt=""
    />
   </div>
   <div className="px-3 md:pt-1">
    <h3 className="font-bold text-md ">{title}</h3>
    {/* <p className="text-slate-500  font-semibold text-sm">{desc}</p> */}
   </div>
  </div>
 );
};

export default Card;
