import React from "react";

const HomeStageHistory = () => {
  const ScheduleComp = ({ time, label }: { time: string; label: string }) => {
    return (
      <div className="flex  gap-4 px-4">
        <p className="text-xs text-gray-400 ">28/08</p>
        <div className="relative flex flex-col items-center">
          <div className="w-3 h-3 rounded-full border-2 border-cyan-900 mt-1"></div>

          <div className="border-r aboslute h-12 left-[-10px] border-dashed border-zinc-200"></div>
        </div>
        <div>
          <p className="text-xs text-gray-400">{time}</p>
          <p className="text-cm font-semibold text-xs">{label}</p>
        </div>
      </div>
    );
  };
  return (
    <div>
      <div className="border-y border-zinc-200 text-cyan-900 font-semibold p-3.5 text-xs">
        Stage History
      </div>
      <p className="p-4 text-xs font-semibold">August 2024</p>
      <div>
        <ScheduleComp time={"Team | 09:00am"} label={"Created Jiya Gopal"} />
        <ScheduleComp
          time={"Team | 10:00am"}
          label={"Assigned to Aniruddh Naidu"}
        />
        <ScheduleComp time={"Event | 12:00pm"} label={"Arrange a Call"} />
        <ScheduleComp
          time={"Lead Update | 04:00pm"}
          label={"Marked as Contacted"}
        />
      </div>
    </div>
  );
};

export default HomeStageHistory;
