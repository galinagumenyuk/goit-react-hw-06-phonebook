import { Container, ListTitle } from "./App.styled";
import PropTypes from "prop-types";
import Form from "./components/form/Form.jsx";
import Contacts from "./components/contacts/Contacts.jsx";
import Filter from "./components/filter/Filter.jsx";

export default function App() {
  // const [contacts, setContacts] = useState(
  //   JSON.parse(localStorage.getItem("contacts")) ?? []
  // );

  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);

  // const validateContact = (contactName) => {
  //   let isDuplicate = !!state.contacts.item.find(
  //     (contact) => contact.name === contactName
  //   );
  //   return !isDuplicate;
  // }; ----- шло пропсом в форму

  return (
    <Container>
      <h1>Phonebook</h1>
      <Form />
      <ListTitle>Contacts</ListTitle>
      <Filter />
      <Contacts />
    </Container>
  );
}

App.propTypes = {
  contacts: PropTypes.array,
  value: PropTypes.string,
  onSubmit: PropTypes.func,
  onValidate: PropTypes.func,
  onChange: PropTypes.func,
  onDeleteContact: PropTypes.func,
};
