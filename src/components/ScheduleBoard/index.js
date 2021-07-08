import React, { useMemo } from 'react';
import { useTable } from 'react-table';

function ScheduleBoard(props) {
  const data = useMemo(
    () => [
      {
        col1: 'd1 c1',
        col2: 'd1 c2'
      },
      { col1: 'd2 c1', col2: 'd2 c2' }
    ],
    []
  );

  const columns = useMemo(
    () => [
      { header: 'column 1', accessor: 'col1' },
      { header: 'column 2', accessor: 'col2' }
    ],
    []
  );

  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <table {...getTableProps()}>
      <thead />
    </table>
  );
}

export default ScheduleBoard;
