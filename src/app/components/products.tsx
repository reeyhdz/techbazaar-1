import { Grid } from '@chakra-ui/react'
import React from 'react'
import ProductCard from './productCard'

export const products = () => {
  return (
    <Grid
    w="full"
    gridGap="5"
    gridTemplateColumns="repeat( auto-fit, minmax(300px, 1fr) )"
  >
    {/* {products.map((p) => (
      <Product key={p.id} {...p} />
    ))} */}
    <ProductCard />
  </Grid>
  )
}
