'use client'
import cn from 'clsx'
import { m } from 'framer-motion'
import { useAtom } from 'jotai'
import { PanelLeftClose, PanelLeftOpen } from 'lucide-react'
import { useRef, useState } from 'react'
import { isCollapsedAtom } from '../store'
import { AvataAccaunt } from './menu/AvataAccaunt'
import { Menu } from './menu/Menu'
import styles from './Sidebar.module.scss'

export function Sidebar() {
	const [isCollapsed, setIsCollapsed] = useAtom(isCollapsedAtom)
	const [isCanHover, setIsCanHover] = useState(true)
	const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

	const toggleSidebar = () => {
		if (isCollapsed) {
			setIsCanHover(false)

			if (hoverTimeoutRef.current) {
				clearTimeout(hoverTimeoutRef.current)
			}

			hoverTimeoutRef.current = setTimeout(() => {
				setIsCanHover(true)
			}, 450)
		}
		setIsCollapsed(!isCollapsed)
	}

	return (
		<m.aside
			className={cn(styles.sidebar, {
				[styles.collapsed]: isCollapsed,
				[styles.canHover]: isCanHover,
			})}
			animate={{ width: isCollapsed ? 50 : 224 }}
			transition={{ type: 'spring', stiffness: 300, damping: 23 }}
		>
			<div className='rounded-2xl border-[3px] border-white bg-bg'>
				<button className={styles.toggle} onClick={toggleSidebar}>
					{isCollapsed ? <PanelLeftOpen /> : <PanelLeftClose />}
				</button>
				<Menu />
			</div>
			<div
				className={cn(
					'bg-white  h-44px flex items-center pl-4 pt-4 pb-4 pr-4 rounded-2xl',
					{
						'ml-[-11px] w-[100%] flex items-center': isCollapsed, // true
						'w-[100%] flex items-center': !isCollapsed, // false
					}
				)}
			>
				<AvataAccaunt
					name1='Mikle Bluhengrauds'
					email='bluhengrauds@yandex.com'
					link1='/avatar'
				/>
			</div>
		</m.aside>
	)
}
