import React from 'react'
import CartWidget from './CarWidget'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import brand from '../'
const Navbar = () => {
  return (
    <div>

        <Flex>
          <Box p='4'>
            <Link to={"/"}
              <img src={brand} alt="" width='100px' height='100px' /> 
            </Link>        
          </Box>
          <Spacer/>
              <Box p='4'>
              <Menu>
                  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    Categorias
                </MenuButton>
                <MenuList>
                  <MenuItem>Categoria A</MenuItem>
                  <MenuItem>Categoria B</MenuItem>
                  <MenuItem>Categoria C</MenuItem>
                  
                </MenuList>
              </Menu>
          </Box>
          <Spacer />
          <Box>

              {/*Carrito*/}
              <CartWidget />
          </Box>
        </Flex>

    </div>
  )
}

export default Navbar
          















