import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

const GenreList = () => {
    const { data, isLoading, error } = useGenres();
    const Skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    // if (isLoading) return <Spinner />;

    return (
        <List>
            {isLoading && Skeletons.map((Skeleton) => <GenreListSkeleton key={Skeleton} />)}
            {data.map((genre) => (
                <HStack>
                    <ListItem key={genre.id} paddingY="5px">
                        <HStack>
                            <Image boxSize="32px" borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
                            <Text fontSize="lg">{genre.name}</Text>
                        </HStack>
                    </ListItem>
                </HStack>
            ))}
        </List>
    );
};

export default GenreList;
