"use client";

import { motion } from "framer-motion";

import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";

const Contact = () => {
  let variant = {
    show: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };
  let isMobile;

  if (typeof window !== "undefined") {
    isMobile = window.outerWidth < 640;
  }

  if (!isMobile) {
    variant = fadeIn("right", "tween", 0.2, 1);
  }

  return (
    <section
      id="contact"
      className="h-screen flex  justify-center items-center "
    >
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        // className={` mx-auto flex lg:flex-row flex-col gap-6`}
      >
        <div className="flex flex-col sm:flex-row items-center justify-between flex-wrap gap-10">
          <motion.div
            variants={variant}
            className="  flex justify-end flex-col gradient-05 sm:p-8 p-4 relative"
          >
            <h4 className="font-bold  text-[44px] text-white sm:px-10">
              Te Gusta lo que ves ?
            </h4>
          </motion.div>

          <motion.div
            variants={zoomIn(0.8, 1)}
            className="relative flex-1 flex justify-center items-center"
          >
            <div className="absolute left-[77%]   feedback-gradient z-0"></div>
          </motion.div>
          <motion.div
            variants={variant}
            className="relative flex-1 flex justify-center items-center"
          >
            <button
              type="button"
              className="z-1 px-10 flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px] hover:scale-110"
            >
              <a
                href="https://api.whatsapp.com/send?phone=5491127601041"
                rel="noreferrer"
                target={"_blank"}
                className="font-normal text-2xl text-white"
              >
                Hablemos!
              </a>
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
