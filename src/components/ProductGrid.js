import Product from "./Product";
import styled from "styled-components";

export default function ProductGrid({ products }) {
  return (
    <ProductList>
      {products.map((product) => (
        <li key={product.id}>
          <Product
            name={product.name}
            description={product.description}
            price={product.price}
            category={product.category}
            tags={product.tags}
          />
        </li>
      ))}
    </ProductList>
  );
}

const ProductList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  list-style-type: none;
`;
