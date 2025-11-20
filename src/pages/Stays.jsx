import SectionText from "../components/sectionText/SectionText";
import StaysOptions from "../components/staysOptions/StaysOptions";
import PageHeader from "../components/pageHeader/PageHeader";
import bgImg from "../assets/ophold.jpg"
import logo from "../assets/logo.png";

const Stays = () => {
    return (
      <article>
        <PageHeader 
        titleOne="Vores ophold" 
        bgImg={bgImg}
        logo={logo}/>

        <SectionText
          title="Vi har ophold til enhver smag"
          text="Vores glampingophold er skabt til at tilbyde en kombination af eventyr og afslapning. Det er den ideelle flugt fra byens støj og stress, og det perfekte sted at genoplade batterierne i en naturskøn indstilling.
Book dit ophold i dag og giv dig selv lov til at fordybe dig i naturen og nyde luksus i det fri. Vi ser frem tid at byde dig velkommen til en oplevelse fyldt med komfort, eventyr og skønhed."
        />

        <StaysOptions />

      </article>
    );
}

export default Stays;