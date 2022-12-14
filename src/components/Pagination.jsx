import React, { useRef } from 'react'

const PaginationPoke = ({ arrayPages, currentPage, setCurrentPage, quantityPages }) => {

    const listNumber = useRef()

    const prevPage = () => {
        if (currentPage - 1 === 0) {
            setCurrentPage(quantityPages)
        } else {
            setCurrentPage(currentPage - 1)
        }
    }

    const nextPage = () => {
        if (currentPage + 1 > quantityPages) {
            setCurrentPage(1)
        } else {
            setCurrentPage(currentPage + 1)
        }
    }

    const changePageTo = n => setCurrentPage(n)

    return (
        <div className='pagination-container'>
            <div onClick={prevPage} className='pagination-prev-next'>{'«'}</div>
            <ul ref={listNumber} className='pagination-number-container'>
                {
                    arrayPages?.map(num => (
                        <li onClick={() => changePageTo(num)} 
                        key={num}
                        className={currentPage === num ? `page-number page_active` : `page-number`}
                        >{num}</li>
                    ))
                }
            </ul>
            <div onClick={nextPage} className='pagination-prev-next'>{'»'}</div>
        </div>
    )
}

export default PaginationPoke