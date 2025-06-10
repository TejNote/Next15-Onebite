'use client'

import { BookData } from '@/types'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

export default function Footer() {
	const [allBooks, setAllBooks] = useState<BookData[]>([])
	const searchParams = useSearchParams()
	const q = searchParams.get('q')

	useEffect(() => {
		const fetchBooks = async () => {
			const response = await fetch(
				`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/search?q=${q}`,
				{ cache: 'force-cache' },
			)
			const data = await response.json()
			setAllBooks(data)
		}

		fetchBooks()
	}, [q])

	return (
		<footer className='py-[50px] text-gray-600'>
			<div>제작 @TejNote </div>
			{allBooks?.length > 0 ? (
				<div>총 {allBooks?.length ?? ''}권이 등록되어 있습니다.</div>
			) : (
				''
			)}
		</footer>
	)
}
