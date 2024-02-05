import { ChipContent, ChipText } from "./Chip.styles";

function Chip({ chiptext }) {
    /*TODO: criar lógica para gerar chips de tags que o usuario digitar */
    return (
        <ChipContent>
            <ChipText>{chiptext}</ChipText>
        </ChipContent>
    );
}

export default Chip;