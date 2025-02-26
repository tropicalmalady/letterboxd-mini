import React from "react";
import { Link } from "../../components";
import { FaAndroid, FaApple } from "react-icons/fa";

export default function GettingStarted() {
  return (
    <section>
      <div
        className="aspect-[1.778] relative"
        style={{
          backgroundImage: `url(https://a.ltrbxd.com/resized/sm/upload/tx/hy/xj/lw/sanctuary-2023-1200-1200-675-675-crop-000000.jpg?v=b1d98010cd)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="backdropmask"></div>
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
          <Link to={"#"} variant={{ type: "action" }}>
            Get started — it‘s free!
          </Link>
        </div>

        <div className="space-x-2 text-center">
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
