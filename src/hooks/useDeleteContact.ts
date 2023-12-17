import { useEffect, useState } from 'react';
import {
  redirect,
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation';
import { toasts } from '@/utils';
import { deleteContact } from '@/redux/contacts/operations';
import { useAppDispatch } from '@/hooks/redux';
import { PagePaths } from '@/constants';

const useDeleteContact = () => {
  const [contactId, setContactId] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const redirectPath = `/${PagePaths.contactsPath}?${searchParams}`;

  useEffect(() => {
    if (contactId) {
      dispatch(deleteContact(contactId))
        .unwrap()
        .then(() => {
          if (pathname.includes(contactId)) {
            replace(redirectPath);
          }
          toasts.successToast('Contact successfully removed');
        })
        .catch(() => {
          toasts.errorToast('Deleting a contact failed');
        });
    }
  }, [contactId, dispatch, pathname, redirectPath]);

  return setContactId;
};

export default useDeleteContact;
