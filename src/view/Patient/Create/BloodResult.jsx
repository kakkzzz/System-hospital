import CreateLayout from "../../../layout/Create_New_Patient";
import Responsive from "../../components/Responsive";


function BloodResult() {
  return (
    <>
      <CreateLayout />
      <main className="bg-white overflow-auto overscroll-contain h-[1500px]">
        <div className="text-center text-[25px] py-5 font-semibold">
          លទ្ធផលឈាម
        </div>
{/* ----------------------------------------------container 1-------------------------------------------------------------------- */}
        <div className="flex h-[2650px]">
            <div className=" w-[800px] px-[100px] ">
{/* ------------------------------------------------------items 1---------------------------------------------------------- */}
                <div>
                  <div>
                      <p className="text-[18px] bg-blue-600 w-[550px] text-white py-1 px-1">LIPID PROFILES</p>
                      <div className="px-[300px] ">
                        <div className="items-center gap-[20px] flex justify-center py-3">
                          <p className="text-[15px]">Triglyceride</p>
                          <div className="bg-gray-200 px-10 input text-[15px] flex items-center w-[300px] py-2">
                            <input type="text" placeholder="Triglyceride" />
                          </div>
                          <p>mg/dL</p>
                        </div>
                        <div className="items-center gap-[20px] flex justify-center py-3">
                          <div className="flex">
                            <p className="text-[15px] px-1">Cholesterol</p>
                            <p className="text-[15px]">total</p>
                          </div>
                          <div className="bg-gray-200 px-10 input text-[15px] flex items-center w-[270px] py-2">
                            <input type="text" placeholder="Cholesterol total" />
                          </div>
                          <p>mg/dL</p>
                        </div>
                        <div className="items-center gap-[20px] flex justify-center py-3">
                          <div className="flex">
                            <p className="text-[15px]">Cholesterol</p>
                            <p className="text-[15px] ">-</p>
                            <p className="text-[15px] ">HDL</p>
                          </div>
                          <div className="bg-gray-200 px-10 input text-[15px] flex items-center w-[270px] py-2">
                            <input type="text" placeholder="Cholesterol-HDL" />
                          </div>
                          <p>mg/dL</p>
                        </div>
                        <div className="items-center gap-[20px] flex justify-center py-3">
                          <div className="flex">
                            <p className="text-[15px]">Cholesterol</p>
                            <p className="text-[15px] ">-</p>
                            <p className="text-[15px] ">LDL</p>
                          </div>
                          <div className="bg-gray-200 px-10 input text-[15px] flex items-center w-[300px] py-2">
                            <input type="text" placeholder="Cholesterol-LDL" />
                          </div>
                          <p>mg/dL</p>
                        </div>
                      </div>
                          <div className="w-[550px] h-[5px] bg-blue-600 my-2"></div>    
                    </div>
{/* -----------------------------------------------------items 2--------------------------------------------------------------------------- */}
                    <div className="py-10">
                      <p className="text-[18px] bg-blue-600 w-[550px] text-white py-1 px-1">UROLOGIE</p>
                      <div className="px-[300px] ">
                        <div className="items-center gap-[20px] flex justify-center py-3">
                          <p className="text-[15px]">Protein</p>
                          <div className="bg-gray-200 px-10 input text-[15px] flex items-center w-[300px] py-2">
                            <input type="text" placeholder="Protein" />
                          </div>
                          <p>g/L</p>
                        </div>
                        <div className="items-center gap-[20px] flex justify-center py-3">
                          <p className="text-[15px]">Glucose</p>
                          <div className="bg-gray-200 px-10 input text-[15px] flex items-center w-[300px] py-2">
                            <input type="text" placeholder="Glucose" />
                          </div>
                          <p>mmol/l</p>
                        </div>
                        <div className="items-center gap-[20px] flex justify-center py-3">
                          <p className="text-[15px]">Ketones</p>
                          <div className="bg-gray-200 px-10 input text-[15px] flex items-center w-[300px] py-2">
                            <input type="text" placeholder="Ketones" />
                          </div>
                          <p>mmol/l</p>
                        </div>
                        <div className="items-center gap-[20px] flex justify-center py-3">
                         <div className="flex">
                            <p className="text-[15px]">Leucocyte</p>
                            <p className="text-[15px]">esterase</p>
                         </div>
                          <div className="bg-gray-200 px-10 input text-[15px] flex items-center w-[300px] py-2">
                            <input type="text" placeholder="Leucocyte esterase" />
                          </div>
                          <p>cell/ul</p>
                        </div>
                        <div className="items-center gap-[20px] flex justify-center py-3">
                          <p className="text-[15px]">Bilirubin</p>
                          <div className="bg-gray-200 px-10 input text-[15px] flex items-center w-[300px] py-2">
                            <input type="text" placeholder="Bilirubin" />
                          </div>
                          <p>cell/ul</p>
                        </div>
                        <div className="items-center gap-[20px] flex justify-center py-3">
                          <p className="text-[15px]">Urobilinogen</p>
                          <div className="bg-gray-200 px-10 input text-[15px] flex items-center w-[300px] py-2">
                            <input type="text" placeholder="Urobilinogen" />
                          </div>
                          <p>umol/l</p>
                        </div>
                        <div className="items-center gap-[20px] flex justify-center py-3">
                        <div className="flex">
                            <p className="text-[15px] px-1">Specific</p>
                            <p className="text-[15px]">gravity</p>
                          </div>
                          <div className="bg-gray-200 px-10 input texdivt-[15px] flex items-center w-[300px] py-2">
                            
                            <input type="text" placeholder="Specific gravity" />
                          </div>
                          <p>mmol/l</p>
                        </div>
                        <div className="items-center gap-[20px] flex justify-center py-3">
                          <div className="flex">
                            <p className="text-[15px] px-1">Ascorbic</p>
                            <p className="text-[15px]">acid</p>
                          </div>
                          <div className="bg-gray-200 px-10 input text-[15px] flex items-center w-[270px] py-2">
                            <input type="text" placeholder="Ascorbic acid" />
                          </div>
                          <p>mmol/l</p>
                        </div>
                        <div className="items-center gap-[20px] flex justify-center py-3">
                          <div className="flex">
                            <p className="text-[15px]">pH</p>
                          </div>
                          <div className="bg-gray-200 px-10 input text-[15px] flex items-center w-[270px] py-2">
                            <input type="text" placeholder="pH" />
                          </div>
                        </div>
                        <div className="items-center gap-[20px] flex justify-center py-3">
                          <p className="text-[15px]">Nirtites</p>
                          <div className="bg-gray-200 px-10 input text-[15px] flex items-center w-[300px] py-2">
                            <input type="text" placeholder="Nirtites" />
                          </div>
                        </div>
                      </div>
                          <div className="w-[550px] h-[5px] bg-blue-600 "></div>    
                    </div>
{/* -----------------------------------------------------items 3------------------------------------------------------------------------------------- */}
                    <div className="py-3">
                      <p className="text-[18px] bg-blue-600 w-[550px] text-white py-1 px-1">CBC(Complete Blood Count)</p>
                      <div className="px-[300px] ">
                        <div className="items-center gap-[20px] flex justify-center py-3">
                          <p className="text-[15px]">WBC</p>
                          <div className="bg-gray-200 px-10 input text-[15px] flex items-center w-[300px] py-2">
                            <input type="text" placeholder="WBC" />
                          </div>
                          <p>x109/L</p>
                        </div>
                        <div className="items-center gap-[20px] flex justify-center py-3">
                          <p className="text-[15px]">RBC</p>
                          <div className="bg-gray-200 px-10 input text-[15px] flex items-center w-[300px] py-2">
                            <input type="text" placeholder="RBC" />
                          </div>
                          <p>x1012/L</p>
                        </div>
                        <div className="items-center gap-[20px] flex justify-center py-3">
                          <p className="text-[15px]">Hemoglobin</p>
                          <div className="bg-gray-200 px-10 input text-[15px] flex items-center w-[300px] py-2">
                            <input type="text" placeholder="Hemoglobin" />
                          </div>
                          <p>g/dL</p>
                        </div>
                        <div className="items-center gap-[20px] flex justify-center py-3">
                         <div className="flex">
                            <p className="text-[15px]">Hematocrit</p>
                         </div>
                          <div className="bg-gray-200 px-10 input text-[15px] flex items-center w-[300px] py-2">
                            <input type="text" placeholder="Hematocrit" />
                          </div>
                          <p>%</p>
                        </div>
                        <div className="items-center gap-[20px] flex justify-center py-3">
                          <p className="text-[15px]">MCV</p>
                          <div className="bg-gray-200 px-10 input text-[15px] flex items-center w-[300px] py-2">
                            <input type="text" placeholder="MCV" />
                          </div>
                          <p>fI</p>
                        </div>
                        <div className="items-center gap-[20px] flex justify-center py-3">
                          <p className="text-[15px]">MCH</p>
                          <div className="bg-gray-200 px-10 input text-[15px] flex items-center w-[300px] py-2">
                            <input type="text" placeholder="MCH" />
                          </div>
                          <p>pg</p>
                        </div>
                        <div className="items-center gap-[20px] flex justify-center py-3">
                          <p className="text-[15px]">MCHC</p>
                          <div className="bg-gray-200 px-10 input text-[15px] flex items-center w-[300px] py-2">
                            <input type="text" placeholder="MCHC" />
                          </div>
                          <p>g/dL</p>
                        </div>
                        <div className="items-center gap-[20px] flex justify-center py-3">
                          <div className="flex">
                            <p className="text-[15px] px-1">Platelets</p>
                          </div>
                          <div className="bg-gray-200 px-10 input text-[15px] flex items-center w-[270px] py-2">
                            <input type="text" placeholder="Platelets" />
                          </div>
                          <p>x109/L</p>
                        </div>
                        <div className="items-center gap-[20px] flex justify-center py-3">
                          <div className="flex">
                            <p className="text-[15px] px-1">RDW</p>
                            <p className="text-[15px] px-1">-</p>
                            <p className="text-[15px] px-1">CV</p>
                          </div>
                          <div className="bg-gray-200 px-10 input text-[15px] flex items-center w-[270px] py-2">
                            <input type="text" placeholder="RDW-CV" />
                          </div>
                          <p>%</p>
                        </div>
                      </div>
                          <div className="w-[550px] h-[5px] bg-blue-600 "></div>    
                    </div>
                </div>
            </div>
{/* -------------------------------------------------------container 2------------------------------------------------------------------ */}
          <div className="px-[100px]">
                <div >
                      <p className="text-[18px] bg-blue-600 w-[550px] text-white py-1 px-1">BIOCHEMISTRY</p>
                      <div >
                        <div className="items-center gap-[20px] flex justify-center py-3">
                          <p className="text-[15px]">A1C</p>
                          <div className="bg-gray-200 px-10 input text-[15px] flex items-center w-[300px] py-2">
                            <input type="text" placeholder="A1C" />
                          </div>
                          <p>%</p>
                        </div>
                        <div className="items-center gap-[20px] flex justify-center py-3">
                          <div className="flex">
                            <p className="text-[15px] px-1">Creatinine</p>
                          </div>
                          <div className="bg-gray-200 px-10 input text-[15px] flex items-center w-[270px] py-2">
                            <input type="text" placeholder="Creatinine" />
                          </div>
                          <p>mg/dL</p>
                        </div>
                      </div>
                          <div className="w-[550px] h-[5px] bg-blue-600 my-2"></div>    
                    </div>
                    <div className="py-10" >
                      <p className="text-[18px] bg-blue-600 w-[550px] text-white py-1 px-1">ENZYMOLOGIE</p>
                      <div >
                        <div className="items-center gap-[20px] flex justify-center py-3">
                          <p className="text-[15px]">Transaminases SGOT(ASAT)</p>
                          <div className="bg-gray-200 px-10 input text-[15px] flex items-center w-[300px] py-2">
                            <input type="text" placeholder="Transaminases SGOT(ASAT)" />
                          </div>
                          <p>UI/I</p>
                        </div>
                        <div className="items-center gap-[20px] flex justify-center py-3">
                          <div className="flex">
                            <p className="text-[15px]">Transaminases SGPT(ALAT)</p>
                          </div>
                          <div className="bg-gray-200 px-10 input text-[15px] flex items-center w-[270px] py-2">
                            <input type="text" placeholder="Transaminases SGPT(ALAT)" />
                          </div>
                          <p>UI/I</p>
                        </div>
                      </div>
                          <div className="w-[550px] h-[5px] bg-blue-600 my-2"></div>    
                    </div>
                    <div className="py-2" >
                      <p className="text-[18px] bg-blue-600 w-[550px] text-white py-1 px-1">SEROLOGY</p>
                      <div >
                        <div className="items-center gap-[20px] flex justify-center py-3">
                          <p className="text-[15px]">HBs Antigen</p>
                          <div className="bg-gray-200 px-10 input text-[15px] flex items-center w-[300px] py-2">
                            <input type="text" placeholder="HBs Antigen" />
                          </div>
                          <p>UI/I</p>
                        </div>
                        <div className="items-center gap-[20px] flex justify-center py-3">
                          <div className="flex">
                            <p className="text-[15px] px-1">HBs Antibody</p>
                          </div>
                          <div className="bg-gray-200 px-10 input text-[15px] flex items-center w-[270px] py-2">
                            <input type="text" placeholder="HBs Antibody" />
                          </div>
                          <p>UI/I</p>
                        </div>
                        <div className="items-center gap-[20px] flex justify-center py-3">
                          <div className="flex">
                            <p className="text-[15px] px-1">HBs Antibody</p>
                          </div>
                          <div className="bg-gray-200 px-10 input text-[15px] flex items-center w-[270px] py-2">
                            <input type="text" placeholder="HBs Antibody" />
                          </div>
                          <p>UI/I</p>
                        </div>
                      </div>
                          <div className="w-[550px] h-[5px] bg-blue-600 my-2"></div>    
                    </div>
                    <div className="py-2" >
                      <p className="text-[18px] bg-blue-600 w-[550px] text-white py-1 px-1">URINE ANALYSIS</p>
                      <div >
                        <div className="items-center gap-[20px] flex justify-center py-3">
                          <p className="text-[15px]">Microalbumin</p>
                          <div className="bg-gray-200 px-10 input text-[15px] flex items-center w-[300px] py-2">
                            <input type="text" placeholder="Microalbumin" />
                          </div>
                          <p>UI/I</p>
                        </div>
                      </div>
                          <div className="w-[550px] h-[5px] bg-blue-600 my-2"></div>    
                    </div>
                    
        </div>
                
        </div>
        <Responsive/>
      </main>
    </>
  );
}

export default BloodResult;
