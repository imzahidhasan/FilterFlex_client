import React, { useState, useEffect } from 'react';
import Card from '../components/Card';

function ProductList() {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    console.log(products);
    useEffect(() => {
        fetchProducts(currentPage);
    }, [currentPage]);

    const fetchProducts = async (page) => {
        try {
            const response = await fetch(`http://localhost:5000/products?page=${page}&limit=4`);
            const data = await response.json();
            setProducts(data.products);
            setTotalPages(data.totalPages);
        } catch (error) {
            console.error('Failed to fetch products', error);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePageClick = (page) => {
        setCurrentPage(page);
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                    <button key={i}
                    onClick={() => handlePageClick(i)}>
                        <a aria-current="page" className={`flex items-center justify-center px-4 h-10 text-blue-600 border border-gray-300 ${i === currentPage?'bg-blue-500 outline-blue-50 text-white':''} hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white`} >{i}</a>
                    </button>
            );
        }
        return pageNumbers;
    };

    return (
        <div>
            <h1>Product List</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {products.map(product => (
                    <Card title={product.productName} img={product.productImage} price={product.price} rating={product.ratings}/>
                ))}
            </div>

            <div className='p-6  text-center'>
                <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                        <a className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                </button>

                {renderPageNumbers()}
                
                <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                        <a className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                </button>
            </div>
        </div>
    );
}

export default ProductList;
