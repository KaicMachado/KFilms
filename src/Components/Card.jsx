const Card = () => {
 return (
  <div className="bg-white min-w-52 py-3 rounded-md md:w-48 flex flex-col md:gap-4 justify-center">
   <div>
    <img
     src="https://ogimg.infoglobo.com.br/rioshow/24884446-8f3-e73/FT1086A/deadpool-primeiro-filme.jpeg.jpg"
     alt=""
    />
   </div>
   <div className="px-3 pt-2 md:pt-1">
    <h3 className="font-bold text-md ">DeadPool e Wolverine</h3>
    <p className="text-slate-500  font-semibold text-sm">
     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit ad
     provident sunt
    </p>
   </div>
  </div>
 );
};

export default Card;
