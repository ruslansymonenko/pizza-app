import { Container } from '@/components/shared/container';
import { Title } from '@/components/shared/title';
import TopBar from '@/components/shared/top-bar';

export default function Home() {
  return (
    <>
      <Container className="mt-8">
        <Title text={'Всі товари'} size="lg" className="font-extrabold mb-4" />
      </Container>
      <TopBar />
    </>
  );
}
