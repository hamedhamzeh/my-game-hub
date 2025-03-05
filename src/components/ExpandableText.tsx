import { Text, Button } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
    children: string;
    maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 300 }: Props) => {
    const [isExpnaded, setExpnaded] = useState(false);

    if (!children) return null;

    if (children.length <= maxChars) return <Text>{children}</Text>;

    const text = isExpnaded ? children : children.substring(0, maxChars) + "...";
    return (
        <Text>
            {text}
            <Button
                size="xs"
                marginLeft={1}
                fontWeight="bold"
                colorScheme="yellow"
                onClick={() => setExpnaded(!isExpnaded)}
            >
                {isExpnaded ? "Show Less" : "Read More"}
            </Button>
        </Text>
    );
};

export default ExpandableText;
