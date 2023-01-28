import Providers from '$application/Providers';
import Router from '$application/Router';

export default function Application() {
  return (
    <Providers>
      <Router />
    </Providers>
  );
}
