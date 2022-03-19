import Card from "../../framework/card/Card";
import classes from "./ContactListItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Button from "../../framework/button/Button";

interface Props {
  picture: string;
  name: string;
  phoneNumber: string;
  email: string;
  showDetails: () => void;
}

const ContactListItem: React.FC<Props> = ({
  picture,
  name,
  phoneNumber,
  email,
  showDetails,
}) => {
  const phoneIcon = <FontAwesomeIcon icon={faPhone} />;
  const mailIcon = <FontAwesomeIcon icon={faEnvelope} />;
  return (
    <Card>
      <div className={classes.box}>
        <img alt={name} src={picture} />
        <h3>{name}</h3>
        <p>
          {phoneIcon} {phoneNumber}
        </p>
        <a href={`mailto: ${email}`}>
          {mailIcon} {email}
        </a>
        <Button appearance="primary" onClick={showDetails}>
          View
        </Button>
      </div>
    </Card>
  );
};

export default ContactListItem;