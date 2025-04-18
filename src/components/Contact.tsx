import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [state, handleSubmit] = useForm("xjvnejop");

  return (
    <section id="contact" className="py-20 bg-gotham-dark relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(15,160,206,0.1)_0%,_rgba(26,31,44,0)_70%)]"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white animate-up">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="mt-6 text-white/80 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities?
            Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Information */}
          <div className="lg:col-span-2 animate-left delay-100">
            <div className="bg-card/50 backdrop-blur-sm border border-white/5 rounded-lg p-8 h-full">
              <h3 className="text-xl font-bold mb-6 text-white">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-white/60">Email</h4>
                    <a
                      href="mailto:work.arjuny@gmail.com"
                      className="text-white hover:text-primary"
                    >
                      work.arjuny@gmail.com
                    </a>
                  </div>
                </div>

                {/* <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-white/60">Phone</h4>
                    <a
                      href="tel:+1234567890"
                      className="text-white hover:text-primary"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div> */}

                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-white/60">
                      Location
                    </h4>
                    <p className="text-white">Hyderabad, India</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h4 className="text-lg font-medium mb-4 text-white">
                  Connect With Me
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/Arjun149133/"
                    className="p-3 bg-card border border-white/10 rounded-full text-white hover:text-primary hover:border-primary/30 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/arjun-yadav-4aa978261/"
                    className="p-3 bg-card border border-white/10 rounded-full text-white hover:text-primary hover:border-primary/30 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="https://x.com/AArjunY"
                    className="p-3 bg-card border border-white/10 rounded-full text-white hover:text-primary hover:border-primary/30 transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 animate-right delay-200">
            <div className="bg-card/50 backdrop-blur-sm border border-white/5 rounded-lg p-8">
              <h3 className="text-xl font-bold mb-6 text-white">
                Send Me a Message
              </h3>

              {state.succeeded ? (
                <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-white mb-6">
                  Thank you for your message! I'll get back to you as soon as
                  possible.
                </div>
              ) : null}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Input
                      placeholder="Your Name"
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/50 focus:border-primary/50"
                      required={true}
                      id="name"
                      name="name"
                    />
                    {/* {errors.name && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.name.message}
                      </p>
                    )} */}
                  </div>

                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/50 focus:border-primary/50"
                      required={true}
                      id="email"
                      name="email"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                  </div>
                </div>

                {/* <div>
                  <Input
                    placeholder="Subject"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/50 focus:border-primary/50"
                    required={true}
                    id="subject"
                    name="subject"
                  />
                </div> */}

                <div>
                  <Textarea
                    placeholder="Your Message"
                    className="min-h-[150px] bg-white/5 border-white/10 text-white placeholder:text-white/50 focus:border-primary/50"
                    required={true}
                    id="message"
                    name="message"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/80 hover:accent-glow transition-all"
                  disabled={state.submitting}
                >
                  {state.submitting ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
