import React from "react";

import ContactForm from "../ContactForm/ContactForm";
import Filter from "../Filter/Filter";
import ContactList from "../ContactList/ContactList";
import Section from "../../common/Section/Section";

const Phonebook = () => {
  return (
    <>
      <ContactForm />

      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </>
  );
};
export default Phonebook;
