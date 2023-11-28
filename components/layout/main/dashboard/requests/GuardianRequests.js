"use client";
import {
  ArrowUpRightIcon,
  ArrowsRightLeftIcon,
  CheckIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@material-tailwind/react";

export default function GuardianRequests({ name, address, proposedGuardian }) {
  return (
    <div className="flex flex-row px-6 py-4 items-center border-black border-[1px] rounded-lg text-black font-bold justify-between gap-1 capitalize text-lg font-uni">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-3">
          <ArrowUpRightIcon className="h-6 w-6 text-black" />
          {name ? "From " + name : address}
        </div>
        <div className="flex items-center text-sm gap-3">
          <ArrowsRightLeftIcon className="h-6 w-6 text-black" />
          {proposedGuardian.substring(0, 4) +
            "..." +
            proposedGuardian.substring(proposedGuardian.length - 4)}
        </div>
      </div>

      <div className="flex h-full gap-2">
        <Button
          size="sm"
          variant="outlined"
          className="flex items-center justify-center gap-3 capitalize text-lg font-uni"
        >
          <CheckIcon className="w-6 h-6 text-black" />
          Accept
        </Button>
        <Button
          size="sm"
          variant="outlined"
          className="flex items-center justify-center gap-3 capitalize text-lg font-uni"
        >
          <XMarkIcon className="w-6 h-6 text-black" />
        </Button>
      </div>
    </div>
  );
}
