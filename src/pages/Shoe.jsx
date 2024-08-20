import { useParams } from "react-router-dom";
import { products } from "../constants";
import Button from "../components/Button";
import { arrowRight, star } from "../assets/icons";
import { Footer } from "../sections";

const Shoe = () => {
  const { id } = useParams();
  const oneShoe = products.find((product) => product.id === parseInt(id));

  return (
    <div>
      <div className="py-12 px-4">
      <div className="flex flex-1 flex-wrap justify-around items-start">
        <div className="flex justify-center items-center lg:w-[40%] w-full">
          <img src={oneShoe.imgURL} alt={oneShoe.name} className="w-full"/>
        </div>
        <div className="lg:pt-4">
          <h1 className="text-bold font-montserrat text-coral-red text-4xl">
            {oneShoe.name}
          </h1>
          <p className="text-2xl font-montserrat text-slate-gray mt-7 mb-4">
            {oneShoe.price}
          </p>
          <div className="flex justify-start items-center gap-2 mb-5">
          <img src={star} alt="rating" width={24} height={24} />
          <p className="font-montserrat text-xl leading-normal text-slate-gray">
            (4.5)
          </p>
          <p className="text-2xl font-palanquin font-bold">Rated by 100k+ people</p>
          </div>
          <Button label="Order Now" iconURL={arrowRight} />
          <p className="text-xl font-montserrat underline underline-offset-8 font-bold leading-normal mt-3">Shipping</p>
          <p className="text-lg mt-2 font-palanquin font-medium text-slate-gray">You'll see at checkout</p>
        </div>
      </div>
      <p className="text-2xl font-palanquin font-normal text-slate-gray mt-12">
        {oneShoe.description}
      </p>
    </div>
      <section className="bg-black padding-t padding-x pb-8">
      <Footer />
    </section>
    </div>
  );
};

export default Shoe;
