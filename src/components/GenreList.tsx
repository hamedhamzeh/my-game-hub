import { Button, Heading, HStack, Image, List, ListItem } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";
import useGameQueryStore from "../store";

const GenreList = () => {
    const { data, isLoading, error } = useGenres();
    const Skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
    const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

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
                                    fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                                    fontSize="lg"
                                    variant="link"
                                    whiteSpace="normal"
                                    textAlign="left"
                                    onClick={() => setSelectedGenreId(genre.id)}
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
