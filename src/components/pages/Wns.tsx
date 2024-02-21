import { MaxWidthWrapper, Page } from "../Page";
import { WnsBenefits, WnsHeader } from "../wns";

export default function Wns() {
  return (
    <Page spacing={8}>
      <MaxWidthWrapper>
        <WnsHeader />
      </MaxWidthWrapper>
      <MaxWidthWrapper>
        <WnsBenefits />
      </MaxWidthWrapper>
    </Page>
  );
}
