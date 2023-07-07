//import Product from './product';
const Product = dynamic(() => import('./product'), {
    ssr: false,
  });
  