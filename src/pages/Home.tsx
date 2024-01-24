import { Hero, About, Tokenomics, Foundation } from "../components/home";
import { MaxWidthWrapper, Page } from "../components/Page";
import { SPACING_PX_VAL } from "../components/theme";

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
