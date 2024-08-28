const Header = () => {
 return (
  <div className="bg-[url('./assets/bg.jpg')]">
   <div className="h-72 text-white mx-auto grid grid-cols-2 font-serif items-center">
    <h1 className="text-6xl font-bold mx-auto">
     Seja bem vindo
     <br />
     ao nosso cinema
    </h1>
    <p className="text-6xl font-bold mx-auto">KFilms</p>
   </div>
   <p className="font-white">
    Aqui você encontrará os melhores filmes, séries e lançamentos.
   </p>
  </div>
 );
};

export default Header;
