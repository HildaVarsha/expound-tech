import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui";
import { Lightbulb, MailIcon, PhoneIcon } from "lucide-react";
import HomeActivitiesForm from "./HomeActivitiesForm";

const HomeActivities = () => {
  const ActivityButtons = ({
    name,
    icon,
    bg,
    text,
  }: {
    name: string;
    icon: any;
    bg: string;
    text: string;
  }) => {
    return (
      <div className="flex items-center text-xs gap-4 border border-zinc-200 font-semibold w-full">
        <div className={`${bg} ${text} p-3`}>{icon}</div>
        {name}
      </div>
    );
  };
  return (
    <div className="w-full">
      <Tabs defaultValue="activites" className="w-full pt-4">
        <TabsList className="border-b border-slate-200 pb-2.5 w-full">
          <TabsTrigger value="activites">Activities</TabsTrigger>
          <TabsTrigger value="Account Details">Actionable</TabsTrigger>
          <TabsTrigger value="Lead Details">Tasks</TabsTrigger>
          <TabsTrigger value="Team">Note & File</TabsTrigger>
        </TabsList>
        <TabsContent value="activites" className=" p-5">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <ActivityButtons
              name={"Log a Call"}
              icon={<PhoneIcon className="w-4 h-4" />}
              bg="bg-gray-200"
              text="text-gray-400"
            />
            <ActivityButtons
              name={"Email"}
              icon={<MailIcon className="w-4 h-4" />}
              bg="bg-red-200"
              text="text-red-400"
            />
            <ActivityButtons
              name={"Event"}
              icon={<Lightbulb className="w-4 h-4" />}
              bg="bg-gray-200"
              text="text-gray-400"
            />
          </div>
          <HomeActivitiesForm />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HomeActivities;
