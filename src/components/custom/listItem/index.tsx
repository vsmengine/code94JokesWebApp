'use client';

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { IListItem } from "@/types/listItem";
import { EyeOpenIcon, HeartFilledIcon, Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import { ArrowRight } from "lucide-react";
  
type IListItemProps = {
    className: string;
    item: IListItem;
    onClick:(type: string, id: string) => void
};

const ListItem: React.FC<IListItemProps> = (props: IListItemProps) => {
  return <Card className={props.className + " flex flex-col w-full bg-white"}>
    <CardHeader className="flex flex-row justify-start items-center gap-4 px-4 pt-7 pb-3 relative">
      <div className="!mt-0">
        <CardTitle className="text-base">{props.item?.title}</CardTitle>
        <CardDescription className="text-xs">{props.item?.author}</CardDescription>
      </div>
      <div className="flex justify-start items-start absolute -top-4 left-4 px-4 py-2 !mt-0 bg-slate-300 rounded-lg">
        <span className="text-xs text-black font-semibold tracking-widest">{props.item.category}</span>
      </div>
    </CardHeader>
    <CardContent className="text-xs px-4 pb-3 text-justify">
      {props.item.content}
    </CardContent>
    <CardFooter className="flex justify-between px-4 pb-4">
      <div className="flex flex-wrap items-center gap-x-5">
        <div className="flex gap-3">
            <span className="flex items-center text-xs font-semibold gap-x-1">
              <HeartFilledIcon className="w-5"/>
              <span>8</span>
            </span>
            <span className="flex items-center text-xs font-semibold gap-x-1">
              <EyeOpenIcon className="w-5"/>
              <span>16</span>
            </span>
          </div>
      </div>
      <Button
        className="flex gap-x-1 text-xs"
        onClick={() => props.onClick('view', props.item._id)}>
          Read more
          <ArrowRight className="w-5"/>
      </Button>
    </CardFooter>
  </Card>;
}

export default ListItem;
