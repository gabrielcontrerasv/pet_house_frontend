import Image from "next/image";
// Assets
import LandingDog from "../../public/assets/images/LandingDog.png";

const HomeComponent = () => {
  return (
    <section className="sm:pl-16 w-full min-w-[500px] col-start-1 col-end-9 row-start-1 row-end-3 ">
      {/* Bg */}
      <div className="h-full ">
        <div className="fixed top-0 left-0 w-full h-full z-10 bg-[#0000001e]"></div>
        <Image src={LandingDog} />
      </div>

      <div className="flex justify-center gap-5 h-full relative top-[-15rem] sm:top-[-40rem] z-20 ">
        <div className=" h-[full] mt-[2rem] w-[75%] p-5 absolute ">
          {/* <div className="before:block before:absolute before:-inset-4 before:-skew-y-3 before:bg-dark-green relative inline-block"> */}
          <h1 className="text-4xl text-center sm:text-left sm:text-4xl md:text-6xl sm:text-[#ffffff] font-bold tracking-wide relative">
            Welcome to Teams
            <br />
            Veterinary Clinic
          </h1>
          {/* </div> */}
          <div className="w-[50%]">
            <p className="text-lg tracking-wide mt-[2rem] text-[#ffffff]">
              Teams Veterinary Clinic is a full-service animal hospital and
              welcomes both emergency treatment cases as well as pet patients in
              need of routine medical, surgical, and dental care.
            </p>
            <p className="text-lg tracking-wide mt-[2rem] text-[#ffffff]">
              Beyond first-rate pet care, we make our clinic comfortable,
              kid-friendly, and calm, so your pet can relax in the waiting room
              and look forward to meeting our veterinarian.
            </p>
          </div>
          <div className="w-[18rem] flex  justify-between h-[4rem] mt-8 ">
            <button className=" bg-dark-green text-white tracking-wider w-[8rem] h-[3rem] rounded-md hover:scale-110 duration-300">
              Sign In
            </button>
            <button className=" bg-white text-dark-green font-medium tracking-wider w-[8rem] h-[3rem] rounded-md hover:scale-110 duration-300">
              Login
            </button>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="w-full h-[30%] flex justify-center py-5">
        <div className="flex justify-evenly items-center h-full bg-[#bfbfbf] w-[80%] rounded-3xl">
          <div className="w-[25%] h-[65%] rounded-3xl bg-white">
            <h2>Consultation</h2>
          </div>
          <div className="w-[25%] h-[65%] rounded-3xl bg-white">
            <h2>Grooming</h2>
          </div>
          <div className="w-[25%] h-[65%] rounded-3xl bg-white">
            <h2>Online Shop</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeComponent;
