"use client";

import Header from "../components/header";
import { Products } from "../components/products";
import { useAuth } from "../hooks";
import { useSearchParams } from 'next/navigation'

export default function Home() {
const { user, accessToken, logout  } = useAuth();
const searchParams = useSearchParams()
const search = searchParams.get('s')
console.log(search);
console.log(user, accessToken);

  return (
      <>
        <Header user={user} logout={logout} />
        <Products search={search}/>
      </>
  )
}
