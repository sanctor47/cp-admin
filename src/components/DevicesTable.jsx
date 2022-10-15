import React from "react";
import { useState } from "react";
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
    label: "Type",
    sortable: true,
    show: true,
  },
  {
    id: 3,
    label: "Label",
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

const DevicesTable = ({ data }) => {
  const [devices, setDevices] = useState(data);

  const GetDeviceType = (device) => {
    let type = null;
    console.log(`Device ${device.name} isGateway: ${device.isGateway}`);
    if (device.isGateway) {
      type = "Gateway";
      console.log("Device is gateway");
    } else if (device.isAccessController) {
      type = "AccessController";
    } else if (device.isBridge) {
      type = "Bridge";
    } else if (device.isCamera) {
      type = "Camera";
    } else {
      type = "Node";
    }
    console.log(`type: ${type}`);
    return type;
  };

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
        {devices.map((device) => {
          let type = GetDeviceType(device);
          return (
            <Trow key={device._id}>
              <TD>{device.name}</TD>
              <TD>{type}</TD>
              <TD>+{device.label}</TD>
              <TD>Global Test Domain</TD>
              <TD>Active</TD>
              <TD>
                <ActionBTN>Go to Profile</ActionBTN>
              </TD>
            </Trow>
          );
        })}
      </Tbody>
    </Table>
  );
};

export default DevicesTable;

export const Table = styled.table`
  border: 1px solid #ccc;
  /* border-radius: 10px; */
  border-collapse: collapse;
`;

export const Thead = styled.thead`
  /* border: 1px solid #ccc; */
  /* position: fixed; */
  /* top: 0; */
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
`;
