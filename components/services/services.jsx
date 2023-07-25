import { SectionTitle } from "../materials/materials";
import styles from "./services.module.scss";
import { FaServicestack, FaCode, FaTools, FaPaintBrush } from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Web Design",
    icon: <FaPaintBrush />,
    desription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Web Developer",
    icon: <FaCode />,
    desription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const Services = () => {
  return (
    <div className={styles.services_container} id="services">
      <SectionTitle icon={<FaServicestack />} title="Services" />
      <div className={styles.services_flex}>
        {services.map((service) => (
          <div key={service.id} className={styles.service_card}>
            <div className={styles.service_card_head}>
              <h4>{service.title}</h4>
              {service.icon}
            </div>
            <p>{service.desription}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
