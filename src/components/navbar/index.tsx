'use client';
import Link from 'next/link';
import styles from './style.module.scss';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Dialog, IconButton, Toolbar } from '@mui/material';
import Socials from '@/components/socials';

const LINKS = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Schedule',
    href: '/#schedule',
  },
  {
    name: 'Sponsors',
    href: '/#sponsors',
  },
  {
    name: 'Prizes',
    href: '/prizes',
  },
  {
    name: 'FAQs',
    href: '/faq',
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleMobileOpen = () => {
    setMobileOpen(true);
  };

  const handleMobileClose = () => {
    setMobileOpen(false);
  };

  return (
    <div className={styles.container}>
      {/* Left side shows up on both desktop and mobile */}
      <Link
        href="/"
        onClick={handleMobileClose}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <div className={styles.leftSection}>
          <img className={styles.logoImage} src="/diamondhacks-logo.svg" alt="DiamondHacks logo" />
        </div>
      </Link>

      {/* Right side, desktop only */}
      <div className={styles.rightSectionDesktop}>
        {LINKS.map((link, index) => (
          <Link key={index} href={link.href} className={styles.navItem}>
            {link.name}
          </Link>
        ))}

        <a className={styles.applyNowButton} href="https://acmurl.com/diamondhacks-preregister">
          Apply now
        </a>
      </div>

      {/* Hamburger button, mobile only */}
      <IconButton
        size="large"
        edge="start"
        color="primary"
        aria-label="open drawer"
        sx={{ mr: 2 }}
        onClick={handleMobileOpen}
        className={`${styles.hamburgerMenuButton} ${styles.buttonColorBlue}`}
      >
        <MenuIcon />
      </IconButton>

      {/* Mobile navbar */}
      <Dialog
        open={mobileOpen}
        onClose={handleMobileClose}
        PaperProps={{
          style: {
            backgroundColor: 'rgba(252, 252, 252, 0.7)',
            maxHeight: '80vh',
            width: '100%',
            margin: '0 calc(-1 * var(--side-padding-small))',
            alignSelf: 'flex-start',
            alignItems: 'center',
            padding: '1rem 0',
            backdropFilter: 'blur(4px)',
          },
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: 'calc(100% - 2 * var(--side-padding-small))',
          }}
        >
          <Link
            href="/"
            onClick={handleMobileClose}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div
              className={styles.leftSection}
              style={
                mobileOpen
                  ? {
                      backdropFilter: 'unset',
                      backgroundColor: 'transparent',
                    }
                  : undefined
              }
            >
              <img
                className={styles.logoImage}
                src="/diamondhacks-logo.svg"
                alt="DiamondHacks logo"
              />
            </div>
          </Link>
          <IconButton
            edge="start"
            className={styles.buttonColorBlue}
            onClick={handleMobileClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>

        {LINKS.map((link, index) => (
          <Link href={link.href} className={styles.navItem} key={index} onClick={handleMobileClose}>
            {link.name}
          </Link>
        ))}

        <div style={{ margin: '2rem 0' }}>
          <Socials />
        </div>
        <a className={styles.applyNowButton} href="https://acmurl.com/diamondhacks-preregister">
          Apply now
        </a>
      </Dialog>
    </div>
  );
}
