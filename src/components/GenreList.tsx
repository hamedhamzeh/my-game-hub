import { Button, Heading, HStack, Image, Link, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
    onSelectedGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({ onSelectedGenre, selectedGenre }: Props) => {
    const { data, isLoading, error } = useGenres();
    const Skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    // if (isLoading) return <Spinner />;

    return (
        <>
            <Heading fontSize="2xl" marginBottom={6} marginTop={2}>
                Genres
            </Heading>
            <List>
                {isLoading && Skeletons.map((Skeleton) => <GenreListSkeleton key={Skeleton} />)}
                {data?.results.map((genre) => (
                    <HStack key={genre.id}>
                        <ListItem paddingY="5px">
                            <HStack>
                                <Image
                                    boxSize="32px"
                                    borderRadius={8}
                                    objectFit="cover"
                                    src={getCroppedImageUrl(genre.image_background)}
                                />
                                <Button
                                    fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                                    fontSize="lg"
                                    variant="link"
                                    whiteSpace="normal"
                                    textAlign="left"
                                    onClick={() => onSelectedGenre(genre)}
                                >
                                    {genre.name}
                                </Button>
                            </HStack>
                        </ListItem>
                    </HStack>
                ))}
            </List>
        </>
    );
};

export default GenreList;
