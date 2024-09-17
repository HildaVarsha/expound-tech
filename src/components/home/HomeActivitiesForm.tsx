import React from "react";
import { Button, Input } from "../ui";
import { CalendarIcon, ClockAlertIcon, PlusIcon } from "lucide-react";

const LabelledInput = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) => (
  <div className="w-full">
    <p className="text-xs font-semibold pb-2">{label}</p>
    <Input placeholder={placeholder} />
  </div>
);

const DatePickerButton = ({
  label,
  icon,
}: {
  label: string;
  icon: React.ComponentType | any;
}) => (
  <div className="w-full">
    <p className="text-xs font-semibold pb-2">{label}</p>
    <Button
      variant="outline"
      className="w-full pl-3 text-left font-normal text-muted-foreground"
    >
      <span className="text-slate-400 font-semibold">Pick a date</span>
      {icon}
    </Button>
  </div>
);

const FormFooter = () => (
  <div className="flex items-center justify-between pt-6">
    <div className="flex items-center gap-2 text-sm text-gray-400">
      <PlusIcon className="text-cyan-900" />
      Add Team Member
    </div>
    <Button className="bg-cyan-950 text-white text-sm font-semibold">
      Submit
    </Button>
  </div>
);

const HomeActivitiesForm = () => {
  return (
    <div className="pt-4">
      <div className="w-full flex flex-col md:flex-row items-center gap-4 pb-4">
        <LabelledInput label="Subject" placeholder="Input Text" />
        <LabelledInput label="Add People" placeholder="Input Text" />
      </div>
      <div className="w-full flex flex-col md:flex-row  items-center gap-4">
        <DatePickerButton
          label="Due Date"
          icon={<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />}
        />
        <DatePickerButton
          label="Due Date"
          icon={<ClockAlertIcon className="ml-auto h-4 w-4 opacity-50" />}
        />
      </div>
      <div className="w-full mt-4">
        <div className="w-full">
          <p className="text-xs font-semibold pb-2">Description</p>
          <Input placeholder={"Input Text"} className="h-16" />
        </div>
      </div>
      <FormFooter />
    </div>
  );
};

export default HomeActivitiesForm;
