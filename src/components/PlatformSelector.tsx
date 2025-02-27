import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/usePlatforms";

interface Props {
    onSelectPlatform: (platform: Platform) => void;
    selectPlatformId?: number;
}

const PlatformSelector = ({ onSelectPlatform, selectPlatformId }: Props) => {
    const { data, error } = usePlatforms();
    const selectPlatform = data?.results.find((p) => p.id === selectPlatformId);

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                {selectPlatform?.name || "platform"}
            </MenuButton>
            <MenuList>
                {data?.results.map((platform) => (
                    <MenuItem key={platform.id} onClick={() => onSelectPlatform(platform)}>
                        {platform.name}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default PlatformSelector;
