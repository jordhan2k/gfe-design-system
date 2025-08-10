import { Pagination } from '@/components/ui/pagination';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Pagination component",
};

const paginationContainers = [
  { id: 'pagination1', currentPage: 1, totalPages: 5, },
  { id: 'pagination2', currentPage: 1, totalPages: 3, iconOnly: true },
  { id: 'pagination3', currentPage: 1, totalPages: 10 },
  { id: 'pagination4', currentPage: 5, totalPages: 10, iconOnly: true },
];


export default function PaginationPage() {
  return (
    <div className='py-[200px] mx-auto w-fit flex flex-col items-center gap-6 '>
      {paginationContainers.map((pagination) => (
        <div key={pagination.id}>
          <Pagination
            id={pagination.id}
            initialPage={pagination.currentPage}
            totalPages={pagination.totalPages}
            iconOnly={pagination.iconOnly}
          // onPageChange={(page) => console.log(`Page changed to: ${page}`)}
          />
        </div>
      ))}
    </div>
  );
}
