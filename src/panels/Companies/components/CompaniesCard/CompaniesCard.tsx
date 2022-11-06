import { ComponentType } from 'react';
import { IconBaseProps } from 'react-icons';
import './CompaniesCard.scss';

interface CompaniesCardProps {
  Logo: ComponentType<IconBaseProps>;
  title: string;
  totalUsers: number;
  tested: number;
}

function CompaniesCard ({Logo, title, totalUsers, tested}: CompaniesCardProps) {

  return (
    <section className="company-container">
      <header className='company-container__header'>
        <Logo />
        <h3>{ title }</h3>
      </header>
      <main className='company-container__main'>
        <section className='company-container__main--info'>
          <h2 className='company-container__main--info--title'>Total users</h2>
          <span>{ totalUsers }</span>
        </section>
        <section className='company-container__main--info'>
          <h2 className='company-container__main--info--title'>Tested</h2>
          <span>{ tested }</span>
        </section>
      </main>
    </section>
  );
}

export default CompaniesCard;
