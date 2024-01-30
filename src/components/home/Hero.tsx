import { Column, Image } from "../common";
import { HERO_LOGO } from "../../constants";
import { Button, Stack, Typography } from "@mui/material";
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
        Immortalizing wen culture with the cutest cat coin in web3
      </Typography>

      <ArrowPrompt />
    </Column>
  );
}

function Logo() {
  const { scrollTo } = useHomeScrollContext();

  return (
    <Stack sx={{ cursor: "pointer" }} onClick={scrollTo.firstOnPage}>
      <Image
        src={HERO_LOGO}
        mobileHeight="100px"
        height="250px"
        sx={{
          ":hover": { animation: `${shakeAnimation} 0.5s linear infinite` },
        }}
        variant="fixed-height"
      />
    </Stack>
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
