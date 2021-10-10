import { Constants } from "../models/constants";

interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: `What are SKULLS?`,
    answer: `Skulls are a collection of ${Constants.totalMint} hand drawn and algorithmically generated skulls stored on the <a href="https://solana.com" target="_blank">Solana</a> blockchain.`,
  },
  {
    question: `How are SKULLS generated?`,
    answer: `All SKULLS and their various parts are drawn by hand and algorithmically generated using custom code. There are ${Constants.attributes}+ attributes across ${Constants.categories} categories: These categories include headgear, eyes, expressions, backgrounds, skins, brains, and more. With these combined, it gives a total mathematical combination of millions of unique SKULLS - but with only ${Constants.totalMint} being minted, some are more unique and rare than others.

We will be using a smart contract deployed on the Solana chain to distribute SKULLS. It will leverage the Metaplex Candy Machine to ensure the highest security assurances and best possible experience.`,
  },
  {
    question: `What is the release date and price?`,
    answer: `SKULLS drop on ${Constants.dropDate}. The price at launch will be ${Constants.solPrice} SOL.`,
  },
  {
    question: `Is there a mint limit?`,
    answer: `There is a limit of 1 mint per transaction. You will be able to repeat this as many times as you want.`,
  },
  {
    question: `How can I buy a SKULL?`,
    answer: `Minting a SKULL is super simple: just connect your Solana wallet and follow the buy prompts.

1. Download the <a href="https://phantom.app" target="_blank">Phantom wallet extension</a> for your browser (<a href="https://brave.com/" target="_blank">Brave</a> or Google Chrome recommended).
2. Buy <a href="https://solana.com" target="_blank">Solana</a> (SOL) on an exchange (like <a href="https://ftx.com" target="_new">FTX</a>, <a href="https://ftx.us" target="_new">FTX US</a>, <a href="https://coinbase.com" target="_new">Coinbase</a>, <a href="https://binance.com" target="_new">Binance</a>, etc) and send it to your wallet’s Public Address.
3. Connect your Wallet to our website by clicking on the Connect button on the top right.
4. Click the “Buy” button on our website and approve the transaction in your wallet.
5. Welcome, you’re now the proud owner of a SKULL and officially a part of the Skeleton Crew!`,
  },
  {
    question: `Which Solana wallets can I use?`,
    answer: `At launch we will be allowing purchases and management through <a href="https://phantom.app" target="_blank">Phantom</a>.`,
  },
  {
    question: `Where does my NFT go after I purchase a SKULL, and what can I do with it?`,
    answer: `Your SKULL NFT artwork should be sent to the wallet you purchased with in a matter of seconds. You are free to do anything with your SKULL under a non-exclusive license. For more info, see our full <a href="/terms">terms</a>.`,
  },
  {
    question: `After SKULLs are fully minted, where can I buy or sell SKULLs?`,
    answer: `We are currently working to establish a presence on secondary marketplaces. These will be added following the mint as soon as they can verify SKULLS.`,
  },
  {
    question: `What roadmap plans do you have for the future of SKULLS?`,
    answer: `To start, in addition to being a collectible art piece, every SKULL you mint is also your skeleton key to our October event: an entire month of NFT airdrops limited exclusively to SKULL holders.
    
Every single day in October, SKULL holders will have the chance to be airdropped exclusive and rare spooky goodies. Every SKULL you hold in your wallet increases your chance of winning an item, but not all items will be equally rare.
    
Some days will have thousands of treats going out, and sometimes drops of the rarest items may go down to the single digits. You can find out for yourself: will you get a trick, or a treat?

More to come!`,
  },
  {
    question: `Who is running the Skeleton Crew?`,
    answer: `The Skeleton Crew team is run by a small independent team of friends. Our core principles have always been to deliver collectible, high-quality art with the best possible NFT user experience from launch.`,
  },
  {
    question: `Will there be resale royalties?`,
    answer: `${Constants.royalties}% royalties will be applied to all resales. A portion of secondary sales are being set aside in a community wallet to create a sustainable fund for independent artist commissions, which will be periodically airdropped to SKULL owners.`,
  },
  {
    question: `Get in touch with us`,
    answer: `​​Feel free to get in touch with us on Twitter <a href="${Constants.twitterURL}" target="_blank">@skeletoncrewrip</a> or on Discord at <a href="${Constants.discordInviteURL}" target="_blank">${Constants.discordInviteURL}</a>.`,
  },
];
