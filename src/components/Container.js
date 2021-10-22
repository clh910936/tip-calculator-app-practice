import "../styles/container.css";
import ContainerBlock from "./ContainerBlock";
import TextInputForm from "./TextInputForm";

function Container() {
  const firstBlockContent = makeFirstBlock();
  const secondBlockContent = makeSecondBlock();
  return (
    <div className="container">
      <ContainerBlock className="firstBlock" content={firstBlockContent} />
      <ContainerBlock className="secondBlock" content={secondBlockContent} />
    </div>
  );
}

function makeFirstBlock() {
  return(
    <>
      <TextInputForm label="Bill" id="bill"/>
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
