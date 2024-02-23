import { Hero, About, Tokenomics, Foundation } from "../home";
import { MaxWidthWrapper, Page } from "../Page";
import { SPACING_PX_VAL } from "../theme";

const spacing = 8;
export default function Home() {
  return (
    <Page spacing={spacing}>
      <MaxWidthWrapper>
        <Hero />
      </MaxWidthWrapper>

      <MaxWidthWrapper>
        <About />
      </MaxWidthWrapper>

      <Tokenomics />

      <MaxWidthWrapper sx={{ mb: `${SPACING_PX_VAL * spacing}px !important` }}>
        <Foundation />
      </MaxWidthWrapper>
    </Page>
  );
}
