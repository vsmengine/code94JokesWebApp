'use client';

import styles from "./../page.module.css";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import ListItem from "@/components/custom/listItem";
import ListItemDetail from "@/components/custom/listItemDetail";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Toaster } from "@/components/ui/toaster";
import ListItemAdmin from "@/components/custom/listItemAdmin";
import ListItemDetailAdmin from "@/components/custom/listItemDetailAdmin";
import { deleteJoke, getAllJokes, getAllModeratedJokes, transferJoke, updateJoke } from "@/apis/jokesApi";
import { IJokeItem } from "@/types/jokeItem";

export default function Jokes() {
  const formDefaultValue = {title: '', author: '', content: '', category: ''};
  const queryParams = useSearchParams();
  const [listItems, setListItems] = useState<IJokeItem[]>([]);
  const [formValue, setFormValue] = useState<IJokeItem>(formDefaultValue);
  const isAdminRef = useRef(JSON.parse(queryParams.get('isAdmin')!));

  const jokeTypes = [
    {id: 1, name: 'type 1', value: 'type 1'},
    {id: 2, name: 'type 2', value: 'type 2'},
    {id: 3, name: 'type 3', value: 'type 3'}
  ];

  useEffect(() => {
    fetchJokes();
  }, []);

  const fetchJokes = async () => {
    let allJokes = [];
    if (isAdminRef.current) {
      allJokes = await getAllJokes();
    } else {
      allJokes = await getAllModeratedJokes();
    }
    setListItems(allJokes);
  }

  const onChangeFields = (type: string, value: any) => {
    if (!value) return;
    switch(type) {
      case 'title':
        setFormValue({...formValue, title: value})
        break;
      case 'author':
        setFormValue({...formValue, author: value})
        break;
      case 'content':
        setFormValue({...formValue, content: value})
        break;
      case 'type':
        setFormValue({...formValue, category: value})
        break;
    }
  }

  const onSubmitForm = async () => {
    await updateJoke(formValue._id, formValue);
    setFormValue(formDefaultValue);
    fetchJokes();
  }

  const onSelect = (type: string, id: string) => {
    if (!listItems) return;
    switch(type) {
      case 'view':
        onLoadItem(id);
        break;
      case 'edit':
        onLoadItem(id);
        break;
      case 'delete':
        onDelete(id);
        break;
      case 'accept':
        onAccept(id);
        break;
    }
  }

  const onLoadItem = (id: string) => {
    const selectedItem = listItems.find((i) => i._id === id);
    setFormValue({...selectedItem!});
  }

  const onDelete = async (id: string) => {
    await deleteJoke(id);
    fetchJokes();
  }

  const onAccept = async (id: string) => {
    const selectedItem = listItems.find((i) => i._id === id);
    await transferJoke(selectedItem!);
    await deleteJoke(id);
    fetchJokes();
  }

  return (
    <main className={styles.main}>

      <div className="flex flex-col p-[15px] rounded-xl w-full bg-slate-100">
        <div className="grid grid-cols-12 gap-4 w-full">
          {/* Left section */}
          <div className="col-span-5 relative">
            <ScrollArea className={"flex flex-col gap-y-8 p-[10px] !pr-[15px] h-[calc(100vh-115px)] mb-[40px] rounded-lg bg-white overflow-y-scroll"}>
              {
                listItems && listItems.map((item, index) => {
                  return isAdminRef.current
                  ? <ListItemAdmin
                      className={index === 0 ? "mt-4" : "mt-8"}
                      key={index}
                      item={item}
                      onClick={onSelect}
                    />
                  : <ListItem
                      className={index === 0 ? "mt-4" : "mt-8"}
                      key={index}
                      item={item}
                      onClick={onSelect}
                    />  
                })
              }
            </ScrollArea>
          </div>

          {/* Right section */}
          <div className="flex col-span-7">
            <ScrollArea className={"flex flex-col gap-y-8 p-[10px] !pr-[15px] w-full h-[calc(100vh-115px)] mb-[40px] rounded-lg bg-white overflow-y-scroll"}>
              <div className={"flex flex-col w-full"}>
                {
                  isAdminRef.current
                   ? <ListItemDetailAdmin
                      listItem={formValue!}
                      listItemTypes={jokeTypes}
                      onChange={onChangeFields}
                      onSubmit={onSubmitForm}/>
                   : <ListItemDetail
                      listItem={formValue!}/>
                }
              </div>
            </ScrollArea>
          </div>
        </div>
      </div>
      <Toaster />

      <style jsx global>{`
        body {
          overflow-y: hidden;
        }
      `}</style>
    </main>
  );
}
