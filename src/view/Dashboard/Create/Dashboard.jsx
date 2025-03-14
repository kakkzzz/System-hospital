import { Link } from "react-router";

function Dashboard() {
  return (
    <>
      <main className="flex">
        <div>
          <div className="bg-gray-200  min-h-screen">
            <div className="py-20">
              <h1 className="text-[25px] py-4">ស្វែងរក</h1>
              <div className="flex justify-center ">
                <div className="bg-white px-20 input text-[20px] flex items-center gap-2">
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
                    placeholder="លេខសម្គាល់អ្នកជំងឺ ឬ ឈ្មោះអ្នកជំងឺ"
                  />
                </div>
              </div>
              <div className="py-4 px-[180px]">
                <div className="py-4">
                  <h1 className="text-[20px] py-1">ខេត្ត</h1>
                  <select className="select select-bordered w-full max-w-90  text-[20px]">
                    <option disabled selected>
                      ជ្រើសរើស
                    </option>
                    <option>បាត់ដំបង</option>
                    <option>សៀមរាប</option>
                    <option>កំពត់</option>
                  </select>
                </div>
                <div className="py-2">
                  <h1 className="text-[20px] py-1">ស្រុក</h1>
                  <select className="select select-bordered w-full max-w-90  text-[20px]">
                    <option disabled selected>
                      ជ្រើសរើស
                    </option>
                    <option>បាត់ដំបង</option>
                    <option>សៀមរាប</option>
                    <option>កំពត</option>
                  </select>
                </div>
                <div className="py-2">
                  <h1 className="text-[20px] py-1">ឃុំ</h1>
                  <select className="select select-bordered w-full max-w-90  text-[20px]">
                    <option disabled selected>
                      ជ្រើសរើស
                    </option>
                    <option>បាត់ដំបង</option>
                    <option>សៀមរាប</option>
                    <option>កំពត</option>
                  </select>
                </div>
                <div className="py-2">
                  <h1 className="text-[20px] py-1">ភូមិ</h1>
                  <select className="select select-bordered w-full max-w-90  text-[20px]">
                    <option disabled selected>
                      ជ្រើសរើស
                    </option>
                    <option>បាត់ដំបង</option>
                    <option>សៀមរាប</option>
                    <option>កំពត</option>
                  </select>
                </div>
              </div>
              <div className=" px-[425px]">
                <div className="bg-blue-600 w-[200px] text-white p-4 rounded-lg text-center">
                  <button>ស្វែងរក</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-gray-200 w-[810px] flex justify-center py-40 ">
            <div className="w-[400px] bg-white  p-20 rounded-lg">
              <h1 className="flex justify-center text-[30px]">
                ការចុះឈ្មោះចូល
              </h1>
              <div className="block py-6 flex justify-center  ">
                <Link
                  to="/create"
                  className="bg-blue-600 text-white rounded-lg items-center p-4 text-[20px]">
                  + បញ្ជូលអ្នកជម្ងឺថ្មឺ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Dashboard;
