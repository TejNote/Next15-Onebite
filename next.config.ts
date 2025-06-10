import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	experimental: {
		optimizePackageImports: ['tailwind-merge', 'react-icons'],
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'shopping-phinf.pstatic.net',
				port: '',
				pathname: '/**',
			},
		],
	},
	logging: {
		fetches: {
			fullUrl: true,
		},
	},
	compiler: {
		removeConsole:
			process.env.RUN_TIME_ENV === 'production'
				? { exclude: ['info', 'error'] }
				: undefined,
	},
}

export default nextConfig
