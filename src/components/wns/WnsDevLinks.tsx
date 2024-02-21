import { Typography } from "@mui/material";
import {
  DEV_DOCS_LINK,
  DEV_TOOL_REPO_LINK,
  POEM,
  WNS_REPO_LINK,
} from "../../constants";
import { Column, Image, MediaStack } from "../common";
import { LIGHT_SHADOW } from "../theme";
import { ArrowOutward } from "@mui/icons-material";

export default function WnsDevLinks() {
  return (
    <MediaStack
      sxBelow={{ flexDirection: "column-reverse" }}
      sxAbove={{ alignItems: "flex-start" }}
      spacing={6}
    >
      <Carousel />
      <Column spacing={4}>
        <Header />
        <Links />
      </Column>
    </MediaStack>
  );
}

function Carousel() {
  return (
    <Image
      sx={{ boxShadow: LIGHT_SHADOW }}
      variant="fixed-width"
      mobileWidth="100%"
      src={POEM}
      width="300px"
    />
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

type Link = { label: string; href: string };
const LINKS: Link[] = [
  { label: "Core Repository", href: WNS_REPO_LINK },
  { label: "Developer Tools Repository", href: DEV_TOOL_REPO_LINK },
  { label: "Developer Documentation", href: DEV_DOCS_LINK },
];

function Links() {
  return (
    <Column spacing={3}>
      {LINKS.map((link, i) => (
        <DevLink {...link} key={i} />
      ))}
    </Column>
  );
}

function DevLink(link: Link) {
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
