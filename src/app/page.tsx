import {
  HomeActivities,
  HomeContactSection,
  HomeHeader,
  HomeHeaderButtons,
  HomeStageHistory,
  HomeUpcomingEvents,
} from "@/components/home";

export default function Home() {
  return (
    <div className="w-full">
      <HomeHeader />
      <HomeHeaderButtons />
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-[40%] border-r border-zinc-200">
          <HomeContactSection />
        </div>
        <div className="w-full md:w-[60%]">
          <div className="flex flex-col md:flex-row">
            <div className="border-r border-zinc-200 w-full md:w-[65%]">
              <HomeActivities />
            </div>
            <div className="w-full md:w-[35%]">
              <HomeStageHistory />
            </div>
          </div>

          <HomeUpcomingEvents />
        </div>
      </div>
    </div>
  );
}
