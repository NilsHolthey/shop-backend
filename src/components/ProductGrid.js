import { CardContainer } from "./UI/CardContainer.styled";
import Product from "./Product";

export default function ProductGrid({ products }) {
  return (
    <CardContainer>
      {products.map((product) => (
        <li key={product.id}>
          <Product
            name={product.name}
            description={product.description}
            price={product.price}
            tags={product.tags}
            category={product.category}
          />
        </li>
      ))}
    </CardContainer>
  );
}

// const ProductList = styled.ul`
//   display: flex;
//   flex-wrap: wrap;

//   list-style-type: none;
// `;
