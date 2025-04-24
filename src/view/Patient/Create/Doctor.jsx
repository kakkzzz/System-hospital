import { useState } from "react";
import CreateLayout from "../../../layout/Create_New_Patient";
import Responsive from "../../components/Responsive";

function Doctor() {
  // State to toggle visibility
  const [showInput, setShowInput] = useState(false);
  const [showInput1, setShowInput1] = useState(false);

  return (
    <>
      <CreateLayout />
      <main className="bg-white h-100 overflow-auto overscroll-contain h-[1500px]">
        <p className="text-[25px] py-5 font-semibold text-center">
          វេជ្ជាបញ្ជា
        </p>
        <div className="flex h-[1600px] my-3">
          <div className="px-[50px]">
            <div className="flex justify-evenly text-[20px]">
              <label>
                <input type="radio" name="medicine" value="pill" />
                ប្រើថ្នាំគ្រាប់
              </label>
              <label>
                <input type="radio" name="medicine" value="injection" />
                ប្រើថ្នាំចាក់
              </label>
              <label>
                <input type="radio" name="medicine" value="both" />
                ប្រើថ្នាំគ្រាប់និងថ្នាំចាក់
              </label>
              <label>
                <input type="radio" name="medicine" value="none" />
                មិនទាន់ប្រើថ្នាំ
              </label>
            </div>

            <div>
              {/* Toggle Text Button */}
              <div className="py-5">
                <div className="flex justify-evenly ">
                  <button
                    onClick={() => setShowInput(!showInput)}
                    className="px-4 py-2 w-[200px] bg-blue-600 text-white rounded-lg"
                  >
                    បន្ថែមថ្នាំគ្រាប់
                  </button>
                  <button
                    onClick={() => setShowInput1(!showInput1)}
                    className="px-4 py-2 w-[200px] bg-blue-600 text-white rounded-lg"
                  >
                    ទីមួយថ្នាំចាក់
                  </button>
                </div>
                <div className="px-[40px]">
                  <div className="flex justify-center">
                    {showInput && (
                      <div className="w-[500px] bg-gray-200 my-[50px] h-[250px] rounded-xl">
                        <div className="flex justify-between bg-blue-600 text-white px-3 py-3">
                          <p className="text-[20px] ">ទីមួយថ្នាំគ្រាប់</p>
                          <div className="bg-red-500 w-[30px] flex justify-center rounded-2xl">
                            <button>X</button>
                          </div>
                        </div>
                        <div className="flex justify-evenly my-7">
                          <div className="bg-white w-[300px] p-2 rounded-lg text-[18px] px-3">
                            <input type="text" placeholder="ឈ្មោះថ្នាំ" />
                          </div>
                          <div className="flex ">
                            <div className="bg-white w-[100px] rounded-s-lg"></div>
                            <div className="bg-blue-600 w-[40px] flex justify-center items-center text-white rounded-e-lg">
                              ui
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-evenly my-7">
                          <div className="flex ">
                            <div className="bg-white w-[60px] rounded-s-lg p-2"></div>
                            <div className="bg-blue-600 w-[40px] flex text-[18px] justify-center items-center p-2 text-white rounded-e-lg">
                              ព្រឺក
                            </div>
                          </div>
                          <div className="flex ">
                            <div className="bg-white w-[60px] rounded-s-lg"></div>
                            <div className="bg-blue-600 w-[40px] flex text-[18px] justify-center items-center text-white rounded-e-lg">
                              ថ្ងៃ
                            </div>
                          </div>
                          <div className="flex ">
                            <div className="bg-white w-[60px] rounded-s-lg"></div>
                            <div className="bg-blue-600 w-[40px] flex text-[18px] justify-center items-center text-white rounded-e-lg">
                              ល្ងាច
                            </div>
                          </div>
                          <div className="flex ">
                            <div className="bg-white w-[60px] rounded-s-lg"></div>
                            <div className="bg-blue-600 w-[40px] flex text-[18px] justify-center items-center text-white rounded-e-lg">
                              យប់
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="flex justify-center">
                    {showInput1 && (
                      <div className="w-[500px] bg-gray-200 my-[50px] h-[250px] rounded-xl">
                        <div className="flex justify-between bg-blue-600 text-white px-3 py-3">
                          <p className="text-[20px] ">ទីមួយថ្នាំគ្រាប់</p>
                          <div className="bg-red-500 w-[30px] flex justify-center rounded-2xl">
                            <button>X</button>
                          </div>
                        </div>
                        <div className="flex justify-evenly my-7">
                          <div className="bg-white w-[300px] p-2 rounded-lg text-[18px] px-3">
                            <input type="text" placeholder="ឈ្មោះថ្នាំ" />
                          </div>
                          <div className="flex ">
                            <div className="bg-white w-[100px] rounded-s-lg"></div>
                            <div className="bg-blue-600 w-[40px] flex justify-center items-center text-white rounded-e-lg">
                              ui
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-evenly my-7">
                          <div className="flex ">
                            <div className="bg-white w-[60px] rounded-s-lg p-2"></div>
                            <div className="bg-blue-600 w-[40px] flex text-[18px] justify-center items-center p-2 text-white rounded-e-lg">
                              ព្រឺក
                            </div>
                          </div>
                          <div className="flex ">
                            <div className="bg-white w-[60px] rounded-s-lg"></div>
                            <div className="bg-blue-600 w-[40px] flex text-[18px] justify-center items-center text-white rounded-e-lg">
                              ថ្ងៃ
                            </div>
                          </div>
                          <div className="flex ">
                            <div className="bg-white w-[60px] rounded-s-lg"></div>
                            <div className="bg-blue-600 w-[40px] flex text-[18px] justify-center items-center text-white rounded-e-lg">
                              ល្ងាច
                            </div>
                          </div>
                          <div className="flex ">
                            <div className="bg-white w-[60px] rounded-s-lg"></div>
                            <div className="bg-blue-600 w-[40px] flex text-[18px] justify-center items-center text-white rounded-e-lg">
                              យប់
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>llllllllllllllllllllllllllllllll</div>
        </div>
        <Responsive/>
      </main>
    </>
  );
}

export default Doctor;
