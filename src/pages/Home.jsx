import PageHeader from "../components/pageHeader/PageHeader";
import SectionText from "../components/sectionText/SectionText"
import Reviews from "../components/reviews/Reviews"
import Footer from "../components/footer/Footer"
import logo from "../assets/logo.png"

const Home = () => {
    return (
      <article>
        <PageHeader logo={logo} titleOne="Gittes" titleTwo="Glamping" button />
        <SectionText
          title="Kom og prøv glamping hos Gitte!"
          text="Vi er stolte af at byde dig velkommen til Gitte’s Glamping, hvor hjertevarme og omsorg møder naturens skønhed og eventyr. Vores dedikerede team, anført af Gitte selv, er her for at skabe den perfekte ramme om din luksuriøse udendørsoplevelse. Vi stræber efter at skabe minder og fordybelse, uanset om du besøger os som par, familie eller soloeventyrer. Vi tilbyder en bred vifte af aktiviteter og arrangementer, der passer til alle aldre og interesser. Udforsk naturen, slap af ved bålet, del historier med nye venner, eller find indre ro med vores wellnessaktiviteter."
          showImage={true}
          showButton={true}
        />
        <Reviews />
        <Footer />
      </article>
    );
}

export default Home;