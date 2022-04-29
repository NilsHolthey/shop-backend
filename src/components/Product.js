import { useState } from "react";
import styled from "styled-components";

export default function Product(props) {
  const [isDeleteMode, setDeleteMode] = useState(false);

  function enableDeleteMode() {
    setIsEditMode(true);
  }

  function disableDeleteMode() {
    setDeleteMode(false);
  }

  return (
    <div>
      {isDeleteMode ? (
        <ProductModeEdit {...props} onDisableDeleteMode={disableDeleteMode} />
      ) : (
        <ProductModeShow {...props} onEnableDeleteMode={enableDeleteMode} />
      )}
    </div>
  );
}

function ProductModeShow({
  name,
  description,
  tags,
  price,
  category,
  onEnableDeleteMode,
}) {
  return (
    <div className="product__containerall">
      <div className="product__container">
        <div className="product__h5">
          <h5>{name}</h5>
          <h5>{price}</h5>
        </div>
        <div className="product__p">
          <p>{description}</p>
          <p>{category}</p>
        </div>
        <ProductList>
          <li>{tags}</li>
        </ProductList>
        <div className="product__buttons">
          <ButtonStyled
            className="product__button"
            onClick={onEnableDeleteMode}
          >
            Delete
          </ButtonStyled>
          <ButtonStyled className="product__button">Edit</ButtonStyled>
        </div>
      </div>
    </div>
  );
}

function ProductModeEdit({
  name,
  description,
  tags,
  price,
  category,
  onDisableDeleteMode,
}) {
  return (
    <div>
      <div>
        <h5>{name}</h5>
        <h5>{price}</h5>
      </div>
      <div>
        <p>{description}</p>
        <p>{category}</p>
      </div>
      <ProductList>
        <li>{tags}</li>
      </ProductList>
      <div>
        <button onClick={onDisableDeleteMode}>Abbrechen</button>
        <button>Wirklich löschen</button>
      </div>
    </div>
  );
}

const ButtonStyled = styled.button`
  cursor: pointer;
  color: white;
  border: none;
  background-color: rgb(23, 23, 116);
  border-radius: 8px;
`;

const ProductList = styled.ul``;
