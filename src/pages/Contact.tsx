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
  linkedin: string;
};

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Nav />
      <main>
        <section className="flex flex-col gap-20 py-40">
          <CustomTitle items={customTitleFAQJson} />
          <div className="flex flex-row flex-wrap gap-10">
            <div className="flex-1 faq_card p-20">
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
                      defaultValue=""
                      {...(register("fullname"), { required: true })}
                      placeholder="Enter Your Fullname"
                    />
                    {errors.fullname && <span>This field is required</span>}
                  </div>

                  <div>
                    <input
                      {...register("phoneNumber", { required: true })}
                      placeholder="Enter Your Phone Number"
                    />
                    {errors.phoneNumber && <span>This field is required</span>}
                  </div>
                  <div>
                    <input
                      {...register("email", { required: true })}
                      placeholder="Enter Your Email"
                    />
                    {errors.phoneNumber && <span>This field is required</span>}
                  </div>
                  <div>
                    <input
                      {...register("linkedin")}
                      placeholder="Enter Your LinkedIn"
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
