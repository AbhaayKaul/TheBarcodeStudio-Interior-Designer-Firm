import Map from './map';
import { Heading, Box } from '@chakra-ui/core';
const Page = () => {
  const address = 'The barcode studio';
  return (
    <Box id="contact" px={['4', '6', '8', '24']} mt={['12', '16', '20', '24']}>
      <Heading 
        fontSize={['2xl', '3xl', '3xl', '4xl']} 
        mb={['6', '8', '10']}
        textTransform="uppercase"
      >
        Locate Us
      </Heading>
      <Map address={address} />
    </Box>
  );
};
export default Page;