import { Container, ListTitle } from "./App.styled";
import PropTypes from "prop-types";
import Form from "./components/form/Form.jsx";
import Contacts from "./components/contacts/Contacts.jsx";
import Filter from "./components/filter/Filter.jsx";

function App() {
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

export default App;

App.propTypes = {
  contacts: PropTypes.array,
  value: PropTypes.string,
  onSubmit: PropTypes.func,
  onValidate: PropTypes.func,
  onChange: PropTypes.func,
  onDeleteContact: PropTypes.func,
};
