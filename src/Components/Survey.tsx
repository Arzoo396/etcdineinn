import Image from "next/image";
import React from "react";

const Survey = () => {
  return (
    <div className="container pt-40">
      <div className="grid lg:grid-cols-[50%,1fr] gap-20">
        <div>
          <Image
            className="w-[100%] h-auto lg:w-auto lg:h-[90vh]"
            src="/survey.jpg"
            width={1000}
            height={600}
            alt="survey image"
          />
        </div>

        <div className="self-center">
          <h2 className="text-4xl md:text-6xl font-bold">Survey</h2>
          <h2 className="text-4xl md:text-6xl font-bold pt-3">
            About our <span className="text-accent">Food</span>
          </h2>

          <p className="text-gray-700 pt-16">
          We value your feedback! Please take a moment to complete our survey and share your thoughts about our food. Your responses will help us improve and ensure that we continue to provide delightful dining experiences. We appreciate your time and honesty.
          </p>

          <p className="text-gray-700 pt-8">
          By participating, youll help us understand what you love about our dishes and what we can enhance. Whether its our appetizers, main courses, desserts, or beverages, your input is crucial.
          </p>

          <p className="text-gray-700 pt-8">
          As a token of our appreciation, follow us on Instagram @etcdineinn to stay updated on our latest offerings and special events. Thank you for dining with us and for helping us make your next visit even better!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Survey;
