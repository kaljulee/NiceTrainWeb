import React, { useMemo } from 'react';
import { useTable } from 'react-table';

function ScheduleBoard(props) {
  const data = useMemo(() => props.data.events, []);
  console.log(' --------------- scheduleboard --------');
  console.log(props.data);
  const columns = useMemo(
    () => [
      { Header: 'Date', accessor: 'date' },
      { Header: 'Start', accessor: 'start' },
      { Header: 'End', accessor: 'end' },
      { Header: 'Station', accessor: 'station' },
      { Header: 'Stand', accessor: 'standing' },
      { Header: 'Ground', accessor: 'ground' },
      { Header: 'Status', accessor: 'status' }
    ],
    []
  );

  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <table {...getTableProps()} style={{ height: '100%', width: '100%' }}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ScheduleBoard;
