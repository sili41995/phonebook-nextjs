import { useSelector } from 'react-redux';
import { pagesPath } from '@/constants';
import { selectContacts } from '@/redux/contacts/selectors';
import { useParams } from 'next/navigation';

const useTargetContact = () => {
  const id = useParams()[pagesPath.dynamicParam];
  const contacts = useSelector(selectContacts);
  if (contacts.length) {
    return contacts.find(({ id: contactId }) => contactId === id);
  }
};

export default useTargetContact;
