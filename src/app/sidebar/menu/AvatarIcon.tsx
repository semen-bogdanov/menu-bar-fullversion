import AvatarImg from '@/../../public/Avatar/Avat_3.jpg'
import { isCollapsedAtom } from '@/app/store'
import { useAtomValue } from 'jotai'
import Image from 'next/image'
import Link from 'next/link'

export interface Avatar1 {
	name1: string
	link1: string
}

export function AvatarIcon({ name1, link1 }: Avatar1) {
	const isCollapsed = useAtomValue(isCollapsedAtom)

	return (
		<>
			<Link href={link1} rel='noreferrer noreferrer' target='_blank'>
				<div className='bg-slate-600 w-[40px] h-[40px] rounded-xl flex'>
					<Image
						className='rounded-xl'
						src={AvatarImg}
						width={40}
						height={40}
						alt='Аватар'
					/>
				</div>
			</Link>

			{!isCollapsed && (
				<span className='text-primary pl-3 text-[18px] font-bold'>
					{' '}
					{name1}
				</span>
			)}
		</>
	)
}
