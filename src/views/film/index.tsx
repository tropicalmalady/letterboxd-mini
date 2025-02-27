import React from "react";
import { Poster } from "../../components";

export default function FilmView() {
  return (
    <section className="mx-[-1rem] md:mx-auto overflow-hidden md:overflow-visible">
      <div
        className="aspect-[1.778] relative mx-[-8rem]"
        style={{
          backgroundImage: `url(https://a.ltrbxd.com/resized/sm/upload/np/rp/8m/n8/beast-1920-1920-1080-1080-crop-000000.jpg?v=111d9365a0)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="backdropmask"></div>
      </div>

      <div className="relative mt-[-20%] flex mx-4 md:mx-auto">
        <div className="absolute md:sticky top-0 md:top-[2rem] right-0 md:right-[initial]">
          <Poster
            title=""
            id=""
            imageUrl="https://a.ltrbxd.com/resized/film-poster/4/0/2/3/9/7/402397-beast-0-460-0-690-crop.jpg?v=046ac614ed"
            className="max-w-[5rem] md:max-w-[14rem]"
            isUnclickable
          />
        </div>

        <div className="md:mx-[3rem] md:max-w-[24rem] bg-primary">
          <div className="md:flex flex-wrap items-end gap-2">
            <h4 className="text-white text-[2rem] leading-[1.1] mr-1">Beast</h4>
            <div className="flex flex-col md:flex-row gap-1 font-['Graphik']">
              <p className="text-on-primary-3 md:underline mt-4 md:mt-0">
                2017
                <span className="inline-block ml-1">Directed by</span>
              </p>

              <p className="text-on-primary-3 md:underline font-bold md:font-normal">Claire Denis</p>
            </div>
          </div>

          <div className="pt-3 pb-1 mt-2 md:mt-0">
            <h6 className="text-sm">Be careful what you unleash</h6>
          </div>

          <div>
            <p>
              A troubled woman living in an isolated community finds herself
              pulled between the control of her oppressive family and the allure
              of a secretive outsider suspected of a series of brutal murders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
