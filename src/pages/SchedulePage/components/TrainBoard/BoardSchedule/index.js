import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import { useCurrentWidth } from 'react-socks';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { FlipRow } from '../../../../../components/FlipText/FlipRow';
import LongFlip from '../../../../../components/FlipText/LongFlip';
import breakpoints, { mq5 } from '../../../../../styles/breakpoints';
import InfoButton from '../../../../../components/InfoButton';

const ScheduleTable = styled.table`
  width: 100%;
  background: ${(p) => p.theme.background};
  padding: 1vh 1vw 1vh 1vw;
`;

const ScheduleHeaders = styled.thead`
  margin-bottom: 30px;
`;

const ScheduleHeader = styled.th`
  color: ${(p) => p.theme.onBackground};
  font-family: helvetica;
  text-align: left;
  padding-top: 10;
  font-weight: thin;
  ${mq5({ fontSize: [12, 12, 12, 18, 18] })}
`;

function BoardSchedule(props) {
  const data = useMemo(() => props.data, [props.data]);
  const width = useCurrentWidth();
  const columns = useMemo(() => {
    const colInfo = [
      { Header: 'Date', accessor: 'date' },
      { Header: 'Start', accessor: 'time' }
    ];
    // if (width >= breakpoints.medium) {
    //   colInfo.push({ Header: 'End', accessor: 'end' });
    // }
    colInfo.push({ Header: 'Station', accessor: 'station' });
    if (width >= breakpoints.medium) {
      colInfo.push({ Header: 'Stand', accessor: 'standingTag' });
      colInfo.push({ Header: 'Ground', accessor: 'groundTag' });
    }
    colInfo.push({ Header: 'Status', accessor: 'status' });
    colInfo.push({ Header: 'Details', accessor: 'details' });

    return colInfo;
  }, [width]);
  const theme = useTheme();

  function renderHeader(column) {
    if (column.Header === 'Details') {
      return <div />;
    }
    return column.render('Header');
  }

  // todo enum the status options
  function getStatusTextColor(status) {
    switch (status) {
      case 'ON TIME':
        return theme.success;
      case 'UNSURE':
        return theme.warning;
      case 'CANCELED':
        return theme.error;
      default:
        return undefined;
    }
  }

  function renderCell(cell) {
    switch (cell.column.Header) {
      // intentional fallthrough
      case 'Date':
      case 'Start':
      case 'End':
      case 'Station':
        return <FlipRow message={cell.value} />;
      case 'Details':
        return <InfoButton />;
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
    <ScheduleTable {...getTableProps()}>
      <ScheduleHeaders>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <ScheduleHeader
                {...column.getHeaderProps({
                  style: {
                    width: column.Header === 'Details' ? '1vh' : undefined,
                    color: theme.onBackground,
                    fontFamily: 'helvetica',
                    textAlign: 'left',
                    paddingTop: 10,
                    fontSize: width >= breakpoints.large ? 18 : 12,
                    fontWeight: 'thin'
                  }
                })}
              >
                {renderHeader(column)}
              </ScheduleHeader>
            ))}
          </tr>
        ))}
      </ScheduleHeaders>
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
    </ScheduleTable>
  );
}

export default BoardSchedule;
