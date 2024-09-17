"use client";
import {
  BriefcaseBusiness,
  ChartColumnDecreasing,
  ChartColumnStacked,
  GitFork,
  LayoutGrid,
  Pin,
  UserRound,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Sidebar = () => {
  const [menu, setSelectedMenu] = useState(1);
  const iconsArray = [
    {
      id: 1,
      name: "Icon",
      icon: <LayoutGrid className="w-6 h-6" />,
    },

    {
      id: 2,
      name: "Icon1",
      icon: <Pin className="w-6 h-6" />,
    },
    {
      id: 3,
      name: "Icon2",
      icon: <BriefcaseBusiness className="w-6 h-6" />,
    },
    {
      id: 5,
      name: "Icon3",
      icon: <ChartColumnStacked className="w-6 h-6" />,
    },
    {
      id: 6,
      name: "Icon4",
      icon: <UserRound className="w-6 h-6" />,
    },

    {
      id: 7,
      name: "Icon5",
      icon: <GitFork className="w-6 h-6" />,
    },
    {
      id: 8,
      name: "Icon6",
      icon: <ChartColumnDecreasing className="w-6 h-6" />,
    },
  ];
  return (
    <div className="flex flex-col gap-6 items-center  pt-4 border-r border-slate-200 px-3 h-full">
      {iconsArray?.map((icon: { id: number; name: string; icon: any }) => (
        <Link
          href={"#"}
          className={`p-2 rounded-md ${
            menu == icon?.id ? " bg-cyan-900 text-white" : "hover:bg-cyan-100"
          }`}
          key={icon?.id}
          title={icon?.name}
          onClick={() => setSelectedMenu(icon?.id)}
        >
          {icon?.icon}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
