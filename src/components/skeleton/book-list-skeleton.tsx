import BookItemSkeleton from './book-item-skeleton'

export default function BookListSkeleton({ count }: { count: number }) {
	if (count === 0) return null

	return (
		<div className='flex flex-col gap-[10px]'>
			{Array.from({ length: count }).map((_, index) => (
				<BookItemSkeleton key={index} />
			))}
		</div>
	)
}
