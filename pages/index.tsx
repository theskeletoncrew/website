import Image from "next/image";
import Link from "next/link";
import { Layout } from "../components/Layout";
import { useState } from "react";
import { faqs } from "../models/faqs";
import { Constants } from "../models/constants";
import * as gtag from "../lib/gtag";

export default function Home() {
  const title = "Skeleton Crew | Skull NFTs for Solana";

  const [openFAQId, setOpenFAQId] = useState<string>(null);

  return (
    <Layout title={title}>
      <main>
        <section id="top">
          <div id="intro">
            <div id="intro-right">
              <div id="skull-grid"></div>
            </div>
            <div id="intro-left">
              <div id="intro-left-container">
                <div id="mini-skull-container">
                  <div id="mini-skull">
                    <Link href="/" passHref={true}>
                      <a>
                        <Image
                          id="mini-skull-img"
                          src="/images/logos/1.png"
                          alt="Skeleton Crew Skull"
                          width="112"
                          height="112"
                          unoptimized
                        />
                      </a>
                    </Link>
                  </div>
                </div>
                <h1 id="welcome">
                  WELCOME
                  <br />
                  TO THE
                  <br />
                  SKELETON CREW
                </h1>
                <p id="date">Launched {Constants.dropDateAndTime}</p>
              </div>
            </div>
          </div>
          <div className="clear" />
          <div id="buy">
            <div id="skulls-banner-top" className="skulls-banner">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2039.1"
                height="231.6"
                viewBox="0 0 2039.1 231.6"
                preserveAspectRatio="xMidYMax meet"
              >
                <path
                  d="M-833.1,4.5c126.9,0,152.4-38.4,152.4-78v-4.2c0-45.3-30.6-66.3-117.6-68.7l-45-1.2c-34.5-.9-43.2-5.4-43.2-13.5v-.6c0-7.5,5.1-11.7,32.4-11.7,29.7,0,33.3,10.8,34.2,18h130.8v-1.5c0-38.4-27.9-70.2-147.6-70.2h-38.1c-108,0-141.6,25.8-141.6,67.8v2.7c0,35.1,19.2,67.5,111,70.8l47.1,1.5c38.4,1.5,41.4,8.4,41.4,15.9v.9c0,8.1-7.8,15.6-34.2,15.6-31.2,0-35.4-14.4-35.4-24H-1020v2.4c0,28.8,12.3,78,147.6,78ZM-540.3,0V-89.1L-448.5,0h148.8L-432.9-123l132.6-100.2H-438.9L-540.3-144v-79.2h-114V0Zm251.7-119.7C-288.6-75-272.1,3.9-123.3,3.9h15C40.5,3.9,57.6-75,57.6-119.7V-223.2H-57v91.8c0,24.9-11.4,51.3-58.2,51.3h-.6c-47.7,0-58.2-26.4-58.2-51.3v-91.8H-288.6ZM89.1-223.2V0H357.9V-79.5H203.1V-223.2Zm299.4,0V0H657.3V-79.5H502.5V-223.2ZM866.7,4.5c126.9,0,152.4-38.4,152.4-78v-4.2c0-45.3-30.6-66.3-117.6-68.7l-45-1.2c-34.5-.9-43.2-5.4-43.2-13.5v-.6c0-7.5,5.1-11.7,32.4-11.7,29.7,0,33.3,10.8,34.2,18h130.8v-1.5c0-38.4-27.9-70.2-147.6-70.2H825c-108,0-141.6,25.8-141.6,67.8v2.7c0,35.1,19.2,67.5,111,70.8l47.1,1.5c38.4,1.5,41.4,8.4,41.4,15.9v.9c0,8.1-7.8,15.6-34.2,15.6-31.2,0-35.4-14.4-35.4-24H679.8v2.4c0,28.8,12.3,78,147.6,78Z"
                  transform="translate(1020 227.1)"
                />
              </svg>
            </div>
          </div>
          <Link href="https://discord.gg/skeletoncrewrip" passHref={true}>
            <button id="buy-button">JOIN OUR DISCORD</button>
          </Link>
        </section>
        <section id="airdrop-calendar">
          <div id="airdrop-skull-1" className="question-skull">
            <Image
              src="/images/question-skull-green.png"
              alt="Question Mark Skull"
              width="300"
              height="344"
            />
          </div>
          <div id="airdrop-skull-2" className="question-skull">
            <Image
              src="/images/question-skull-yellow.png"
              alt="Question Mark Skull"
              width="300"
              height="344"
            />
          </div>
          <div id="airdrop-skull-3" className="question-skull">
            <Image
              src="/images/question-skull-yellow.png"
              alt="Question Mark Skull"
              width="300"
              height="344"
            />
          </div>
          <div id="airdrop-skull-4" className="question-skull">
            <Image
              src="/images/question-skull-yellow-right.png"
              alt="Question Mark Skull"
              width="300"
              height="344"
            />
          </div>
          <div id="airdrop-skull-5" className="question-skull">
            <Image
              src="/images/question-skull-green.png"
              alt="Question Mark Skull"
              width="300"
              height="344"
            />
          </div>
          <div id="airdrop-skull-6" className="question-skull">
            <Image
              src="/images/question-skull-medgreen.png"
              alt="Question Mark Skull"
              width="300"
              height="344"
            />
          </div>
          <div id="airdrop-skull-7" className="question-skull">
            <Image
              src="/images/question-skull-green.png"
              alt="Question Mark Skull"
              width="300"
              height="344"
            />
          </div>

          <h2>What are Skulls?</h2>
          <p>
            SKULLS are a collection of {Constants.totalMint} hand-drawn and
            algorithmically generated NFTs on the Solana blockchain. Every SKULL
            features original artwork and is randomly and uniquely assembled
            from over 400k total options.
            <br />
            <br />
            Each SKULL is both a collectible art piece and also your skeleton
            key to our Halloween event:{" "}
            <strong>
              an entire month of NFT airdrops limited exclusively to SKULL
              holders
            </strong>
            .
          </p>
          <h2>31 Days of Airdrops</h2>
          <p>
            Every single day in October, SKULL holders will have the chance to
            be airdropped exclusive and rare SKULLS (and other goodies). Every
            SKULL you hold in your wallet increases your chance of winning an
            item, but not all items will be equally rare. You can find out for
            yourself: will you get a trick, or a treat?
          </p>
          <div id="calendar">
            <ol>
              <li className="spacer"></li>
              <li className="spacer"></li>
              <li className="spacer"></li>
              <li className="spacer"></li>
              <li className="spacer"></li>
              <li>
                <Image
                  src="/images/calendar-1.png"
                  alt="Launch Day Eyeball"
                  width="75"
                  height="75"
                  unoptimized
                />
              </li>
              <li className="future" onClick={(e) => {}}>
                <span>2</span>
              </li>
              <br className="clear" />

              <li className="future" onClick={(e) => {}}>
                <span>3</span>
              </li>
              <li className="future" onClick={(e) => {}}>
                <span>4</span>
              </li>
              <li className="future" onClick={(e) => {}}>
                <span>5</span>
              </li>
              <li className="future" onClick={(e) => {}}>
                <span>6</span>
              </li>
              <li className="future" onClick={(e) => {}}>
                <span>7</span>
              </li>
              <li className="future" onClick={(e) => {}}>
                <span>8</span>
              </li>
              <li className="future" onClick={(e) => {}}>
                <span>9</span>
              </li>
              <br className="clear" />

              <li className="future" onClick={(e) => {}}>
                <span>10</span>
              </li>
              <li className="future" onClick={(e) => {}}>
                <span>11</span>
              </li>
              <li className="future" onClick={(e) => {}}>
                <span>12</span>
              </li>
              <li className="future" onClick={(e) => {}}>
                <span>13</span>
              </li>
              <li className="future" onClick={(e) => {}}>
                <span>14</span>
              </li>
              <li className="future" onClick={(e) => {}}>
                <span>15</span>
              </li>
              <li className="future" onClick={(e) => {}}>
                <span>16</span>
              </li>
              <br className="clear" />

              <li className="future" onClick={(e) => {}}>
                <span>17</span>
              </li>
              <li className="future" onClick={(e) => {}}>
                <span>18</span>
              </li>
              <li className="future" onClick={(e) => {}}>
                <span>19</span>
              </li>
              <li className="future" onClick={(e) => {}}>
                <span>20</span>
              </li>
              <li className="future" onClick={(e) => {}}>
                <span>21</span>
              </li>
              <li className="future" onClick={(e) => {}}>
                <span>22</span>
              </li>
              <li className="future" onClick={(e) => {}}>
                <span>23</span>
              </li>
              <br className="clear" />

              <li className="future" onClick={(e) => {}}>
                <span>24</span>
              </li>
              <li className="future" onClick={(e) => {}}>
                <span>25</span>
              </li>
              <li className="future" onClick={(e) => {}}>
                <span>26</span>
              </li>
              <li className="future" onClick={(e) => {}}>
                <span>27</span>
              </li>
              <li className="future" onClick={(e) => {}}>
                <span>28</span>
              </li>
              <li className="future" onClick={(e) => {}}>
                <span>29</span>
              </li>
              <li className="future" onClick={(e) => {}}>
                <span>30</span>
              </li>
              <br className="clear" />

              <li id="halloween" className="halloween" onClick={(e) => {}}>
                <span>31</span>
              </li>
              <br className="clear" />
            </ol>
            <div id="calendar-popup">
              <p className="title">EXAMPLE</p>
              <div id="calendar-popup-img">
                <Image
                  src="/images/question-skull-green.png"
                  alt="Skull"
                  width="100"
                  height="115"
                />
              </div>
              <p>
                <span id="calendar-popup-quantity">20</span>{" "}
                <span id="calendar-popup-item">SKULLS</span>
              </p>
              <p>
                RARITY: <span id="calendar-popup-rarity">★☆☆☆☆</span>
              </p>
              <div className="pointer1"></div>
              <div className="pointer2"></div>
            </div>

            <div id="halloween-popup">
              <p>
                Hold onto your bones for something extra special on the
                spookiest day of the year
              </p>
              <p className="halloween-rarity">
                <strong>RARITY: ∞</strong>
              </p>
              <div className="pointer1"></div>
              <div className="pointer2"></div>
            </div>
          </div>
        </section>
        <section id="roadmap">
          <h2>ROADMAP</h2>
          <p>
            Below is a roadmap outlining the milestones we have planned for the
            project, including the establishment of a DAO, growth, monetization,
            tooling and more.
          </p>
          <div id="roadmap-list">
            <ul>
              <li className="completed">
                <span className="roadmap-dot"></span>
                <span className="roadmap-emoji">🎉</span>
                <span className="roadmap-title">
                  Launch on October 1st, 5pm UTC
                </span>
              </li>
              <li className="completed">
                <span className="roadmap-dot"></span>
                <span className="roadmap-emoji">🛒</span>
                <span className="roadmap-title">
                  Get SKULLS listed on secondary marketplaces
                </span>
                <span className="roadmap-item-description">
                  We are officially listed on{" "}
                  <a
                    href="https://ftx.us/nfts/collection/Skeleton%20Crew/25/1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    FTX
                  </a>
                  ,{" "}
                  <a
                    href="https://solanart.io/collections/skeletoncrew"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Solanart
                  </a>
                  ,{" "}
                  <a
                    href="https://digitaleyes.market/collections/Skeleton%20Crew%20SKULLS"
                    target="_blank"
                    rel="noreferrer"
                  >
                    DigitalEyes
                  </a>{" "}
                  &{" "}
                  <a
                    href="https://magiceden.io/marketplace?collection_symbol=skeleton_crew_skulls"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Magic Eden
                  </a>
                  .
                </span>
              </li>
              <li className="completed">
                <span className="roadmap-dot"></span>
                <span className="roadmap-emoji">🤖</span>
                <span className="roadmap-title">
                  Provide rarity, analytics tools &amp; sales bots for SKULL
                  hodlers
                </span>
                <span className="roadmap-item-description">
                  Hodlers can make informed decisions via our published rarity
                  at{" "}
                  <a
                    href="https://howrare.is/skeletoncrew"
                    target="_blank"
                    rel="noreferrer"
                  >
                    HowRare.is
                  </a>
                  , through analytics on{" "}
                  <a
                    href="https://solanalysis.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Solanalysis
                  </a>
                  ,{" "}
                  <a
                    href="https://solanafloor.com/nft/skeleton-crew-skulls"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Solanafloor
                  </a>
                  , and our{" "}
                  <a
                    href="https://twitter.com/skullsalesbot"
                    target="_blank"
                    rel="noreferrer"
                  >
                    @skullsalesbot
                  </a>{" "}
                  which is connected to all of our secondary marketplaces
                </span>
              </li>
              <li className="completed">
                <span className="roadmap-dot"></span>
                <span className="roadmap-emoji">🛍️</span>
                <span className="roadmap-title">
                  Acquire a secondary marketplace for airdrops
                </span>
              </li>
              <li className="completed">
                <span className="roadmap-dot"></span>
                <span className="roadmap-emoji">🎁</span>
                <span className="roadmap-title">Deliver #31daysofairdrops</span>
                <span className="roadmap-item-description">
                  Every day in October SKULL holders will have a chance to win
                  free NFT Trick-or-Treat airdrops from independent artists, top
                  Solana projects, or ultra-rare SKULLS.
                </span>
              </li>
              <li className="completed">
                <span className="roadmap-dot"></span>
                <span className="roadmap-emoji">🍬</span>
                <span className="roadmap-title">
                  Ship{" "}
                  <a
                    href="https://treattoolbox.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Treat Toolbox
                  </a>
                  , our open source generative art utility
                </span>
                <span className="roadmap-item-description">
                  <a
                    href="https://treattoolbox.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Treat Toolbox
                  </a>{" "}
                  is a fully web-based tool for creating Solana NFT collections,
                  and it can take layered artwork all the way to production for
                  a Metaplex Candy Machine.
                </span>
              </li>
              <li>
                <span className="roadmap-dot"></span>
                <span className="roadmap-emoji">🍇</span>
                <span className="roadmap-title">
                  Integrate Grape into Discord for member verification
                </span>
              </li>
              <li>
                <span className="roadmap-dot"></span>
                <span className="roadmap-emoji">⚒️</span>
                <span className="roadmap-title">
                  Open source our airdrop tools
                </span>
                <span className="roadmap-item-description">
                  We’ve developed tools to automate our #31daysofairdrops and
                  plan on open sourcing this to the public. We want to give the
                  Solana ecosystem another little taste of what the Skeleton
                  Crew is capable of delivering, filling common technology gaps
                  while simultaneously building out premium offerings.
                </span>
              </li>
              <li>
                <span className="roadmap-dot"></span>
                <span className="roadmap-emoji">💻</span>
                <span className="roadmap-title">
                  Launch dedicated webpages for SKULLS and airdrops
                </span>
                <span className="roadmap-item-description">
                  Hosted pages for all SKULL owners to connect with their
                  SKULLS, airdrops, and more.
                </span>
              </li>
              <li>
                <span className="roadmap-dot"></span>
                <span className="roadmap-emoji">👕</span>
                <span className="roadmap-title">Make SKULL merch</span>
                <span className="roadmap-item-description">
                  Setting up a merch shop based on the iconic SKULL brand and
                  artwork: a portion of the merch royalties will go to a DAO
                  community wallet, and DAO members will receive a discount on
                  merchandise.
                </span>
              </li>
              <li>
                <span className="roadmap-dot"></span>
                <span className="roadmap-emoji">🎨</span>
                <span className="roadmap-title">
                  Assist artists with NFT collection launches
                </span>
                <span className="roadmap-item-description">
                  We can utilize our skills and premium software to help other
                  artists and community members launch their projects. This
                  artist incubator and launchpad will help fund the SkeleDAO
                  while simultaneously supporting independent artists and top
                  community members.
                </span>
              </li>
              <li>
                <span className="roadmap-dot"></span>
                <span className="roadmap-emoji">💀</span>
                <span className="roadmap-title">Launch SkeleDAO</span>
              </li>
              <li>
                <span className="roadmap-dot"></span>
                <span className="roadmap-emoji">🧰</span>
                <span className="roadmap-title">
                  Release Treat Toolbox PRO, a paid service
                </span>
                <span className="roadmap-item-description">
                  The paid hosted version of Treat Toolbox will include advanced
                  features for non-technical users, and will additionally help
                  fund the SkeleDAO. Benefits/discounts will be provided to
                  SKULL hodlers.
                </span>
              </li>
              <li>
                <span className="roadmap-dot"></span>
                <span className="roadmap-emoji">🏦</span>
                <span className="roadmap-title">Establish DAO Treasury</span>
              </li>
              <li>
                <span className="roadmap-dot"></span>
                <span className="roadmap-title roadmap-more">
                  More coming soon
                </span>
              </li>
            </ul>
            <div id="roadmap-timeline"></div>
            <div id="roadmap-timeline-completed"></div>
          </div>
        </section>
        <section>
          <div id="skulls-row-mobile">
            <Image
              src="/images/skulls-row-mobile.png"
              width="428"
              height="250"
              layout="responsive"
              alt="Row of Skulls"
              loading="eager"
            />
          </div>
          <div id="skulls-row">
            <Image
              src="/images/skulls-row.png"
              width="3840"
              height="1154"
              layout="responsive"
              alt="Row of Skulls"
              loading="eager"
            />
          </div>
        </section>
        <section id="what-you-get">
          <h2 className="druk">
            WHAT YOU GET WITH
            <br />
            THE SKELETON CREW
          </h2>
          <ul>
            <li>
              <h3>High quality, hand-drawn.</h3>
              <p>Original art makes every SKULL stand out.</p>
            </li>
            <li>
              <h3>Algorithmically generated.</h3>
              <p>{Constants.totalMint} SKULLS, each totally unique.</p>
            </li>
            <li>
              <h3>{Constants.attributes}+ dope attributes.</h3>
              <p>
                Each skull will be decked out in
                <br />
                attributes based on rarity.
              </p>
            </li>
            <li>
              <h3>Access to 31 days of airdrops.</h3>
              <p>
                An entire month of NFT airdrops limited
                <br />
                exclusively to SKULL holders.
              </p>
            </li>
          </ul>
          <div id="question-skull-1" className="question-skull">
            <Image
              src="/images/question-skull-green.png"
              alt="Question Mark Skull"
              width="300"
              height="344"
            />
          </div>
          <div id="question-skull-2" className="question-skull">
            <Image
              src="/images/question-skull-green.png"
              alt="Question Mark Skull"
              width="300"
              height="344"
            />
          </div>
          <div id="question-skull-3" className="question-skull">
            <Image
              src="/images/question-skull-yellow.png"
              alt="Question Mark Skull"
              width="300"
              height="344"
            />
          </div>
          <div id="question-skull-4" className="question-skull">
            <Image
              src="/images/question-skull-yellow-right.png"
              alt="Question Mark Skull"
              width="300"
              height="344"
            />
          </div>
        </section>
        <section id="built-on-solana">
          <div id="question-skull-5" className="question-skull">
            <Image
              src="/images/question-skull-medgreen.png"
              alt="Question Mark Skull"
              width="300"
              height="344"
            />
          </div>
          <div id="solana-eye" className="watching-eye">
            <Image
              src="/images/eye-solana.png"
              alt="Eyeball"
              width="167"
              height="163"
            />
          </div>
          <div id="solana-eye-mobile" className="watching-eye">
            <Image
              src="/images/eye-solana-mobile.png"
              alt="Eyeball"
              width="118"
              height="115"
            />
          </div>
          <h4>BUILT ON SOLANA</h4>
          <p>
            Your SKULL is built and stored on Solana blockchain with ownership.
            Buy, sell and trade SKULLS with collectors from around the world.
          </p>
        </section>
        <section id="faq">
          <div id="skulls-row-2-mobile">
            <Image
              src="/images/skulls-row-2-mobile.png"
              width="428"
              height="250"
              layout="responsive"
              alt="Row of Skulls"
              loading="eager"
            />
          </div>
          <div id="skulls-row-2">
            <Image
              src="/images/skulls-row-2.png"
              width="3840"
              height="1154"
              layout="responsive"
              alt="Row of Skulls"
              loading="eager"
            />
          </div>
          <h4>FAQ</h4>
          <ul>
            {faqs.map((faq, i) => {
              const faqID = "faq" + i;
              return (
                <li key={i}>
                  <button
                    id={faqID}
                    onClick={(e) =>
                      setOpenFAQId(
                        openFAQId == faqID ? null : e.currentTarget.id
                      )
                    }
                  >
                    <span className="question">{faq.question}</span>
                  </button>
                  <span
                    className={openFAQId == faqID ? "open" : "closed"}
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  />
                </li>
              );
            })}
          </ul>
        </section>
        <section id="social">
          <h4 className="druk">JOIN US</h4>
          <Link href={Constants.twitterURL} passHref={true}>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="65.013"
                viewBox="0 0 80 65.013"
              >
                <path
                  d="M80,9.945a32.769,32.769,0,0,1-9.427,2.583,16.44,16.44,0,0,0,7.217-9.08A32.879,32.879,0,0,1,67.367,7.431,16.424,16.424,0,0,0,39.4,22.4,46.594,46.594,0,0,1,5.57,5.251a16.435,16.435,0,0,0,5.077,21.913,16.343,16.343,0,0,1-7.43-2.053,16.425,16.425,0,0,0,13.163,16.3,16.451,16.451,0,0,1-7.413.28A16.425,16.425,0,0,0,24.3,53.088,33,33,0,0,1,0,59.888a46.464,46.464,0,0,0,25.16,7.373c30.473,0,47.69-25.737,46.65-48.82A33.416,33.416,0,0,0,80,9.945Z"
                  transform="translate(0 -2.248)"
                />
              </svg>
            </a>
          </Link>

          <Link href={Constants.discordInviteURL} passHref={true}>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="60.632"
                viewBox="0 0 80 60.632"
                id="social-discord"
              >
                <path
                  d="M-118.232-43.1a66.183,66.183,0,0,0-16.5-5.078,45.316,45.316,0,0,0-2.114,4.3,61.462,61.462,0,0,0-18.317,0,45.46,45.46,0,0,0-2.114-4.3A66.644,66.644,0,0,0-173.8-43.09c-10.445,15.454-13.277,30.524-11.861,45.38h0a66.518,66.518,0,0,0,20.242,10.162,48.848,48.848,0,0,0,4.335-6.991A43.038,43.038,0,0,1-167.91,2.2c.573-.415,1.133-.843,1.674-1.258a47.551,47.551,0,0,0,40.472,0c.547.447,1.107.875,1.674,1.258a43.2,43.2,0,0,1-6.84,3.266,48.425,48.425,0,0,0,4.335,6.984A66.227,66.227,0,0,0-106.34,2.3h0C-104.679-14.932-109.178-29.863-118.232-43.1ZM-159.289-6.846c-3.945,0-7.2-3.58-7.2-7.985s3.146-8.016,7.192-8.016,7.28,3.612,7.211,8.016S-155.269-6.846-159.289-6.846Zm26.579,0c-3.952,0-7.2-3.58-7.2-7.985s3.146-8.016,7.2-8.016,7.261,3.612,7.192,8.016S-128.69-6.846-132.711-6.846Z"
                  transform="translate(186 48.18)"
                />
              </svg>
            </a>
          </Link>
        </section>
        <section id="skulls-banner-bottom-section">
          <div id="skulls-banner-bottom" className="skulls-banner">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2039.1"
              height="231.6"
              viewBox="0 0 2039.1 231.6"
              preserveAspectRatio="xMidYMax meet"
            >
              <path
                d="M-833.1,4.5c126.9,0,152.4-38.4,152.4-78v-4.2c0-45.3-30.6-66.3-117.6-68.7l-45-1.2c-34.5-.9-43.2-5.4-43.2-13.5v-.6c0-7.5,5.1-11.7,32.4-11.7,29.7,0,33.3,10.8,34.2,18h130.8v-1.5c0-38.4-27.9-70.2-147.6-70.2h-38.1c-108,0-141.6,25.8-141.6,67.8v2.7c0,35.1,19.2,67.5,111,70.8l47.1,1.5c38.4,1.5,41.4,8.4,41.4,15.9v.9c0,8.1-7.8,15.6-34.2,15.6-31.2,0-35.4-14.4-35.4-24H-1020v2.4c0,28.8,12.3,78,147.6,78ZM-540.3,0V-89.1L-448.5,0h148.8L-432.9-123l132.6-100.2H-438.9L-540.3-144v-79.2h-114V0Zm251.7-119.7C-288.6-75-272.1,3.9-123.3,3.9h15C40.5,3.9,57.6-75,57.6-119.7V-223.2H-57v91.8c0,24.9-11.4,51.3-58.2,51.3h-.6c-47.7,0-58.2-26.4-58.2-51.3v-91.8H-288.6ZM89.1-223.2V0H357.9V-79.5H203.1V-223.2Zm299.4,0V0H657.3V-79.5H502.5V-223.2ZM866.7,4.5c126.9,0,152.4-38.4,152.4-78v-4.2c0-45.3-30.6-66.3-117.6-68.7l-45-1.2c-34.5-.9-43.2-5.4-43.2-13.5v-.6c0-7.5,5.1-11.7,32.4-11.7,29.7,0,33.3,10.8,34.2,18h130.8v-1.5c0-38.4-27.9-70.2-147.6-70.2H825c-108,0-141.6,25.8-141.6,67.8v2.7c0,35.1,19.2,67.5,111,70.8l47.1,1.5c38.4,1.5,41.4,8.4,41.4,15.9v.9c0,8.1-7.8,15.6-34.2,15.6-31.2,0-35.4-14.4-35.4-24H679.8v2.4c0,28.8,12.3,78,147.6,78Z"
                transform="translate(1020 227.1)"
              />
            </svg>
          </div>
        </section>
        <section id="footer">
          <ul>
            <li>THE SKELETON CREW 2021 • ALL RIGHTS RESERVED</li>
            <li>
              <Link href="/terms" passHref={true}>
                <a>TERMS</a>
              </Link>
            </li>
            <li>
              <Link href={Constants.discordInviteURL} passHref={true}>
                <a target="_blank">JOIN OUR DISCORD</a>
              </Link>
            </li>
          </ul>
        </section>
      </main>
      <script src="/js/scripts.js" async></script>
    </Layout>
  );
}
