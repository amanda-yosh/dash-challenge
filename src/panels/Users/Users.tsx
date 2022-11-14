import { HiOutlineDotsHorizontal } from "react-icons/hi";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { Table } from "../../components/Table/Table";
import { userData, userTableHeader } from "../../utils/constants/users";

import './Users.scss';

function Users() {
  return (
    <section className="users">
      <SectionTitle title="Users" size={userData.length} />
      <div className="users__panel">
        <Table.Table>
          <Table.Header>
            <Table.Row>
              {userTableHeader.map((header) => (
                <Table.Description key={header + '0'}>{ header }</Table.Description>
              ))}
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {userData.map(({name, email, role, phone, status, waterfall}) => (
              <Table.Row key={name + '0'}>
                <Table.Description>
                  <div>img</div>
                  <div>
                    <p>{name}</p>
                    <p>{email}</p>
                  </div>
                </Table.Description>
                <Table.Description>{role}</Table.Description>
                <Table.Description>{phone}</Table.Description>
                <Table.Description>{status}</Table.Description>
                <Table.Description>{waterfall}</Table.Description>
                <Table.Description>
                  <HiOutlineDotsHorizontal />
                </Table.Description>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Table>
      </div>
    </section>
  );
}

export default Users;
