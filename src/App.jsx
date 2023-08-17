import React, { useState } from 'react';
import { TableOne } from "./components/ListOne";
import { TableTwo } from "./components/ListTwo";

const App = () => {
  const [tableOneItems, setTableOneItems] = useState([
    'Random Item 1',
    'Random Item 2',
    'Random Item 3',
    'Random Item 4',
    'Random Item 5',
  ]);
  const [tableTwoItems, setTableTwoItems] = useState([]);

  const transferItem = (sourceTable, targetTable, index) => {
    const itemToTransfer = sourceTable === 'tableOne' ? tableOneItems[index] : tableTwoItems[index];
    const updatedSourceTable = sourceTable === 'tableOne' ? [...tableOneItems] : [...tableTwoItems];
    const updatedTargetTable = targetTable === 'tableOne' ? [...tableOneItems] : [...tableTwoItems];

    updatedSourceTable.splice(index, 1);
    updatedTargetTable.push(itemToTransfer);

    if (sourceTable === 'tableOne') {
      setTableOneItems(updatedSourceTable);
      setTableTwoItems(updatedTargetTable);
    } else {
      setTableOneItems(updatedTargetTable);
      setTableTwoItems(updatedSourceTable);
    }
  };

  return (
    <div className='flex flex-row gap-10'>
      <TableOne items={tableOneItems} transferItem={transferItem} />
      <TableTwo items={tableTwoItems} transferItem={transferItem} />
    </div>
  );
};

export default App;
