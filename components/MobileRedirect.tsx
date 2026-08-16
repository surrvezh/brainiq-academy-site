'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function MobileRedirect() {
  const router = useRouter();
  useEffect(() => {
    if (window.innerWidth < 768) {
      router.replace('/m');
    }
  }, [router]);
  return null;
}
