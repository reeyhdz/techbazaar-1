"use client";

import { useAuth } from './hooks/useAuth'
import Header from './components/header';
import Hero from './components/hero';

export default function Home() {
const { user, accessToken, logout  } = useAuth();

console.log(user, accessToken);

  return (
      <><Header user={user} logout={logout} /><Hero /></>
  )
}
