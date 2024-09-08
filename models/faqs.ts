import { Constants } from "../models/constants";

interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: `What are SKULLS?`,
    answer: `Skulls are a collection of ${Constants.totalMint} hand drawn and algorithmically generated NFTs stored on the <a href="https://solana.com" target="_blank">Solana</a> blockchain.`,
  },
  {
    question: `Where can I buy or sell SKULLS today?`,
    answer: `SKULLS are available on most major marketplaces, including <a href="${Constants.magicEdenURL}" target="_blank">Magic Eden</a>, <a href="https://solanart.io/collections/skeletoncrew" target="_blank">Solanart</a>, <a href="https://ftx.us/nfts/issuer/Skeleton%20Crew" target="_blank">FTX</a>, <a href="https://digitaleyes.market/collections/Skeleton%20Crew%20SKULLS" target="_blank">Digital Eyes</a>, and <a href="https://alpha.art/collection/skeleton-crew" target="_blank">Alpha Art</a>.`,
  },
  {
    question: `How were SKULLS generated?`,
    answer: `All SKULLS and their various parts are drawn by hand and algorithmically created using our generation tool, <a href="${Constants.treatToolboxURL}">Treat Toolbox</a>. There are ${Constants.attributes}+ attributes across ${Constants.categories} categories: These categories include headgear, eyes, expressions, backgrounds, skins, brains, and more. With these combined, it gives a total mathematical combination of millions of unique SKULLS - but with only ${Constants.totalMint} minted, some are more unique and rare than others.`,
  },
  {
    question: `What was the release date and price?`,
    answer: `SKULLS dropped on ${Constants.dropDate}. The price at launch was ${Constants.solPrice} SOL.`,
  },
  {
    question: `What is the Skeleton Crew Artist Collective?`,
    answer: `The artist collective is Skeleton Crew's launchpad helping independent artists create and ship their own Generative Collections on Solana. 
    
Some of the amazing projects we've helped launch include <a href="https://zen0verse.com" target="_blank">Zen0verse</a> by <a href="https://twitter.com/zen0m" target="_blank">Zen0m</a>, <a href="https://solanacomics.com" target="_blank">Longharbor</a> and <a href="https://cursedmikes.com" target="_blank">Cursed Mikes</a> by <a href="https://twitter.com/mirabalart" target="_blank">Alejandro Mirabal</a>, and <a href="https://darkelv.com" target="_blank">DARKELV</a> by <a href="https://twitter.com/marsdorian" target="_blank">Mars Dorian</a>.`,
  },
  {
    question: `What roadmap plans do you have for the future of SKULLS?`,
    answer: `In addition to being a collectible art piece, every SKULL minted was also a skeleton key to our signature October event: an entire month of NFT airdrops by independent artists.
    
SKULL holders are also able to stake their NFTs to earn $SKULL tokens, which entitle them to whitelist access to projects from our artist launchpad, discounts on use of <a href="${Constants.treatToolboxURL}" target="_blank">Treat Toolbox</a>, and more.
    `,
  },
  {
    question: `Who is running the Skeleton Crew?`,
    answer: `The Skeleton Crew team is run by <a href="https://twitter.com/ayyoskull" target="_blank">Ayyo</a> and <a href="https://twitter.com/cosimo_rip" target="_blank">Cosimo</a>, and we could not have launched without the help of <a href="https://twitter.com/Benny_Brainless" target="_blank">Benny</a>, our Community Manager. These days we're supported by the efforts of <a href="https://twitter.com/skele_dao">SkeleDAO</a> and the DAO leadership team. Our core principles have always been to deliver collectible, high-quality art with the best possible NFT user experience from launch.`,
  },
  {
    question: `Are there resale royalties?`,
    answer: `${Constants.royalties}% royalties are applied to all resales. This supports the ongoing project efforts of the team, and pay for initiatives like the independent artist commissions used in our October 2021 airdrop campaign.`,
  },
  {
    question: `Get in touch with us`,
    answer: `​​Feel free to get in touch with us on Twitter <a href="${Constants.twitterURL}" target="_blank">@skeletoncrewrip</a> or on Discord at <a href="${Constants.discordInviteURL}" target="_blank">${Constants.discordInviteURL}</a>.`,
  },
];
