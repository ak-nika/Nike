import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../constants";

const Shoe = () => {
  const { id } = useParams();

  useEffect(() => {
    if (products) {
      let singleProduct = products.find((product) => product.id === parseInt(id));
      console.log(singleProduct);
      console.log(id);
    }
  }, [products]);

  return <div>Shoes</div>;
};

export default Shoe;
