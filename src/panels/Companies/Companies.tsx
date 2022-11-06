import SectionTitle from "../../components/SectionTitle/SectionTitle";
import CompaniesCard from "./components/CompaniesCard/CompaniesCard";
import { companiesData } from "../../utils/constants/companies";
import "./Companies.scss";

function Companies() {
  return (
    <section className="companies">
      <SectionTitle title="Companies" size={companiesData.length} />
      <div className="panel">
        {companiesData.map(({ logo, name, totalUsers, tested }) => (
          <CompaniesCard
            key={ name + '0' }
            Logo={ logo }
            title={ name }
            totalUsers={ totalUsers }
            tested={ tested } />
        ))}
      </div>
    </section>
  );
}

export default Companies;
