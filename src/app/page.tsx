"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleMinimal from '@/components/navigation/NavbarStyleMinimal';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import TokenBillboardHero from '@/components/sections/layouts/hero/TokenBillboardHero';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import ExpandingGridTokenomics from '@/components/sections/layouts/tokenomics/ExpandingGridTokenomics';
import FooterLogo from '@/components/footer/FooterLogo';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'futuristicAndOutOfBox', colorTemplate: 2, textAnimation: 'highlight' }}>
      <NavbarStyleMinimal
        logoSrc='/images/logo.svg'
        logoAlt='NebulaFlow Logo'
        buttonText='Get Started'
      />

      <div id='hero' data-section='hero' className='scroll-mt-24'>
        <TokenBillboardHero
          title='Welcome to NebulaFlow'
          subtitle='Unlock the power of token-based services'
          contractAddress='0x1234567890abcdef'
          copyButtonText='Copy Address'
          copiedText='Address Copied!'
        />
      </div>

      <div id='about' data-section='about' className='scroll-mt-24'>
        <CtaAbout
          title='About NebulaFlow'
          descriptions={['Innovative solutions for the modern user', 'Join us in transforming the digital landscape']}
        />
      </div>

      <div id='how-to-buy' data-section='how-to-buy' className='scroll-mt-24'>
        <HowToBuy3D
          title='How to Buy'
          steps={[
            { title: 'Step 1', description: 'Create an account', image: '/images/placeholder1.avif', position: 'left', isCenter: false },
            { title: 'Step 2', description: 'Verify your identity', image: '/images/placeholder2.avif', position: 'center', isCenter: true },
            { title: 'Step 3', description: 'Purchase tokens', image: '/images/placeholder3.avif', position: 'right', isCenter: false }
          ]}
        />
      </div>

      <div id='tokenomics' data-section='tokenomics' className='scroll-mt-24'>
        <ExpandingGridTokenomics
          title='Tokenomics Overview'
          description='Discover the key statistics that drive our token model'
          cardItems={[
            { id: 1, title: 'Supply', description: 'Total supply of tokens is 1,000,000' },
            { id: 2, title: 'Liquidity', description: '100% liquidity locked for 12 months' },
            { id: 3, title: 'Ownership', description: '0% team allocation during the launch' }
          ]}
        />
      </div>

      <div id='footer' data-section='footer' className='scroll-mt-24'>
        <FooterLogo
          logoSrc='/images/logo.svg'
          logoAlt='NebulaFlow Logo'
          logoText='NebulaFlow'
          className='footer-class'
          columns={[
            { title: 'Links', items: [{ label: 'Home', onClick: () => {} }, { label: 'About', onClick: () => {} }] },
            { title: 'Resources', items: [{ label: 'Blog', onClick: () => {} }, { label: 'FAQ', onClick: () => {} }] },
            { title: 'Community', items: [{ label: 'Join Us', onClick: () => {} }, { label: 'Contact', onClick: () => {} }] }
          ]}
          copyrightText='© 2023 NebulaFlow'
          onPrivacyClick={() => {}}
        />
      </div>
    </SiteThemeProvider>
  );
}