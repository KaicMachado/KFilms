import Card from "./Card.jsx";

const Lançamentos = () => {
 return (
  <div className="p-14 md:py-12 md:px-16 bg-black">
   <h2 className="font-bold text-5xl text-white mb-10">Lançamentos</h2>
   <div className="flex gap-5 md:gap-14  overflow-hidden ">
    <Card />
    <Card />
    <Card />
   </div>
  </div>
 );
};

export default Lançamentos;
