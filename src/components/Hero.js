import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
} from "@chakra-ui/react";
import ProfileArray from "./ProfileArray";

export default function Header({ color }) {
  const profile = ProfileArray();
  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
  };
  const linkedin = () => {
    window.open(
                `${profile.linkedin}`,
                "_blank",
                "noreferrer,noopener"
              );
  };
  return (
    <>
      <Heading>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
      </Heading>

      <Container maxW={"3xl"} id="hero">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
          pt={{ base: 36, md: 52 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            {profile.headerName} <br />
            <Text as={"span"} color={`${color}.400`}>
              {profile.headerRole}
            </Text>
          </Heading>
          <Text
            color={"gray.500"}
            fontSize={{ base: "lg", sm: "xl", md: "2xl" }}
          >
            {profile.headerDesc}
          </Text>
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <Button
              colorScheme={color}
              bg={`${color}.400`}
              rounded={"full"}
              px={6}
              _hover={{
                bg: `${color}.500`,
              }}
              onClick={linkedin}
            >
              Let's connect!
            </Button>
            <Button
              variant={"link"}
              // colorScheme={"mycolor.100"}
              size={"sm"}
              onClick={scrollToContact}
              

            >
              Contact Me
            </Button>
            {/* <Box>
              <Icon
                as={Arrow}
                color={useColorModeValue("gray.800", "gray.300")}
                w={71}
                position={"absolute"}
                right={-71}
                top={"10px"}
              />
              <Text
                fontSize={"lg"}
                fontFamily={"Caveat"}
                position={"absolute"}
                right={"-85px"}
                top={"-15px"}
                transform={"rotate(10deg)"}
              >
                Click me!
              </Text>
            </Box> */}
          </Stack>
        </Stack>
      </Container>
    </>
  );
}

// 
