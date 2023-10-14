import { Grid, Spinner } from '@chakra-ui/react'
import { useEffect, useState, useCallback } from 'react'
import { Product } from '../api/product'
import ProductCard from './productCard'

const productController = new Product();

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const getProducts = useCallback(() =>{
    try {
      const getProducts = async () => {
        const products = await productController.getAllProducts();
        setProducts(products);
      }
      return getProducts();
    } catch (error) {
      console.error(error);
    }
  } , []);

  useEffect(() => {
    try {
      getProducts();
      setIsLoaded(true);
    } catch (error) {
      setIsLoaded(false);
      console.error(error);
    }
    }, [products]);

  return (
    <Grid
    w="full"
    gridGap="2"
    gridTemplateColumns="repeat( auto-fit, minmax(300px, 1fr) )"
  >
    {isLoaded ? <ProductCard products={products} /> :
    <Spinner
      thickness='4px'
      speed='0.65s'
      emptyColor='gray.200'
      color='blue.500'
      size='xl'
      alignSelf={'center'}
    />}

  </Grid>
  )
}
