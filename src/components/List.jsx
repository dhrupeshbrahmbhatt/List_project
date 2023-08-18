import React, { useState } from 'react';

export const ListSwapper = () => {
  const [listOne, setListOne] = useState(['Item 1', 'Item 2', 'Item 3']);
  const [listTwo, setListTwo] = useState(['Item A', 'Item B', 'Item C']);

  const handleItemClick = (item, sourceList, targetList, setSourceList, setTargetList) => {
    const updatedSourceList = sourceList.filter((i) => i !== item);
    const updatedTargetList = [...targetList, item];
    setSourceList(updatedSourceList);
    setTargetList(updatedTargetList);
  };

  return (
    <div className='flex flex-row gap-10 justify-center mt-40'>
        <h2 className='text-xl absolute items-center'>Swap list by Touching the List items</h2>
      <div className='border shadow-lg p-5 m-10'>
        <h2>List One</h2>
        <ul>
            {listOne.map((item) => (
            <li key={item} onClick={() => handleItemClick(item, listOne, listTwo, setListOne, setListTwo)}>
                {item}
            </li>
            ))}
        </ul>
      </div>
      <div className='border shadow-lg p-5 m-10'>
        <h2>List Two</h2>
        <ul>
            {listTwo.map((item) => (
            <li key={item} onClick={() => handleItemClick(item, listTwo, listOne, setListTwo, setListOne)}>
                {item}
            </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
