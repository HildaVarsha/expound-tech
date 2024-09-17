import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui";
import {
  GitCompareArrows,
  PlusSquareIcon,
  RefreshCwIcon,
  UserPlus,
} from "lucide-react";

const HomeHeader = () => {
  const BreadCrumbComp = () => {
    return (
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="text-sm">
              Dashboard
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Lead</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>LE-010071</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    );
  };
  return (
    <div className="w-full p-5">
      <BreadCrumbComp />
      <div className="flex flex-col md:flex-row md:items-center gap-4 justify-between pt-3 w-full">
        <h1 className="text-3xl font-bold">LE-010071</h1>
        <div className="flex items-center gap-4 text-zinc-400">
          <PlusSquareIcon className="w-6 h-6 rounded-none" />
          <UserPlus />
          <GitCompareArrows />
          <RefreshCwIcon />
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
