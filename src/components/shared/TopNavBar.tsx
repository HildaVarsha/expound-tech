import { Bell, Calendar, MenuIcon, Search, Settings } from "lucide-react";
import React from "react";
import { Avatar, AvatarImage, Button } from "../ui";

const TopNavBar = () => {
  return (
    <div className="h-14 bg-cyan-950 flex items-center justify-between text-white px-4 top-0 fixed w-full">
      <div className="flex items-center gap-8">
        <MenuIcon />
        <h2 className="font-semibold text-lg">Test</h2>
      </div>
      <div className="flex items-center gap-6">
        <Button
          className="bg-white text-slate-700 w-8 h-8 hidden md:flex"
          size={"icon"}
        >
          <Search className="w-4 h-4" />
        </Button>
        <div className="md:flex items-center gap-6 border-x border-slate-400 px-4 hidden ">
          <Settings className="w-4 h-4" />
          <Bell className="w-4 h-4" />
          <Calendar className="w-4 h-4" />
        </div>
        <Avatar className="w-8 h-8">
          <AvatarImage src="https://github.com/shadcn.png" />
        </Avatar>
      </div>
    </div>
  );
};

export default TopNavBar;
