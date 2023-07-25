import { SectionTitle } from "../materials/materials";
import styles from "./resume.module.scss";

const educationList = [
  {
    id: 1,
    school: "GHI University",
    formation: "Master of Information Systems Engineering (ISI)",
    yearDebut: 2021,
    yearEnd: 2023,
  },
  {
    id: 2,
    school: "DEF College",
    formation: "Bachelor of Science in Mathematics & Computer Science",
    yearDebut: 2018,
    yearEnd: 2021,
  },
  {
    id: 3,
    school: "ABC High School",
    formation: "Mathematics Science",
    yearDebut: 2015,
    yearEnd: 2018,
  },
];

const Resume = () => {
  return (
    <div className={styles.resume_container}>
      <SectionTitle title="Resume" />
      {educationList.map((education) => (
        <div key={education.id} className={styles.formation_card}>
          <h4>{education.formation}</h4>
          <strong>{education.school}</strong>
          <p>
            From {education.yearDebut} to {education.yearEnd}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Resume;
