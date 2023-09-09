import Navbar from "../navbar/Navbar";
import RenderGameIcons from "./components/RenderGameIcons";
import RenderIconParagraphs from "./components/RenderIconParagraphs";
import NewParagraph from "./components/NewParagraph";
import { useState } from "react";

export default function RulesPage() {
  const [showIconParagraph, setShowIconParagraph] = useState(<p id="new-para">click on an icon for more info ...</p>);

  const changeParagraph = (icon) => {
    switch (icon) {
      case 'cherry':
      case 'money':
      case 'seven':
        setShowIconParagraph(<NewParagraph icon={icon} betMultiplier={10} />);
        break;
      case 'crystal':
      case 'bell':
        setShowIconParagraph(<NewParagraph icon={icon} betMultiplier={20} />);
        break;
      case 'bullets':
        setShowIconParagraph(<NewParagraph icon={icon} betMultiplier={30} />);
        break;
      case 'grenade':
        setShowIconParagraph(<NewParagraph icon={icon} />);
        break;
      case 'kitten':
        setShowIconParagraph(<NewParagraph icon={icon} betMultiplier={20} />);
        break;
    }
  };

  return (
    <div>
      <Navbar />
      <section id="rules-screen">
        <h3>game rules</h3>

        <div>
          <RenderGameIcons changeParagraph={changeParagraph}/>
          
          <RenderIconParagraphs showIconParagraph={showIconParagraph}/>
        </div>

      </section>
    </div>
  );
}

