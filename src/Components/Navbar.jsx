const Navbar = () => {
 return (
  <div className="w-100 py-4 text-slate-50 bg-black">
   <div className="w-10/12 font-bold mx-auto flex justify-between">
    <h2 className="text-3xl font-serif">KFilms</h2>
    <ul className="text-xl  flex gap-10 items-center">
     <a
      href="#series"
      className="relative font-semibold after:content-[''] after:absolute after:h-[2px] after:w-0 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full"
     >
      <li>Séries</li>
     </a>
     <a
      href="#filmes"
      className="relative font-semibold after:content-[''] after:absolute after:h-[2px] after:w-0 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full"
     >
      <li>Filmes</li>
     </a>
    </ul>
   </div>
  </div>
 );
};

export default Navbar;
