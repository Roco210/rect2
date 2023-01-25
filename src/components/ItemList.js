import Item from "./Item";
import { Link } from "react-router-dom";

const ItemList = ({ productos }) => {
  //en este punto te falto poner el slash de item, te generaba arriba de category 
  return (
    <ul>
      {productos.map((producto) => (
        <Link key={producto.id} to={`/item/${producto.id}`}> 
          <Item producto={producto} />
        </Link>
      ))}
    </ul>
  );
};

export default ItemList;
