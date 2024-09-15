import {
  Center,
  Divider,
  Flex,
  Heading,
  Icon,
  Link,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { SiBuymeacoffee } from "react-icons/si";

const ThankYouSection = () => {
  const { colorMode } = useColorMode();

  const textColor = colorMode === "light" ? "gray.800" : "gray.300";

  return (
    <>
      <Center display="column" textAlign="center" my={8}>
        <Heading as="h2" letterSpacing="tight" fontSize="1.5em">
          Thank you for stoping by!
        </Heading>
        <Text as="p" fontSize="16px" textColor={textColor} mt={2}>
          If you&apos;d like to support me, feel free to follow me on Instagram
          or buy me a coffee. See ya! 👋.
        </Text>
        <Flex align="center" justify="center">
          <Stack spacing={4} direction="row" py={6} mb={-4} px={[2, 2, 0]}>
            <Link
              href="https://www.instagram.com/jorgecontrerasostos/"
              target="_blank"
            >
              {" "}
              <motion.div whileHover={{ scale: 1.08 }}>
                <Icon as={FaInstagram} boxSize={8} color="#e1306c">
                  Instagram
                </Icon>
              </motion.div>
            </Link>
            <Link
              href="https://www.buymeacoffee.com/jorgecontreras"
              target="_blank"
            >
              <motion.div whileHover={{ scale: 1.08 }}>
                <Icon as={SiBuymeacoffee} boxSize={8} color="#dbcb3b" />
              </motion.div>
            </Link>
          </Stack>
        </Flex>
      </Center>
      <Center>
        <Divider borderColor="gray.300" w="10%" />
      </Center>
    </>
  );
};

export default ThankYouSection;
