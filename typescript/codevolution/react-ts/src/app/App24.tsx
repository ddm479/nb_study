import { Text } from "../components/24-polymorphic_components/polymorphic";

function App24() {
    return(
        <div>
            <Text as='h1' size='lg'>
                Heading
            </Text>
            <Text as='p' size='md'>
                Paragraph
            </Text>
            <Text as='label' htmlFor='someId' size='sm' color='secondary'>
                Label
            </Text>
        </div>
    )
}