import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/Logo-removebg.png";

const NavBar = () => {
    return (
        <HStack>
            <Image src={logo} w="auto" h="80px" />
            <Text>NavBar</Text>
        </HStack>
    );
};

export default NavBar;
