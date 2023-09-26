import FamousSlider from "@/components/content-components/famous-slider";
import GotQuestions from "@/components/content-components/got-questions";
import Navbar from "@/components/content-components/navbar";
import Section from "@/components/content-components/section";
import GetStarted from "@/components/content-components/section/get-started";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Section bgColor="rgb(37, 79, 26)">
        <Section.Left>
          <Flex height="100%" justifyContent="center" alignItems="center">
            <GetStarted
              isClaim
              heading="Everything you are. In one, simple link in bio."
              text="Join 40M+ people using Linkleaf for their link in bio. One link to
            help you share everything you create, curate and sell from your
            Instagram, TikTok, Twitter, YouTube and other social media profiles."
              color="rgb(210, 232, 35)"
            />
          </Flex>
        </Section.Left>
        <Section.Right>&nbsp;</Section.Right>
      </Section>
      <Section bgColor="rgb(233, 192, 233)">
        <Section.Left> </Section.Left>
        <Section.Right>
          <Flex h="100%" justifyContent="center" alignItems="center">
            <GetStarted
              heading="Create and customize your Linkleaf in minutes"
              text="Connect your TikTok, Instagram, Twitter, website, store, videos, music, podcast, events and more. It all comes together in a link in bio landing page designed to convert."
              color="rgb(80, 34, 116)"
              buttonTheme={{
                textColor: "white",
                backgroundColor: "rgb(80, 34, 116)",
              }}
            />
          </Flex>
        </Section.Right>
      </Section>
      <Section bgColor="rgb(120, 0, 22)">
        <Section.Left>
          <Flex h="100%" justifyContent="center" alignItems="center">
            <GetStarted
              heading="Share your Linkleaf from your Instagram, TikTok, Twitter and other bios"
              text="CAdd your unique Linkleaf URL to all the platforms and places you find your audience. Then use your QR code to drive your offline traffic online."
              color="rgb(233, 192, 233)"
            />
          </Flex>
        </Section.Left>
        <Section.Right> </Section.Right>
      </Section>
      <Section>
        <Section.Left> </Section.Left>
        <Section.Right>
          <Flex h="100%" justifyContent="center" alignItems="center">
            <GetStarted
              heading="Analyze your audience and keep your followers engaged"
              text="Track your engagement over time, monitor revenue and learn what’s converting your audience. Make informed updates on the fly to keep them coming back."
              color="rgb(30, 35, 48)"
            />
          </Flex>
        </Section.Right>
      </Section>
      <FamousSlider />
      <GotQuestions />
    </main>
  );
}
