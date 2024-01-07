import { FC } from 'react';
import { Container, Title, Description } from './ContactDescription.styled';
import { IProps } from './ContactDescription.types';

const ContactDescription: FC<IProps> = ({ contact }) => {
  const { description } = contact;
  const contactDescription = description ? description : 'No description';

  return (
    <Container>
      <Title>Description</Title>
      <Description>{contactDescription}</Description>
    </Container>
  );
};

export default ContactDescription;
