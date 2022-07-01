import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Button } from "@chakra-ui/react";

const Banner = ({
  porpose,
  imageUrl,
  title1,
  title2,
  desc1,
  desc2,
  linkUrl,
  buttonText,
}) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} alt="Banner image here" width={500} height={300} />
    <Box p="5">
      <Text color="grey.500" fontSize="sm" fontWeight="medium">
        {porpose}
      </Text>
      <Text fontSize="3xl" fontWeight="bold">
        {title1}
        <br />
        {title2}
      </Text>
      <Text color="grey.700" fontSize="lg" paddingY="3">
        {desc1}
        <br />
        {desc2}
      </Text>
      <Button fontSize="xl">
        <Link href={linkUrl}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
);

export default function Home() {
  return (
    <Box>
      <Banner
        porpose="RENT A HOME"
        title1="Rental Homes for"
        title2="Everyone"
        desc1="Explore Apartments, Villas, Homes"
        desc2="and more"
        linkUrl="/search?purpose=for-rent"
        buttonText="Explore Renting"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      <Flex flexWrap='wrap'>
        {/* Fetch properties ( for rent a home) and map over them. */}
      </Flex>
      <Banner
        porpose="BUY A HOME"
        title1="Find, Buy & Own Your"
        title2="Dream Home"
        desc1="Explore Apartments, Villas, Homes"
        desc2="and more"
        linkUrl="/search?purpose=for-buy"
        buttonText="Explore Buying"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      <Flex flexWrap='wrap'>
        {/* Fetch properties ( for buy a home) and map over them. */}
      </Flex>
    </Box>
  );
}
