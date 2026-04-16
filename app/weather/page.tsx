import ContainerWrapper from "@/components/ContainerWrapper"
import Header from "@/components/Header/Header"
import WeatherSection from "@/components/WeatherSection/WeatherSection"
export default function Weatherpage() {
  return (
    <ContainerWrapper>
      <Header/>
      <div className="h-[calc(100dvh-96px)] flex items-center justify-center">
        <WeatherSection />
      </div>
    </ContainerWrapper>
  )
}