import Image from "next/image";
import Link from "next/link";
import { Layout } from "../../components/Layout";
import { Constants } from "../../models/constants";

export default function CustomSkulls() {
  const title = "Custom Skulls | Skeleton Crew | Skull NFTs for Solana";

  return (
    <Layout title={title}>
      <main id="custom-skulls">
        <section id="coming-soon">
          <div id="coming-soon-container">
            <div id="skull">
              <Image
                src="/images/logos/1.png"
                alt="Skull"
                width="152"
                height="152"
              />
            </div>
            <h1>Coming Soon</h1>
            <p>Skulls drop {Constants.dropDateAndTime}</p>
          </div>
        </section>
        <section id="social">
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
      </main>
    </Layout>
  );
}
