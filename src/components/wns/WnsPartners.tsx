import { Stack, Typography } from "@mui/material";
import { MaxWidthWrapper } from "../Page";
import { Column, Image, Row } from "../common";
import { DARK_COlORS } from "../theme";
import { HERO_LOGO } from "../../constants";

export default function WnsPartners() {
  return (
    <Stack
      sx={{
        alignItems: "center",
        width: "100%",
        justifyContent: "center",
        background: "linear-gradient(270deg, #24242A 40.22%, #000 82.92%)",
      }}
    >
      <MaxWidthWrapper>
        <Column alignItems="center" textAlign="center" spacing={4}>
          <Header />
          <Partners />
          <Footer />
        </Column>
      </MaxWidthWrapper>
    </Stack>
  );
}

const LOGOS = Array(8).fill(HERO_LOGO);
function Partners() {
  return (
    <Row sx={{ justifyContent: "center" }} wrap spacing={3}>
      {LOGOS.map((logo) => (
        <Image variant="fixed-height" height="40px" width="auto" src={logo} />
      ))}
    </Row>
  );
}

function Header() {
  return (
    <Column spacing={0.5} alignItems="center">
      <Typography variant="h1" sx={{ color: DARK_COlORS.body }}>
        Our Partners
      </Typography>
      <Typography sx={{ color: DARK_COlORS.caption }}>
        Your favorite Solana apps already support WNS.
      </Typography>
    </Column>
  );
}

function Footer() {
  return (
    <Typography variant="body2" sx={{ color: DARK_COlORS.caption }}>
      WNS is dedicated to full decentralization and is currently forming a
      governance program
    </Typography>
  );
}
