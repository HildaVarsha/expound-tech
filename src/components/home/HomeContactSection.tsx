import { InfoIcon } from "lucide-react";
import React from "react";
import {
  Avatar,
  AvatarImage,
  Button,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../ui";

const HomeContactSection = () => {
  const Header = () => {
    return (
      <div className="py-8 px-4 border-b border-slate-200 w-full">
        <div className="flex  md:items-center gap-4 justify-between w-full">
          <div className="flex items-center gap-2 w-full">
            <div className="w-2 h-2 rounded-full bg-orange-400 "></div>
            <p className="text-orange-400 font-medium text-sm  w-full">
              Contacted
            </p>
          </div>
          <div className="flex items-center gap-2  w-full">
            <InfoIcon className="w-4 h-4 text-gray-400" />
            <p className="text-gray-400 font-medium text-xs pr-0 md:pr-44 ">
              Pending Actions
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-4 justify-between py-2">
          <h1 className="text-3xl font-bold">Mamta Naik</h1>
          <div className="flex items-center gap-4">
            <Button className="text-green-600 bg-green-100 font-semibold text-sm">
              Create Account
            </Button>
            <Button className="bg-yellow-100 text-yellow-600 font-semibold text-sm">
              Create Contact
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs text-gray-400 pt-4 md:pt-0">
          <Avatar className="w-4 h-4">
            <AvatarImage src="https://github.com/shadcn.png" />
          </Avatar>
          Aniruddh Naidu
        </div>
      </div>
    );
  };
  const OtherContactComp = () => {
    const TeamMember = ({ name }: { name: string }) => {
      return (
        <div className="flex justify-between my-6">
          <div>
            <p className="text-blue-400 pb-1 text-sm font-semibold">{name}</p>
            <p className="text-gray-400 text-xs">Associate Vp</p>
          </div>
          <p className="text-xs font-semibold">Sales Head</p>
        </div>
      );
    };
    return (
      <div className="p-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="w-full">
            <p className="text-sm font-semibold pb-2">Account</p>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue
                  placeholder="Select Option"
                  className="text-slate-400"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="w-full">
            <p className="text-sm font-semibold pb-2">Contact</p>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div>
          <TeamMember name=" Pranab Biyani" />
          <TeamMember name="Nayan Johal" />
        </div>
      </div>
    );
  };

  return (
    <div className="w-full">
      <Header />
      <Tabs defaultValue="Other Contacts" className=" pt-4">
        <TabsList className="border-b border-slate-200 pb-3 w-[330px]  md:w-full overflow-y-hidden overflow-x-auto">
          <TabsTrigger value="account">Basic Details</TabsTrigger>
          <TabsTrigger value="Account Details">Account Details</TabsTrigger>
          <TabsTrigger value="Lead Details">Lead Deails</TabsTrigger>
          <TabsTrigger value="Team">Team</TabsTrigger>
          <TabsTrigger value="Other Contacts">Other Contacts</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="Other Contacts">
          <OtherContactComp />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HomeContactSection;
