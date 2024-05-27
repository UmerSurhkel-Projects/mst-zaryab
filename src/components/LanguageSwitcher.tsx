'use client';
import React, { FC } from 'react';
import { useLocale } from 'next-intl';
import ISO6391 from 'iso-639-1';
import { locales, usePathname, useRouter } from '@/navigation';
import Select, { SingleValue } from 'react-select';

const LanguageSwitcher: FC = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathName = usePathname();

  const handleChange = (selectedOption: SingleValue<{ value: string; label: string }>) => {
    if (selectedOption) {
      router.push(pathName, { locale: selectedOption.value });
    }
  };

  const options = locales.map((lang) => ({
    value: lang,
    label: ISO6391.getNativeName(lang),
  }));

  return (
    <div className="relative inline-block text-left">
      <Select
        value={options.find(option => option.value === locale)}
        onChange={handleChange}
        options={options}
        classNamePrefix="language-select"
        className="w-full text-base leading-6 sm:text-sm"
      />
    </div>
  );
};

export default LanguageSwitcher;


// 'use client';
// import React, { FC } from 'react';
// import { useLocale } from 'next-intl';
// import ISO6391 from 'iso-639-1';
// import { locales, usePathname, useRouter } from '@/navigation';

// const LanguageSwitcher: FC = () => {
//   const locale = useLocale();
//   const router = useRouter();
//   const pathName = usePathname();

//   const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     router.push(pathName, { locale: e.target.value });
//   };

//   return (
//     <select
//       value={locale}
//       onChange={handleChange}
//     >
//       {locales.map((lang) => (
//         <option
//           key={lang}
//           value={lang}
//         >
//           {ISO6391.getNativeName(lang)}
//         </option>
//       ))}
//     </select>
//   );
// };

// export default LanguageSwitcher;
