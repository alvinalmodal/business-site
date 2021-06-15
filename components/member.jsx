import Image from "next/image";
import styles from "../styles/Member.module.css";

const Member = ({ member }) => {
  return (
    <figure className={styles.member}>
      <Image
        src={member.imgURL}
        alt={member.alt}
        width="200px"
        height="304px"
      ></Image>
      <figcaption>
        <h3>{member.name}</h3>
        <p>{member.title}</p>
      </figcaption>
    </figure>
  );
};

export default Member;
