import { BookData } from '@/types'
import Image from 'next/image'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
	return [{ id: '1' }, { id: '2' }, { id: '3' }]
}

export default async function Page({
	params,
}: {
	params: Promise<{ id: string | string[] }>
}) {
	const { id } = await params

	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/${id}`,
	)
	if (!response.ok) {
		if (response.status === 404) {
			notFound()
		}
		return (
			<div>
				오류가 발생했습니다.
				<br />
				{response.statusText}
			</div>
		)
	}

	const book: BookData = await response.json()

	return (
		<div className='flex flex-col gap-[10px]'>
			<div
				className='relative flex justify-center bg-cover bg-center bg-no-repeat p-[20px] before:absolute before:inset-0 before:bg-black before:opacity-70'
				style={{ backgroundImage: `url('${book.coverImgUrl}')` }}
			>
				<Image
					src={book.coverImgUrl}
					alt={book.title}
					className='z-10 h-full max-h-[350px]'
					width={300}
					height={350}
				/>
			</div>
			<div className='text-3xl font-bold'>{book.title}</div>
			<div className='text-gray-500'>{book.subTitle}</div>
			<div className='text-gray-500'>
				{book.author} | {book.publisher}
			</div>
			<div className='whitespace-pre-line rounded-[5px] bg-gray-100 p-[15px] leading-5'>
				{book.description}
			</div>
		</div>
	)
}
