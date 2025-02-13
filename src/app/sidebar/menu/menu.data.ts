import {
	BadgeHelp,
	BellDot,
	CalendarCheck2,
	LayoutDashboard,
	ListChecks,
	LucideIcon,
	Mails,
	MessageCircleMore,
	ScrollText,
	ShoppingCart,
	User,
} from 'lucide-react'

export interface ImenuItem {
	icon: LucideIcon
	name: string
	link: string
}

export const MENU: ImenuItem[] = [
	// Menu
	{
		icon: LayoutDashboard,
		name: 'Dashboard',
		link: '/dashboard',
	},
	{
		icon: ShoppingCart,
		name: 'Product',
		link: '/product',
	},
	{
		icon: CalendarCheck2,
		name: 'Calendar',
		link: '/calendar',
	},
	{
		icon: ListChecks,
		name: 'Checks',
		link: '/checks',
	},
	{
		icon: ScrollText,
		name: 'Document',
		link: '/document',
	},
]

export const ACCOUNT: ImenuItem[] = [
	// Account
	{
		icon: User,
		name: 'User',
		link: '/user',
	},
	{
		icon: Mails,
		name: 'Messages',
		link: '/messages',
	},
	{
		icon: BellDot,
		name: 'Notification',
		link: '/notification',
	},
]

export const HELP: ImenuItem[] = [
	// ______________________
	{
		icon: MessageCircleMore,
		name: 'Chat',
		link: '/chat',
	},
	{
		icon: BadgeHelp,
		name: 'Help',
		link: '/help',
	},
]
