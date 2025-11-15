'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BRAND } from '@/lib/constants/brand';

export default function Navigation() {
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'ko';

  const navItems = [
    { href: `/${locale}`, label: 'Home' },
    { href: `/${locale}/editions`, label: 'Editions' },
    { href: `/${locale}/community`, label: 'Community' },
    { href: `/${locale}/about`, label: 'About' },
    { href: `/${locale}/contact`, label: 'Contact' },
  ];

  const languages = [
    { code: 'ko', label: '한국어' },
    { code: 'ja', label: '日本語' },
    { code: 'en-US', label: 'English' },
    { code: 'fr', label: 'Français' },
  ];

  return (
    <nav className="bg-white/98 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex flex-col items-center group">
            <div className="text-4xl font-light tracking-[0.2em] text-[var(--french-navy)] transition-all group-hover:text-[var(--french-gold)]" style={{fontFamily: 'Cormorant Garamond, serif'}}>
              Belle Rêve
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm tracking-wider font-light transition-all ${
                    isActive
                      ? 'text-[var(--french-gold)] border-b border-[var(--french-gold)]'
                      : 'text-[var(--french-navy)] hover:text-[var(--french-gold)]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Language Selector & CTA */}
          <div className="flex items-center gap-4">
            {/* Language Dropdown */}
            <select
              value={locale}
              onChange={(e) => {
                const newLocale = e.target.value;
                const pathWithoutLocale = pathname.replace(`/${locale}`, '');
                window.location.href = `/${newLocale}${pathWithoutLocale}`;
              }}
              className="px-4 py-2 text-sm border border-[var(--french-gold)] text-[var(--french-navy)] focus:outline-none focus:border-[var(--french-navy)] bg-transparent font-light"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.label}
                </option>
              ))}
            </select>

            {/* CTA Button */}
            <Link
              href={`/${locale}/community`}
              className="hidden md:block px-8 py-2.5 bg-[var(--french-navy)] text-white font-light text-sm hover:bg-opacity-90 transition-all tracking-wide"
            >
              Rejoindre
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
