import styles from '../styles/Home.module.scss';

//components
import Header from '../components/header/Index';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Header />
      <Portfolio />
      <Contact />
    </>
  );
}
