import PageHeader from '../components/pageHeader/PageHeader'
import logo from '../assets/logo.png'
import SectionText from '../components/sectionText/SectionText';
import bgImg from '../assets/kontakt.jpg'
import ContactForm from '../components/contactForm/ContactForm';

const Contact = () => {
    return (
      <article>
        <PageHeader 
        logo={logo}
        titleOne="Kontakt Gitte" 
        bgImg={bgImg} />

        <SectionText
          title="Vil du booke et ophold? Eller har du blot et spørgsmål?"
          text="Så tøv ikke med at tage kontakt til os herunder. 
Vi bestræber os på at svare på henvendelser indenfor 24 timer, men op til ferier kan der være travlt, og svartiden kan derfor være op til 48 timer."
        />

        <ContactForm />

      </article>
    );
}

export default Contact