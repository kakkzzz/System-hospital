
function Dashboard() {
  return (
    <>
       <main  className="flex">
          <div>
              <div className="bg-gray-200  min-h-screen w-[810px]">
                <div className="py-20">
                  <h1 className="text-[25px] px-[180px] py-4">ស្វែងរក</h1>
                  <div className="flex justify-center">
                      <input
                        type="text"
                        placeholder="លេខសម្គាល់អ្នកជំងឺ ឬ ឈ្មោះអ្នកជំងឺ"
                        className="bg-white px-20 input text-[20px]"
                      />
                  </div>
                  <div className="py-8 px-[180px]">
                    <div className="py-4">
                      <h1 className="text-[20px] py-1">ខេត្ត</h1>
                      <select className="select select-bordered w-full max-w-90  text-[20px]">
                        <option disabled selected>ជ្រើសរើស</option>
                        <option>បាត់ដំបង</option>
                        <option>សៀមរាប</option>
                        <option>កំពត់</option>
                      </select>
                    </div>
                    <div className="py-4">
                      <h1 className="text-[20px] py-1">ស្រុក</h1>
                      <select className="select select-bordered w-full max-w-90  text-[20px]">
                        <option disabled selected>ជ្រើសរើស</option>
                        <option>បាត់ដំបង</option>
                        <option>សៀមរាប</option>
                        <option>កំពត់</option>
                      </select>
                    </div>
                    <div className="py-4">
                      <h1 className="text-[20px] py-1">ឃុំ</h1>
                      <select className="select select-bordered w-full max-w-90  text-[20px]">
                        <option disabled selected>ជ្រើសរើស</option>
                        <option>បាត់ដំបង</option>
                        <option>សៀមរាប</option>
                        <option>កំពត់</option>
                      </select>
                    </div>
                    <div className="py-4">
                      <h1 className="text-[20px] py-1">ភូមិ</h1>
                      <select className="select select-bordered w-full max-w-90  text-[20px]">
                        <option disabled selected>ជ្រើសរើស</option>
                        <option>បាត់ដំបង</option>
                        <option>សៀមរាប</option>
                        <option>កំពត់</option>
                      </select>
                    </div>
                  </div>
                  <div className=" px-[425px]">
                    <div className="bg-blue-600 w-[200px] text-white p-4 rounded-lg text-center"><button>ស្វែងរក</button></div>
                  </div>
                </div>
              </div>
          </div>
          <div>
              <div className="bg-gray-200  min-h-screen w-[810px]">
                kdjkjakjnfjhurfjdfndfd
              </div>
          </div>
       </main>
    </>
  )
}

export default Dashboard
