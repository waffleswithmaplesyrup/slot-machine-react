import numberOfReels from "../../../constants/numberOfReels";


export default function NewParagraph({icon, betMultiplier}) {
  const maxNumberOfReels = numberOfReels;
  const winningNumberOfReels = Math.ceil(numberOfReels/2);
  if (icon === 'grenade') {
    return <p id="new-para">outcome: at least {winningNumberOfReels} {icon} icons<br/>result: wallet - $50 (unless kitten save)</p>

  } else if (icon === 'kitten') {
    return <p id="new-para">outcome: {maxNumberOfReels} {icon} icons<br/>result: bet amount x {betMultiplier}<br/>kitten + bullets: save against grenade attack.<br/>outcome: at least any {winningNumberOfReels} same icons<br/>result: bet amount x 2</p>
  }
  return <p id="new-para">outcome: {maxNumberOfReels} {icon} icons<br/>result: bet amount x {betMultiplier}<br/>outcome: at least any {winningNumberOfReels} same icons<br/>result: bet amount x 2</p>;
}