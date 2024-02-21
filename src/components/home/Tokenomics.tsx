import { Button, Stack, Tooltip, Typography } from "@mui/material";
import { useHomeScrollContext } from "../../contexts/";
import { MaxWidthWrapper } from "../Page";
import JupiterSwap from "../jupiter/JupiterSwap";
import { Column, MediaStack, Row } from "../common";
import { WEN_BURN_TWEET_LINK } from "../../constants";
import { DARK_COlORS, FONT_SIZES, FULL_HEIGHT_WITH_NAV } from "../theme";

export default function Tokenomics() {
  const { tokenomicsRef } = useHomeScrollContext();
  return (
    <Stack ref={tokenomicsRef} sx={{ width: "100%" }}>
      <Stack
        sx={{
          alignItems: "center",
          width: "100%",
          justifyContent: "center",
          minHeight: FULL_HEIGHT_WITH_NAV,
          background: "linear-gradient(270deg, #24242A 40.22%, #000 82.92%)",
        }}
      >
        <MaxWidthWrapper>
          <MediaStack
            spaceBetweenRow
            sxAbove={{ alignItems: "flex-start" }}
            spacing={6}
          >
            <Column spacing={4}>
              <Column>
                <Typography variant="h1" sx={{ color: DARK_COlORS.body }}>
                  Tokenomics
                </Typography>
                <Typography sx={{ color: DARK_COlORS.caption }}>
                  An original total supply of 1 trillion tokens
                </Typography>
              </Column>
              <Breakdown />
              <ClaimPrompt />
            </Column>

            <Column sx={{ minWidth: "350px" }}>
              <JupiterSwap />
            </Column>
          </MediaStack>
        </MaxWidthWrapper>
      </Stack>
    </Stack>
  );
}

function ClaimPrompt() {
  return (
    <Column spacing={2}>
      <Typography variant="body2" sx={{ color: DARK_COlORS.caption }}>
        The Wen claim period has ended. The remaining 300B Wen allocated for the
        airdrop (30% of the total supply) have been burned
      </Typography>
      <Tooltip title="Claim period ended">
        <Button
          variant="outlined"
          onClick={() => window.open(WEN_BURN_TWEET_LINK)}
          sx={{
            ":disabled": {
              color: DARK_COlORS.disabled,
              borderColor: DARK_COlORS.disabled,
            },
            width: "max-content",
            fontSize: FONT_SIZES.h3,
            color: DARK_COlORS.body,
            borderColor: DARK_COlORS.caption,
            ":hover": {
              borderColor: DARK_COlORS.body,
            },
          }}
        >
          Read More
        </Button>
      </Tooltip>
    </Column>
  );
}

function Breakdown() {
  return (
    <Column spacing={1}>
      <TokenomicsDescription description="Airdrop" allocation={70} />
      <TokenomicsDescription description="Liquidity Pool" allocation={20} />
      <TokenomicsDescription description="Treasury" allocation={10} />
    </Column>
  );
}

function TokenomicsDescription({
  description,
  allocation,
}: {
  description: string;
  allocation: number;
}) {
  return (
    <Row spacing={1}>
      <Typography variant="h3" sx={{ color: DARK_COlORS.body }}>
        {description}
      </Typography>
      <Typography
        variant="h3"
        sx={{ fontWeight: "normal", color: DARK_COlORS.caption }}
      >
        {allocation}%
      </Typography>
    </Row>
  );
}
