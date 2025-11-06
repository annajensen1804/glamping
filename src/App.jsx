import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PageHeader from './components/pageHeader/PageHeader'
import Footer from './components/footer/Footer';
import SectionText from './components/sectionText/SectionText';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PageHeader />
      <SectionText />
      <Footer />
    </>
  );
}

export default App
