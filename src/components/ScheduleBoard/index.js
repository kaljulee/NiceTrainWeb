import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import { useCurrentWidth } from 'react-socks';
import colors from '../../styles/colors';
import { FlipRow } from '../FlipText/FlipRow';
import LongFlip from '../FlipText/LongFlip';
import breakpoints from '../../styles/breakpoints';
import InfoButton from '../InfoButton';

function ScheduleBoard(props) {
  const data = useMemo(() => props.data.events, []);
  const width = useCurrentWidth();
  const columns = useMemo(() => {
    const colInfo = [
      { Header: 'Date', accessor: 'date' },
      { Header: 'Start', accessor: 'start' }
    ];
    if (width >= breakpoints.medium) {
      colInfo.push({ Header: 'End', accessor: 'end' });
    }
    colInfo.push({ Header: 'Station', accessor: 'station' });
    if (width >= breakpoints.medium) {
      colInfo.push({ Header: 'Stand', accessor: 'standing' });
      colInfo.push({ Header: 'Ground', accessor: 'ground' });
    }
    colInfo.push({ Header: 'Status', accessor: 'status' });
    colInfo.push({ Header: 'Data', accessor: 'data' });

    return colInfo;
  }, [width]);

  function renderCell(cell) {
    switch (cell.column.Header) {
      // intentional fallthrough
      case 'Date':
      case 'Start':
      case 'End':
      case 'Station':
        return <FlipRow message={cell.value} />;
      case 'Data':
        return <InfoButton />;
      default:
        return <LongFlip message={cell.value} />;
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
                  fontSize: 18,
                  fontWeight: 'thin'
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
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td
                  {...cell.getCellProps()}
                  style={{
                    height: '100%'
                  }}
                >
                  <div
                    style={{
                      height: '100%',
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
