import ReactPaginate from "react-paginate";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const PaginationButtons = (setCurrentPage, currentPage, totalPages) => {
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  const showNextButton = currentPage !== totalPages || totalPages == 0;
  const showPrevButton = currentPage !== 1;
  return (
    <ReactPaginate
      breakLabel={<span className="mr-4">...</span>}
      nextLabel={
        showNextButton ? (
          <span className="w-10 h-10 flex items-center justify-center bg-lightGray rounded-md">
            <BsChevronRight />
          </span>
        ) : null
      }
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      pageCount={totalPages}
      previousLabel={
        showPrevButton ? (
          <span className="w-10 h-10 flex items-center justify-center bg-lightGray rounded-md mr-4">
            <BsChevronLeft />
          </span>
        ) : null
      }
      containerClassName="flex items-center justify-center mt-8 mb-4"
      pageClassName="block border- border-solid border-lightGray hover:bg-lightGray w-10 h-10 flex items-center justify-center rounded-md mr-4"
      activeClassName="bg-black text-white"
    />
  );
};

export default PaginationButtons;
