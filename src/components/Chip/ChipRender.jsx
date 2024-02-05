import Chip from "./Chip";
import { ChipDiv } from "./Chip.styles";

function ChipRender({tags}) {
    var tagsList = tags.split(",")

    return (
        <ChipDiv>
            {tagsList.map(tag => <Chip chiptext={tag}></Chip>)}
        </ChipDiv>
    );
}

export default ChipRender;