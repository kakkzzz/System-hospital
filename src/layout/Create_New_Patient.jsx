import { Outlet } from "react-router-dom";
import { NavLink} from "react-router";

function CreateLayout() {
  return (
    <>
      <main className="items-start">
        <div className="flex justify-self-auto gap-10 items-center text-[20px] bg-white py-2">
        <div>
            <NavLink to={"/information"}
             className="py-[5px] aria-[current=page]:bg-gray-200  px-[15px] rounded-r-sm ">ព័ត៍មានអ្នកជម្ងឺ</NavLink>
          </div>
          <div>
            <NavLink to={"/signs of life"} 
            className="py-[5px] aria-[current=page]:bg-gray-200  px-[15px] rounded-r-sm">សញ្ញាជីវិត</NavLink>
          </div>
          <div>
            <NavLink to={"/dianosis"}
            className="py-[5px] aria-[current=page]:bg-gray-200  px-[15px] rounded-r-sm">រោគវិនិច្ឆ័យ</NavLink>
          </div>
          <div>
            <NavLink to={"/blood results"}
            className="py-[5px] aria-[current=page]:bg-gray-200  px-[15px] rounded-r-sm">លទ្ធផលឈាម</NavLink>
          </div>
          <div>
            <NavLink to={"/doctor"}
            className="py-[5px] aria-[current=page]:bg-gray-200  px-[15px] rounded-r-sm">វេជ្ជាបញ្ជា</NavLink>
          </div>
            <div>
                <Outlet/>
            </div>
        </div>
      </main>
    </>
  );
}

export default CreateLayout;
