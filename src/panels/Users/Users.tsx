import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { Table } from "../../components/Table/Table";
import { userData, userTableHeader } from "../../utils/constants/users";

import './Users.scss';

function Users() {
  return (
    <section className="users">
      <SectionTitle title="Users" size={userData.length} />
      <div className="users__panel">
        <Table.Body>
          <Table.Row>
            {userTableHeader.map((header) => (<Table.Header key={header + '0'}>{ header }</Table.Header>))}
          </Table.Row>  
          {userData.map(({name, email, role, phone, status, waterfall}) => (
            <Table.Row key={name + '0'}>
              <Table.Description>
                {name}
                {email}
              </Table.Description>
              <Table.Description>{role}</Table.Description>
              <Table.Description>{phone}</Table.Description>
              <Table.Description>{status}</Table.Description>
              <Table.Description>{waterfall}</Table.Description>
            </Table.Row>
          ))}
        </Table.Body>
      </div>
    </section>
  );
}

export default Users;
