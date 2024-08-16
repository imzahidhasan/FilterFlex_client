import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import Footer from '../components/Footer';

function ProductList() {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');
    const [maxValue, setMaxValue] = useState(0)
    const [minValue, setMinValue] = useState(0)
    const [brand, setBrand] = useState('')
    const [category, setCategory] = useState('')
    const [loading, setLoading] = useState(true)



    console.log(loading);

    useEffect(() => {
        setLoading(true);
        if (searchTerm) {
            fetchSearchedProducts(currentPage, searchTerm);
        } else {
            fetchAllProducts(currentPage);
        }
    }, [currentPage, searchTerm]);

    const handleFilter = async (e) => {
        setLoading(true);
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/products/filter?page=${currentPage}&limit=10&brand=${brand}&minValue=${minValue}&maxValue=${maxValue}&category=${category}&searchTerm=${searchTerm}`);
            const data = await response.json();
            setProducts(data.products);
            setTotalPages(data.totalPages);
        } catch (error) {
            console.error('Failed to fetch products', error);
        } finally {
            setLoading(false);  // Ensures loading is set to false whether the fetch was successful or not
        }
    };

    const fetchAllProducts = async (page) => {
        try {
            const response = await fetch(`http://localhost:5000/products?page=${page}&limit=10`);
            const data = await response.json();
            setProducts(data.products);
            setTotalPages(data.totalPages);
        } catch (error) {
            console.error('Failed to fetch products', error);
        } finally {
            setLoading(false);
        }
    };

    const fetchSearchedProducts = async (page, search) => {
        try {
            const response = await fetch(`http://localhost:5000/products/search?q=${search}&page=${page}&limit=4`);
            const data = await response.json();
            setProducts(data.products);
            setTotalPages(data.totalPages);
        } catch (error) {
            console.error('Failed to fetch products', error);
        } finally {
            setLoading(false);
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
                <button key={i} onClick={() => handlePageClick(i)}>
                    <a aria-current="page" className={`flex items-center justify-center px-4 h-10 text-blue-600 border border-gray-300 ${i === currentPage ? 'bg-blue-500 outline-blue-50 text-white' : ''} hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white`}>{i}</a>
                </button>
            );
        }
        return pageNumbers;
    };

    const handleSearch = (e) => {
        e.preventDefault();
        const searchText = e.target.search.value;
        setSearchTerm(searchText);
        setCurrentPage(1);
    };
    const handleSort = (e) => {
        e.preventDefault();
        const sort = e.target.value;

        if (sort === '1') {
            const sortedProducts = [...products].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
            setProducts(sortedProducts);
        } else if (sort === '2') {
            const sortedProducts = [...products].sort((a, b) => a.price - b.price);
            setProducts(sortedProducts);
        } else if (sort === '3') {
            const sortedProducts = [...products].sort((a, b) => b.price - a.price);
            setProducts(sortedProducts);
        }

    };
    const brandName = ['EcoCharge', 'Bose', 'Logitech', 'Samsung', 'Apple', 'Sony', 'Anker', 'Jabra', 'Dell', 'HP', 'Xiaomi', 'Motorola', 'LG', 'Corsair', 'Razer', 'Beats', 'Sennheiser', 'JBL', 'Google', 'OnePlus']
    const categories = ['Electronics', 'Computer Accessories', 'Headphones', 'Smartphones']

if (loading) {
    return <h1>Loading data/.....</h1>
}

    return (
        <div>
            {/* search box */}
            <div className='p-4'>
                <form onSubmit={handleSearch} className="max-w-md mx-auto">
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" name='search' id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    </div>
                </form>
            </div>
            {/* sort box section */}

            <div className='flex justify-center'>
                <div className='p-4 flex gap-4'>
                    <form onChange={handleSort} className="max-w-40">

                        <select defaultValue={'0'} id="countries" name='sort' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option disabled value='0'>Sort by</option>
                            <option value="1">Newest first</option>
                            <option value="2">Low to high</option>
                            <option value="3">High to low</option>
                        </select>
                    </form>
                    {/* filter section */}
                    <form onSubmit={handleFilter} className='flex gap-4'>
                        <div class="max-w-40 ">

                            <select onChange={(e) => setBrand(e.target.value)} defaultValue={'a'} id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option disabled value="a">All Brand</option>

                                {
                                    brandName.map((b, i) => <option key={i} value={b}>{b}</option>)
                                }
                            </select>
                        </div>
                        <div class="max-w-40 ">

                            <select onChange={(e) => setCategory(e.target.value)} defaultValue={'a'} id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option disabled value="a">All Category</option>

                                {
                                    categories.map((b, i) => <option key={i} value={b}>{b}</option>)
                                }
                            </select>
                        </div>

                        <div>

                            <input onChange={(e) => setMinValue(e.target.value)} type="number" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Min Price" />
                        </div>

                        <div>

                            <input onChange={(e) => setMaxValue(e.target.value)} type="number" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Max Price" />

                        </div>
                        <div>
                            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Filter</button>

                        </div>
                    </form>
                </div>

            </div>
            {/* product card section */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {products.map(product => (
                    <Card key={product._id} brand={products.brandName} title={product.productName} img={product.productImage} price={product.price} rating={product.ratings} />
                ))}
            </div>
            {/* pagination section */}
            <div className='p-6 text-center'>
                <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                    <a className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                </button>
                {renderPageNumbers()}
                <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                    <a className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                </button>
            </div>
            <Footer />
        </div>
    );
}

export default ProductList;