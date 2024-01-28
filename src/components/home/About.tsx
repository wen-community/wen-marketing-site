import { Button, Link, Stack, Typography } from "@mui/material";
import {
  MEDIA,
  POEM,
  POEM_VAULT_LINK,
  SOLANA_EXPLORER,
  WEN_MINT,
  WEN_NFT_MINT,
  WEN_TWEET_LINK,
} from "../../constants";
import { Column, Image, MediaStack, Row } from "../common";
import { LIGHT_SHADOW, formatAddress } from "../theme";
import { useHomeScrollContext } from "../../contexts";

const ASPECT_RATIO = 1280 / 728;
const WIDTH = { mobile: 200, desktop: 400 };
export default function About() {
  const { aboutRef } = useHomeScrollContext();
  return (
    <Stack ref={aboutRef}>
      <MediaStack
        sxBelow={{ flexDirection: "column-reverse" }}
        sxAbove={{ alignItems: "flex-start" }}
        spacing={6}
      >
        <Image
          sx={{ boxShadow: LIGHT_SHADOW }}
          variant="fixed-width"
          mobileWidth="100%"
          src={POEM}
          width={`${WIDTH.desktop}px`}
          height={`${ASPECT_RATIO * WIDTH.desktop}px`}
        />
        <Column spacing={4}>
          <Description />
          <TokenLinks />
          <Button
            sx={{ width: "max-content" }}
            onClick={() => window.open(POEM_VAULT_LINK)}
          >
            View Meow's NFT
          </Button>
        </Column>
      </MediaStack>
    </Stack>
  );
}

const bullets = [
  "The first community coin based on a fractional NFT",
  "The first official launch on Jupiter's LFG launchpad",
  "The first NFT minted on the WNS NFT standard",
  "Equal distribution to 1M+ active Solana wallets",
];

function Description() {
  return (
    <Column spacing={2}>
      <Typography variant="h1">
        The first community coin based on a fractional NFT
      </Typography>

      <Typography color="text.secondary">
        We split <Link href={WEN_TWEET_LINK}>@weremeow</Link>’s poem 'A Love Letter
        to Wen Bros' into a trillion pieces that trade like normal Solana
        tokens. Each Wen token equals proportional ownership in Meow's poem.
      </Typography>

      <Column spacing={0.5}>
        <Typography variant="h4" color="text.primary">
          Wen was born to push the limits of Solana
        </Typography>

        {bullets.map((b, i) => (
          <Row alignItems="flex-start" spacing={1} key={i}>
            <Typography color="text.disabled">•</Typography>
            <Typography color="text.secondary"> {b} </Typography>
          </Row>
        ))}
      </Column>
    </Column>
  );
}

const TOKENS = [
  { address: WEN_MINT, description: "Token Address" },
  { address: WEN_NFT_MINT, description: "NFT Address" },
];
function TokenLinks() {
  return (
    <MediaStack query={MEDIA.SM} spacing={3}>
      {TOKENS.map(({ address, description }, i) => (
        <Column key={i}>
          <Typography color="text.secondary"> {description} </Typography>
          <Link
            href={`${SOLANA_EXPLORER}/${address}`}
            color="text.primary"
            sx={{
              textTransform: "none",
              textDecorationColor: ({ palette: { text } }) => text.primary,
            }}
            variant="h3"
          >
            {formatAddress(address)}
          </Link>
        </Column>
      ))}
    </MediaStack>
  );
}
