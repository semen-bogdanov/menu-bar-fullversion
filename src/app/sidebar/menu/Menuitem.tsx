import { isCollapsedAtom } from '@/app/store'
import { useAtomValue } from 'jotai'
import Link from 'next/link'
import { ImenuItem } from './menu.data'

export function MenuItem({ item }: { item: ImenuItem }) {
	const isCollapsed = useAtomValue(isCollapsedAtom)

	return (
		<>
			<div className='h-[44px] w-[100%] flex items-center'>
				<Link href={item.link} rel='noreferrer noreferrer' target='_blank'>
					<item.icon className='h-[20px] w-[20px] text-primary' />
				</Link>
				<Link href={item.link} rel='noreferrer noreferrer' target='_blank'>
					{!isCollapsed && (
						<span className='text-primary ml-3 font-medium'>{item.name}</span>
					)}
				</Link>
			</div>
		</>
	)
}
