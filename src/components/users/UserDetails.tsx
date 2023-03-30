import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from '../ErrorFallback';
import { Loading } from '../Loading';
import { AccountDetails } from './AccountDetails';
import { MovieDetails } from './MovieDetails';

interface Props {
  userId: number;
  movieId: number;
}
export function UserDetails({ userId, movieId }: Props) {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <h4 className="text-center mt-5">User details</h4>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <AccountDetails userId={userId} />
        </ErrorBoundary>

        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <h4 className="text-center mt-5">Favorite movie</h4>
        </ErrorBoundary>
        <MovieDetails movieId={movieId} />
      </Suspense>
    </div>
  );
}
