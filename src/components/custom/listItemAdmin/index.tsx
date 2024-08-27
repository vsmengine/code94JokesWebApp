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
import { CheckIcon, EyeOpenIcon, HeartFilledIcon, Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import { ArrowRight } from "lucide-react";
  
type IListItemAdminProps = {
    className: string;
    item: IListItem;
    onClick:(type: string, id: string) => void
};

const ListItemAdmin: React.FC<IListItemAdminProps> = (props: IListItemAdminProps) => {
  return <Card className={props.className + " flex flex-col w-full bg-white"}>
    <CardHeader className="flex flex-row justify-start items-center gap-4 px-4 pt-7 pb-3 relative">
      <div className="!mt-0">
        <CardTitle className="text-base">{props.item.title}</CardTitle>
        <CardDescription className="text-xs">{props.item.author}</CardDescription>
      </div>
      <div className="flex justify-start items-start absolute -top-4 left-4 px-4 py-2 !mt-0 bg-slate-300 rounded-lg">
        <span className="text-xs text-black font-semibold tracking-widest">{props.item.category}</span>
      </div>
    </CardHeader>
    <CardContent className="text-xs px-4 pb-3 text-justify">
      {props.item.content}
    </CardContent>
    <CardFooter className="flex justify-between px-4 pb-4">
      <div className="flex flex-wrap items-center gap-x-5"></div>
      <div className="flex gap-1">
        <Button 
          className="flex gap-x-1 text-xs bg-red-700"
          onClick={() => props.onClick('delete', props.item._id)}>
            Trash
            <TrashIcon className="w-5"/>
        </Button>
        <Button 
          className="flex gap-x-1 text-xs"
          onClick={() => props.onClick('edit', props.item._id)}>
            Edit
            <Pencil1Icon className="w-5"/>
        </Button>
        <Button 
          className="flex gap-x-1 text-xs bg-green-600"
          onClick={() => props.onClick('accept', props.item._id)}>
            Accept
            <CheckIcon className="w-5"/>
        </Button>
      </div>
    </CardFooter>
  </Card>;
}

export default ListItemAdmin;
