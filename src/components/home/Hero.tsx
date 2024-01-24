import { Column, Image, MediaStack } from "../common";
import {
  BUY_LINK_ENABLED,
  BUY_WEN_LINK,
  CLAIM_AIRDROP_EXPIRED,
  CLAIM_AIRDROP_LINK,
  CLAIM_AIRDROP_STARTED,
  LOGO_TEXT,
} from "../../constants";
import { Button, Stack, Tooltip, Typography } from "@mui/material";
import { FONT_SIZES } from "../theme";
import { useHomeScrollContext } from "../../contexts";
import { shakeAnimation } from "../../util";

export default function Hero() {
  return (
    <Column
      sx={{ py: "100px" }}
      alignItems="center"
      textAlign="center"
      spacing={4}
    >
      <Logo />
      <Typography variant="h3">
        A community coin to immortalize wen culture
      </Typography>
      <Ctas />

      <ArrowPrompt />
    </Column>
  );
}

function Logo() {
  const { scrollTo } = useHomeScrollContext();

  return (
    <Stack sx={{ cursor: "pointer" }} onClick={scrollTo.firstOnPage}>
      <Image
        src={LOGO_TEXT}
        mobileHeight="100px"
        height="200px"
        sx={{
          ":hover": { animation: `${shakeAnimation} 0.5s linear infinite` },
        }}
        variant="fixed-height"
      />
    </Stack>
  );
}

function Ctas() {
  if (!BUY_LINK_ENABLED && !CLAIM_AIRDROP_STARTED) return null;
  return (
    <MediaStack
      sxAbove={{
        flexDirection: CLAIM_AIRDROP_EXPIRED ? "row-reverse" : "row",
      }}
      sxBelow={{
        flexDirection: CLAIM_AIRDROP_EXPIRED ? "column-reverse" : "column",
      }}
      sx={{ width: "100%" }}
      spacing={2}
      mobileSpacing={1}
    >
      {BUY_LINK_ENABLED && (
        <Button
          onClick={() => window.open(BUY_WEN_LINK)}
          sx={{ fontSize: FONT_SIZES.h3 }}
          fullWidth
          variant={CLAIM_AIRDROP_EXPIRED ? "contained" : "outlined"}
        >
          Trade WEN
        </Button>
      )}
      {CLAIM_AIRDROP_STARTED && <Claim />}
    </MediaStack>
  );
}

function Claim() {
  if (CLAIM_AIRDROP_EXPIRED) {
    return (
      <Tooltip title={"The claim period has already ended"}>
        <div style={{ width: "100%" }}>
          <Button
            variant="outlined"
            onClick={() => window.open(CLAIM_AIRDROP_LINK)}
            sx={{ fontSize: FONT_SIZES.h3 }}
            fullWidth
            disabled
          >
            Claim Airdrop
          </Button>
        </div>
      </Tooltip>
    );
  }
  return (
    <Button
      onClick={() => window.open(CLAIM_AIRDROP_LINK)}
      sx={{ fontSize: FONT_SIZES.h3 }}
      fullWidth
    >
      Claim Airdrop
    </Button>
  );
}

function ArrowPrompt() {
  const { scrollTo } = useHomeScrollContext();
  return (
    <Button
      sx={{ textDecoration: "underline" }}
      onClick={scrollTo.firstOnPage}
      variant="text"
    >
      Learn More
    </Button>
  );
}
