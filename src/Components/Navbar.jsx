import { Box, Flex, Image, Input, Button, Text } from '@chakra-ui/react';
import { ChevronDownIcon, Search2Icon, ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logodell from '../assets/logodell.png';
import '../App.css';

export default function Navbar() {
  const [mouse, setMouse] = useState(false);
  const [index, setIndex] = useState(0);
  const [card,setCard]=useState(false)
  const [cardP,setCardP]=useState(false)
  
//   const [hover,setHover]=useState(false)

  const newNav = [
    { label: "Artificial Intelligence", to: '/', icon: false },
    { label: "Products", to: '/', icon: true },
    { label: "Solutions", to: '/', icon: true },
    { label: "Services", to: '/', icon: true },
    { label: "Support", to: '/', icon: true },
    { label: "Deals", to: '/', icon: true },
    { label: "Find a Store", to: '/', icon: false },
  ];

  const lable = [
    {
      lable1: "INSPIRON LAPTOPS",
      lable2: "Stylish, Modern Laptops",
      lable3: "Get our best laptops for less, now with No Cost EMI & warranty upgrades.",
      button1: "Shop Now",
      button2: "Learn More",
      to: "/",
      img1: "#dfe6e9",
      img2: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/14-5430-intel/media-gallery/silver/non-touch-2-piece-metal/in5430nt-cnb-00055lf110-sl-nonfpr-2pc.psd?fmt=png-alpha&pscan=auto&scl=1&wid=5000&hei=5000&qlt=100,1&resMode=sharp2&size=5000,5000&chrss=full&imwidth=5000"
    },
    {
      lable1: "LATITUDE LAPTOPS",
      lable2: "Business Without Boundaries",
      lable3: "Meet the redesigned Latitude line | Bounless business productivity",
      button1: "Shop All",
      button2: "Learn More",
      to: "/",
      img1: "#6c5ce7",
      img2: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/16-7630-plus-intel/media-gallery/notebook-inspiron-16-7630-nt-ff-emza-fpr-silver-gallery-2.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=558&qlt=100,1&resMode=sharp2&size=558,402&chrss=full"
    },
    {
      lable1: "WELCOME TO NOW",
      lable2: "Revive History With Generative AI",
      lable3: "Discover how GenAI is preserving memories and helping to write new ones.",
      button1: "Play Video",
      button2: "Explore GenAI",
      to: "/",
      img1: "#00cec9",
      img2: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/14-5430-intel/media-gallery/silver/non-touch-2-piece-metal/in5430nt-cnb-00060lb055-sl-fpr-2pc.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=402&qlt=100,1&resMode=sharp2&size=402,402&chrss=full"
    }
  ];

 function CardHover(){
  return <>
    <Box zIndex={1000} p={5} w={'250px'} right={'48px'} border={'1px solid black'} borderRadius={'md'}  bg={'white'} position={'fixed'} >
        <Text fontSize={'20px'} fontWeight={600}>Your Dell.com Cards</Text>
        <Box>{cardP==true ? "Your Card Item" :"Your Card is empty"}</Box>
    </Box>
  </>
 }

  function Slider() {
    return (
      <Flex  zIndex={'-1'} w="100vw" h="74vh" bg={lable[index].img1}>
        <Flex gap={4} w="40%" py="100px" px={8} flexDirection="column" color={index==0 ? "#2d3436" : 'white'} justifyContent="space-between">
          <Text><h1>{lable[index].lable1}</h1></Text>
          <Text fontWeight={300} fontSize="30px">{lable[index].lable2}</Text>
          <Text fontSize="20px"><h1>{lable[index].lable3}</h1></Text>
          <Flex gap={5}>
            <Link to={lable[index].to}><Button>{lable[index].button1}</Button></Link>
            <Link to={lable[index].to}><Button colorScheme="white" variant="outline">{lable[index].button2}</Button></Link>
          </Flex>
        </Flex>
        <Flex align="center" w="60%" bg={lable[index].img1} position="relative">
          <Image w="20%" src={lable[index].img2} />
          <Image w="30%" src={lable[index].img2} />
          <Image w="40%" src={lable[index].img2} />
          <Flex w="80%" pos="absolute" left="10%" bottom="20px" justifyContent="space-between">
            <ChevronDownIcon color="white" fontSize="40px" />
            <Flex gap={5} color="#0984e3" cursor="pointer">
              <Flex bg="white" align="center">
                <Button onClick={() => setIndex(index === 2 ? 0 : index + 1)} bg="white" color="#0984e3" leftIcon={<ArrowBackIcon />} variant="solid" />
                <Text bg="white">{index + 1}/3</Text>
                <Button onClick={() => setIndex(index === 2 ? 0 : index + 1)} bg="white" color="#0984e3" leftIcon={<ArrowForwardIcon />} variant="solid" />
              </Flex>
              <Button color="white" bg="black">Play Now</Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    );
  }
//   function hoverHandle(){
//         setHover(true)
//   }
//   function hoverHanleOute(){
//         setHover(false)
//   }
  return (
    <>
      <Box px="2%" bg="white" zIndex={1000}>
        <Flex h="3.5rem" align="center">
          <Box><Image h="40px" w="200px" src={logodell} /></Box>
          <Box pl="50px" w="540px">
            <Input placeholder="Search Dell" />
          </Box>
          <Button p={1} zIndex={1} cursor="pointer" bg="none" opacity="0.5" ml="-40px">
            <Search2Icon boxSize="5" />
          </Button>
          <Flex opacity="0.8" gap={5} justifyContent="space-around" pl="50px" h="full">
            <Flex onMouseOver={() => setMouse(true)} h="full" align="center" _hover={{ background: "gray.100" }} cursor="pointer">
              <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#e10eaed">
                <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
              </svg>
              <Link ><Text>Sign In</Text></Link>
              <ChevronDownIcon mt={1} className={mouse ? "rotateIcon" : null} />
            </Flex>
            <Flex onMouseOver={() => setMouse(true)} h="full" align="center" _hover={{ background: "gray.100" }} cursor="pointer">
              <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#e10eaed">
                <path d="M440-120v-80h320v-284q0-117-81.5-198.5T480-764q-117 0-198.5 81.5T200-484v244h-40q-33 0-56.5-23.5T80-320v-80q0-21 10.5-39.5T120-469l3-53q8-68 39.5-126t79-101q47.5-43 109-67T480-840q68 0 129 24t109 66.5Q766-707 797-649t40 126l3 52q19 9 29.5 27t10.5 38v92q0 20-10.5 38T840-249v49q0 33-23.5 56.5T760-120H440Zm-80-280q-17 0-28.5-11.5T320-440q0-17 11.5-28.5T360-480q17 0 28.5 11.5T400-440q0 17-11.5 28.5T360-400Zm240 0q-17 0-28.5-11.5T560-440q0-17 11.5-28.5T600-480q17 0 28.5 11.5T640-440q0 17-11.5 28.5T600-400Zm-359-62q-7-106 64-182t177-76q89 0 156.5 56.5T720-519q-91-1-167.5-49T435-698q-16 80-67.5 142.5T241-462Z" />
              </svg>
              <Link to={'/contact'}><Text>Contact Us</Text></Link>
            </Flex>
            <Flex onMouseOver={() => setMouse(true)} h="full" align="center" _hover={{ background: "gray.100" }} cursor="pointer">
              <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#e10eaed">
                <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-40-82v-78q-33 0-56.5-23.5T360-320v-40L168-552q-3 18-5.5 36t-2.5 36q0 121 79.5 212T440-162Zm276-102q20-22 36-47.5t26.5-53q10.5-27.5 16-56.5t5.5-59q0-98-54.5-179T600-776v16q0 33-23.5 56.5T520-680h-80v80q0 17-11.5 28.5T400-560h-80v80h240q17 0 28.5 11.5T600-440v120h40q26 0 47 15.5t29 40.5Z" />
              </svg>
              <Text>IN/EN</Text>
              <ChevronDownIcon mt={1} className={mouse ? "rotateIcon" : null} />
            </Flex>
            <Box  onMouseOver={(e)=>setCard(true)} onMouseOut={()=>setCard(false)}>
            <Flex position={'relative'} onMouseOver={() => setMouse(true)} h="full" align="center" _hover={{ background: "gray.100" }} cursor="pointer">
              <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#e10eaed">
                <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
              </svg>
              <Text >Cart</Text>
              
              <ChevronDownIcon mt={1} className={mouse ? "rotateIcon" : null} />
              
            </Flex>
            
            </Box>
          </Flex>
        </Flex>
        {card==true ? <CardHover/> : null}
        <Flex px={3} justifyContent="space-between" py="2" w="65%">
          {newNav.map((ele, i) => (
            <Flex key={i}>
              <Link to={ele.to}>
                <Text p={2} _hover={{ background: 'gray.100', borderBlockEnd: "2px solid gray" }} opacity="0.8">
                  {ele.label} {ele.icon && <ChevronDownIcon className="rotateIcon" />}
                </Text>
              </Link>
            </Flex>
          ))}
        </Flex>
      </Box>
      
      <Slider />
    </>
  );
}
