'use client';

import styles from "./page.module.css";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('login');
  }, [])

  return (
    <main className={styles.main}>
      <div className={styles.center + " w-full"}>
      </div>
    </main>
  );
}
