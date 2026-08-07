import React from "react";
import { Link } from "react-router-dom"; // Or 'next/link' depending on your framework
import { FaArrowRightLong } from "react-icons/fa6";

export const AboutMpTrigger = () => {
  return (
    <div className="card bg-base-100 border border-base-300 shadow-xl max-w-sm overflow-hidden group">
      <div className="p-6 space-y-4">
        <span className="badge badge-emerald-600 font-semibold tracking-wider text-xs px-2.5 py-1.5 text-white">
          Parliamentary Profile
        </span>
        <h3 className="text-xl font-bold tracking-tight text-slate-900">
          Meet Your Representative
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          Explore the professional background, academic achievements, and strategic development vision of your sitting Member of Parliament.
        </p>
        <div className="card-actions justify-end pt-2">
          {/* Change the 'to' path matching your application router mapping */}
          <Link 
            to="/about-mp" 
            className="btn btn-emerald bg-emerald-700 hover:bg-emerald-800 text-white border-none rounded-xl gap-2 shadow-md transition-all duration-300 group-hover:translate-x-1"
          >
            About MP
            <FaArrowRightLong className="text-sm" />
          </Link>
        </div>
      </div>
    </div>
  );
};