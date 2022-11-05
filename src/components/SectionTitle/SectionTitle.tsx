import './SectionTitle.scss';

interface SectionTitleProps {
  title: string;
  size?: number;
}

function SectionTitle ({ title, size }: SectionTitleProps) {
  return (
    <div className="container">
      <h2>{ title }</h2>
      <span>{ size }</span>
    </div>
  )
}

export default SectionTitle;
