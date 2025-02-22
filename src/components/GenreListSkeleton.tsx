import { HStack, List, ListItem, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreListSkeleton = () => {
    return (
        <HStack>
            <ListItem paddingY="5px">
                <HStack>
                    <Skeleton boxSize="32px" borderRadius={8} />
                    <SkeletonText noOfLines={1} width="100px" />
                </HStack>
            </ListItem>
        </HStack>
    );
};

export default GenreListSkeleton;
