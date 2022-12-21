import { useEffect, useState } from 'react';

const Filter = ({ setFiltered, countries }) => {
  const [searchValue, setSearchValue] = useState({
    type: '',
    capital: '',
    all: ''
  });

  const changeHandle = (e) => {
    setSearchValue({
      capital: '',
      all: '',
      [e.target.name]: e.target.value,
      type: e.target.name
    });
  };

  const filterHandle = (data) => {
    let newCountries = [...countries];
    switch (data.type) {
      case 'capital':
        return newCountries.filter((item) =>
          item.capital.toLowerCase().includes(data.capital.trim().toLowerCase())
        );
      case 'all':
        // I added a check with index because I don't want it to search by the flag property.
        return newCountries.filter((object) =>
          Object.values(object).some(
            (el, i) => i !== 3 && el.toLowerCase().includes(data.all.trim().toLowerCase())
          )
        );
      default:
        return countries;
    }
  };
  useEffect(() => {
    setFiltered(filterHandle(searchValue));
  }, [searchValue.type, searchValue.all, searchValue.capital]);

  return (
    <div className=" d-flex mb-4">
      <input
        type="text"
        name="capital"
        className="form-control me-2"
        value={searchValue.capital}
        placeholder="Filter by capital"
        onChange={changeHandle}
      />
      <input
        type="text"
        name="all"
        value={searchValue.all}
        className="form-control"
        placeholder="Search in all fields"
        onChange={changeHandle}
      />
    </div>
  );
};

export default Filter;
