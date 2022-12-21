import { useEffect, useState } from 'react';
import axios from 'axios';
import Table from './components/Table';
import Filter from './components/Filter';
import Error from './components/Error';

function App() {
  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState(countries);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('https://restcountries.com/v2/all');
      const data = response.data.map((item) => {
        return {
          name: item.name,
          capital: item.capital ? item.capital : 'No Capital',
          region: item.region,
          flag: item.flag
        };
      });
      setCountries(data);
      setFiltered(data);
      setIsError(false);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="d-flex flex-column container align-items-center mt-4">
      <h1 className="mb-4">Fintech Case</h1>
      <Filter countries={countries} setFiltered={setFiltered} />
      <Table data={filtered} isLoading={isLoading} isError={isError} />
      {isError && <Error />}
    </div>
  );
}

export default App;
