import ContactList from "components/ContactList";
import Header from "components/Header";
import { TContact } from "models/contact.model";

const contacts: TContact[] = [
  {
    name: "Ministar",
    surname: "Leovac",
    profilePicture:
      "https://preview.redd.it/rso9o52iozk41.jpg?auto=webp&s=caab5537f5ffc9f7034862cc79cd4e4cf7cf0d4c",
    phoneNumber: "+3856789234",
    emailAddress: "ministar.leovac0051@gmail.com",
  },
  {
    name: "Ministar",
    surname: "Tchio",
    profilePicture:
      "https://external-preview.redd.it/sEUzDwurS4NaQi4FCARTXo74yrAs_Unebp47L1GDis0.png?format=pjpg&auto=webp&s=d1f7251274e275fab56af41ad1cd363577cc5f2c",
    phoneNumber: "+3851234123",
    emailAddress: "tchio1950@gmail.com",
  },
  {
    name: "Ministar",
    surname: "Leki",
    profilePicture:
      "https://preview.redd.it/b3pv9d5byy971.jpg?width=640&crop=smart&auto=webp&s=9de27a130796fafee636f1138b4e5768c259579b",
    phoneNumber: "+3851234123",
    emailAddress: "leki1950@gmail.com",
  },
  {
    name: "Ministar",
    surname: "Lozano",
    profilePicture:
      "https://64.media.tumblr.com/e213ef5330200b21dd2e97a663b78c04/tumblr_o2trwxQvko1u9e5leo2_1280.jpg",
    phoneNumber: "+3851234123",
    emailAddress: "lozo1950@gmail.com",
  },

  {
    name: "Odranoel",
    surname: "Tchivejitam",
    profilePicture: "",
    phoneNumber: "+3851234123",
    emailAddress: "odranoel1950@gmail.com",
  },
  {
    name: "Odranoel",
    surname: "Tchivejitam",
    profilePicture: "",
    phoneNumber: "+3851234123",
    emailAddress: "odranoel1950@gmail.com",
  },

  {
    name: "Odranoel",
    surname: "Tchivejitam",
    profilePicture: "",
    phoneNumber: "+3851234123",
    emailAddress: "odranoel1950@gmail.com",
  },
];

const App = () => {
  return (
    <>
      <Header title="ciao bao💔"></Header>
      <section className="flex flex-column flex-align-center">
        <input type="text" />
        <ContactList className="w-100" contacts={contacts}></ContactList>
      </section>
    </>
  );
};

export default App;
