import { startTransition, useState, useTransition } from 'react';
import { CheckNumber } from './CheckNumber';
import { PrimeRange } from './PrimeRange';

const defaultValue = 250;

export function PrimeNumbers() {
  const [isPending, startTransition] = useTransition();
  const [maxPrime, setMaxPrime] = useState(defaultValue);
  const values = new Array(maxPrime).fill(null);

  return (
    <div className="row">
      <h2 className="text-center mt-5">Prime Numbers</h2>
      <PrimeRange
        defaultValue={defaultValue}
        // onChange={(value) => setMaxPrime(value)}
        // This is concurrent 
        onChange={(value) => startTransition(() => setMaxPrime(value))}
      />

      <div className="row row-cols-auto g-2">
        {values
          .filter((_, index) => index < 10_000)
          .map((_, index) => {
            return <CheckNumber 
            key={index} 
            value={maxPrime - index}
            isPending={isPending} // will display a hourglass , kinda like a loading state
            />;
          })}
      </div>
    </div>
  );
}
