'use client';

import styles from "./../page.module.css";
import { useRouter } from "next/navigation";
import { Toaster } from "@/components/ui/toaster";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { login } from "@/apis/authApi";
import { useEffect, useState } from "react";
import { getSessionItem, setSessionItem } from "@/utils/sessionStoreHelper";

export default function Login() {
  const router = useRouter();
  const [formValue, setFormValue] = useState({email: '', password: ''});

  useEffect(() => {
    const token = getSessionItem('token');
    if (token) {
      router.push(`jokes?isAdmin=true`);
    }
  }, []);

  const onLogin = () => {
    login(formValue)
    .then((data) => {
      setSessionItem('token', data);
      router.push(`jokes?isAdmin=true`);
    })
    .catch(err => {
      console.log(err);
    });
  }

  const onChangeFields = (type: string, value: any) => {
    if (!value) return;
    switch(type) {
      case 'email':
        setFormValue({...formValue, email: value})
        break;
      case 'password':
        setFormValue({...formValue, password: value})
        break;
    }
  }

  return (
    <main className={styles.main}>

      <div className="flex flex-col items-center justify-center p-[15px] rounded-xl bg-slate-100 min-w-full h-full">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Login to system for administrator view.</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    placeholder=""
                    onChange={(e) => onChangeFields('email', e.target.value)}/>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    placeholder=""
                    onChange={(e) => onChangeFields('password', e.target.value)}/>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button
              onClick={onLogin}>Login</Button>
          </CardFooter>
        </Card>
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
