import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toasts } from '@/utils';
import { deleteContact } from '@/redux/contacts/operations';
import { useRouter, useSearchParams } from 'next/navigation';

const useDeleteContact = () => {
  const [contactId, setContactId] = useState(null);
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const router = useRouter();
  const navigationPath = `/contacts?${searchParams}`;

  useEffect(() => {
    if (contactId) {
      dispatch(deleteContact(contactId))
        .unwrap()
        .then(() => {
          toasts.successToast('Contact successfully removed');
          router.push(navigationPath, {
            scroll: false,
          });
        })
        .catch(() => {
          toasts.errorToast('Deleting a contact failed');
        });
    }
  }, [contactId, dispatch, navigationPath, router]);

  return setContactId;
};

export default useDeleteContact;
