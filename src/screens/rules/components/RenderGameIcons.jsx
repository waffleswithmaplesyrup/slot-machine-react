import icons from "../../../constants/icons";

export default function RenderGameIcons({ changeParagraph }) {
  const handleClick = (event) => {
    changeParagraph(event.target.alt);
    event.target.classList.add('opacity');
    const sound = new Audio('../../../../assets/sounds/click.mp4');
    sound.play();
    setTimeout(() => event.target.classList.remove('opacity'), 100);
  };
  
  return (
    <div className="container">

      {/* //* map through icons array to generate all icons as images */}
      {icons.map((icon) => <img onClick={handleClick} key={icon} src={`../../../assets/images/${icon}.png`} alt={icon} />)}

    </div>);
}