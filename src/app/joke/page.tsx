'use client';

import styles from "./../page.module.css";
import { useState } from "react";
import { IJokeItem } from "@/types/jokeItem";
import ListItemDetailAdmin from "@/components/custom/listItemDetailAdmin";
import { postJoke } from "@/apis/jokesApi";

export default function Joke() {
  const formDefaultValue = {title: '', author: '', content: '', category: ''};
  const [formValue, setFormValue] = useState<IJokeItem>(formDefaultValue);
  
  const jokeTypes = [
    {id: 1, name: 'type 1', value: 'type 1'},
    {id: 2, name: 'type 2', value: 'type 2'},
    {id: 3, name: 'type 3', value: 'type 3'}
  ];

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
    await postJoke(formValue);
    setFormValue(formDefaultValue);
  }
  
  return (
    <main className={styles.main}>
      <div className="flex flex-col items-center justify-center p-[15px] rounded-xl bg-slate-100 min-w-full h-full">
        
        <div className="w-[600px]">
          <ListItemDetailAdmin
            title="Submit a Joke"
            description="We will publish your joke free."
            listItem={formValue!}
            listItemTypes={jokeTypes}
            onChange={onChangeFields}
            onSubmit={onSubmitForm}
          />
        </div>
      </div>
    </main>
  );
}
