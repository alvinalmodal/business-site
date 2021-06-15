import styles from "../styles/Portfolio.module.css";
import Company from "./company";

const companies = [
  {
    imgURL: "/images/hangar.jpeg",
    alt: "hangar",
    description: "AeroArgonauts",
  },
  {
    imgURL: "/images/dashboard.jpeg",
    alt: "dashboard",
    description: "AutoBueno",
  },
  {
    imgURL: "/images/blurred-lights.jpeg",
    alt: "blurred-lights",
    description: "LoneChatter",
  },
  {
    imgURL: "/images/tires.jpeg",
    alt: "tires",
    description: "TigerTreads",
  },
  {
    imgURL: "/images/truck.jpeg",
    alt: "truck",
    description: "ValetToday",
  },
];

const displayCompanies = () =>
  companies.map((company, index) => (
    <Company key={index} company={company}></Company>
  ));

const Portfolio = () => {
  return (
    <section id="portfolio" className={styles.portfolio}>
      <article className={styles.content}>
        <h2>Our mobility Portfolio</h2>
        <h4>
          Impacting diverse sectors of mobility to better the human experience
          and the world we inhabit
        </h4>
        <aside className={styles.companies}>{displayCompanies()}</aside>
      </article>
    </section>
  );
};

export default Portfolio;
