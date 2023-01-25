import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState ([]); 
    // esta te la elimino para no duplicar codigo lo hago en el use Effect
    /* const [filteredProducts, setFilteredProducts] = useState([]); */
    const { category } = useParams();

    const getProducts = fetch('https://fakestoreapi.com/products', {
      method: 'GET',
      headers: {
        'content-type': 'json',
    }
    });

    useEffect(() => {
      getProducts
      .then((res) => {
        return res.json()
      })
      .then((response) => {
        if(category){
          const filterProduct = response.filter((p)=>p.category===category);
          setProducts(filterProduct)
        }else{setProducts(response)}
      })
      .catch((error) => console.log(error))
    }, [category]);
    
    //lo unifique en la linea 26 todos los ternarios y condicionales y agrego al use effect el [category para que se active al cambiar de categorya]

    /* useEffect(() => {
      if(category) {
        console.log(category);
        const removeCharacters = category.includes('%20') ? category.replace('%20', '') : category;
        const filterProducts = products.filter((product) => product.category === removeCharacters );
        setFilteredProducts(filterProducts)
      }
    }, [category]); */
    
    return (
      <div>
        {greeting}
        <ItemList productos={products}/>
      </div>
    );

  };
  
  export default ItemListContainer;  