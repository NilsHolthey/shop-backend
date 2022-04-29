import Link from "next/link";
import styled from "styled-components";

export default function Header() {
  return (
    <HeaderStyles>
      <Link href="/products" passHref>
        <button>Produkte</button>
      </Link>
      <Link href="/categories" passHref>
        <button>Kategorien</button>
      </Link>
      <Link href="/create-product" passHref>
        <button>Produkt hinzufügen</button>
      </Link>
      <Link href="/create-category" passHref>
        <button>Kategorie hinzufügen</button>
      </Link>
    </HeaderStyles>
  );
}

const HeaderStyles = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 64px;
  padding-left: 24px;
  padding-right: 24px;
  color: #fff;
  background-color: rgb(23, 23, 116);
  border-radius: 0 0 8px 8px;
  gap: 20px;
`;
