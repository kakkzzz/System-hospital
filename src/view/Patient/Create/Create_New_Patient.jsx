import { Link } from "react-router";

function CreateLayout() {
  return (
    <>
        <main className="items-start">
            <div className="flex justify-between items-center text-[18px] bg-white p-1">
                <div className="p-2">
                    <Link to={'/'} className="aria-[current=page]:bg-white  hover:bg-gray-200 " >ទំព័រដើម</Link>
                </div>
                <div>
                    <Link to={'/create/information'} className="aria-[current=page]:bg-white   hover:bg-gray-200 " >ព័ត៍មានអ្នកជម្ងឺ</Link>
                </div>
                <div>
                    <Link to={'/create'}  className="aria-[current=page]:bg-blue-600 aria-[current=page]:text-white font-medium hover:bg-gray-200 " >សញ្ញាជីវិត</Link>
                </div>
                <div>
                    <Link to={'/create'} className=" " >រោគវិនិច្ឆ័យ</Link>
                </div>
                <div>
                    <Link to={'/create'}>លទ្ធផលឈាម</Link>
                </div>
                <div>
                    <Link to={'/create'}>វេជ្ជាបញ្ជា</Link>
                </div>
            </div>
        </main>
    </>
  )
}

export default CreateLayout
