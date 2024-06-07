import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
      id="contact-us"
    >
      <h3 className="text-4xl text-center leading-[68px] font-palanquin font-bold lg:max-w-md">
        Sign Up for
        <span className="text-coral-red"> Updates </span>& News Letters
      </h3>

      <div className="lg:max-w-[40%] w-full justify-between flex items-center max-sm:flex-col gap-5 p-2.5 border border-slate-gray rounded-full">
        <input
          className="w-[65%] h-[50px] pl-2 rounded-full outline-none"
          type="text"
          placeholder="subscribe@nike.com"
        />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
