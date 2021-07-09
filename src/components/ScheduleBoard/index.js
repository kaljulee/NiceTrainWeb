import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import colors from '../../styles/colors';
import { FlipRow } from '../FlipRow';

function ScheduleBoard(props) {
  const data = useMemo(() => props.data.events, []);
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

  function renderCell(cell) {
    switch (cell.column.Header) {
      // intentional fallthrough
      case 'Date':
      case 'Start':
      case 'End':
      case 'Station':
        return <FlipRow message={cell.value} />;
      default:
        return cell.render('Cell');
    }
  }

  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;
  return (
    <table
      {...getTableProps()}
      style={{
        width: '100%',
        backgroundColor: colors.boardComponent,
        paddingLeft: 10,
        paddingRight: 10
      }}
    >
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                style={{
                  color: colors.boardLettering,
                  fontFamily: 'helvetica',
                  textAlign: 'left',
                  paddingTop: 10,
                  fontSize: 24
                }}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableProps()} style={{ height: '100%', width: '100%' }}>
        {rows.map((row) => {
          prepareRow(row);
          console.log(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td
                  {...cell.getCellProps()}
                  style={{
                    color: colors.boardLettering,
                    paddingTop: 5,
                    paddingBottom: 5,
                    height: '100%'
                  }}
                >
                  <div
                    style={{
                      height: '100%',
                      fontSize: 32,
                      textAlign: 'center',
                      textJustify: 'center'
                    }}
                  >
                    {renderCell(cell)}
                  </div>
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ScheduleBoard;
