import { HStack, Image, Text, useColorMode } from "@chakra-ui/react";
import logoWhite from "../assets/Logo-white.png";
import logoBlack from "../assets/Logo-black.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
    const { colorMode } = useColorMode();

    return (
        <HStack padding="10px">
            <Image src={colorMode === "dark" ? logoWhite : logoBlack} w="auto" h="80px" />
            <SearchInput />
            <ColorModeSwitch />
        </HStack>
    );
};

export default NavBar;
