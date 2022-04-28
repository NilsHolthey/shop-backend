import Link from "next/link";
import { AppBar, Button, Container, Toolbar } from "@mui/material";

export default function Header() {
  return (
    <AppBar color="primary">
      <Container maxWidth="xl">
        <Toolbar>
          <Link href="/" passHref>
            <Button component="a" sx={{ color: "White" }}>
              Produkte
            </Button>
          </Link>

          <Link href="/categories" passHref>
            <Button component="a" sx={{ color: "White" }}>
              Kategorien
            </Button>
          </Link>

          <Link href="/create-product" passHref>
            <Button component="a" sx={{ color: "White" }}>
              Produkt hinzufügen
            </Button>
          </Link>

          <Link href="/create-category" passHref>
            <Button component="a" sx={{ color: "White" }}>
              Kategorie hinzufügen
            </Button>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

// import Link from "next/link";
// import { AppBar, Container, Toolbar } from "@mui/material";

// export default function Header() {
//   return (
//     <AppBar color="primary">
//       <Container maxWidth="xl">
//         <Toolbar>
//           <Link href="/" passHref>
//             <button>Produkte</button>
//           </Link>
//           <Link href="/categories" passHref>
//             <button>Kategorien</button>
//           </Link>
//           <Link href="/create-product" passHref>
//             <button>Produkt hinzufügen</button>
//           </Link>
//           <Link href="/create-category" passHref>
//             <button>Kategorie hinzufügen</button>
//           </Link>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }
