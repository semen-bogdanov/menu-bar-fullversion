import AvatarImg from '@/../../public/Avatar/Avatar.jpg'
import { isCollapsedAtom } from '@/app/store'
import { useAtomValue } from 'jotai'
import Image from 'next/image'
import Link from 'next/link'

export interface Avatar1 {
	name1: string
	email: string
	link1: string
}

export function AvataAccaunt({ name1, email, link1 }: Avatar1) {
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
			<div className='text-primary pl-3 text-[12px] font-bold '>
				<p className='leading-[1.5]'>
					{' '}
					{!isCollapsed && (
						<>
							<span>{name1}</span>
							<span className='text-[#6f6f6f] font-normal '> {email}</span>
						</>
					)}
				</p>
			</div>
		</>
	)
}
