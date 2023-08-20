import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";

export const metadata = {
  title: "Contact",
  description: "Login page of sphere",
};

const page = () => {
  return (
    <div>
      <div>
        <div>
          <div className="">
            <section className="background-radial-gradient mb-12 text-center lg:text-left">
              <div className="relative overflow-hidden bg-cover bg-no-repeat bg-[50%] bg-[url('https://images.pexels.com/photos/33153/raisting-sattelit-reception-signal.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] h-[500px]">
                <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed">
                  <div className="flex h-full items-center justify-center">
                    <div className="max-w-[800px] px-6 py-6 text-center text-white md:py-0 md:px-12">
                      <h2 className="mb-12 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                        Contact Us
                        <br />
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="max-w-5xl mx-auto mb-20">
          <div className="flex justify-center">
            <button className="text-center py-3  px-6 rounded-lg mb-4 text-white bg-green-500">
              Contact Us
            </button>
          </div>
          <h2 className="text-center text-3xl font-bold">
            Ready to Get our best Services! <br />
            Feel free to contact with us
          </h2>
          <div className="grid gap-2 md:grid-cols-3 mt-8">
            <div className="bg-gray-200 h-[19rem] rounded-xl  mx-auto w-80 text-center">
              <Image
              height={128}
              width={128}
                className="h-[8rem] my-5 mx-auto"
                src=" https://i.ibb.co/mFcXgHr/lcoation.png"
                alt=""
              />
              <h3 className="my-3 font-bold text-2xl">Office Location</h3>
              <p className="mb-2">Awal Tower, Banani</p>
              <p>Bangladesh</p>
            </div>
            <div className="bg-gray-200 h-[19rem] rounded-xl  mx-auto w-80 text-center">
              <Image
              height={128}
              width={128}
                className="h-[8rem] my-5 mx-auto"
                src=" https://i.ibb.co/D9C0S9j/email.png"
                alt=""
              />
              <h3 className="my-3 font-bold text-2xl">Email Address</h3>
              <p className="mb-2">phero@gmail.com</p>
              <p>phero2@gmail.com</p>
            </div>
            <div className="bg-gray-200 h-[19rem] rounded-xl  mx-auto w-80 text-center">
              <Image
              height={128}
              width={128}
                className="h-[8rem] my-5 mx-auto"
                src="https://i.ibb.co/xXK69PT/contact.png"
                alt=""
              />
              <h3 className="my-3 font-bold text-2xl">HotLine</h3>
              <p className="mb-2">+8801xxxxxx</p>
              <p>+8801xxxxxx</p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex md:max-w-6xl  mb-12 md:mx-auto mx-8 items-center">
        <div className="md:w-1/2 space-y-8 ">
          <button className="btn btn-success">Contact Us</button>
          <h2 className="text-5xl font-bold">
            Have questions? Feel free to write us
          </h2>
          <p className="">
            Man braid hell of edison bulb four brunch subway tile authentic,
            chillwave put a bird on church-key ramps heirloom. Set perspiciatis
            unde omnis estenatus voluptatem aperiae.
          </p>
          <div className="flex gap-4 pb-12">
            <div className="">
              <FaFacebook className="h-10 w-10" />
            </div>
            <div>
              <FaLinkedin className="h-10 w-10" />
            </div>
            <div>
              <FaInstagram className="h-10 w-10" />
            </div>
            <div>
              <FaTwitter className="h-10 w-10" />
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <form>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative mb-6" data-te-input-wrapper-init="">
                <label className="">Your Name</label>
                <input
                  type="text"
                  className="bg-gray-100 block border-2   min-h-[auto] w-full rounded-md  px-3 py-[0.8rem] "
                  id="yourName"
                />
              </div>

              <div className="relative mb-6" data-te-input-wrapper-init="">
                <label className="">Email</label>
                <input
                  type="email"
                  className=" bg-gray-100 block border-2   min-h-[auto] w-full rounded-md  px-3 py-[0.8rem] "
                  id="lastName"
                />
              </div>
            </div>

            <div className="relative mb-6" data-te-input-wrapper-init="">
              <label className="">Subject</label>
              <input
                type="text"
                className="bg-gray-100 block border-2   min-h-[auto] w-full rounded-md  px-3 py-[0.8rem] "
                id="subject"
              />
            </div>
            <div className="relative mb-6" data-te-input-wrapper-init="">
              <label className="">Message</label>

              <textarea className="resize-none bg-gray-100 block border-2    w-full rounded-md  px-3 py-[3rem] " />
            </div>

            <button
              className="bg-green-500  hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
