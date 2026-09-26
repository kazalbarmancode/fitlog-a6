import Image from "next/image";
import React from "react";
import NavberLOgo from "@/assets/logo.png";
import Save from "../SavePlan/Save";
import PlanPoin from "../SavePlan/PlanPoint";
import NavLink from "../NavLink/NavLink";

const Navber = () => {
 const navLinks = (
    <>
      <NavLink href="/">Workouts</NavLink>
      <NavLink href="/MyPlan">My Plan</NavLink>
    </>
  );
  return (
    <nav className="bg-[#3d3d3f] sticky top-0 z-50">
      <div className="container mx-auto px-10 py-2 navbar  shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-[#3d3d3f] shadow rounded-box z-1 mt-3 w-52 p-2 "
            >
              {navLinks}
            </ul>
          </div>
          <div className="flex gap-1 items-center text-white font-semibold text-2xl">
            <Image src={NavberLOgo} alt="Navber Logo png"></Image>
            FITLOG
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end gap-5">
          <PlanPoin></PlanPoin>
          <Save></Save>
        </div>
      </div>
    </nav>
  );
};

export default Navber;
