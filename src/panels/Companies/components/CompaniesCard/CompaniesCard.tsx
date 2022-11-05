import { ReactElement } from 'react';
import './CompaniesCard.scss';

interface CompaniesCardProps {
  logo?: ReactElement;
  title: string;
  totalUsers: number;
  tested: number;
}

function CompaniesCard ({logo, title, totalUsers, tested}: CompaniesCardProps) {
  // const Logo = logo

  return (
    <section className="company-container">
      <header className='company-container__header'>
        {/* <Logo /> */}
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
