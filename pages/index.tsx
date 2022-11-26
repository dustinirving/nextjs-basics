import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/cars">cars</Link>
    </div>
  );
};

export default Home;
