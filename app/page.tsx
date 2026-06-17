import Header from "@/components/Header/Header";
import HeroSection from "@/components/HeroSection/HeroSection";
import ContainerWrapper from "@/components/ContainerWrapper";
import SponserSection from "@/components/SponserSection/SponserSection";
export default function Home() {
  return (
    <div className="font-family-primary">
      <ContainerWrapper>
        <Header />
        <HeroSection />
        {/* <SponserSection/> */}
      </ContainerWrapper>
      {/* <Footer /> */}
    </div>
  );
}
