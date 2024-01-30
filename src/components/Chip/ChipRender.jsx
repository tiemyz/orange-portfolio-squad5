import Chip from "./Chip";
import { ChipDiv} from "./ChipStyle";

function ChipRender({tags}) {
    return (
        <ChipDiv>
            {tags.map(tag => <Chip chiptext={tag.tagName}></Chip>)}
        </ChipDiv>
    );
}

export default ChipRender;