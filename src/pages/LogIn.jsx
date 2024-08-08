import { arrowRight, google, logoName } from "../assets/icons";
import Button from "../components/Button";

const LogIn = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center">
      <div className="flex justify-center items-center flex-col w-[400px] px-6 py-2 rounded-3xl shadow-3xl shadow-slate-gray">
        <img src={logoName} alt="Nike Logo" width={180} />
        <h1 className="font-palanquin font-bold text-4xl text-center">
          Log <span className="text-coral-red">In</span>
          <br />
          to Nike
        </h1>

        <div className="flex flex-col items-center justify-center w-full gap-5 my-4">
          <input
            className="w-full border rounded-full border-slate-gray outline-none pl-3 py-2 font-montserrat"
            type="text"
            placeholder="Username or Email"
          />
          <input
            className="w-full border rounded-full border-slate-gray outline-none pl-3 py-2 font-montserrat"
            type="text"
            placeholder="Password"
          />
          <Button label="Log In" iconURL={arrowRight} fullWidth />
        </div>

        <p className="font-palanquin font-bold text-xl text-slate-gray text-center">
          OR
        </p>

        <div className="w-full flex justify-center items-center gap-3 my-3 border border-slate-gray rounded-full p-4 hover:cursor-pointer hover:bg-gray-200 transition-colors duration-150">
          <img src={google} alt="google icon" width={20} height={20} />
          <p className="font-palanquin font-semibold text-xl">
            Sign <span className="text-coral-red">In</span> with Google
          </p>
        </div>
      </div>
    </section>
  );
};

export default LogIn;
