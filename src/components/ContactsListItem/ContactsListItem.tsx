import { AiFillStar, AiOutlineDelete } from 'react-icons/ai';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import IconButton from '@/components/IconButton';
import { selectIsLoading } from '@/redux/contacts/selectors';
import useDeleteContact from '@/hooks/useDeleteContact';
import { useAppSelector } from '@/hooks/redux';
import { IProps } from './ContactsListItem.types';
import { IconBtnType, IconSizes, PagePaths, Positions } from '@/constants';
import {
  Email,
  Image,
  Item,
  Role,
  Name,
  Phone,
  ContactInfo,
  Person,
  ImageContainer,
} from './ContactsListItem.styled';

const ContactsListItem = ({ contact }: IProps) => {
  const { avatar, name, _id: id, role, phone, email, favorite } = contact;
  const isLoading = useAppSelector(selectIsLoading);
  const deleteContact = useDeleteContact();
  const searchParams = useSearchParams();
  const contactPath = `/${PagePaths.contactsPath}/${id}/?${searchParams}`;

  const handleDelBtnClick = () => {
    deleteContact(id as string);
  };

  return (
    <Item>
      <Link href={contactPath}>
        <ImageContainer>
          <Image src={avatar as string} alt={name} />
          {favorite && <AiFillStar size={IconSizes.primaryIconSize} />}
        </ImageContainer>
        <ContactInfo>
          <Person>
            <Name>{name}</Name>
            {role && <Role>{role}</Role>}
          </Person>
          <Phone>{phone}</Phone>
          <Email>{email}</Email>
        </ContactInfo>
      </Link>
      <IconButton
        position={Positions.absolute}
        disabled={isLoading}
        btnType={IconBtnType.deleteTransparent}
        onBtnClick={handleDelBtnClick}
        icon={<AiOutlineDelete size={IconSizes.primaryIconSize} />}
        height={36}
      />
    </Item>
  );
};

export default ContactsListItem;
