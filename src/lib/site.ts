export interface NavigationItem {
  href: string;
  label: string;
  isCta?: boolean;
}

export interface ActiveNavigationItem extends NavigationItem {
  isActive: boolean;
}

export const SITE_NAME = 'English Grammar Atlas';
export const BRAND_SUBTITLE = 'Structured lessons, focused quizzes, clear progress';

export const PRIMARY_NAVIGATION: NavigationItem[] = [
  { href: '/', label: 'Home' },
  { href: '/curriculum', label: 'Curriculum' },
  { href: '/roadmap', label: 'Roadmap' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/quiz', label: 'Quiz', isCta: true },
];

export const FOOTER_EXPLORE_LINKS: NavigationItem[] = [
  { href: '/', label: 'Home' },
  { href: '/curriculum', label: 'Curriculum' },
  { href: '/roadmap', label: 'Roadmap' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/quiz', label: 'Quiz Center' },
];

export const FOOTER_START_LINKS: NavigationItem[] = [
  { href: '/lessons/parts-of-speech', label: 'First Lesson' },
  { href: '/modules/foundations', label: 'Foundations Module' },
  { href: '/dashboard', label: 'Study Dashboard' },
];

export function buildPrimaryNavigation(currentPath: string): ActiveNavigationItem[] {
  return PRIMARY_NAVIGATION.map((item) => ({
    ...item,
    isActive:
      item.href === '/'
        ? currentPath === '/'
        : currentPath === item.href || currentPath.startsWith(`${item.href}/`),
  }));
}
