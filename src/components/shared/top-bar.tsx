import { FC } from 'react';
import Categories from '@/components/shared/categories';
import SortPopup from '@/components/shared/sort-popup';
import { cn } from '@/lib/utils';
import { Container } from '@/components/shared/container';

interface IProps {
  className?: string;
}

const TopBar: FC<IProps> = ({ className }) => {
  return (
    <div className={cn('sticky top-0 bg-white shadow-lg shadow-black/5 z-10 pb-6', className)}>
      <Container className="flex items-center justify-between">
        <Categories />
        <SortPopup />
      </Container>
    </div>
  );
};

export default TopBar;
