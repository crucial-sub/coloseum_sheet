import React, { useState } from "react";
import MOCK_DATA from "assets/MOCK_DATA.json";
import styled from "styled-components";
import SortButton from "./SortButton";
import { useSelector } from "react-redux";

const ItemSheet = () => {
  const keys = Object.keys(MOCK_DATA[0]);
  const sortedData = useSelector((state) => state.data);
  const [selColumn, setSelColumn] = useState(null);

  return (
    <TableWrapper>
      <table>
        <thead>
          <Tr>
            {keys.map((key, index) => (
              <TableHead key={index}>
                {key}
                <SortButton
                  columnName={key}
                  index={index}
                  selColumn={selColumn}
                  setSelColumn={setSelColumn}
                />
              </TableHead>
            ))}
          </Tr>
        </thead>
        <tbody>
          {sortedData.map((data, index) => (
            <Tr key={index}>
              {Object.values(data).map((value, index) => (
                <Td key={index}>{value}</Td>
              ))}
            </Tr>
          ))}
        </tbody>
      </table>
    </TableWrapper>
  );
};

const TableWrapper = styled.div`
  overflow: auto;
  white-space: nowrap;
`;

const TableHead = styled.th`
  padding-right: 10px;
`;

const Tr = styled.tr`
  padding: 100px;
`;

const Td = styled.td`
  padding-right: 20px;
  padding: 15px;
  text-align: center;
  outline: solid black;
  outline: 1px solid black;
`;

export default ItemSheet;
