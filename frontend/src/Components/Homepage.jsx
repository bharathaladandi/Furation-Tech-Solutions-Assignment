import React from 'react'
import {
    AspectRatio,
    Box,
    Button,
    HStack,
    Image,
    Link,
    Skeleton,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react'
import { FavouriteButton } from '../pages/books/FavouriteButton'
import { PriceTag } from '../pages/books/PriceTag'
import { Rating } from '../pages/books/Rating'

import { useDispatch } from 'react-redux';
import { add } from '../Redux/cartSlice';
import { useState } from 'react';

import { productsApi, useGetAllProductsQuery } from '../Redux/productapi';
import { useSelector } from 'react-redux';


export const Homepage = (props) => {


    const { items, status } = useSelector(state => state.products)
    const { data, error, isLoading } = useGetAllProductsQuery()

    const { book, rootProps } = props
  
  
      const dispatch = useDispatch();
  
      const [products, setProducts] = useState([]);

  
      const handleAdd = (product) => {
  
        dispatch(add(product))
      }

      
    return (
      <div className="book">
        <Stack
        spacing={{
          base: '4',
          md: '5',
        }}
        {...rootProps}
      >
        
        <Box position="relative">
          <AspectRatio ratio={4 / 4}>
            <Image
              src={book.image}
              alt={book.category}
              draggable="false"
              fallback={<Skeleton />}
              borderRadius={{
                base: 'md',
                md: 'xl',
              }}
            />
          </AspectRatio>
        </Box>
        <Stack>
          <Stack spacing="1">
            <Text fontWeight="medium" color={useColorModeValue('gray.700', 'gray.400')}>
              {book.title}
            </Text>
            <PriceTag price={book.cost} salePrice={book.cost} currency="USD" />
          </Stack>
          <HStack>
            <Rating defaultValue={3}  size="sm" />
            <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
              12 Reviews
            </Text>
          </HStack>
        </Stack>

        <Stack align="center">
          <Button onClick={() => handleAdd(book)} colorScheme="blue" width="full">
          {/* Quick shop */} Add to Cart
          </Button>
          <Link
            textDecoration="underline"
            fontWeight="medium"
            color={useColorModeValue('gray.600', 'gray.400')}
          >
            {/* Quick shop */}
          </Link>
        </Stack>
      </Stack>
      </div>
    );
  };



  
