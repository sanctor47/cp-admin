import React from "react";
import styled from "styled-components";

const keys = [
  {
    id: 1,
    label: "Name",
    sortable: true,
    show: true,
  },
  {
    id: 2,
    label: "Email",
    sortable: true,
    show: true,
  },
  {
    id: 3,
    label: "Phone",
    sortable: true,
    show: true,
  },
  {
    id: 4,
    label: "Domain",
    sortable: true,
    show: true,
  },
  {
    id: 5,
    label: "Status",
    sortable: true,
    show: true,
  },
];

const UsersTable = ({ data }) => {
  return (
    <Table>
      <Thead>
        <Theader>
          {keys.map((key) => {
            if (key.show === true) {
              return <TH key={key.id}>{key.label}</TH>;
            }
          })}
          <TH>Actions</TH>
        </Theader>
      </Thead>
      <Tbody>
        <Trow>
          <TD>Aser Nabil</TD>
          <TD>aser.e.nabil@gmail.com</TD>
          <TD>+201501401559</TD>
          <TD>Global Test Domain</TD>
          <TD>Active</TD>
          <TD>
            <ActionBTN>Go to Profile</ActionBTN>
          </TD>
        </Trow>
        <Trow>
          <TD>Aser Nabil</TD>
          <TD>aser.e.nabil@gmail.com</TD>
          <TD>+201501401559</TD>
          <TD>Global Test Domain</TD>
          <TD>Active</TD>
          <TD>
            <ActionBTN>Go to Profile</ActionBTN>
          </TD>
        </Trow>
        <Trow>
          <TD>Aser Nabil</TD>
          <TD>aser.e.nabil@gmail.com</TD>
          <TD>+201501401559</TD>
          <TD>Global Test Domain</TD>
          <TD>Active</TD>
          <TD>
            <ActionBTN>Go to Profile</ActionBTN>
          </TD>
        </Trow>
      </Tbody>
    </Table>
  );
};

export default UsersTable;

export const Table = styled.table`
  border: 1px solid #ccc;
  /* border-radius: 10px; */
  border-collapse: collapse;
`;

export const Thead = styled.thead`
  /* border: 1px solid #ccc; */
`;
export const Theader = styled.tr`
  /* border: 1px solid #ccc; */
`;
export const TH = styled.th`
  /* border: 1px solid #ccc; */
  border-left: 1px solid #ccc;
  padding: 0.5rem;
  text-align: left;
`;
export const Tbody = styled.tbody`
  /* border: 1px solid #ccc; */
`;
export const Trow = styled.tr`
  /* border: 1px solid #ccc; */
`;
export const TD = styled.td`
  border-left: 1px solid #ccc;
  border-top: 1px solid #ccc;
  padding: 0.5rem;
`;

export const ActionBTN = styled.button`
    border: none;
`