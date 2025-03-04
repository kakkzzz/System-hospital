import {NavLink, Outlet } from "react-router"

function AdminLayout() {
  return (
    <div>
        <header className="bg-blue-600 flex items-center justify-between px-8 py-3 text-white font-semibold text-[20px] rounded-md">
            <h1>Name of Hospital</h1>
        </header>
            <main className="flex items-start">
            <div className= "w-[300px] bg-white shadow h-screen text-[15px] p-5">
               <div className="10">
               <ul>
                    <li>
                        <NavLink to={'/'} className="aria-[current=page]:bg-blue-600 aria-[current=page]:text-white flex  gap-2 font-medium hover:bg-blue-200 py-4 rounded-md p-4">
                            <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                            </span>
                            <span>Dashboard</span>
                        </NavLink>
                        <NavLink to={'/patient'} className="aria-[current=page]:bg-blue-600 aria-[current=page]:text-white flex  gap-2 font-medium hover:bg-blue-200 py-4 rounded-md p-4 ">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                            </span>
                            <span>Patient</span>
                        </NavLink>
                        <NavLink to={'/create_new'} className="aria-[current=page]:bg-blue-600 aria-[current=page]:text-white flex  gap-2 font-medium hover:bg-blue-200 py-4 rounded-md p-4 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                            </svg>

                            <span>Add New</span>
                        </NavLink>
                        <NavLink to={'/stock'} className="aria-[current=page]:bg-blue-600 aria-[current=page]:text-white flex  gap-2 font-medium hover:bg-blue-200 py-4 rounded-md p-4 ">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                                </svg>

                            </span>
                            <span>Stock</span>
                        </NavLink>
                    </li>
                </ul>
               </div>
            </div>
           <div className="bg-gray-200 grow h-screen">
            {/* < div className="bg-blue-500 flex items-center justify-between px-8 py-8 text-white font-semibold">
            <h1>Name of Hospital</h1>
            </div> */}
                <Outlet/>
           </div>
        </main>
    </div>
  )
}

export default AdminLayout
