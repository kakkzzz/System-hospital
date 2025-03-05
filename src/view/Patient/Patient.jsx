

function Patient() {
  return (
    <>
        <div className="text-[20px]">
          <div className="py-2 flex justify-between px-4 font-bold">
            <p className="">បញ្ជីអ្នកជំងឺទាំងអស់</p>
        </div>
        <div className="px-2 py-1 ">
        <select className="select select-bordered w-full max-w-96">
          <option disabled selected>ជ្រើសរើស</option>
          <option>អ្នកជំងឺទាំងអស់</option>
          <option>អ្នកជំងឺទឹកនោមផ្អែម</option>
          <option>អ្នកជំងឺលើសសម្ពាធឈាម</option>
      </select>
          {/* <select>
            <option>អ្នកជំងឺលើសសម្ពាធឈាម</option>
            <option>អ្នកជំងឺទឹកនោមផ្អែម</option>
          </select> */}
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
                    <button className="bg-yellow-500 w-[70px] p-1 rounded-lg">Update</button>
                    <button className="bg-red-500 w-[70px] p-1 rounded-lg">Delete</button>
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
                    <button className="bg-yellow-500 w-[70px] p-1 rounded-lg">Update</button>
                    <button className="bg-red-500 w-[70px] p-1 rounded-lg">Delete</button>
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
