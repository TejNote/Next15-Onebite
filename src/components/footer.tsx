import { BookData } from "@/types";

export default async function Footer() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`,
    { cache: "force-cache" }
  );
  const allBooks: BookData[] = await response.json();

  return (
    <footer className="py-[50px] text-gray-600">
      <div>제작 @TejNote </div>
      {allBooks?.length > 0 ? (
        <div>총 {allBooks?.length ?? ""}권이 등록되어 있습니다.</div>
      ) : (
        ""
      )}
    </footer>
  );
}
