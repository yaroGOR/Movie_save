import ReactPaginate from 'react-paginate';
interface IPagination {
    items: number
    currentPage: number | undefined
    pageSize: number
    onPageChange: any
}
const Pagination = ({ items = 0, currentPage, pageSize, onPageChange }: IPagination) => {
    const pagesCount = Math.ceil(items / pageSize);

    if (pagesCount == 1 || Number.isNaN(pagesCount)) return null;
    const pages = Array.from({ length: pagesCount }, (_, i) => i + 1)




    return (

        <ReactPaginate className='flex mt-10 gap-x-10'
            breakLabel="..."
            nextLabel="next >"
            onPageChange={onPageChange}
            pageRangeDisplayed={5}
            pageCount={pages.length}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            containerClassName={""}
            pageClassName={"relative block rounded bg-white-500 py-1.5 px-3 text-sm font-medium text-primary-700"}
            previousLinkClassName={""}
            nextLinkClassName={""}
            disabledClassName={"pointer-events-none relative block rounded bg-transparent py-1.5 px-3 text-sm text-neutral-600 transition-all duration-300 dark:text-neutral-400"}
            activeClassName={"relative block rounded bg-white-500 py-1.5 px-3 text-sm font-medium text-primary-700 transition-all duration-300"}
        />
    )
}

export default Pagination