import  type{ Filter } from '../types';

interface Props {
  filter: Filter;
  setFilter: (filter: Filter) => void;
}

export default function FilterButtons({ filter, setFilter }: Props) {
  const filters: Filter[] = ['all', 'active', 'completed'];

  return (
    <div className='filter-bottons'>
      {filters.map(f => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          style={{ fontWeight: filter === f ? 'bold' : 'normal' }}
        >
          {f}
        </button>
      ))}
    </div>
  );
}