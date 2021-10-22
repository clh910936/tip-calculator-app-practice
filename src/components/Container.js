import "../styles/container.css";
import ContainerBlock from "./ContainerBlock";
import TextInputForm from "./TextInputForm";
import dollarIcon from "../images/icon-dollar.svg";
import personIcon from "../images/icon-person.svg";
import ButtonContainer from "./ButtonContainer";

function Container() {
  const firstBlockContent = makeFirstBlock();
  const secondBlockContent = makeSecondBlock();
  return (
    <div className="container">
      <ContainerBlock className="firstBlock" content={firstBlockContent}/>
      <ContainerBlock className="secondBlock" content={secondBlockContent}/>
    </div>
  );
}

function makeFirstBlock() {
  return(
    <>
      <TextInputForm label="Bill" id="bill" image={dollarIcon}/>
      <ButtonContainer />
      <TextInputForm label="Number of People" id="people" image={personIcon} />
    </>
  );
}

function makeSecondBlock() {
  return (
    <>
      <p>Block 2</p>
    </>
  );
}

export default Container;
