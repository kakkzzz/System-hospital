function Information_Patient() {
  return (
    <>
      <header className="flex justify-center text-[25px] py-1">
        ព័ត៍មានលម្អិតរបស់អ្នកជំងឺ
      </header>
      <div className="flex">
        <div className=" min-h-screen w-[810px]  px-[100px]">
          <div className="text-[18px] py-4">
            <p className="py-4 ">លេខសម្គាល់ 0001</p>
            <div className="bg-white px-10 input text-[20px] flex items-center w-[610px] py-4">
              <input type="text" placeholder="ថ្ងៃខែចូលពិនិត្យ" />
            </div>
            <div className="flex justify-between py-8 ">
              <div className="w-[250px] input text-[20px] flex items-center ">
                <input type="text" placeholder="នាមត្រកូល" />
              </div>
              <div className="w-[250px] input text-[20px] flex items-center">
                <input type="text" placeholder="នាម" />
              </div>
            </div>
            <div className="bg-white px-10 input text-[20px] flex items-center w-[610px] py-4">
              <input type="text" placeholder="ឈ្មោះជាឡាតាំង" />
            </div>
            <div className="text-[20px] py-4">
              <p>ភេទ</p>
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
           <div className="py-4">
              <div className="bg-white px-10 input text-[20px] flex items-center w-[450px] py-4">
                  <input type="text" placeholder="ថ្ងៃខែឆ្នាំកំណើត" />
              </div>
           </div>
            <div className="py-4">
              <select className="select select-bordered w-full max-w-90  text-[20px] ">
                <option disabled selected>
                  ស្ថានភាពគ្រួសារ
                </option>
                <option>មានគ្រួសារ</option>
                <option>នៅលីវ</option>
                <option>មេម៉ាយ</option>
                <option>ពោះម៉ាយ</option>
              </select>
            </div>
            <div className=" py-4">
              <div className="bg-white px-10 input text-[20px] flex items-center w-[610px]">
                <input type="text" placeholder="ជនជាតិ" />
              </div>
            </div>
           <div className=" py-4">
            <div className="bg-white px-10 input text-[20px] flex items-center w-[610px] py-4">
                <input type="text" placeholder="មុខរបរ" />
              </div>
           </div>
          <div className=" py-4">
              <div className="bg-white px-10 input text-[20px] flex items-center w-[610px] py-4">
                  <input type="text" placeholder="លេខទូរស័ព្ទ" />
              </div>
          </div>
          </div>
        </div>
        <div>lllllllllllllllllllll</div>
      </div>
    </>
  );
}

export default Information_Patient;
