import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import Filter from "../components/Filter/Filter";
import MainTitle from "../components/MainTitle/MainTitle";
import Loader from "../components/Loader/Loader";
import { selectContacts } from "../redux/contacts/selector";
import { fetchContacts } from "../redux/contacts/operations";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const { items, isLoading } = useSelector(selectContacts);
  const contactItems = items.length !== 0;

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <section className="container mx-auto p-6 bg-gray-100">
      <div className="bg-white shadow-md rounded p-6">
        <MainTitle title="Phonebook" className="text-2xl font-bold mb-4" />
        <ContactForm />
        {isLoading && !contactItems && <Loader />}
        {contactItems && (
          <div className="mt-6">
            <MainTitle
              title="Contacts"
              className="text-xl font-semibold mb-2"
            />
            <Filter className="mb-4" />
            <ContactList />
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactsPage;
