import { FC } from 'react';
import { Container, Title, Description } from './ContactDescription.styled';
import { IProps } from './ContactDescription.types';

const ContactDescription: FC<IProps> = ({ contact }) => {
  const { description } = contact;

  return (
    <Container>
      <Title>Description</Title>
      <Description>{description ? description : 'No description'}</Description>
    </Container>
  );
};

export default ContactDescription;
