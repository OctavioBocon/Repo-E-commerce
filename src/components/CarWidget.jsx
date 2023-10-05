import { Badge, Box, Divider, Flex } from '@chakra-ui/react'
import React from 'react'
import { Badge } from '@chakra-ui/react'

const CarWidget = () => {
    return (
        
            <Flex>
                <Box>
                <i className="bi bi-cart2"></i>
                </Box>
                
                <Divider/>
                <Box>
                <Badge colorScheme='green'>3</Badge>
                </Box>
            </Flex>
        
    )
    }

    export default CarWidget


        