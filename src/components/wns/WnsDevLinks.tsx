import { Typography } from "@mui/material";
import {
  ASSET_DASH_ELEMENTS_LINK,
  DEV_DOCS_LINK,
  DEV_TOOL_REPO_LINK,
  ELEMENTS_LOGO,
  POEM,
  POEM_VAULT_LINK,
  WNS_REPO_LINK,
} from "../../constants";
import { Column, Image, MediaStack, Row } from "../common";
import { LIGHT_SHADOW } from "../theme";
import { ArrowOutward } from "@mui/icons-material";
import { useState } from "react";

export default function WnsDevLinks() {
  return (
    <MediaStack sxAbove={{ alignItems: "flex-start" }} spacing={6}>
      <Carousel />
      <Column spacing={4}>
        <Header />
        <DevLinks />
      </Column>
    </MediaStack>
  );
}

type CarouselType = {
  header: string;
  description: string;
  href: string;
  image: string;
};

const CAROUSEL: CarouselType[] = [
  {
    header: "Elements",
    description: "The first collection minted on WNS by AssetDash",
    image: ELEMENTS_LOGO,
    href: ASSET_DASH_ELEMENTS_LINK,
  },
  {
    header: "Wen Poem",
    description: "First NFT minted on WNS by Meow",
    image: POEM,
    href: POEM_VAULT_LINK,
  },
];

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const selected = CAROUSEL[activeIndex];
  return (
    <Column
      spacing={2}
      sx={{ maxWidth: "300px", p: 2, boxShadow: LIGHT_SHADOW, borderRadius: 1 }}
    >
      <Image
        variant="fixed-width"
        src={selected.image}
        width="300px"
        height="300px"
      />
      <Column>
        <Typography
          onClick={() => window.open(selected.href)}
          sx={{ cursor: "pointer", ":hover": { textDecoration: "underline" } }}
          variant="h3"
        >
          {selected.header}
        </Typography>
        <Typography
          sx={{
            // fixed height to prevent jumping on text height switch
            height: "40px",
          }}
          variant="body2"
          color="text.secondary"
        >
          {selected.description}
        </Typography>
      </Column>
      <Row spacing={1}>
        {Array(CAROUSEL.length)
          .fill(null)
          .map((_, i) => (
            <Column
              sx={{
                cursor: "pointer",
                ":hover": { opacity: 1 },
                background: ({ palette }) => palette.primary.main,
                width: "10px",
                height: "10px",
                borderRadius: "100%",
                opacity: activeIndex === i ? 0.7 : 0.4,
              }}
              onClick={() => setActiveIndex(i)}
              key={i}
            />
          ))}
      </Row>
    </Column>
  );
}

function Header() {
  return (
    <Column>
      <Typography variant="h1"> Start Building</Typography>
      <Typography color="text.secondary">
        WNS has the most robust toolkit of features for creators, developers,
        and owners.
      </Typography>
    </Column>
  );
}

type LinkType = { label: string; href: string };
const LINKS: LinkType[] = [
  { label: "Core Repository", href: WNS_REPO_LINK },
  { label: "Developer Tools Repository", href: DEV_TOOL_REPO_LINK },
  { label: "Developer Documentation", href: DEV_DOCS_LINK },
];

function DevLinks() {
  return (
    <Column spacing={3}>
      {LINKS.map((link, i) => (
        <DevLink {...link} key={i} />
      ))}
    </Column>
  );
}

function DevLink(link: LinkType) {
  return (
    <Typography
      variant="h2"
      onClick={() => window.open(link.href)}
      sx={{
        cursor: "pointer",
        ":hover": { textDecoration: "underline" },
        fontWeight: "normal",
        alignItems: "center",
        display: "flex",
        gap: 2,
        svg: { fontSize: "inherit" },
      }}
    >
      {link.label} <ArrowOutward />
    </Typography>
  );
}
