const Table = ({ data, isLoading, isError }) => {
  return (
    <div className="w-75">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Capital</th>
            <th scope="col">Region</th>
            <th scope="col">Flag</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="align-middle">
              <th scope="row">{index + 1}</th>
              <td>{item.name}</td>
              <td>{item.capital}</td>
              <td>{item.region}</td>
              <td>
                <img
                  style={{ width: '100px', height: 'auto' }}
                  src={item.flag}
                  alt={item.name + ' flag'}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isLoading && <p className=" lead p-2 text-center">Loading...</p>}
      {data.length === 0 && !isLoading && !isError && (
        <p className="border border-1 lead p-2 text-center border-primary">
          Sorry, No results found!
        </p>
      )}
    </div>
  );
};

export default Table;
