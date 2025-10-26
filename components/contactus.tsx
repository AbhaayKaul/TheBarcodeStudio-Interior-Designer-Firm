import Map from './map';
import { Heading, Box, Text } from '@chakra-ui/core';
const Page = () => {
  const address = 'Ground floor, F1-22, Kotla Rd, Pocket 1, Sector 11F, Rohini, Delhi, 110085';
  return (
    <Box id="contact" px={['4', '6', '8', '24']} mt={['12', '16', '20', '24']} mb={['8', '10', '12']}>
      <Heading 
        fontSize={['2xl', '3xl', '3xl', '4xl']} 
        mb={['2', '3', '4']}
        textTransform="uppercase"
      >
        Locate Us
      </Heading>
      <Text 
        fontSize={['sm', 'md']} 
        color="#666" 
        mb={['6', '8', '10']}
      >
        Click on the map to open in Google Maps
      </Text>
      <Map address={address} />
    </Box>
  );
};
export default Page;