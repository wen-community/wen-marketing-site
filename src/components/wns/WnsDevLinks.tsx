import { Typography } from "@mui/material";
import {
  ASSET_DASH_ELEMENTS_LINK,
  DEV_DOCS_LINK,
  ELEMENTS_LOGO,
  POEM,
  WEN_GITHUB_LINK,
  WEN_TWEET_LINK,
  WNS_REPO_LINK,
} from "../../constants";
import { Column, Image, MediaStack, Row } from "../common";
import { LIGHT_SHADOW } from "../theme";
import { ArrowOutward } from "@mui/icons-material";
import { useEffect, useState } from "react";

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
    description:
      "The First NFT minted on WNS. The NFT was minted by Meow as his first ever NFT",
    image: POEM,
    href: WEN_TWEET_LINK,
  },
];

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const selected = CAROUSEL[activeIndex];

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = (activeIndex + 1) % CAROUSEL.length;
      setActiveIndex(nextIndex);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [activeIndex]);

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
            height: "50px",
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

type LinkType = { label: string } & (
  | { href: string }
  | { isComingSoon: boolean }
);
const LINKS: LinkType[] = [
  { label: "Wen Github", href: WEN_GITHUB_LINK },
  { label: "WNS Repository", href: WNS_REPO_LINK },
  { label: "Developer Documentation", href: DEV_DOCS_LINK },
  { label: "migrate to WNS (Soon)", isComingSoon: true },
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
  const disabled = "isComingSoon" in link;

  return (
    <Typography
      variant="h2"
      color={disabled ? "text.disabled" : undefined}
      onClick={() => "href" in link && window.open(link.href)}
      sx={{
        cursor: disabled ? "not-allowed" : "pointer",
        ":hover": { textDecoration: disabled ? "normal" : "underline" },
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
