import { globalStyles } from '@/styles/global';
import { Heading, Text } from '@ignite-ui/react';
import { Container, Hero, Preview } from './styles';

import appPreview from '../assets/appPreview.svg';
import Image from 'next/image';
import { ClaimUsernameForm } from './components/ClaimUsernameForm';

globalStyles();

function Home() {
  return (
    <Container>
      <Hero>
        <Heading as="h1" size="4xl">
          Agendamento descomplicado
        </Heading>
        <Text size="xl">
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </Text>

        <ClaimUsernameForm />
      </Hero>

      <Preview>
        <Image
          src={appPreview}
          height={400}
          quality={100}
          priority
          alt="Calendário simbolizando aplicação em funcionamento"
        />
      </Preview>
    </Container>
  );
}

export default Home;
