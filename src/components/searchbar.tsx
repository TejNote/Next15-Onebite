"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function Searchbar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState("");

  const q = searchParams.get("q");

  useEffect(() => {
    setSearch(q || "");
  }, [q]);

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSubmit = () => {
    if (!search || q === search) return;
    router.push(`/search?q=${search}`);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <div className="mb-[20px] flex gap-[10px]">
      <input
        value={search}
        onChange={onChangeSearch}
        onKeyDown={onKeyDown}
        className="w-[100%] rounded-[5px] border border-gray-300 p-[15px]"
      />
      <button
        onClick={onSubmit}
        className="w-[80px] cursor-pointer rounded-[5px] border bg-blue-500 text-[14px] text-white hover:bg-blue-600"
      >
        검색
      </button>
    </div>
  );
}
