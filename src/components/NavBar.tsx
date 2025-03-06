import { HStack, Image, Text, useColorMode } from "@chakra-ui/react";
import logoWhite from "../assets/Logo-white.png";
import logoBlack from "../assets/Logo-black.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
    const { colorMode } = useColorMode();

    return (
        <HStack padding="10px">
            <Link to="/">
                <Image
                    src={colorMode === "dark" ? logoWhite : logoBlack}
                    paddingX={2}
                    marginRight={3}
                    w="auto"
                    h="75px"
                    objectFit="cover"
                />
            </Link>
            <SearchInput />
            <ColorModeSwitch />
        </HStack>
    );
};

export default NavBar;
