import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useGetDeviceReadings } from "../queries/ReadingsQueires";

const ReadingData = {
  _id: "632b2d1265a67431258be99c",
  sensor: "632b1c73fee29216c0d4bb45",
  key: "Temprature",
  point: "24.0",
  createdAt: "2022-09-21T15:26:10.208Z",
  updatedAt: "2022-09-21T15:26:10.208Z",
  __v: 0,
};

const ReadingsTable = ({ deviceId }) => {
  const [rows, setRows] = useState([]);
  const {
    data: DeviceReadings,
    status: DeviceReadingsStatus,
    error: DeviceReadingsError,
  } = useGetDeviceReadings(deviceId);


  useEffect(() => {
    let RowData = [];
    if (DeviceReadingsStatus === "success") {
      console.log(DeviceReadings.tempPoints[0]);
      for (let i = 0; i < DeviceReadings.tempPoints[0].length; i++) {
        const element = DeviceReadings.tempPoints[0][i];
        console.log(element)
        let humReading = DeviceReadings.humPoints[0].find(
          (item) => item.UUID === element.UUID
        );
        let ammoniaReading = DeviceReadings.ammoniaPoints[0].find(
          (item) => item.UUID === element.UUID
        );
        let RowPoint = {
          timeStamp: element.createdAt,
          temprature: element.point,
          ammonia: ammoniaReading.point,
          humidity: humReading.point,
        };
        // console.log("___________0000_______")
        // console.log(RowPoint)
        // console.log("________000000__________")
        RowData.push(RowPoint);
      }
    }
    setRows(RowData);
    console.log("RowData__________");
    console.log(RowData);
    console.log("RowData__________");
  }, [DeviceReadings]);

  return (
    <>
      {DeviceReadingsStatus === "loading" && <h1>Loading....</h1>}
      {DeviceReadingsStatus === "error" && <h1>Error:{DeviceReadingsError}</h1>}
      {DeviceReadingsStatus === "success" && (
        <>
          <div>
            <ActionBTN>Hello</ActionBTN>
            {/* <p>{JSON.stringify(DeviceReadings.tempPoints[0][0])}</p> */}
          </div>
          {rows.length === 0 ? (
            <h1>No Data</h1>
          ) : (
            <Table>
              <Thead>
                <Trow>
                  <TH>Time Stamp</TH>
                  <TH>Temprature</TH>
                  <TH>Humidity</TH>
                  <TH>Ammonia</TH>
                </Trow>
              </Thead>
              <Tbody>
                {rows.map((row) => {
                  return (
                    <Trow>
                      <TD>{row.timeStamp}</TD>
                      <TD>{row.temprature}</TD>
                      <TD>{row.humidity}</TD>
                      <TD>{row.ammonia}</TD>
                    </Trow>
                  );
                })}
              </Tbody>
            </Table>
          )}
        </>
      )}
    </>
  );
};

export default ReadingsTable;

const Table = styled.table`
  width: 100%;
  border: 1px solid #ccc;
  /* border-radius: 10px; */
  border-collapse: collapse;
`;

const Thead = styled.thead`
  /* border: 1px solid #ccc; */
  position: sticky;
  top: 0;
`;
const Theader = styled.tr`
  border: 1px solid #ccc;
`;
const TH = styled.th`
  background-color: black;
  color: white;
  /* border: 1px solid #ccc; */
  /* border-left: 1px solid #ccc; */
  padding: 0.5rem;
  text-align: left;
`;
const Tbody = styled.tbody`
  /* border: 1px solid #ccc; */
`;
const Trow = styled.tr`
  /* border: 1px solid #ccc; */
`;
const TD = styled.td`
  border-left: 1px solid #ccc;
  border-top: 1px solid #ccc;
  padding: 0.5rem;
`;

const TFooter = styled.tfoot``;

const ActionBTN = styled.button`
  border: none;
`;
