import React from 'react';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { PageType } from '@/types';

export async function generateMetadata({ params: { locale } }: PageType) {
  const t = await getTranslations({ locale, namespace: 'METADATA' });
  return { title: t('ABOUT_TITLE') };
}

const AboutPage = () => {
  const t = useTranslations();
    return (
      <div className='pt-180'>{t('TITLE_ABOUT')}</div>
    )
  }
  export default AboutPage;



