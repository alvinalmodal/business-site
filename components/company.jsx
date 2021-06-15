import Image from "next/image";
import styles from "../styles/Company.module.css";

const Company = ({ company }) => {
  return (
    <figure className={styles.company}>
      <Image
        src={company.imgURL}
        alt={company.alt}
        width="200px"
        height="auto"
      ></Image>
      <figcaption>{company.description}</figcaption>
    </figure>
  );
};

export default Company;
