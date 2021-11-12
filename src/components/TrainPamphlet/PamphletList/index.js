import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

// /////////////////////
// table components
const PamphletTable = styled.table`
  width: 100%;
  height: 100%;
  background: ${(p) => p.theme.background};
  border-spacing: 0 0;
  font-family: ${(p) => p.theme.fontFamily};
`;

const PamphletHeaders = styled.thead``;

const PamphletHeader = styled.th`
  border: 1px solid ${(p) => p.theme.primarySurface};
  padding: 5px 0 5px 0;
  font-weight: bold;
`;

const PamphletRow = styled.tr`
  background: ${(p) => p.theme.primarySurface};
  color: ${(p) => p.color};
`;

const PamphletCell = styled.td`
  background: ${(p) => p.background};
  color: ${(p) => p.color};
  opacity: ${(p) => p.opacity};
  border-left: 1px solid ${(p) => p.primarySurface};
  border-right: 1px solid ${(p) => p.primarySurface};
  text-align: center;
  font-weight: ${(p) => p.fontWeight};
`;

// ////////////////
// table component
function PamphletList(props) {
  const data = useMemo(() => props.data, [props.data]);
  const columns = useMemo(() => {
    const colInfo = [
      { Header: 'FOCUS', accessor: 'focus' },
      { Header: 'DATE', accessor: 'date' },
      { Header: 'TIME', accessor: 'time' },
      { Header: 'STATION', accessor: 'station' },
      { Header: 'STATUS', accessor: 'status' },
    ];
    return colInfo;
  }, [data]);
  const theme = useTheme();

  // todo: header rendering function
  function renderHeader(column) {
    return column.render('Header');
  }

  // todo: cell rendering function
  function renderCell(cell) {
    // console.log('cell');
    // console.log(cell);
    const { column, value, row, getCellProps } = cell;
    let displayValue = value;
    // console.log(`index is ${row.index}`);
    // console.log(row.index % 2);
    if (column.id === 'date') {
      displayValue = 'date goes here';
    }
    const background =
      row.index % 2 === 0 ? theme.background : theme.secondarySurface;
    const color = theme.onBackground; // row.index % 2 === 0 ? theme.onBackground : theme.background;
    const fontWeight = column.id === 'focus' ? 'bold' : '';
    return (
      <PamphletCell
        {...getCellProps()}
        index={row.index}
        color={color}
        background={background}
        fontWeight={fontWeight}
      >
        {displayValue}
      </PamphletCell>
    );
  }

  // console.log('columns');
  // console.table(columns);
  // console.log('data');
  // console.table(data);
  const tableInstance = useTable({ columns, data });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <PamphletTable {...getTableProps()}>
      <PamphletHeaders>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <PamphletHeader
                {...column.getHeaderProps({
                  style: { color: theme.onBackground },
                })}
              >
                {renderHeader(column)}
              </PamphletHeader>
            ))}
          </tr>
        ))}
      </PamphletHeaders>
      <tbody {...getTableProps()} style={{}}>
        {rows.map((row) => {
          prepareRow(row);
          console.log('row');
          console.log(row);
          return (
            <PamphletRow {...row.getRowProps()} index={row.index}>
              {row.cells.map((cell) => renderCell(cell))}
            </PamphletRow>
          );
        })}
      </tbody>
    </PamphletTable>
  );
}

PamphletList.defaultProps = {
  fuck: 'fuck',
  data: [
    {
      id: 0,
      focus: 'dummy sweep',
      date: { dayOfWeek: 'Tues', dayOfMonth: '20', month: 'Oct' },
      time: '17:00',
      station: 'Big Wave',
      status: 'ON TIME',
    },
    {
      id: 0,
      focus: 'dummy sweep',
      date: { dayOfWeek: 'Tues', dayOfMonth: '20', month: 'Oct' },
      time: '17:00',
      station: 'Big Wave',
      status: 'ON TIME',
    },
    {
      id: 0,
      focus: 'dummy sweep',
      date: { dayOfWeek: 'Tues', dayOfMonth: '20', month: 'Oct' },
      time: '17:00',
      station: 'Big Wave',
      status: 'ON TIME',
    },
  ],
};

export default PamphletList;
