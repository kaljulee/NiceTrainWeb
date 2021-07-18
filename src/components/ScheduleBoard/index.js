import React, { useMemo, useState, useEffect } from 'react';
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
  const [showTrainDetails, setShowTrainDetails] = useState(false);

  useEffect(() => {
    console.log(`detail change to ${showTrainDetails}`);
  }, [showTrainDetails]);
  function renderHeader(column) {
    if (column.Header === 'Data') {
      return <div />;
    }
    return column.render('Header');
  }

  // todo enum the status options
  function getStatusTextColor(status) {
    switch (status) {
      case 'ON TIME':
        return colors.boardGood;
      case 'UNSURE':
        return colors.boardMaybe;
      case 'CANCELED':
        return colors.boardBad;
      default:
        return undefined;
    }
  }

  function renderCell(cell) {
    console.log(cell);
    switch (cell.column.Header) {
      // intentional fallthrough
      case 'Date':
      case 'Start':
      case 'End':
      case 'Station':
        return <FlipRow message={cell.value} />;
      case 'Data':
        return (
          <InfoButton
            onClick={() => setShowTrainDetails(cell.row.original.id)}
          />
        );
      case 'Status':
        return (
          <LongFlip
            textColor={getStatusTextColor(cell.value)}
            message={cell.value}
          />
        );
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
        padding: '1vh 1vw 1vh 1vw'
      }}
    >
      <thead style={{ marginBottom: 30 }}>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps({
                  style: {
                    width: column.Header === 'Data' ? '1vh' : undefined,
                    color: colors.boardLettering,
                    fontFamily: 'helvetica',
                    textAlign: 'left',
                    paddingTop: 10,
                    fontSize: width >= breakpoints.large ? 18 : 12,
                    fontWeight: 'thin'
                  }
                })}
              >
                {renderHeader(column)}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableProps()} style={{ height: '100%', width: '100%' }}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} style={{ width: 'fit-content' }}>
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
