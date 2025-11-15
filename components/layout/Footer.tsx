import Link from 'next/link';
import { BRAND } from '@/lib/constants/brand';

export default function Footer({ locale = 'ko' }: { locale?: string }) {
  const footerLinks = {
    product: [
      { label: 'All Editions', href: `/${locale}/editions` },
      { label: 'Japan Edition', href: `/${locale}/editions/japan-all-in-one-essence` },
      { label: 'Coming Soon', href: `/${locale}/editions` },
    ],
    community: [
      { label: 'Co-creation Hub', href: `/${locale}/community` },
      { label: 'A/B Testing', href: `/${locale}/community` },
      { label: 'Surveys', href: `/${locale}/community` },
    ],
    company: [
      { label: 'About Us', href: `/${locale}/about` },
      { label: 'Our Story', href: `/${locale}/about` },
      { label: 'Team', href: `/${locale}/about` },
      { label: 'Contact', href: `/${locale}/contact` },
    ],
    legal: [
      { label: 'Privacy Policy', href: `/${locale}/privacy` },
      { label: 'Terms of Service', href: `/${locale}/terms` },
      { label: 'Refund Policy', href: `/${locale}/refund` },
    ],
  };

  return (
    <footer className="bg-[var(--french-navy)] text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href={`/${locale}`} className="inline-block mb-8">
              <div className="text-4xl font-light tracking-[0.2em] text-white mb-2" style={{fontFamily: 'Cormorant Garamond, serif'}}>
                Belle Rêve
              </div>
              <div className="text-[10px] tracking-[0.3em] text-[var(--french-gold)] uppercase">
                Co-creation K-Beauty
              </div>
            </Link>
            <p className="text-gray-400 mb-8 max-w-sm leading-relaxed font-light">
              문화적 정체성과 고객 참여를 통해 탄생하는<br/>
              프리미엄 로컬라이징 K-뷰티 브랜드
            </p>
            
            {/* Social Media */}
            <div className="flex gap-3">
              <a href={BRAND.social.instagram} target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 border border-[var(--french-gold)] flex items-center justify-center hover:bg-[var(--french-gold)] hover:text-[var(--french-navy)] transition-all">
                <span className="text-sm">IG</span>
              </a>
              <a href={BRAND.social.facebook} target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 border border-[var(--french-gold)] flex items-center justify-center hover:bg-[var(--french-gold)] hover:text-[var(--french-navy)] transition-all">
                <span className="text-sm">FB</span>
              </a>
              <a href={BRAND.social.twitter} target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 border border-[var(--french-gold)] flex items-center justify-center hover:bg-[var(--french-gold)] hover:text-[var(--french-navy)] transition-all">
                <span className="text-sm">X</span>
              </a>
              <a href={BRAND.social.youtube} target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 border border-[var(--french-gold)] flex items-center justify-center hover:bg-[var(--french-gold)] hover:text-[var(--french-navy)] transition-all">
                <span className="text-sm">YT</span>
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-light text-lg mb-6 tracking-wide" style={{fontFamily: 'Cormorant Garamond, serif'}}>Produits</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-[var(--french-gold)] transition-colors text-sm font-light">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-white font-light text-lg mb-6 tracking-wide" style={{fontFamily: 'Cormorant Garamond, serif'}}>Communauté</h3>
            <ul className="space-y-3">
              {footerLinks.community.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-[var(--french-gold)] transition-colors text-sm font-light">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-light text-lg mb-6 tracking-wide" style={{fontFamily: 'Cormorant Garamond, serif'}}>Société</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-[var(--french-gold)] transition-colors text-sm font-light">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 font-light">
            <div>
              © {new Date().getFullYear()} {BRAND.company.legalName}. Tous droits réservés.
            </div>
            <div className="flex gap-8">
              {footerLinks.legal.map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-[var(--french-gold)] transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-6 text-xs text-gray-600 text-center md:text-left font-light leading-relaxed">
            대표이사: {BRAND.company.ceo} | 사업자등록번호: {BRAND.company.businessNumber} | 
            통신판매업신고: {BRAND.company.onlineBusinessNumber}
            <br />
            주소: {BRAND.contact.address} | 이메일: {BRAND.contact.email} | 전화: {BRAND.contact.phone}
          </div>
        </div>
      </div>
    </footer>
  );
}
