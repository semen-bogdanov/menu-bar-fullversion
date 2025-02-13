// import styles from '../Sidebar.module.scss'
import { isCollapsedAtom } from '@/app/store'
import cn from 'clsx'
import { useAtomValue } from 'jotai'
import { AvatarIcon } from './AvatarIcon'
import { ACCOUNT, HELP, MENU } from './menu.data'
import { MenuItem } from './Menuitem'
import { Search1 } from './Search'

export function Menu() {
	const isCollapsed = useAtomValue(isCollapsedAtom)

	return (
		<nav>
			<div
				className={cn('w-[100%] flex items-center', {
					'ml-0.5 w-[100%] flex items-center mt-11': isCollapsed, // true
					'w-[100%] flex items-center ml-4 mt-4 mb-4 mr-4': !isCollapsed, // false
				})}
			>
				<AvatarIcon name1='Аватар' link1='/avatar' />
			</div>
			<div
				className={cn('', {
					'ml-3 mb-4 mr-4': isCollapsed, // true
					'ml-4 mt-4 mb-4 mr-4': !isCollapsed, // false
				})}
			>
				<div className='w-[100%] flex items-center'>
					<Search1 name1='Search' link1='/search' />
				</div>
				<div className='mb-4'>
					{!isCollapsed && <h3 className='text-textHeader'>Menu</h3>}

					{MENU.map(item => (
						<MenuItem item={item} key={item.link} />
					))}
				</div>
				{isCollapsed && (
					<div className='w-[100%]  border-b border-primary border-b-1 opacity-50 mt-4 mb-4 ml-[2px]'></div>
				)}

				<div className='mb-4'>
					{!isCollapsed && <h3 className='text-textHeader'>Account</h3>}
					{ACCOUNT.map(item => (
						<MenuItem item={item} key={item.link} />
					))}
				</div>
				{isCollapsed && (
					<div className='w-[100%]  border-b border-primary border-b-1 opacity-50 mt-4 mb-4 ml-[2px]'></div>
				)}
				<div className='mb-4'>
					{HELP.map(item => (
						<MenuItem item={item} key={item.link} />
					))}
				</div>
			</div>
		</nav>
	)
}
