import React, { useState } from 'react';
import { DataEntry } from './components/DataEntry';
import { TableOne } from "./components/ListOne";
import { TableTwo } from "./components/ListTwo";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const ListComponent = () => {
    // Table One Data Entry
    const [tableOneItems, setTableOneItems] = useState([
      "Randome Item 1",
      "Randome Item 2",
      "Randome Item 3",
      "Randome Item 4",
      "Randome Item 5"
      // Add data accordin to You
    ])
  
    // Table Two Data Entry
    const [tableTwoItems, setTableTwoItems] = useState([]);
  
    const transferitems = (sourceTable, targetTable, index) => {
      const itemstoTransfer = sourceTable === 'tableOne' ? tableOneItems[index] : tableTwoItems[index];
      const updatedSourceTable = sourceTable === 'tableOne' ? [...tableOneItems] : [...tableTwoItems];
      const updatedTargetTable = sourceTable === 'tableOne' ? [...tableOneItems] : [...tableTwoItems];
      
      updatedSourceTable.splice(index, 1);
      updatedTargetTable.push(itemstoTransfer);
  
      if(sourceTable === 'tableOne'){
        setTableOneItems(updatedSourceTable);
        setTableTwoItems(updatedTargetTable);
      } else {
        setTableOneItems(updatedTargetTable);
        setTableTwoItems(updatedSourceTable);
      }
  
    }
  
  return (
    <>
      <div className='flex flex-row gap-10'>
        <TableOne items={tableOneItems} transferItem={transferitems} />
        <TableTwo items={tableTwoItems} transferItem={transferitems} />
      </div>
    </>
  )
}

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/admin' element={<DataEntry />} />
        <Route path='/list' element={<ListComponent />} />
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
