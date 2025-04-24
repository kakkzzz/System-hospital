import CreateLayout from "../../../layout/Create_New_Patient";
import Responsive from "../../components/Responsive";

function Sgin_of_Life() {
  return (
    <>
      <CreateLayout />
      <main className="bg-white ">
        {/* <div className="text-center text-[22px] py-4 font-semibold"></div> */}
        <header className="text-center text-[25px] py-4 font-semibold">
          សញ្ញាជីវិត
        </header>
        <div className="flex ">
          <div className="px-[150px] ">
            <div className="items-center gap-[30px] flex justify-center py-8">
              <p className="text-[20px]">កំពស់</p>
              <div className="bg-gray-200 px-10 input text-[18px] flex items-center w-[320px] py-2">
                <input type="text" placeholder="កំពស់" />
              </div>
              <p>cm</p>
            </div>
            <div className="items-center  gap-[30px]   flex justify-center py-8">
              <p className="text-[20px]">ទំហំ</p>
              <div className="bg-gray-200 px-10 input text-[18px] flex items-center w-[331px] py-2">
                {" "}
                <input type="text" placeholder="ទំហំ" />
              </div>
              <p>cm</p>
            </div>
            <div className="items-center  gap-[30px]  flex justify-center py-8">
              <p className="text-[20px]">ទម្ងន់</p>
              <div className="bg-gray-200 px-10 input text-[18px] flex items-center w-[330px] py-2">
                {" "}
                <input type="text" placeholder="ទម្ងន់" />
              </div>
              <p>គីឡូ</p>
            </div>
            <div className="items-center  gap-[30px]  flex px-[22px] py-8 ">
              <p className="text-[20px]">BMI</p>
              <div className="bg-gray-200 px-10 input text-[18px] flex items-center w-[330px] py-2">
                <input type="text" placeholder="BMI" />
              </div>
            </div>
            <div className="items-center  gap-[30px]  flex px-[24px] py-8">
              <p className="text-[20px]">សម្ពាធឈាម</p>
              <div className="bg-gray-200 px-10 input text-[18px] flex items-center w-[277px] py-2">
                <input type="text" placeholder="សម្ពាធឈាម" />
              </div>
            </div>
          </div>

          <div className="px-[60px] ">
            <div className="items-center  gap-[40px]  flex  py-8 ">
              <p className="text-[20px]">ជីបច</p>
              <div className="bg-gray-200 px-10 input text-[18px] flex items-center w-[370px] py-2">
                <input type="text" placeholder="ជីបច" />
              </div>
              <p>1mn</p>
            </div>
            <div className="items-center  gap-[30px]  flex  py-8">
              <p className="text-[20px]">ឧស៊ីសែនក្នុងឈាម</p>
              <div className="bg-gray-200 px-10 input text-[18px] flex items-center w-[360px] py-2">
                {" "}
                <input type="text" placeholder="ឧស៊ីសែនក្នុងឈាម" />
              </div>
            </div>
            <div className="">
              <p className="text-[23px] text-center my-3">ស្ករក្នុងឈាម</p>
              <div className="items-center  gap-[40px]  flex  py-8">
                <p className="text-[20px]">មុនអាហារ</p>
                <div className="bg-gray-200 px-10 input text-[18px] flex items-center w-[320px] py-2">
                  <input type="text" placeholder="មុនអាហារ" />
                </div>
                <p>mg/dl</p>
              </div>
              <div className="items-center  gap-[40px]  flex  py-8">
                <p className="text-[20px]">ក្រោយអាហារ</p>
                <div className="bg-gray-200 px-10 input text-[18px] flex items-center w-[300px] py-2">
                  <input type="text" placeholder="ក្រោយអាហារ" />
                </div>
                <p>mg/dl</p>
              </div>
            </div>
            <div className="flex justify-end px-[150px]">
                <button className="bg-blue-600 w-[150px] text-white p-3 rounded-lg text-center my-6">រក្សាទុក</button>
              </div>
          </div>
        </div>
      </main>
      <Responsive/>
    </>
  );
}

export default Sgin_of_Life;
