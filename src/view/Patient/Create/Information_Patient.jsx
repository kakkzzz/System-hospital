import CreateLayout from "../../../layout/Create_New_Patient";
import Address from "../../components/Address";
import Responsive from "../../components/Responsive";



function Information_Patient() {
  return (
    <>
      <CreateLayout />
      <div className=" bg-white h-100 overflow-auto overscroll-contain h-[1500px]">
        <header className="flex justify-center text-[25px] py-5 font-semibold">
          ព័ត៍មានលម្អិតរបស់អ្នកជំងឺ
        </header>
        <div className="flex h-[1650px]">
          <div className=" w-[750px]  px-[100px]">
            <div className="text-[20px]">
              <p className="py-3 ">លេខសម្គាល់ 0001</p>
              <p className="py-3">ថ្ងៃខែចូលពិនិត្យ</p>
              <div className="bg-gray-200 px-10 input text-[18px] flex items-center w-[550px] py-2">
                <input type="text" placeholder="ថ្ងៃខែចូលពិនិត្យ" />
              </div>
              <div className="flex iitems-center py-5 ">
                <p className="flex items-center px-2 ">នាមត្រកូល</p>
                <div className="w-[150px] input text-[18px] flex items-center  bg-gray-200">
                  <input type="text" placeholder="នាមត្រកូល" />
                </div>
                <p className="flex items-center px-2 ">ឈ្មោះ</p>
                <div className="w-[200px] input text-[18px] flex items-center  bg-gray-200">
                  <input type="text" placeholder="ឈ្មោះ" />
                </div>
              </div>
              <p className="py-3">ឈ្មោះជាឡាតាំង</p>
              <div className=" bg-gray-200 px-10 input text-[18px] flex items-center w-[550px] py-1 ">
                <input type="text" placeholder="ឈ្មោះជាឡាតាំង" />
              </div>
              <div className="text-[18px] py-3 flex items-center gap-10 space-x-4">
                <p className="text-[20px]">ភេទ</p>
                <label htmlFor="">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    // checked={gender == 'male'}
                  />
                  ប្រុស
                </label>
                <label htmlFor="">
                  <input type="radio" name="gender" value="female" />
                  ស្រី
                </label>
              </div>
              <div className="py-2">
                <p className="py-2">ថ្ងៃខែឆ្នាំកំណើត</p>
                <div className=" bg-gray-200 px-10 input text-[18px] flex items-center w-[550px] py-2">
                  <input type="text" placeholder="ថ្ងៃខែឆ្នាំកំណើត" />
                </div>
              </div>
              <div className="py-2">
                <p className="py-2 ">ស្ថានភាពគ្រួសារ</p>
                <select className="select select-bordered w-[550px] text-[18px]  bg-gray-200">
                  <option disabled selected>
                    ស្ថានភាពគ្រួសារ
                  </option>
                  <option>មានគ្រួសារ</option>
                  <option>នៅលីវ</option>
                  <option>មេម៉ាយ</option>
                  <option>ពោះម៉ាយ</option>
                </select>
              </div>
              <div className=" py-2">
                <p className="py-2">ជនជាតិ</p>
                <div className=" bg-gray-200 px-10 input text-[18px] flex items-center w-[550px]">
                  <input type="text" placeholder="ជនជាតិ" />
                </div>
              </div>
              <div className=" py-2">
                <p className="py-2">មុខរបរ</p>
                <div className=" bg-gray-200 px-10 input text-[18px] flex items-center w-[550px] py-4">
                  <input type="text" placeholder="មុខរបរ" />
                </div>
              </div>
              <div className=" py-2">
                <p className="py-2">លេខទូរស័ព្ទ</p>
                <div className=" bg-gray-200 px-10 input text-[18px] flex items-center w-[550px] py-4">
                  <input type="text" placeholder="លេខទូរស័ព្ទ" />
                </div>
              </div>
            </div>
          </div>
          <div className=" w-[750px]  px-[100px] ">
            <div className="text-[22px]">
              <p>ប្រវត្តិអ្នកជំងឺ</p>
              <div className="text-[18px] py-5 flex items-center gap-10 px-10">
                <p className="text-[20px]">
                  ធ្លាប់ដឹងថាខ្លួនកើតជំងឺពីមុនឬអត់ ?
                </p>
                <label htmlFor="">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    // checked={gender == 'male'}
                  />
                  ធ្លាប់ដឹង
                </label>
                <label htmlFor="">
                  <input type="radio" name="gender" value="female" />
                  មិនធ្លាប់ដឹង
                </label>
              </div>
              <div className="text-[20px] py-3">
                <p>សកម្មភាពប្រចាំថ្ងៃ</p>
                <div className="py-4 flex gap-20  px-10 ">
                  <div>
                  <label className="flex items-center space-x-2 ">
                    <input type="checkbox" className="w-5 h-5" />
                    <span>ចេះជក់បារីអត់</span>
                  </label>

                  <label className="flex items-center space-x-2 ">
                    <input type="checkbox" className="w-5 h-5" />
                    <span>ចេះផឹកស្រាអត់</span>
                  </label>
                  </div>

                 <div className="">
                 <label className="flex items-center space-x-2 ">
                    <input type="checkbox" className="w-5 h-5" />
                    <span>ហូបថ្នាំខ្មែរអត់</span>
                  </label>

                  <label className="flex items-center space-x-2 ">
                    <input type="checkbox" className="w-5 h-5" />
                    <span>ហាត់ប្រាណអត់</span>
                  </label>
                 </div>
                </div>
              </div>
              <div className="text-[18px] py-2 gap-10 flex items-center ">
                <p className=" text-[20px]">កាយសម្បទា</p>
                <label htmlFor="">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    // checked={gender == 'male'}
                  />
                  មិនពិការ
                </label>
                <label htmlFor="">
                  <input type="radio" name="gender" value="female" />
                  ពិការ
                </label>
              </div>
              <div>
                {/* <p className="text-[20px]">អាសយដ្ឋាន</p> */}
                <div className="text-[20px] py-3"><Address /></div>
              </div>
              <div className="flex justify-end mx-[50px]">
                <button className="bg-blue-600 w-[150px] text-white p-2 rounded-lg text-center my-6">រក្សាទុក</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Responsive/>
    </>
  );
}

export default Information_Patient;
