import { Calendar, Clock, MailIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const HomeUpcomingEvents = () => {
  const Header = () => {
    return (
      <div className="w-full flex items-center justify-between pb-4">
        <p className="text-sm font-semibold text-cyan-900 ">
          Upcoming & Overdue
        </p>
        <Link
          href={"#"}
          className="text-cyan-900 underline underline-cyan-900 text-sm font-semibold"
        >
          View All
        </Link>
      </div>
    );
  };
  const CardComponent = ({ name, icon }: { name: string; icon: any }) => {
    return (
      <div className="border border-zinc-200 rounded-sm">
        <p className="border-b border-zinc-200 text-xs flex font-semibold items-center gap-2 px-4 py-1">
          {icon}
          {name}
        </p>
        <div className="px-4 py-2 flex gap-8">
          <div>
            <p className="text-xs font-semibold pb-2">Start</p>
            <div className="flex items-center gap-2 text-gray-400 text-xs font-semibold pb-1">
              <Calendar className="w-4 h-4" /> 27/08/2024
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-xs font-semibold">
              <Clock className="w-4 h-4" />
              12:00pm
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold pb-2">End</p>
            <div className="flex items-center gap-2 text-gray-400 text-xs font-semibold pb-1">
              <Calendar className="w-4 h-4" /> 27/08/2024
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-xs font-semibold">
              <Clock className="w-4 h-4" />
              12:00pm
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="border-y border-zinc-200 pb-24 md:pb-0">
      <div className="p-5">
        <Header />
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <CardComponent
            icon={<PhoneIcon className="w-4 h-4 text-green-600" />}
            name="Arrange a Call"
          />
          <CardComponent
            icon={<MailIcon className="w-4 h-4 text-orange-500" />}
            name="Arrange a Call"
          />
          <CardComponent
            icon={<PhoneIcon className="w-4 h-4 text-green-600" />}
            name="Arrange a Call"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeUpcomingEvents;
