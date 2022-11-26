// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import cars from './cars.json';
import { Car } from '../../../types/cars';

export default function handler(req: NextApiRequest, res: NextApiResponse<Car>) {
  const car = cars.results.find((car) => car.id === req.query.carId) as Car;
  res.status(200).json(car);
}
