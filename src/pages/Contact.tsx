import { useForm, SubmitHandler } from "react-hook-form";
import { customTitleFAQJson } from "../utils/JSON";
import CustomTitle from "../components/CustomTitle";
import Nav from "../components/Nav";
import { useEffect } from "react";
import Info from "../components/Info";

type Inputs = {
  fullname: string;
  phoneNumber: string;
  email: string;
  msg: string;
};

function Contact() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = () => {
    alert("Thank you contacting! Response time is typically around 24 hours");
    reset();
  };

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
            <Info />
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
                      {...register("msg", { required: true })}
                      placeholder="Enter Your Message"
                      type="text"
                    />
                    {errors.msg && (
                      <span className="t5 text-gray-500">
                        Message is required*
                      </span>
                    )}
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
