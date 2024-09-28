import Link from 'next/link';
import React from 'react'

export const AuthLinks = () => {

  //temporary
  const status = "authenticated";
  
  return (
    <>
    {status === "notAuthenticated" ? (
      <Link href="/login">admin</Link>
    ) : (
      <>
        <Link href="/dashboard">Dashboard</Link>
        <span className={styles.link}>Logout</span>
      </>
    )}
    </>
  )
}
