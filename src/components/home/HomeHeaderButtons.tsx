import React from "react";
import { Button } from "../ui";
import { CheckIcon } from "lucide-react";

const HomeHeaderButtons = () => {
  const StatusButton = ({
    text,
    isActive,
  }: {
    text: string;
    isActive?: boolean;
  }) => (
    <Button
      className={`font-semibold rounded-sm h-8 text-sm ${
        isActive ? "text-orange-400 bg-orange-100" : "text-zinc-400 bg-zinc-200"
      }`}
    >
      {text}
    </Button>
  );
  return (
    <div className="border-y border-slate-200 px-5 py-2 flex flex-col md:flex-row gap-4 md:items-center justify-between">
      <div className="flex flex-col md:flex-row md:items-center gap-6">
        <StatusButton text="New" isActive />
        <StatusButton text="Contacted" />
        <StatusButton text="Nurturing" />
        <StatusButton text="Qualified" />
        <StatusButton text="Unqualified" />
      </div>
      <Button className="bg-cyan-950 text-white font-semibold flex items-center gap-4">
        <CheckIcon className="w-4 h-4" />
        Mark as Converted
      </Button>
    </div>
  );
};

export default HomeHeaderButtons;
