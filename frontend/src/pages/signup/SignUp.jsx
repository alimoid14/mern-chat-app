import GenderCheckBox from "./GenderCheckbox";

export default function SignUp() {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-clip-padding backdrop-blur-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          SignUp <span className="text-blue-500">ChatApp</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text font-bold">Name</span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label className="label p-2 font-bold">Username</label>
            <input
              type="text"
              placeholder="johndoe"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label className="label p-2 font-bold">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label className="label font-bold p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10"
            />
          </div>

          {/* Gender checkbox here */}
          <GenderCheckBox />

          <a
            href="#"
            className="text-sm hover:underline hover:text-blue-600 mt-4 inline-block font-bold pl-2"
          >
            Already have an account?
          </a>
          <div>
            <button className="btn btn-block btn-sm border border-slate-700">
              SignUp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
