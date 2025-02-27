import React from "react";
import { IconType } from "react-icons";
import {
  FaAlignLeft,
  FaCalendar,
  FaEye,
  FaHeart,
  FaStar,
  FaTh,
} from "react-icons/fa";

const data: PerkItemProps[] = [
  {
    icon: FaEye,
    text: "Keep track of every film you’ve ever watched (or just start from the day you join)",
    className: "",
  },
  {
    icon: FaHeart,
    text: "Show some love for your favorite films, lists and reviews with a “like”",
    className: "",
  },
  {
    icon: FaAlignLeft,
    text: "Write and share reviews, and follow friends and other members to read theirs",
    className: "",
  },
  {
    icon: FaStar,
    text: "Rate each film on a five-star scale (with halves) to record and share your reaction",
    className: "",
  },
  {
    icon: FaCalendar,
    text: "Keep a diary of your film watching (and upgrade to PRO for comprehensive stats)",
    className: "",
  },
  {
    icon: FaTh,
    text: "Compile and share lists of films on any topic and keep a watchlist of films to see",
    className: "",
  },
];

export default function Perks() {
  return (
    <section>
      <div className="pt-[1.25rem] mb-[6.25rem]">
        <h6> Letterboxd lets you…</h6>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {data.map((item, index) => (
            <PerkItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export interface PerkItemProps {
  className?: string;
  text: string;
  icon: IconType;
}

export function PerkItem({ className, text, icon }: PerkItemProps) {
  return (
    <div
      className={`flex gap-3 items-center bg-primary-5 p-5 text-primary-10 rounded-xs ${className}`}
    >
      <div className="w-[5rem] h-[3rem]">
        {icon({
          className: "text-3xl",
        })}
      </div>

      <p className="text-sm text-on-primary-3">{text}</p>
    </div>
  );
}
