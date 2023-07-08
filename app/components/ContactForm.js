import ShutterUpButton from "./ShutterUpButton";

function ContactForm() {
  return (
    <>
      <form className="w-full flex flex-wrap justify-center">
        <input
          className="w-full border text-base inline-block m-[5px] p-5 rounded-[10px] 
        border-solid border-[#ccc] lg:w-[45%] outline-0"
          type="text"
          placeholder="Your Name"
          required
        />
        <input
          className="w-full border text-base inline-block m-[5px] p-5 rounded-[10px] 
        border-solid border-[#ccc] lg:w-[45%] outline-0"
          type="email"
          placeholder="Your Email"
          required
        />
        <input
          className="w-full border text-base inline-block m-[5px] p-5 rounded-[10px] 
        border-solid border-[#ccc] lg:w-[45%] outline-0"
          type="tel"
          placeholder="Your Phone"
          required
        />
        <input
          className="w-full border text-base inline-block m-[5px] p-5 rounded-[10px] 
        border-solid border-[#ccc] lg:w-[45%] outline-0"
          type="text"
          placeholder="Subject"
          required
        />
        <textarea
          className="w-full border text-base mt-[5px] mb-2.5 mx-[5px] p-2.5 rounded-[10px]
        border-solid border-[#ccc] lg:w-[92%] outline-0"
          rows="5"
          placeholder="Write your message here"
          required
        />

        <ShutterUpButton type="submit" id="submit-btn">
          <span>Submit Now</span>
        </ShutterUpButton>
      </form>
    </>
  );
}

export default ContactForm;
