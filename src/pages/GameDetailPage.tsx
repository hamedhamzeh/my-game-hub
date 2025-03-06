import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Box, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";

const GameDetailPage = () => {
    const { slug } = useParams();
    const { data: game, isLoading, error } = useGame(slug!);

    if (isLoading) return <Spinner />;

    if (error || !game) throw error;

    return (
        <>
            <Heading>{game.name}</Heading>
            <Box marginTop={3} fontSize="xl">
                <ExpandableText>{game.description_raw}</ExpandableText>
            </Box>
            <GameAttributes game={game} />
            <GameTrailer gameId={game.id} />
        </>
    );
};

export default GameDetailPage;
