import CarCompo from "../reusables/CarCompo";
import PagesHero from "../reusables/PagesHero"
import { useState } from 'react';
import car1 from '../assets/car-1.png'

const Rent = () => {
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [sortBy, setSortBy] = useState('popular');
  const [currentPage, setCurrentPage] = useState(1);

  const cars = [
    { id: 1, name: 'Car 1', price: '$299', OriginalPrice: '$399', img: {car1}, rating: 5, popularity: 10, featured: true },
    { id: 2, name: 'Car 2', rating: 4, popularity: 15, featured: false },
    { id: 3, name: 'Car 3', rating: 3, popularity: 8, featured: true },
    { id: 4, name: 'Car 4', rating: 2, popularity: 5, featured: false },
    { id: 5, name: 'Car 5', rating: 4, popularity: 12, featured: true },
    { id: 6, name: 'Car 6', rating: 5, popularity: 20, featured: false },
    { id: 7, name: 'Car 7', rating: 1, popularity: 4, featured: false },
    { id: 8, name: 'Car 8', rating: 3, popularity: 7, featured: true },
    { id: 9, name: 'Car 9', rating: 4, popularity: 9, featured: true },
    { id: 10, name: 'Car 10', rating: 5, popularity: 14, featured: false },
    // More cars...
  ];

  const sortCars = (cars) => {
    if (sortBy === 'popular') {
      return [...cars].sort((a, b) => b.popularity - a.popularity);
    } else if (sortBy === 'top-rated') {
      return [...cars].sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'featured') {
      return cars.filter(car => car.featured);
    }
    return cars;
  };

  const paginateCars = (cars) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return cars.slice(startIndex, startIndex + itemsPerPage);
  };

  const sortedCars = sortCars(cars);
  const paginatedCars = paginateCars(sortedCars);

  return (
    <>
   
    <PagesHero />
    <div className="mt-8 w-4/5 m-auto">

      <div className="top flex justify-between">
        <div className="left w-[20%]">
          <div className="rounded-3xl flex items-center justify-center bg-[#fffdf5] border-2 border-[#dedede] p-2 w-[12rem]">
            Showing all 8 results
          </div>
        </div>
        <div className="right w-[80%] flex justify-end gap-4">
          {/* Items per page dropdown */}
          <select className="rounded-3xl px-2 bg-white border-2 border-[#dedede]" value={itemsPerPage} onChange={(e) => setItemsPerPage(Number(e.target.value))}>
            <option value="16">16 Products</option>
            <option value="32">32 Products</option>
            <option value="48">48 Products</option>
            <option value="64">64 Products</option>
            <option value="128">128 Products</option>
          </select>
         
          {/* Sorting Dropdown */}
          <select className="rounded-3xl p-2 bg-white border-2 border-[#dedede]" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="popular">Popular</option>
            <option value="top-rated">Top Rated</option>
            <option value="featured">Featured</option>
          </select>
          
        </div>

        
      </div>
      
      <div className="body mt-8 flex justify-between items-center gap-6">
        <CarCompo />
        <CarCompo />
        <CarCompo />
      </div>
      
      
      {/* Render cars */}
      <div>
        {paginatedCars.map(car => (
          <div key={car.id}>
            <h3>{car.name}</h3>
            <p>Rating: {car.rating}</p>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div>
        <button onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}>Previous</button>
        <button onClick={() => setCurrentPage(Math.min(currentPage + 1, Math.ceil(cars.length / itemsPerPage)))}>Next</button>
      </div>
    </div>
    </>
  );
};

export default Rent;
