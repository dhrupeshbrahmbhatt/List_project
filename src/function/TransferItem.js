export const transferItem = (sourceList, targetList, index) => {
    const itemToTransfer = sourceList === 'listOne' ? listOne[index] : listTwo[index];
    const updatedSourceList = sourceList === 'listOne' ? [...listOne] : [...listTwo];
    const updatedTargetList = targetList === 'listOne' ? [...listOne] : [...listTwo];

    updatedSourceList.splice(index, 1);
    updatedTargetList.push(itemToTransfer);

    if (sourceList === 'listOne') {
      setListOne(updatedSourceList);
      setListTwo(updatedTargetList);
    } else {
      setListOne(updatedTargetList);
      setListTwo(updatedSourceList);
    }
  };