export default function BookItemSkeleton() {
	return (
		<div className='flex flex-row gap-[15px] border-b border-b-gray-200 px-[20px] py-[10px]'>
			<div className='h-[100px] w-[80px] rounded-md bg-gray-200'></div>
			<div className='flex flex-1 flex-col gap-[5px]'>
				<div className='h-[20px] w-full rounded-md bg-gray-200'></div>
				<div className='h-[20px] w-full rounded-md bg-gray-200'></div>
				<br />
				<div className='h-[20px] w-full rounded-md bg-gray-200'></div>
			</div>
		</div>
	)
}
