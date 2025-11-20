import PageHeader from "../components/pageHeader/PageHeader"
import bgImg from "../assets/aktiviteter.jpg"
import SectionText from "../components/sectionText/SectionText"
import ActivitiesOptions from "../components/activities/ActivitiesOptions";
import logo from "../assets/logo.png";

const Activities = () => {
    return (
      <article>
        <PageHeader titleOne="Aktiviteter" bgImg={bgImg} logo={logo}/>

        <SectionText
          title="Ingen skal kede sig hos Gitte"
          text="Glamping er mere end blot en indkvartering - det er en mulighed for at fordybe dig i naturen og skabe minder, der varer livet ud. Uanset om du foretrækker en eventyrlig kanotur, en oplysende naturvandring, hjertevarm samvær omkring bålet, smagfulde oplevelser som vinsmagning eller morgenyoga, der giver dig indre ro og balance i naturens skød - vil vi hos Gittes Glamping imødekomme dine ønsker."
        />

        <ActivitiesOptions />
      </article>
    );
}

export default Activities