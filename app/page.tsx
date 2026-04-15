import Header from "@/components/Header/Header";
import HeroPage from "@/components/HeroPage/HeroPage";
import Footer from "@/components/Footer/Footer";
import ContainerWrapper from "@/components/ContainerWrapper";
export default function Home() {
  return (
    <div className="font-family-primary">
            <ContainerWrapper>
        <Header/>
        <HeroPage/>
            </ContainerWrapper>
        <Footer/>
    </div>
  );
}
