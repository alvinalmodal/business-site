import styles from "../styles/Team.module.css";
import Member from "./member";

const members = [
  {
    imgURL: "/images/employee-one.jpg",
    alt: "Lisa Fischer",
    name: "Lisa Fischer",
    title: "C.E.O. - Founder and Principal Investor",
  },
  {
    imgURL: "/images/employee-two.jpg",
    alt: "Alex Lasker",
    name: "Alex Lasker",
    title: "Partner - Research & Development",
  },
  {
    imgURL: "/images/employee-three.jpg",
    alt: "Omar Carlsen",
    name: "Omar Carlsen",
    title: "Partner - Partnerships & Marketing",
  },
];

const displayMembers = () =>
  members.map((member, index) => <Member key={index} member={member}></Member>);

const Team = () => {
  return (
    <div className={styles.memberContainer}>
      <h2>Our Team</h2>
      <aside className={styles.members}>{displayMembers()}</aside>
    </div>
  );
};

export default Team;
