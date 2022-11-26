import type { NextPage } from 'next';
import { Car } from '../../types/cars';
import Link from 'next/link';

interface CarsProps {
  cars: Car[];
}

const Cars: NextPage<CarsProps> = ({ cars }) => {
  return (
    <div>
      Choose a Car
      <ul>
        {cars?.map((car) => (
          <li key={car.id}>
            <Link href={`/cars/${car.id}`}>
              {car.make} {car.model}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cars;

export async function getStaticProps() {
  const req = await fetch(`http://localhost:3000/api/cars`);
  const data = await req.json();

  return {
    props: { cars: data.results },
  };
}
