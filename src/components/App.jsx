import { Form } from './Form/Form';
import style from '../components/App.module.css';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';

export const App = () => {
  return (
    <>
      <div className={style.main}>
        <h1 className={style.title}>Phonebook</h1>
        <Form />
        <h2 className={style.title}>Contacts</h2>
        <Filter />
        <Contacts />
      </div>
    </>
  );
};
