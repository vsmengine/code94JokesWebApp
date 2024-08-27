'use client';

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
  } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { IListItem } from "@/types/listItem";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { useState } from "react";

type IListItemDetailAdminProps = {
    title?: string;
    description?: string;
    listItem: IListItem;
    listItemTypes: {id: number, name: string, value: string}[];
    onChange: (label: string, value: string | number) => void;
    onSubmit: () => void;
};

const ListItemDetailAdmin: React.FC<IListItemDetailAdminProps> = (props: IListItemDetailAdminProps) => {
    return <Card className="w-full border-0 shadow-none">
        {/* <CardHeader className="flex flex-col justify-start items-start gap-4 pb-3 relative">
            <div>
                <CardTitle className="text-base">{props.listItem.salut + ' ' + props.listItem.name}</CardTitle>
                <CardDescription className="text-sm">{props.listItem.qualifications}</CardDescription>
            </div>
        </CardHeader> */}
        <CardContent className="text-xs pb-4 text-justify !pt-6">
            {/* {props.listItem.description} */}
            {props.listItem &&  <form className="flex flex-col gap-4 w-full">
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    placeholder=""
                    value={props.listItem.title!}
                    onChange={(e) => props.onChange('title', e.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="author">Author</Label>
                  <Input
                    id="author"
                    placeholder=""
                    value={props.listItem.author!}
                    onChange={(e) => props.onChange('author', e.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="category">Type</Label>
                  <Select
                    value={props.listItem.category}
                    onValueChange={(v) => props.onChange('type', v)}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a joke type"/>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {props.listItemTypes && props.listItemTypes.map((i, k) => {
                          return <SelectItem 
                            key={k}
                            value={i.value}>
                              {i.name}
                          </SelectItem>
                        })}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="content">Content</Label>
                  <Textarea
                    id="category"
                    placeholder=""
                    rows={11}
                    value={props.listItem.content!}
                    onChange={(e) => props.onChange('content', e.target.value)}
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <Button
                  className="flex gap-x-1 text-xs"
                  onClick={(e) => {
                    e.preventDefault();
                    props.onSubmit();
                  }}>
                    Edit
                  <PaperPlaneIcon className="w-5"/>
                </Button>
              </div>
            </form>}
        </CardContent>
    </Card>;
}

export default ListItemDetailAdmin;
