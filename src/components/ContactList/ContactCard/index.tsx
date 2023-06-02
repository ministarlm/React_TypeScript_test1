import { Contact } from "models/contact.model";
import ImageFrame from "components/ImageFrame";
import "./index.scss";
import {
  faEnvelope,
  faHeart,
  faPencil,
  faPhone,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MAX_TEXT_LENGTH = 25;

const getEmailText = (emailAddress: string) => {
  return emailAddress.length > MAX_TEXT_LENGTH
    ? emailAddress.slice(0, MAX_TEXT_LENGTH) + "..."
    : emailAddress;
};
const getPhoneText = (phoneNumber: string) => {
  return phoneNumber.length > MAX_TEXT_LENGTH
    ? phoneNumber.slice(0, MAX_TEXT_LENGTH) + "..."
    : phoneNumber;
};

const ContactCard = ({ contact }: Props) => {
  const { fullName, profilePicture, phoneNumber, emailAddress } = contact;
  return (
    <li className="contact-card">
      <FontAwesomeIcon
        className="contact-card__icon contact-card__icon--left"
        icon={faTrash}
        size="lg"
        color="gray"
      />
      <div className="contact-card__icon contact-card__icon--right">
        <FontAwesomeIcon
          className="m-l-5"
          icon={faHeart}
          size="lg"
          color="gray"
        />
        <FontAwesomeIcon icon={faPencil} size="lg" color="gray" />
      </div>

      <ImageFrame imageUrl={profilePicture} />
      <h3>{fullName}</h3>
      <div className="contact-card__info">
        <div className="flex">
          <FontAwesomeIcon icon={faEnvelope} size="lg" color="gray" />
          <span>{getEmailText(emailAddress)}</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faPhone} size="lg" color="gray" />
          <span>{getPhoneText(phoneNumber)}</span>
        </div>
      </div>
    </li>
  );
};

type Props = {
  contact: Contact;
};

export default ContactCard;
