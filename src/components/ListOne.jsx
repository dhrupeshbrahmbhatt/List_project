export const TableOne = ({ items, transferItem }) => {
    return (
      <div className="m-10">
        <h2 className="font-semibold">Table One</h2>
        <table>
          <thead>
            <tr>
              <th>Index</th>
              <th>Item</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index} onClick={() => transferItem('tableOne', 'tableTwo', index)}>
                <td>{index}</td>
                <td>{item}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  