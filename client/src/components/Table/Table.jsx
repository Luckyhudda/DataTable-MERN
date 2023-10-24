import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { formatDate } from "../../service/date_formate";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const Table = () => {
  const [client, setClient] = useState([]);
  const [entries, setEntries] = useState("10");
  const [sort, setSort] = useState("1");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  let textColorClass = sort === "name" ? "text-gray-600" : "text-gray-700";

  useEffect(() => {
    axios
      .get(
        `http://localhost:8902/clients?limit=${entries}&sort=${sort}&page=${currentPage}`
      )
      .then((response) => {
        setClient(response.data.clints.result);
        console.log(response.data.total);
        //const totalClients = response.data.total;
        const totalPage = Math.ceil(100 / +entries);
        setTotalPages(totalPage);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [currentPage, entries, sort]);

  // console.log(totalPages);

  const dataSorting = (e) => {
    if (sort == e) {
      setSort("-" + e);
    } else {
      setSort(e);
    }
  };

  const paginationHandler = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // console.log(client);

  const tableDataWrapper = client?.map((data, index) => (
    <tr key={index}>
      <td className="border h-[40px] border-gray-500 text-center rounded-lg">
        {data.name}
      </td>
      <td className="border h-[40px] border-gray-500 text-center rounded-lg">
        {data.profession}
      </td>
      <td className="border h-[40px] border-gray-500 text-center rounded-lg">
        {data.city}
      </td>
      <td className="border h-[40px] border-gray-500 text-center rounded-lg">
        {data.age}
      </td>
      <td className="border h-[40px] border-gray-500 text-center rounded-lg">
        {formatDate(data.joining_date)}
      </td>
    </tr>
  ));

  return (
    <div className="flex justify-center">
      <div>
        <div className=" bg-gray-950  text-white mt-0 m-5 mb-0 p-6 flex justify-between">
          <div className="flex gap-2">
            <h3>Show</h3>
            <select
              className="bg-gray-800 border rounded-md"
              name="entries"
              id="entries"
              onChange={(e) => setEntries(e.target.value)}
            >
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            <h3>entries</h3>
          </div>
          <div className="flex gap-1">
            <p>Search :</p>
            <input
              className="bg-gray-800 pl-2 outline-none border border-gray-500 rounded-md"
              type="text"
              name="search"
              placeholder="Search"
              id=""
            />
          </div>
        </div>
        <table className=" bg-gray-800 min-h-[500px] w-[800px] text-white mt-0 m-5  p-6 mb-0 ">
          <thead className="bg-gray-950 rounded-lg h-[50px] border-gray-50">
            <tr className="">
              <th
                onClick={() => dataSorting("name")}
                className="relative cursor-pointer"
              >
                Name{" "}
                <span className={`absolute top-3 right-8 ${textColorClass}`}>
                  <IoMdArrowDropup className={``} size={"1.5rem"} />
                </span>
                <span className="absolute top-5 right-8">
                  <IoMdArrowDropdown size={"1.5rem"} />
                </span>
              </th>
              <th
                onClick={() => dataSorting("profession")}
                className="cursor-pointer"
              >
                profession
              </th>
              <th
                onClick={() => dataSorting("city")}
                className="cursor-pointer"
              >
                Office
              </th>
              <th onClick={() => dataSorting("age")} className="cursor-pointer">
                Age
              </th>
              <th
                onClick={() => dataSorting("joining_date")}
                className="cursor-pointer"
              >
                Start date
              </th>
            </tr>
          </thead>
          <tbody>{tableDataWrapper}</tbody>
        </table>
        <div className=" bg-gray-950  text-white mt-0 m-5 mb-0 p-6 flex justify-between">
          <div className="">
            <h2>Showing 1 to {entries} of 100 entries</h2>
          </div>
          <div className="flex  gap-3">
            <button
              onClick={() => paginationHandler(currentPage - 1)}
              className={`${
                currentPage === 1
                  ? "cursor-default bg-gray-700 text-gray-400"
                  : "bg-gray-900 border border-gray-500"
              } text-sm font-semibold p-2 pt-0 pb-0 rounded-md`}
            >
              Pre
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => paginationHandler(index + 1)}
                className={`${
                  currentPage === index + 1
                    ? "pl-4 pr-4 bg-blue-800 text-white"
                    : "bg-gray-800 border border-gray-500"
                } text-sm font-semibold p-2 pt-0 pb-0 rounded-md`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => paginationHandler(currentPage + 1)}
              className={`${
                currentPage === totalPages
                  ? "cursor-default bg-gray-700 text-gray-400"
                  : "bg-gray-900 border border-gray-500"
              } text-sm font-semibold p-2 pt-0 pb-0 rounded-md`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
