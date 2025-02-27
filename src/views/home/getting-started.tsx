import React from "react";
import { Link } from "../../components";
import { FaAndroid, FaApple } from "react-icons/fa";
import SearchMovie from "./search-movie";
import SignUpModal from "./sign-up-modal";

export default function GettingStarted() {
  return (
    <section className="mx-[-1rem] md:mx-auto overflow-hidden md:overflow-visible">
      <div
        className="aspect-[1.778] relative mx-[-4rem] md:mx-0 flex items-center justify-center"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/3pgQbeZ72pYjBRcRwV8dNnHgPeV.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="backdropmask"></div>
        <SearchMovie />
      </div>

      <div className="relative md:mt-[-20%]">
        <h2 className="text-center text-2xl font-bold text-white md:text-4xl leading-[1.3]">
          Track films you’ve watched.
          <br />
          Save those you want to see.
          <br />
          Tell your friends what’s good.
          <br />
        </h2>

        <div className="text-center my-12">
          <SignUpModal />
        </div>

        <div className="space-x-2 text-center px-[1rem]">
          <p>
            The social network for film lovers. Also available on
            <FaApple className="text-primary-10 text-xl inline-block mx-2" />
            <FaAndroid className="text-primary-10 text-xl inline-block" />
          </p>
        </div>
      </div>
    </section>
  );
}
