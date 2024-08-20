import { arrowRight, google, logo } from "../assets/icons";
import Button from "../components/Button";

const SignUp = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center">
      <div className="flex justify-center items-center flex-col max-w-[500px] px-6 py-2 rounded-2xl shadow-xl border border-inherit">
        <img src={logo} alt="Nike Logo" width={180} className="my-5" />
        <h1 className="font-palanquin font-bold text-4xl text-center">
          Sign <span className="text-coral-red">Up</span> with Nike
        </h1>

        <div className="flex flex-col items-center justify-center w-full gap-5 my-4">
          <input
            className="w-full border rounded-full border-slate-gray outline-none pl-3 py-4 font-montserrat"
            type="text"
            placeholder="Username"
          />
          <input
            className="w-full border rounded-full border-slate-gray outline-none pl-3 py-4 font-montserrat"
            type="email"
            placeholder="Email"
          />
          <input
            className="w-full border rounded-full border-slate-gray outline-none pl-3 py-4 font-montserrat"
            type="text"
            placeholder="Password"
          />
          <input
            className="w-full border rounded-full border-slate-gray outline-none pl-3 py-4 font-montserrat"
            type="text"
            placeholder="Confirm Password"
          />
          <Button label="Sign Up" iconURL={arrowRight} fullWidth />
        </div>

        <div className="flex items-center justify-between w-full">
          <hr className="h-[1px] w-[45%] bg-slate-gray border-none" />
          <p className="font-palanquin font-bold text-xl text-slate-gray text-center">
            OR
          </p>
          <hr className="h-[1px] w-[45%] bg-slate-gray border-none" />
        </div>

        <button className="w-full flex justify-center items-center gap-3 my-3 border border-slate-gray rounded-full p-4 hover:cursor-pointer hover:bg-gray-200 transition-colors duration-150">
          <img src={google} alt="google icon" width={20} height={20} />
          <p className="font-palanquin font-semibold text-xl">
            Sign <span className="text-coral-red">In</span> with Google
          </p>
        </button>
      </div>
    </section>
  );
};

export default SignUp;
