export const TableTwo = ({ items, transferItem }) => {
    return (
      <div className="mt-10">
        <h2 className="font-semibold">Table Two</h2>
        <table>
          <thead>
            <tr>
              <th>Index</th>
              <th>Item</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index} onClick={() => transferItem('tableTwo', 'tableOne', index)}>
                <td>{index}</td>
                <td>{item}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  