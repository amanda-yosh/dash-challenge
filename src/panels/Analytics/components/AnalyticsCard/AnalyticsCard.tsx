import { ComponentType } from "react";
import { IconBaseProps } from "react-icons";
import './AnalyticsCard.scss';

interface AnalyticsCardProps {
  Logo: ComponentType<IconBaseProps>;
  title: string;
  subtitle?: string;
  sectionName: string;
  boxText?: string;
}

function AnalyticsCard({Logo, title, subtitle, sectionName, boxText}: AnalyticsCardProps) {
  const sectionNamePlus = 'analytics-card ' + sectionName

  return (
    <section className={sectionNamePlus}>
      <header className="analytics-card__header">
        <Logo />
        <div className="analytics-card__header--title">
          <h3>{title}</h3>
          <span>{subtitle}</span>
        </div>
      </header>
      <main className="analytics-card__main">
        <p>{boxText}</p>
      </main>
    </section>
  );
}

AnalyticsCard.defaultProps = {
  boxText: 'white box'
};

export default AnalyticsCard;
