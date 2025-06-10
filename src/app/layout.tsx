import Footer from '@/components/footer'
import './globals.css'
import Link from 'next/link'

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ko'>
			<body>
				<div className='mx-auto min-h-screen max-w-[600px] bg-white px-[16px] shadow-md'>
					<header className='h-[60px] text-[18px] font-bold leading-[60px]'>
						<Link href={'/'} className='text-black no-underline'>
							📚 ONEBITE BOOKS
						</Link>
					</header>
					<main className='pt-[10px]'>{children}</main>
					<Footer />
				</div>
			</body>
		</html>
	)
}
