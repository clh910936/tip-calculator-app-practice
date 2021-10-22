import "../styles/containerBlock.css";

function ContainerBlock(props) {
  var classname = props.className;
  var content = props.content;
  return (
    <div className={`containerBlock ${classname}`}>
      {content}
    </div>
  );
}

export default ContainerBlock;
