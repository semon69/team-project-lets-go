import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Login",
  description: "Login page of sphere",
};

const page = () => {
  return (
    <div className="py-16">
    <div className="max-w-6xl mx-auto bg-gray-100">
      <div className="md:flex  items-center">
        <div className="relative">
          <Image
          height={560}
          width={560}
            className="h-[35rem]"
            src="https://i.ibb.co/Fsq53Xd/13.jpg"
            alt=""
          />
        </div>
        <div className="mx-auto pt-4 w-3/5 ">
          <h2 className="text-3xl text-center font-semibold">Login Here</h2>
          <p className="text-center">
            A few clicks away from creating your account
          </p>
          <div>
            <div className="block max-w-md mx-auto rounded-lg py-6 ">
              <form>
                {/* Email Input */}
                <div className="= mb-6">
                  <label className="">Email</label>
                  <input
                    type="email"
                    className="block border-2   min-h-[auto] w-full rounded-md  px-3 py-[0.7rem] "
                    id="email"
                  />
                </div>

                {/* Password Input */}
                <div className=" mb-6">
                  <label className="">Password</label>
                  <input
                    type="password"
                    className="block border-2   min-h-[auto] w-full rounded-md  px-3 py-[0.7rem] "
                    id="password"
                  />
                </div>
                <div className="text-center">
                  <button
                    className="bg-green-500 md:mb-5  hover:bg-green-700 text-white font-bold py-4 px-5 rounded"
                    type="submit"
                  >
                    Sign in
                  </button>
                  <p className="md:mt-0 mt-4 flex justify-center gap-2 items-center">
                    <p>Do not have an account</p>
                    <Link href="/registration">
                      <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-[8rem] md:px-3 py-1  rounded-lg">
                        Register
                      </button>
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default page;
