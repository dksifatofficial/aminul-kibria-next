// import LoginForm from "./LoginForm";

function Newsletter() {
  return (
    <div className="flex flex-wrap bg-[#8456f0] relative mx-12 my-40 rounded-[10px] lg:mx-20 lg:my-40">
      <div className="float-left flex-[60%] pt-[50px] pb-0 px-[50px] lg:p-20">
        <h4 className="text-white">Subscribe Now</h4>
        <h2 className="text-white font-bold">Get My Newsletter</h2>
        <p className="text-white font-medium">
          Get latest news, updates, tips and trics in your inbox
        </p>
      </div>
      <div className="float-right flex-[40%] bg-transparent pt-5 pb-0 px-[50px] lg:pt-[50px] lg:pb-0 lg:px-20">
        {/* <LoginForm></LoginForm> */}
      </div>
    </div>
  );
}

export default Newsletter;
