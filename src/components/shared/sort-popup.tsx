import { FC } from 'react';
import { cn } from '@/lib/utils';
import { ArrowUpDown } from 'lucide-react';

interface IProps {
  className?: string;
}

const SortPopup: FC<IProps> = ({ className }) => {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-1 bg-gray-50 px-5 h-[52px] rounded-2xl' + ' cursor-pointer',
        className,
      )}
    >
      <ArrowUpDown />
      <b>Сортування</b>
      <b className="text-primary">популярне</b>
    </div>
  );
};

export default SortPopup;
