import CreateLayout from "../../../layout/Create_New_Patient";
import Responsive from "../../components/Responsive";

function Dianosis() {
  return (
    <>
      <CreateLayout />
      <main className="bg-white">
        <div className="text-center text-[25px] py-4 font-semibold">
          រោគវិច្ឆ័យ
        </div>
        <div className="flex">
          <div className=" px-[150px] h-[835px]">
            <div className="">
              <p className="text-[20px]">រោគវិច្ឆ័យទី ១</p>
              <div className="text-[20px] my-2  px-[30px]">
                <div className="py-2">
                      <label htmlFor="">
                      <input
                        type="radio"
                        name="gender"
                        value="male"/>
                      ទឹកនោមផ្អែមប្រភេទទី ១
                    </label>
                </div>
              <div  className="py-2">
                <label htmlFor="">
                  <input type="radio" name="gender" value="female" />
                  ទឹកនោមផ្អែមប្រភេទទី ២
                </label>
              </div>
              <div  className="py-2">
                <label htmlFor="">
                  <input type="radio" name="gender" value="female" />
                  ទឹកនោមផ្អែមពេលមានផ្ទៃពោះ
                </label>
              </div>
              <div  className="py-2">
                <label htmlFor="">
                  <input type="radio" name="gender" value="female" />
                  លើសសម្ពាធឈាម
                </label>
              </div>
              </div>
            </div>
            <div className="">
              <p className="text-[20px] py-3">រោគវិច្ឆ័យទី ២</p>
              <div className="text-[20px]  px-[30px]">
                <div className="py-2">
                      <label htmlFor="">
                      <input
                        type="radio"
                        name="gender"
                        value="male"/>
                      ទឹកនោមផ្អែមប្រភេទទី ១
                    </label>
                </div>
              <div  className="py-2">
                <label htmlFor="">
                  <input type="radio" name="gender" value="female" />
                  ទឹកនោមផ្អែមប្រភេទទី ២
                </label>
              </div>
              <div  className="py-2">
                <label htmlFor="">
                  <input type="radio" name="gender" value="female" />
                  ទឹកនោមផ្អែមពេលមានផ្ទៃពោះ
                </label>
              </div>
              <div  className="py-2">
                <label htmlFor="">
                  <input type="radio" name="gender" value="female" />
                  លើសសម្ពាធឈាម
                </label>
              </div>
              </div>
            </div>
            <div>
              <p className="text-[20px] py-4">រោគវិច្ឆ័យផ្សេងទៀត</p>
              <div className=" bg-gray-200  input text-[18px]   w-[550px] py-4 px-5 h-[170px]">
                <input type="text" placeholder="រោគវិច្ឆ័យផ្សេងទៀត" />
              </div>
            </div>
          </div>
          <div className="  ">
            <div>
              <p className="text-[20px] py-4">ផលវិបាកនៃជំងឺ</p>
              <div className=" bg-gray-200  input text-[18px]   w-[550px] py-4 px-5 h-[170px]">
                <input type="text" placeholder="ផលវិបាកនៃជំងឺ" />
              </div>
            </div>
            <div className="flex justify-end">
                <button className="bg-blue-600 w-[150px] text-white p-3 rounded-lg text-center my-10">រក្សាទុក</button>
              </div>
          </div>
         
        </div>
      </main>
      <Responsive/>
    </>
  );
}

export default Dianosis;
