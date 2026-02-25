"use client";

import React from "react";

import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import { motion } from "framer-motion";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20           ">
      <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
      <h1 className="heading">
        Kind Words From
        <span className="text-purple"> Satisfied Clients</span>
      </h1>
      </motion.div>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex items-center md:max-w-60 max-w-40 gap-3">
                <img
                  src={company.img}
                  alt={company.name}
                  className="md:w-10 w-6"
                />
                <span className="text-neutral-200 text-lg md:text-2xl font-semibold tracking-wide">
                  {company.name}
                </span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
