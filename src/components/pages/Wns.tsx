import { MaxWidthWrapper, Page } from "../Page";
import { WnsBenefits, WnsDevLinks, WnsHeader, WnsPartners } from "../wns";

export default function Wns() {
  return (
    <Page spacing={8}>
      <MaxWidthWrapper>
        <WnsHeader />
      </MaxWidthWrapper>
      <MaxWidthWrapper>
        <WnsBenefits />
      </MaxWidthWrapper>
      <WnsPartners />
      <MaxWidthWrapper>
        <WnsDevLinks />
      </MaxWidthWrapper>
    </Page>
  );
}
