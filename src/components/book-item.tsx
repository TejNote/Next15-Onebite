import type { BookData } from "@/types";
import Link from "next/link";
import Image from "next/image";

export default function BookItem({
  id,
  title,
  subTitle,
  author,
  publisher,
  coverImgUrl,
}: BookData) {
  return (
    <Link
      href={`/book/${id}`}
      className="flex flex-row gap-[15px] border-b border-b-gray-200 px-[20px] py-[10px]"
    >
      <Image
        src={coverImgUrl}
        alt={title}
        width={80}
        height={120}
        className="w-[80px]"
      />
      <div>
        <div className="font-bold">{title}</div>
        <div className="break-keep">{subTitle}</div>
        <br />
        <div className="text-gray-500">
          {author} | {publisher}
        </div>
      </div>
    </Link>
  );
}
