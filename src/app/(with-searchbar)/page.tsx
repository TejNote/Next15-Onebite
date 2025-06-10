import AllBooks from '@/components/all-books'
import RecommandBooks from '@/components/recommand-books'
import BookListSkeleton from '@/components/skeleton/book-list-skeleton'
import { Suspense } from 'react'

export const dynamic = 'force-dynamic'

export default async function Home() {
	return (
		<div className='flex flex-col gap-[20px]'>
			<section>
				<h3 className='mb-0 mt-10 text-xl font-bold'>지금 추천하는 도서</h3>
				<Suspense fallback={<BookListSkeleton count={3} />}>
					<RecommandBooks />
				</Suspense>
			</section>
			<section>
				<h3 className='mb-0 mt-10 text-xl font-bold'>등록된 모든 도서</h3>
				<Suspense fallback={<BookListSkeleton count={5} />}>
					<AllBooks />
				</Suspense>
			</section>
		</div>
	)
}
