import { ReactElement } from "react";
import { Column, MediaStack } from "../common";
import { LIGHT_SHADOW } from "../theme";
import { Typography } from "@mui/material";
import { Bolt, Layers, Public } from "@mui/icons-material";

type BenefitType = {
  icon: ReactElement;
  header: string;
  description: string;
};

const BENEFITS: BenefitType[] = [
  {
    icon: <Public />,
    header: "Decentralized",
    description:
      "WNS is a fully open-source framework for minting NFTs and paying royalties to creators of those NFTs",
  },
  {
    icon: <Layers />,
    header: "Composable",
    description:
      "WNS extends the Token Extensions program, seamlessly integrating its features into the heart of Solana's core functions",
  },
  {
    icon: <Bolt />,
    header: "Functional",
    description:
      "Low mint cost, fully refundable, embedded royalty distributions, and much more",
  },
];

export default function WnsBenefits() {
  return (
    <MediaStack spacing={2} sxAbove={{ alignItems: "stretch" }}>
      {BENEFITS.map((b, i) => (
        <Benefit key={i} {...b} />
      ))}
    </MediaStack>
  );
}

function Benefit(benefit: BenefitType) {
  return (
    <Column
      spacing={1}
      sx={{
        borderRadius: 1,
        width: "100%",
        boxShadow: LIGHT_SHADOW,
      }}
    >
      <Column sx={{ px: 3, py: 2 }}>
        <Typography
          sx={{
            gap: 1,
            display: "flex",
            alignItems: "center",
            svg: { fontSize: "inherit" },
          }}
          variant="h2"
        >
          {benefit.icon} {benefit.header}
        </Typography>
        <Typography color="text.secondary"> {benefit.description} </Typography>
      </Column>
    </Column>
  );
}
