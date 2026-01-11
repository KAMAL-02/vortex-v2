import Container from '@/components/Container';
import Header from '@/components/Header';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Blogs from '@/components/Blog';
import Activity from '@/components/Activity';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <Container>
      <Header />
      <Experience />
      <Projects />
      <Activity />
      <Blogs />
      <Footer />
    </Container>
  );
}
