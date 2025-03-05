
function SignIn() {
  return (
   <>
           <main className="bg-gray-200 w-full h-screen">
               <div className="flex justify-center py-20">
                    <div className=" card bg-white w-[500px] h-[500px] flex items-center py-10 rounded-3xl">
                       <div className="font-bold text-2xl">
                            <h1>Login</h1>
                       </div>
                       <form>
                            <div className="w-[400px] py-10">
                                    <label className="font-bold">Email</label>
                                    <input
                                    // onChange={setEmail}
                                    type="email" 
                                    placeholder="Enter your email"
                                    className="input input-bordered w-full bg-gray-200"
                                    required
                                    />
                                </div>
                                <div className="w-[400px]">
                                    <label className="font-bold">Password</label>
                                    <input
                                    // onChange={setPassword}
                                    type="password" 
                                    placeholder="Enter your password"
                                    className="input input-bordered w-full bg-gray-200"
                                    required
                                    />
                                </div>
                                <div className="py-10">
                                    <button className="items-center py-4 w-[400px] bg-blue-600 text-white rounded-lg">Submit</button>
                                </div>
                       </form>
                    </div>
               </div>
           </main>
   </>
  )
}

export default SignIn
