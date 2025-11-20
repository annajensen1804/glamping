import PageHeader from "../components/pageHeader/PageHeader";
import SectionText from "../components/sectionText/SectionText";
import bgImg from "../assets/min-liste.jpg"
import MyListComponent from "../components/myList/MyList";
import logo from "../assets/logo.png";

const MyList = () => {

    return (
      <section>
        <PageHeader titleOne="Min liste" bgImg={bgImg} logo={logo}/>

        <SectionText />

        <MyListComponent />
      </section>
    );
}

export default MyList