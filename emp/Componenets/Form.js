export default function Form(){
    return(
        <>
          <form>
            <div className="input-type">
                <input type="text" name="firstname" placeholder="FirstName" className="border w-full px-5 py-3 focus:outline-none rounded-md"/>
            </div>
            <div className="input-type">
                <input type="text" name="lastname" placeholder="LastName" className="border w-full px-5 py-3 focus:outline-none rounded-md"/>
            </div>
            <div className="input-type">
                <input type="email" name="email" placeholder="email" className="border w-full px-5 py-3 focus:outline-none rounded-md"/>
            </div>
            <div className="input-type">
                <input type="text" name="salary" placeholder="salary" className="border w-full px-5 py-3 focus:outline-none rounded-md"/>
            </div>
            <div>
                <div className="form-check">
                    <input type="radio" name="status" value="Active" className="form check-input appearance-none rounded-full h-4 w-4 border-gray-300 bg-white checked:green-500 checked:border-green-500 focus:outline-none transition-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"/>Active
                    <input type="radio" name="status" value="Active" className="form check-input appearance-none rounded-full h-4 w-4 border-gray-300 bg-white checked:green-500 checked:border-green-500 focus:outline-none transition-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"/>InActive
                </div>
            </div>
          </form>
        </>
    )
}