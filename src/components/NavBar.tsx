import { HStack, Image, Text, useColorMode } from "@chakra-ui/react";
import logoWhite from "../assets/Logo-white.png";
import logoBlack from "../assets/Logo-black.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

// TODO: we are passing a func to two levels.
interface Props {
    onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
    const { colorMode } = useColorMode();

    return (
        <HStack padding="10px">
            <Image src={colorMode === "dark" ? logoWhite : logoBlack} w="auto" h="80px" />
            <SearchInput onSearch={onSearch} />
            <ColorModeSwitch />
        </HStack>
    );
};

export default NavBar;
