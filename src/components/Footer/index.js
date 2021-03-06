import clsx from 'clsx';
import Link from 'next/link';
import { CagLogoIcon, FacebookIcon, InstagramIcon, YouTubeIcon } from '../icons';

import style from './style.module.scss';

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footerInner}>
        <CagLogoIcon alt="Cornerstone Logo" />
        <br />
        <div className={style.footerSocialIcons}>
          <Link href="https://www.facebook.com/cag.bowie/">
            <a target="_blank" rel="noopener">
              <FacebookIcon alt="Facebook Link" />
            </a>
          </Link>
          <Link href="https://www.instagram.com/cag.bowie/">
            <a target="_blank" rel="noopener">
              <InstagramIcon alt="Instagram Link" />
            </a>
          </Link>
          <Link href="https://www.youtube.com/channel/UCx-bgFNkwgq1c_42gy-BNrw">
            <a target="_blank" rel="noopener">
              <YouTubeIcon alt="YouTube Link" />
            </a>
          </Link>
        </div>
        <div className={style.footerInformation}>
          <div className={style.footerInformationPhone}>301-262-6266</div>
          <div className={style.footerInformationAddress}>
            16010 Annapolis Rd.
            <br />
            Bowie, MD 20715
          </div>
        </div>

        <div className={style.footerLinkContainer}>
          <div className={style.footerLinkSection}>
            <h1>Services</h1>
            <ul>
              <li>
                <Link href="/services/">Service Times & Locations</Link>
              </li>
              <li>
                <Link href="/services/classes/">classes</Link>
              </li>
            </ul>
          </div>

          <div className={style.footerLinkSection}>
            <h1>Watch</h1>
            <ul>
              <li>
                <Link href="https://www.youtube.com/playlist?list=PL-l7Wgw0EmCHjBzGbH_f-BxyqWIm4DCjV">
                  <a target="_blank" rel="noopener">
                    Sermons
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://www.youtube.com/channel/UCx-bgFNkwgq1c_42gy-BNrw">
                  <a target="_blank" rel="noopener">
                    YouTube
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div className={style.footerLinkSection}>
            <h1>About</h1>
            <ul>
              <li>
                <Link href="/about/beliefs/">What We Believe</Link>
              </li>
              <li>
                <Link href="/about/pastors/">Meet Our Staff</Link>
              </li>
              <li>
                <Link href="/about/churches/">Partner Churches</Link>
              </li>
            </ul>
          </div>

          <div className={clsx(style.footerLinkSection, style.ministriesSection)}>
            <h1>Ministries</h1>
            <ul>
              <li>
                <Link href="/ministries/alive/">Alive Kids</Link>
              </li>
              <li>
                <Link href="/ministries/lifegroups/">Agora</Link>
              </li>
              <li>
                <Link href="/ministries/cafe/">Caf&eacute;</Link>
              </li>
              <li>
                <Link href="/ministries/cleansingstream/">Cleansing Stream</Link>
              </li>
              <li>
                <Link href="/ministries/doulos/">Doulos</Link>
              </li>
              <li>
                <Link href="/ministries/theLINK/">theLINK</Link>
              </li>
              <li>
                <Link href="/ministries/lifegroups/">Life Groups</Link>
              </li>
              <li>
                <Link href="/ministries/livingfree/">Living Free</Link>
              </li>
              <li>
                <Link href="/ministries/men/">Men&apos;s Ministry</Link>
              </li>
              <li>
                <Link href="/ministries/sports/">Sports Fellowship</Link>
              </li>
              <li>
                <Link href="/ministries/women/">Women&apos;s Ministry</Link>
              </li>
            </ul>
          </div>

          <div className={style.footerLinkSection}>
            <h1>Missions</h1>
            <ul>
              <li>
                <Link href="/missions/missionsprojects/">Our Projects</Link>
              </li>
              <li>
                <Link href="/missions/missionstrips/">Our Missions Trips</Link>
              </li>
              <li>
                <Link href="/missions/visionformissions/">Our Vision For Missions</Link>
              </li>
            </ul>
          </div>

          <div className={style.footerLinkSection}>
            <h1>Prayer</h1>
            <ul>
              <li>
                <Link href="/prayer/">Saturday Night Prayer</Link>
              </li>
            </ul>
          </div>

          <div className={style.footerLinkSection}>
            <h1>Give</h1>
            <ul>
              <li>
                <Link href="https://easytithe.com/caggiving">
                  <a target="_blank" rel="noopener">
                    Online
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/give/">Text</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
