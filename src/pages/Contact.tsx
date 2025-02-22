import { useForm, SubmitHandler } from "react-hook-form";
import { customTitleFAQJson } from "../utils/JSON";
import CustomTitle from "../components/CustomTitle";
import { PiHandWavingBold } from "react-icons/pi";
import Nav from "../components/Nav";
import { useEffect } from "react";

type Inputs = {
  fullname: string;
  phoneNumber: string;
  email: string;
  msg: string;
};

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = () =>
    alert("Thank you contacting! Response time is typically around 24 hours");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="layout">
      <Nav />
      <main>
        <section className="flex flex-col gap-20 py-40">
          <CustomTitle items={customTitleFAQJson} />
          <div className="flex flex-row flex-wrap gap-10">
            <div className="flex-1 faq_card p-10">
              <div className="mb-10 text-center">
                <h1 className="font-serif">
                  Have any more questions or want to discuss on project?
                </h1>
              </div>
              <div className="relative flex justify-center">
                <img
                  src="../images/tusharpic01.webp"
                  alt="devxtushar image"
                  className="profile"
                />
                <div className="flex flex-col gap-2 items-center btn_posi">
                  <div>
                    <button>
                      <PiHandWavingBold size={18} /> Let's talk
                    </button>
                  </div>
                  <span className="t6 font-bold text-black font-sans">
                    *Response time is typically around 24h
                  </span>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-10">
              <div className="faq_card p-10">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-10"
                >
                  <div>
                    <input
                      {...register("fullname", {
                        required: "Fullname is required*",
                      })}
                      placeholder="Enter Your Fullname"
                      type="text"
                    />
                    {errors.fullname && (
                      <span className="t5 text-gray-500">
                        {errors.fullname.message}
                      </span>
                    )}
                  </div>

                  <div>
                    <input
                      {...register("phoneNumber", {
                        required: "Phone Number is required*",
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: "Mobile number must be exactly 10 digits",
                        },
                      })}
                      placeholder="+91 Enter Your Phone Number"
                      type="number"
                    />
                    {errors.phoneNumber && (
                      <span className="t5 text-gray-500">
                        {errors.phoneNumber.message}
                      </span>
                    )}
                  </div>
                  <div>
                    <input
                      {...register("email", { required: true })}
                      placeholder="Enter Your Email"
                      type="email"
                    />
                    {errors.email && (
                      <span className="t5 text-gray-500">
                        Email is required*
                      </span>
                    )}
                  </div>
                  <div>
                    <input
                      {...register("msg")}
                      placeholder="Enter Your Message"
                    />
                  </div>
                  <div>
                    <span className="block t5 font-bold">
                      *Response time is typically around 24 hours
                    </span>
                  </div>
                  <div
                    className="flex flex-row justify-center"
                    style={{ width: "100%" }}
                  >
                    <button type="submit">Contact Now</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Contact;
