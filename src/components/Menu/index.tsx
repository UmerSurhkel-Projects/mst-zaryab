import { FC } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';

const Menu: FC = () => {
  const t = useTranslations();

  return (
    <ul >
      <li>
        <Link href="/">{t('MENU.HOME')}</Link>
      </li>
      <li>
        <Link href="/about">{t('MENU.ABOUT')}</Link>
      </li>
    </ul>
  );
};

export default Menu;
