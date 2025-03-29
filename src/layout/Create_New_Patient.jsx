
import { NavLink } from "react-router";
import Responsive from "../view/components/Responsive";
function CreateLayout() {
  return (
    <>
      <main className="">
        <div className="flex text-[20px] py-3">
          <div>
            <NavLink
              to={"/information"}
              className=" aria-[current=page]:bg-white px-8  rounded-t-xl  py-[10px]"
            >
              ព័ត៍មានអ្នកជម្ងឺ
            </NavLink>
          </div>
          <div>
            <NavLink
              to={"/signs-of-life"}
              className=" aria-[current=page]:bg-white  px-8  rounded-t-lg  py-[10px]"
            >
              សញ្ញាជីវិត
            </NavLink>
          </div>
          <div>
            <NavLink
              to={"/dianosis"}
              className=" aria-[current=page]:bg-white  px-8  rounded-t-lg  py-[10px]"
            >
              រោគវិនិច្ឆ័យ
            </NavLink>
          </div>
          <div>
            <NavLink
              to={"/blood results"}
              className=" aria-[current=page]:bg-white  px-8  rounded-t-lg  py-[10px]"
            >
              លទ្ធផលឈាម
            </NavLink>
          </div>
          <div>
            <NavLink
              to={"/doctor"}
              className=" aria-[current=page]:bg-white px-8  rounded-t-lg  py-[10px]"
            >
              វេជ្ជាបញ្ជា
            </NavLink>
          </div>
          <div></div>
        </div>
      </main>
      <Responsive/>
    </>
  );
}

export default CreateLayout;
//
