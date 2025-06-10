import { BookData } from '@/types'
import BookItem from './book-item'
import { delay } from '@/util/delay'

export default async function RecommandBooks() {
	await delay(1500)
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/random`,
		{ next: { revalidate: 10 } },
	)
	if (!response.ok) {
		return (
			<div>
				오류가 발생했습니다.
				<br />
				{response.statusText}
			</div>
		)
	}
	const allBooks: BookData[] = await response.json()

	return (
		<div>
			{allBooks.map((book: BookData) => (
				<BookItem key={book.id} {...book} />
			))}
		</div>
	)
}
