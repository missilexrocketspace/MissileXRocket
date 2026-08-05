export type NavChild = { i18nKey: string; href: string };
export type NavItem = { i18nKey: string; href: string; children?: NavChild[] };

export const navItems: NavItem[] = [
  { i18nKey: 'home', href: '/' },
  {
    i18nKey: 'about',
    href: '/about',
    children: [
      { i18nKey: 'aboutMissionVision', href: '/about' },
      { i18nKey: 'aboutIsroLeadership', href: '/isro-leadership' },
      { i18nKey: 'aboutKalam', href: '/apj-abdul-kalam' }
    ]
  },
  { i18nKey: 'activities', href: '/activities' },
  { i18nKey: 'research', href: '/research' },
  { i18nKey: 'technology', href: '/technology' },
  { i18nKey: 'programs', href: '/programs' },
  { i18nKey: 'missiles', href: '/missiles' },
  { i18nKey: 'rockets', href: '/rockets' },
  { i18nKey: 'spaceSystems', href: '/space-systems' },
  { i18nKey: 'innovation', href: '/innovation' },
  { i18nKey: 'gallery', href: '/gallery' },
  { i18nKey: 'news', href: '/news' },
  { i18nKey: 'careers', href: '/careers' },
  { i18nKey: 'contact', href: '/contact' }
];
