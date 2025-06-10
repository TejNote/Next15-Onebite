import { BookData } from '@/types'
import BookItem from './book-item'
import { delay } from '@/util/delay'

export default async function AllBooks() {
	await delay(3000)
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`,
		{ cache: 'force-cache' },
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
