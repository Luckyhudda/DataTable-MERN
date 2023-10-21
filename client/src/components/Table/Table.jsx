
const Table = () => {
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
              <th>Name </th>
              <th>Position</th>
              <th>Office</th>
              <th>Age</th>
              <th>Start date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border h-[40px] border-gray-500 text-center rounded-lg">
                Airi Satou
              </td>
              <td className="border h-[40px] border-gray-500 text-center rounded-lg">
                Accountant
              </td>
              <td className="border h-[40px] border-gray-500 text-center rounded-lg">
                Tokyo
              </td>
              <td className="border h-[40px] border-gray-500 text-center rounded-lg">
                33
              </td>
              <td className="border h-[40px] border-gray-500 text-center rounded-lg">
                28/11/2008
              </td>
            </tr>
            <tr>
              <td className="border h-[40px] border-gray-500 text-center rounded-lg">
                Airi Satou
              </td>
              <td className="border h-[40px] border-gray-500 text-center rounded-lg">
                Accountant
              </td>
              <td className="border h-[40px] border-gray-500 text-center rounded-lg">
                Tokyo
              </td>
              <td className="border h-[40px] border-gray-500 text-center rounded-lg">
                33
              </td>
              <td className="border h-[40px] border-gray-500 text-center rounded-lg">
                28/11/2008
              </td>
            </tr>
            <tr>
              <td className="border h-[40px] border-gray-500 text-center rounded-lg">
                Airi Satou
              </td>
              <td className="border h-[40px] border-gray-500 text-center rounded-lg">
                Accountant
              </td>
              <td className="border h-[40px] border-gray-500 text-center rounded-lg">
                Tokyo
              </td>
              <td className="border h-[40px] border-gray-500 text-center rounded-lg">
                33
              </td>
              <td className="border h-[40px] border-gray-500 text-center rounded-lg">
                28/11/2008
              </td>
            </tr>
            <tr>
              <td className="border h-[40px] border-gray-500 text-center rounded-lg">
                Airi Satou
              </td>
              <td className="border h-[40px] border-gray-500 text-center rounded-lg">
                Accountant
              </td>
              <td className="border h-[40px] border-gray-500 text-center rounded-lg">
                Tokyo
              </td>
              <td className="border h-[40px] border-gray-500 text-center rounded-lg">
                33
              </td>
              <td className="border h-[40px] border-gray-500 text-center rounded-lg">
                28/11/2008
              </td>
            </tr>
            <tr>
              <td className="border h-[40px] border-gray-500 text-center rounded-lg">
                Airi Satou
              </td>
              <td className="border h-[40px] border-gray-500 text-center rounded-lg">
                Accountant
              </td>
              <td className="border h-[40px] border-gray-500 text-center rounded-lg">
                Tokyo
              </td>
              <td className="border h-[40px] border-gray-500 text-center rounded-lg">
                33
              </td>
              <td className="border h-[40px] border-gray-500 text-center rounded-lg">
                28/11/2008
              </td>
            </tr>
            <tr>
              <td className="border h-[40px] border-gray-500 text-center rounded-lg">
                Airi Satou
              </td>
              <td className="border h-[40px] border-gray-500 text-center rounded-lg">
                Accountant
              </td>
              <td className="border h-[40px] border-gray-500 text-center rounded-lg">
                Tokyo
              </td>
              <td className="border h-[40px] border-gray-500 text-center rounded-lg">
                33
              </td>
              <td className="border h-[40px] border-gray-500 text-center rounded-lg">
                28/11/2008
              </td>
            </tr>

            <tr>
              <td className="border h-[40px] border-gray-500 text-center rounded-lg">
                Airi Satou
              </td>
              <td className="border h-[40px] border-gray-500 text-center rounded-lg">
                Accountant
              </td>
              <td className="border h-[40px] border-gray-500 text-center rounded-lg">
                Tokyo
              </td>
              <td className="border h-[40px] border-gray-500 text-center rounded-lg">
                33
              </td>
              <td className="border h-[40px] border-gray-500 text-center rounded-lg">
                28/11/2008
              </td>
            </tr>

            <tr>
              <td className="border h-[40px] border-gray-500 text-center rounded-lg">
                Airi Satou
              </td>
              <td className="border h-[40px] border-gray-500 text-center rounded-lg">
                Accountant
              </td>
              <td className="border h-[40px] border-gray-500 text-center rounded-lg">
                Tokyo
              </td>
              <td className="border h-[40px] border-gray-500 text-center rounded-lg">
                33
              </td>
              <td className="border h-[40px] border-gray-500 text-center rounded-lg">
                28/11/2008
              </td>
            </tr>

            <tr>
              <td className="border h-[40px] border-gray-500 text-center rounded-lg">
                Airi Satou
              </td>
              <td className="border h-[40px] border-gray-500 text-center rounded-lg">
                Accountant
              </td>
              <td className="border h-[40px] border-gray-500 text-center rounded-lg">
                Tokyo
              </td>
              <td className="border h-[40px] border-gray-500 text-center rounded-lg">
                33
              </td>
              <td className="border h-[40px] border-gray-500 text-center rounded-lg">
                28/11/2008
              </td>
            </tr>

            <tr>
              <td className="border h-[40px] border-gray-500 text-center rounded-lg">
                Airi Satou
              </td>
              <td className="border h-[40px] border-gray-500 text-center rounded-lg">
                Accountant
              </td>
              <td className="border h-[40px] border-gray-500 text-center rounded-lg">
                Tokyo
              </td>
              <td className="border h-[40px] border-gray-500 text-center rounded-lg">
                33
              </td>
              <td className="border h-[40px] border-gray-500 text-center rounded-lg">
                28/11/2008
              </td>
            </tr>
          </tbody>
        </table>
        
      </div>
    </div>
  );
}

export default Table;