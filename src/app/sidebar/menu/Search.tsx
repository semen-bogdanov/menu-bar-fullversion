import { isCollapsedAtom } from '@/app/store'
import { useAtomValue } from 'jotai'
import { Search } from 'lucide-react'
import Link from 'next/link'
import { Avatar1 } from './AvatarIcon'

export function Search1({ name1, link1 }: Avatar1) {
	const isCollapsed = useAtomValue(isCollapsedAtom)
	return (
		<>
			{!isCollapsed && (
				<input
					className='w-[100%] h-[40px] mt-4 mb-4 rounded-xl pl-4 text-primary'
					name={name1}
					type='text'
					placeholder='Поиск...'
				/>
			)}
			{isCollapsed && (
				<div className='h-[44px] w-[100%] flex items-center'>
					<Link href={link1} rel='noreferrer noreferrer' target='_blank'>
						<Search className='h-[20px] w-[20px] text-primary' />
					</Link>
				</div>
			)}
		</>
	)
}
