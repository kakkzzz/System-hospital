

function Patient() {
  return (
    <>
        <div className="text-[20px]">
          <div className="py-2 flex justify-between px-4 font-bold">
            <p className="">បញ្ជីអ្នកជំងឺទាំងអស់</p>
        </div>
        <div className="px-2 py-1 flex justify-between ">
            <select className="select select-bordered w-full max-w-96">
              <option disabled selected>ជ្រើសរើស</option>
              <option>អ្នកជំងឺទាំងអស់</option>
              <option>អ្នកជំងឺទឹកនោមផ្អែម</option>
              <option>អ្នកជំងឺលើសសម្ពាធឈាម</option>
           </select>
          <div className="bg-white px-10 input text-[20px] flex items-center gap-2">
                  <span className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="h-4 w-4 opacity-70"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <input
                    type="text"
                    placeholder="ស្វែងរក"
                  />
                </div>

        </div>
          <div className="overflow-x-auto py-10">
            <table className="table text-[17px]">
              {/* head */}
              <thead>
                <tr className="text-[18px]">
                  <th>ID</th>
                  <th>ឈ្មោះ</th>
                  <th>ភេទ</th>
                  <th>អាយុ</th>
                  <th>ថ្ងៃខែឆ្នាំកំណើត</th>
                  <th>ទីកន្លែងកំណើត</th>
                  <th>ប្រភេទជំងឺ</th>
                  <th>លេខទូរស័ព្ទ</th>
                  <th>Option</th>
                </tr>
              </thead>
              <tbody>
                {/* row 2 */}
                <tr className="bg-white">
                  <th>1</th>
                  <td>ថ្សល្កសរនម</td>
                  <td>ស្រី</td>
                  <td>12</td>
                  <td>22/មិថុនា/2003</td>
                  <td>ខ្នាចរមាស បវេល  បាត់ដំបង</td>
                  <td>លើសសម្ពាធឈាម</td>
                  <td>01223333333</td>
                  <td>
                    <div className="">
                        <button className="bg-yellow-500 w-[70px] p-1 rounded-lg text-[15px]">Update</button>
                        <button className="bg-red-500 w-[70px] p-1 rounded-lg text-[15px]">Delete</button>
                    </div>
                  </td>
                </tr>
                <tr className="bg-white">
                  <th>2</th>
                  <td>ថ្សល្កសរន</td>
                  <td>ស្រី</td>
                  <td>12</td>
                  <td>22/មិថុនា/2003</td>
                  <td>ខ្នាចរមាស បវេល  បាត់ដំបង</td>
                  <td>លើសសម្ពាធឈាម</td>
                  <td>01223333333</td>
                  <td>
                    <button className="bg-yellow-500 w-[70px] p-1 rounded-lg text-[15px]">Update</button>
                    <button className="bg-red-500 w-[70px] p-1 rounded-lg text-[15px]">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    </>
  )
}

export default Patient
