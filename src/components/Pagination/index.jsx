import PropTypes from 'prop-types';
import React from 'react';

Pagination.propTypes = {
    pagination: PropTypes.object.isRequired,
    onPageChange: PropTypes.func,
};

Pagination.defaultProps = {
    onPageChange: null,
}

function Pagination(props) {
    const { pagingation, onPageChange } = props;
    const { _page, _limit, _totalRows } = pagingation; // _page, _limit, _totalRows lấy từ API
    const totalPages = Math.ceil(_totalRows/_limit);
    console.log(pagingation);
    // lấy tổng post / tổng post 1 trang
    // vd 51/10 = 5.1 -> dùng ceil nó làm tròn lên
    function handlePageChange(newPage){
        if(onPageChange){
            onPageChange(newPage);
        }
    }
    
    return (
        <div>
            <button disable={ _page <= 1} onClick={handlePageChange(_page-1)}>
                Prev
            </button>
            <button disable={ _page >= totalPages} onClick={handlePageChange(_page+1)}>
                Next
            </button>
        </div>
    );
}

export default Pagination;