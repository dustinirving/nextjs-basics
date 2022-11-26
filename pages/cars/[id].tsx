import type { NextPage } from 'next';
import { Car } from '../../types/cars';

interface CarProps {
  car: Car;
}
const Car: NextPage<CarProps> = ({ car }) => {
  return (
    <div>
      {car?.make} - {car?.model}
    </div>
  );
};

export default Car;

export async function getStaticProps({ params }: { params: { id: string } }) {
  const req = await fetch(`/api/cars/${params.id}`);
  const car = await req.json();
  return {
    props: { car },
  };
}

export async function getStaticPaths() {
  const req = await fetch(`/api/cars`);
  const data = await req.json();
  const paths = data.results.map((car: Car) => {
    return { params: { id: car.model } };
  });

  return {
    paths,
    fallback: false,
  };
}
