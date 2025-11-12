import SectionText from "../components/sectionText/SectionText";
import StaysOptions from "../components/staysOptions/StaysOptions";

import weekendTurImage from "../assets/ophold/weekendtur.jpg";
import familiepakkenImage from "../assets/ophold/familiepakken.jpg"
import romantiskImage from "../assets/ophold/romantisk_getaway.jpg"
import PageHeader from "../components/pageHeader/PageHeader";

const Stays = () => {
    return (
      <article>
        <PageHeader titleOne="Vores ophold" />

        <SectionText
          title="Vi har ophold til enhver smag"
          text="Vores glampingophold er skabt til at tilbyde en kombination af eventyr og afslapning. Det er den ideelle flugt fra byens støj og stress, og det perfekte sted at genoplade batterierne i en naturskøn indstilling.
Book dit ophold i dag og giv dig selv lov til at fordybe dig i naturen og nyde luksus i det fri. Vi ser frem tid at byde dig velkommen til en oplevelse fyldt med komfort, eventyr og skønhed."
          showImage={false}
          showButton={false}
        />

        <StaysOptions
          title="Weekendtur"
          subtitle1="2 personer"
          subtitle2="Fra 4200,-"
          image={weekendTurImage}
          buttonText="Læs mere"
        />

        <StaysOptions
          title="Familiepakken"
          subtitle1="3-6 personer"
          subtitle2="Fra 6100,-"
          image={familiepakkenImage}
          buttonText="Læs mere"
        />

        <StaysOptions
          title="Romantisk getaway"
          subtitle1="2 personer"
          subtitle2="Fra 3500,-"
          image={romantiskImage}
          buttonText="Læs mere"
        />
      </article>
    );
}

export default Stays;