const Header = () => {
 return (
  <div className="bg-[url('./assets/bg.jpg')] bg-center bg-cover  bg-no-repeat ">
   <div className="h-56 md:h-72 w-max-full text-white mx-auto grid grid-cols-1 sm:grid-cols-[60%_40%] items-center">
    <h1 className="text-4xl mx-auto text-left  lg:text-6xl  font-bold ">
     Seja bem vindo
     <br />
     ao nosso cinema
    </h1>
    <p className=" sm:block hidden text-5xl lg:text-6xl font-bold mx-auto">
     KFilms
    </p>
    <p className="text-white  font-bold text-xl lg:text-3xl col-span-full text-center ">
     Aqui você encontrará os melhores filmes.
    </p>
   </div>
  </div>
 );
};

export default Header;
