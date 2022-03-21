import Button from "../../framework/button/Button";

const ContactView: React.FC<{ toggleIsEditable: (param: boolean) => void }> = ({
  toggleIsEditable,
}) => {
  const openHandler = () => {
    toggleIsEditable(true);
  };

  return (
    <>
      <p>view</p>
      <Button appearance="primary" onClick={openHandler}>
        Open
      </Button>
    </>
  );
};

export default ContactView;
