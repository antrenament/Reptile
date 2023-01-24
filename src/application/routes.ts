import Home from '$pages/Home';

export const publicRoutes: {
  [key: string]: { component: React.FunctionComponent; guard?: string[] };
} = {
  '/': { component: Home },
};
