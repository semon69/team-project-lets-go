import Image from "next/image";
import Link from "next/link";

const Registration = () => {
  
  return (
    <div className="py-16 ">
      <div className="max-w-6xl mx-auto bg-gray-100">
        <div className="md:flex  items-center">
          <div className="relative">
            <Image
            height={560}
            width={560}
              className="h-[35rem]"
              src="https://img.freepik.com/free-vector/completed-steps-concept-illustration_114360-5441.jpg"
              alt=""
            />
            <Link href="">
              <div className="md:flex text-center md:bg-white md:py-4 md:my-0 my-12 md:px-12  md:ml-0 bottom-[20px] md:left-36 rounded-lg  md:absolute  items-center gap-2">
                <h3 className="font-semibold text-lg">Already Member? </h3>
                <Link href="/login">
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-[8rem] md:px-3 py-1  rounded-lg">
                    Login
                  </button>
                </Link>
              </div>
            </Link>
          </div>
          <div className="mx-auto">
            <h2 className="text-3xl text-center font-semibold">
              Create a free account
            </h2>
            <p className="text-center">
              A few clicks away from creating your account
            </p>
            <div>
              <div className="block max-w-md rounded-lg p-6 ">
                <form>
                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Username */}
                    <div
                      className="relative mb-6"
                      data-te-input-wrapper-init=""
                    >
                      <label className="">Username</label>
                      <input
                        type="text"
                        className="block border   min-h-[auto] w-full rounded-md  px-3 py-[0.32rem] "
                        id="userName"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {/*First name input*/}
                    <div
                      className="relative mb-6"
                      data-te-input-wrapper-init=""
                    >
                      <label className="">First name</label>
                      <input
                        type="text"
                        className="block border   min-h-[auto] w-full rounded-md  px-3 py-[0.32rem] "
                        id="firstName"
                      />
                    </div>
                    {/*Last name input*/}
                    <div
                      className="relative mb-6"
                      data-te-input-wrapper-init=""
                    >
                      <label className="">Last name</label>
                      <input
                        type="text"
                        className="block border   min-h-[auto] w-full rounded-md  px-3 py-[0.32rem] "
                        id="lastName"
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="relative mb-6" data-te-input-wrapper-init="">
                    <label className="">Email</label>
                    <input
                      type="email"
                      className="block border   min-h-[auto] w-full rounded-md  px-3 py-[0.32rem] "
                      id="email"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Password Input */}
                    <div
                      className="relative mb-6"
                      data-te-input-wrapper-init=""
                    >
                      <label className="">Password</label>
                      <input
                        type="password"
                        className="block border   min-h-[auto] w-full rounded-md  px-3 py-[0.32rem] "
                        id="password"
                      />
                    </div>
                    {/*Confirm Password*/}
                    <div
                      className="relative mb-6"
                      data-te-input-wrapper-init=""
                    >
                      <label className="">Confirm Password</label>
                      <input
                        type="password"
                        className="block border   min-h-[auto] w-full rounded-md  px-3 py-[0.32rem] "
                        id="confirmPassword"
                      />
                    </div>
                  </div>
                  <button
                    className="bg-green-500  hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    type="submit"
                  >
                    Sign up
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
