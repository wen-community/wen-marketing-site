import { Button, Typography } from "@mui/material";
import {
  FOUNDATION_LOGO,
  MEDIA,
  WNS_INTEREST_FORM_LINK,
  WNS_REPO_LINK,
} from "../../constants";
import { Column, Image, Row } from "../common";

export default function WnsHeader() {
  return (
    <Column
      spacing={6}
      sx={{ py: "100px", textAlign: "center", alignItems: "center" }}
    >
      <Column alignItems="center" spacing={2}>
        <Logo />
        <Subtitle />
      </Column>
      <Ctas />
    </Column>
  );
}

function Logo() {
  return (
    <Row spacing={3}>
      <Image
        src={FOUNDATION_LOGO}
        mobileHeight="30px"
        mobileWidth="30px"
        size="60px"
      />
      <Typography sx={{ [MEDIA.LG.above]: { fontSize: "60px" } }} variant="h1">
        Wen New Standard
      </Typography>
    </Row>
  );
}

function Subtitle() {
  return (
    <Typography
      sx={{ [MEDIA.LG.above]: { fontSize: "24px" } }}
      color="text.secondary"
    >
      A new generation of tokenized assets on Solana, powered by Token
      Extensions
    </Typography>
  );
}

function Ctas() {
  return (
    <Row sx={{ maxWidth: "300px", width: "100%" }} spacing={1}>
      <Button
        onClick={() => window.open(WNS_INTEREST_FORM_LINK)}
        fullWidth
        variant="contained"
      >
        Mint
      </Button>
      <Button
        onClick={() => window.open(WNS_REPO_LINK)}
        fullWidth
        variant="outlined"
      >
        Developers
      </Button>
    </Row>
  );
}
