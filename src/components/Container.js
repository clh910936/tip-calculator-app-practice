import "../styles/container.css";
import ContainerBlock from "./ContainerBlock";
import TextInputForm from "./TextInputForm";
import dollarIcon from "../images/icon-dollar.svg";
import personIcon from "../images/icon-person.svg";
import ButtonContainer from "./ButtonContainer";
import { onTipSelected, onBillEntered, onPeopleCountUpdate } from '../util/Actions';

function Container(props) {
  const { state, dispatch } = props;
  const firstBlockContent = makeFirstBlock(dispatch, state);
  const secondBlockContent = makeSecondBlock(state);
  return (
    <div className="container">
      <ContainerBlock className="firstBlock" content={firstBlockContent}/>
      <ContainerBlock className="secondBlock" content={secondBlockContent}/>
    </div>
  );
}

function makeFirstBlock(dispatch, state) {
  return(
    <>
      <TextInputForm label="Bill" id="bill" image={dollarIcon} onChange={(bill => onBillEntered(bill, dispatch))}/>
      <ButtonContainer onClick={(tip => onTipSelected(tip, dispatch))} tip={state.tip}/>
      <TextInputForm label="Number of People" id="people" image={personIcon} onChange={(people) => onPeopleCountUpdate(people, dispatch)}/>
    </>
  );
}

function makeSecondBlock(state) {
  return (
    <>
      <p>Tip /person: ${state.tip * state.bill / state.numPeople}</p>
      <p>Bill /person: ${state.bill * (1 + state.tip) / state.numPeople}</p>
    </>
  );
}

export default Container;
