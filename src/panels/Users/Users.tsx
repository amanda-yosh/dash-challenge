import { HiOutlineDotsHorizontal } from "react-icons/hi";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { Table } from "../../components/Table/Table";
import { userData, userTableHeader } from "../../utils/constants/users";

import './Users.scss';

function Users() {
  return (
    <section className="users">
      <SectionTitle title="Users" size={userData.length} />
      <div className="panel">
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
                <Table.Description extraClass={'panel__user'}>
                  <div className="panel__user--img"></div>
                  <div>
                    <p className="panel__user--name">{name}</p>
                    <p className="panel__user--email">{email}</p>
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
