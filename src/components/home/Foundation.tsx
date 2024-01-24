import { Stack, Typography } from "@mui/material";
import { FOUNDATION_LOGO } from "../../constants";
import { Column, Image } from "../common";
import { LIGHT_SHADOW } from "../theme";
import { useHomeScrollContext } from "../../contexts";

export default function Foundation() {
  const { foundationRef } = useHomeScrollContext();
  return (
    <Stack spacing={4} ref={foundationRef}>
      <Image
        sx={{ boxShadow: LIGHT_SHADOW, p: 2 }}
        variant="circle"
        src={FOUNDATION_LOGO}
        size="100px"
      />
      <Description />
    </Stack>
  );
}

function Description() {
  return (
    <Column spacing={2}>
      <Typography variant="h1">The Wen Foundation</Typography>

      <Typography color="text.secondary">
        The Wen Foundation, led by the Ovols NFT community, is a group dedicated
        to giving back to the Solana community by supporting the development of
        public goods and further amplifying the message of what is only possible
        on Solana.
      </Typography>
      <Typography color="text.secondary">
        The Wen Foundation’s first contribution is Wen New Standard (WNS), an
        open source NFT standard meant to be expanded by any and all members of
        the community.
      </Typography>

      <Typography color="text.secondary">
        There is no team allocation or compensation for early contributors. With
        a simple breakdown of 70% community airdrop and 30% LP/strategic
        reserve, our core focus is on giving back to Solana
      </Typography>
    </Column>
  );
}
