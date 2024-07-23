import { FC } from 'react';
import { cn } from '@/lib/utils';

interface IProps {
  className?: string;
}

const categoriesList = ['Піцца', 'Комбо', 'Закуски', 'Коктейлі', 'Кава', 'Напої', 'Десерти'];
const activeIndex = 0;

const Categories: FC<IProps> = ({ className }) => {
  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
      {categoriesList.map((category, index) => (
        <a
          className={cn(
            'flex items-center font-bold h-11 rounded-2xl px-5',
            activeIndex === index && 'bg-white shadow-md shadow-gray-200 text-primary',
          )}
          key={index}
        >
          <button>{category}</button>
        </a>
      ))}
    </div>
  );
};

export default Categories;
