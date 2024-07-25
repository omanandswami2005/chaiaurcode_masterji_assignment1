// src/components/DataTable.jsx
import  { useState } from "react";
import PropTypes from 'prop-types';
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";


const DataTable = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  return (
    <div className="bg-purple-200 p-6 rounded-lg">
      <h1 className="text-5xl text-slate-600 font-bold text-center mb-4">Chai aur Code</h1>
      <div className="bg-white p-6 rounded-lg shadow-md w-11/12">
        <h1 className="text-4xl font-bold mb-4">Batches</h1>
        <p className="mb-4 text-[#4B4747]">Create learner’s batch and share information at the same time.</p>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search by Title (alt+k or cmd+k)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border p-2 rounded w-80"
          />
          <button className="bg-[#6C6BAF] text-white px-6 py-2 rounded ml-2">Search</button>
        </div>
        <div className=" overflow-auto rounded-lg max-h-80 border border-t-black"  >
        <table className="w-full border-collapse">
          <thead className=" text-white  ">
            <tr className=" bg-[#f2f2f2]    text-[#4B4747]">
              
              <th className="border p-2  border-black">Title</th>
              <th className="border p-2 border-black" >Start Date</th>
              <th className="border p-2 border-black" >End Date</th>
              <th className="border p-2 border-black" >Price</th>
              <th className="border p-2 border-black" >Validity/Expiry</th>
              <th className="border p-2 border-black" >Status</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item) => (
              <tr key={item.id} className="bg-white">
                <td className="border-x p-5">
                  <div className="inline">
                  <img src={item.thumbnail} alt={item.title} className="w-28 rounded-lg inline"/>
                  </div>
                  <div className="ml-2 inline text-center">{item.title}</div>
                </td>
                {/* <td className=" p-5 col-span-1">{item.title}</td> */}
                <td className="border-x p-5">{item.startDate}</td>
                <td className="border-x p-5">{item.endDate}</td>
                <td className="border-x p-5">{`₹ ${item.price}`}</td>
                <td className="border-x p-5">{item.validity} days</td>
                <td className="border-x p-5">
                  <span className={`py-1 px-2 rounded ${item.status === "published" ? "bg-green-200 text-green-800" : "bg-[#a4a4a446] text-[#4B4747]"}`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        <div className="flex justify-end items-center mt-4">
          <span className="mr-2">Rows per page</span>
          <select
            value={rowsPerPage}
            onChange={(e) => setRowsPerPage(Number(e.target.value))}
            className="border p-3 rounded"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
          <div>
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="m-2"
            >
              <FaAngleLeft  size={30} color={currentPage === 1 ? "gray" : "black"}/>
            </button>
          
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="m-2"
            >
              <FaAngleRight size={30} color={currentPage === totalPages ? "gray" : "black"} />
            </button>
          </div>
        </div>
      </div>
      <a
      href="https://chaicode.com"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4"
    >
      <img
        src="/chaiaurcode.png"
        alt="Chai Code"
        className="w-20 h-20 rounded-lg"
      />
    </a>
    </div>
  );
};

DataTable.propTypes = {
  data: PropTypes.array.isRequired,
};

export default DataTable;
