'use client'

import { useState } from "react";
import ButtonAccount from "@/components/ButtonAccount";
import LanguageSelector from "@/components/LanguageSelector";
import SearchForm from "@/components/SearchForm";
export const dynamic = "force-dynamic";

export default function Dashboard() {
  const [languageCode, setLanguageCode] = useState(null);

  return (
    <main className="min-h-screen p-8 pb-24">
      <section className="max-w-5xl mx-auto space-y-8">
        <ButtonAccount />
        <h2 className="text-3xl md:text-4xl font-extrabold">Search for YouTube study content</h2>
        <h3>What language are you studying?</h3>
        <LanguageSelector setLanguageCode={setLanguageCode} />
        <SearchForm languageCode={languageCode} />
      </section>
    </main>
  );
}
