import SectionTitle from "../../components/SectionTitle/SectionTitle";
import "./Analytics.scss";
import AnalyticsCard from "./components/AnalyticsCard/AnalyticsCard";
import { BiLoaderCircle } from 'react-icons/bi';
import Heatmap from "../../components/Heatmap/Heatmap";

function Analytics() {
  return (
    <section className="analytics">
      <SectionTitle title="Analytics" />
      <div className="panel">
        <AnalyticsCard
          title={"Base Metrics"}
          sectionName={"base metrics"}
          Logo={BiLoaderCircle}
          subtitle={'1AM - 6PM'} />
        <AnalyticsCard
          title={"Productivity"}
          sectionName={"productivity"}
          Logo={BiLoaderCircle}
          subtitle={'By department'} />
        <Heatmap />
      </div>
    </section>
  );
}

export default Analytics;
