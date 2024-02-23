import { Stack, Typography } from "@mui/material";
import { MaxWidthWrapper } from "../Page";
import { Column, Image, Row } from "../common";
import { DARK_COlORS } from "../theme";
import { WNS_PARTNER_LOGOS } from "../../constants";

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

function Partners() {
  return (
    <Row sx={{ justifyContent: "center" }} wrap spacing={4}>
      {WNS_PARTNER_LOGOS.map((logo) => (
        <Image
          key={logo}
          variant="fixed-height"
          height="32px"
          mobileHeight="20px"
          width="auto"
          src={logo}
        />
      ))}
    </Row>
  );
}

function Header() {
  return (
    <Column spacing={0.5} alignItems="center">
      <Typography
        variant="h3"
        sx={{ fontWeight: "normal", color: DARK_COlORS.body }}
      >
        Supported By
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
