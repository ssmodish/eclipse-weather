import { useQuery } from '@tanstack/react-query';
import { getCities } from './my-api';

function App() {
  // const queryClient = useQueryClient()
  const query = useQuery({ queryKey: ['cities'], queryFn: getCities });

  return (
    <>
      <h1>Eclipse Weather</h1>
      <div>
        <ul>
          {query.data?.map((city) => (
            <li key={city.id}>{city.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
