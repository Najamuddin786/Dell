
import {Box,Flex,Image,Spacer,Text,Button,AspectRatio} from '@chakra-ui/react'
import { ChevronDownIcon, Search2Icon, ArrowBackIcon, ArrowForwardIcon ,ChevronRightIcon} from '@chakra-ui/icons';
import { Link } from 'react-router-dom'
export default function Home(){
    let array=[
        {
            img:"https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/en/product-wayfinder/dell-homepage-product-wayfinding-cold-laptops-xs9320.png?fmt=png-alpha&wid=480&hei=360",
            title:"Laptops",
            to:'/'
        },
        {
            img:"https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/en/product-wayfinder/dell-homepage-product-wayfinding-warm-consumer-inspiron-desktops-in7720.png?fmt=png-alpha&wid=480&hei=360",
            title:"Desktops & All-in-Ones",
            to:'/'
        },
        {
            img:"https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/en/product-wayfinder/uhp-wayfinder-monitor-s2722qc-480x360.png?fmt=png-alpha&wid=480&hei=360",
            title:"Monitors",
            to:'/'
        },
        {
            img:"https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/en/product-wayfinder/dell-homepage-product-wayfinding-cold-pc-accessories-wb7022.png?fmt=png-alpha&wid=480&hei=360",
            title:"PC Accessories",
            to:'/'
        },
        {
            img:"https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/en/product-wayfinder/dell-homepage-product-wayfinding-cold-apex-multicloud-aas-xs9315-stocksy2607481.jpg?fmt=png-alpha&wid=480&hei=360",
            title:"APEX Multicloud & aaS",
            to:'/'
        },
        {
            img:"https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/en/product-wayfinder/uhp-wayfinder-enterprise-server-r760xa-480x360.png?fmt=png-alpha&wid=480&hei=360",
            title:"IT Infrastructure",
            to:'/'
        },
        {
            img:"https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/en/product-wayfinder/dell-homepage-product-wayfinding-cold-gen-ai-solutions-getty1537473222.jpg?fmt=png-alpha&wid=480&hei=360",
            title:"AI Solutions",
            to:'/'
        },
        {
            img:"https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/en/product-wayfinder/uhp-wayfinder-lifestyle-edge-480x360.jpg?fmt=png-alpha&wid=480&hei=360",
            title:"Edge Solutions",
            to:'/'
        },
    ]
    return <>
            <Flex justifyContent={'space-between'} flexWrap={'wrap'} gap={2} bg={'black'} px={'10%'} py={'2%'}>
                {array.map((ele,i)=>{
                    return <Link key={i}>
                        <Box bg={'#c7ecee'} w={'240px'} position={'relative'}>
                            <Image src={ele.img}/>
                            <Text px={'3'} py={'1'} bg={'black'} color={'white'} position={'absolute'} top={'0px'}>{ele.title}</Text>
                        </Box>
                    </Link>
                })}
            </Flex>
            <Flex flexDirection={'column'} color={'white'} h='70vh'
              flexWrap={'wrap'} gap={2} bg={'#1D2C3B'} px={'10%'} py={'2%'}>
                <Text py={2} fontSize={'1.6rem'}>For You</Text>
                <Flex justifyContent={'space-between'}>
                    <Box position={'relative'} p={5} h={'50vh'} w={'40%'} bg='#1D2C4B'>
                    <Text fontSize={'1.8rem'}>Best Seller</Text>
                    <Text>Get our best laptops for less.</Text>
                    <Image w='30%' src={'https://i.dell.com/sites/csimages/UberHomePage_Imagery/all/xps-13-9320-15-9520.png'}/>
                    <Spacer/>
                    <Link><Text textDecoration={'underline'} bottom={'20px'} position={'absolute'}>Shop Now</Text></Link>
                    
                    </Box>
                    <Box position={'relative'} p={5} h={'50vh'} w={'27%'} bg='#1D2C4B'>
                    <Text fontSize={'1.8rem'}>Student Purchase Program</Text>
                    <Text>Get Special discounts under our Student Purchase program.</Text>
               
                    <Spacer/>
                    <Link><Text textDecoration={'underline'} bottom={'20px'} position={'absolute'}>Shop Now</Text></Link>
                    
                    </Box>
                    <Box position={'relative'} p={5} h={'50vh'} w={'27%'} bg='#1D2C4B'>
                    <Text fontSize={'1.8rem'}>Access My Account</Text>
                    <Text>Sign in to your account to track & view your orders.</Text>
                    
                    <Spacer/>
                    <Link><Text textDecoration={'underline'} bottom={'20px'} position={'absolute'}>Sing In</Text></Link>
                    
                    </Box>
                </Flex>
                
            </Flex>
            
            {/* ________________________ */}
            <Flex flexDir={'column'} w={'100%'} h={'140vh'} bg={'black'}>
                <Box  py='2%' px={'10%'} color={'white'}>
                    <Text>Dell Technologies Showcase</Text>
                    <Text fontWeight={300} fontSize={'2rem'}>Featured Products and Solutions</Text>
                </Box>
                <Flex align={'center'} p={'4%'} justifyContent={'space-between'}>
                <Button><ArrowBackIcon color={'#0984e3'}/></Button>
                
                <Flex position={'relative'}>
                    <Box p={5} display={'flex'} flexDir={'column'} justifyContent={'space-between'} borderRadius={'md'} top={'25%'} left={'-200px'} position={'absolute'} zIndex={950} w={'400px'} h={'300px'} bg={'white'} color={'black'}>
                        <Text>Dell</Text>
                        
                        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eveniet repudiandae aperiam, a quisquam facilis aspernatur sint modi eaque officiis.</Text>
                       
                        <Box>
                        <Link><Text color={'#0984e3'}>Shop Now</Text></Link>
                        <Link><Text color={'#0984e3'}>Learn More</Text></Link>
                        </Box>

                    </Box>
                    <Box marginRight={'-300px'}><Image w={'90%'} src={'https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/apj/promo-carousel/show-cons-dell-g-series-5530nt-uhp-2502-04-in-promo-carousel-lf-1208x906.jpg?wid=864&hei=648'}/></Box>
                </Flex>
                <Button><ArrowForwardIcon color={'#0984e3'}/></Button>
                
                     
                </Flex>

            </Flex>
            {/* ________________ VIDEO SECTION */}
            <Flex position={'relative'} align={'center'} justifyContent={'center'} flexDirection='column' color={'white'} bgPosition={'center'} alignItems={'center'} bgSize={'100%'} w={'100vw'} height={'85vh'}  bgRepeat={'no-repeat'} bgImage={'https://www.techexplorist.com/wp-content/uploads/2017/08/Dark-Matter-.jpg'}>

            <Flex flexDir={'column'} align='center' gap={1}>
                <Text fontSize={'24px'}>DELL TECHNOLOGIES + MERMAIDS</Text>
                <Text fontSize={'32px'}><h1>Creating More Equal Ocean Access</h1></Text>
                <Text fontSize={'16px'}>
                Technology gives freediver and ocean advocate, Zandile Ndhlovu, freedom to grow The Black Mermaid ,<br /> Foundation and continue to make spaces where everyone belongs.
                </Text>
                <Button mt={4} bgColor={'#0984e3'} _hover={{bgColor:"#74b9ff"}} color={'white'}>Play Now</Button>
                <Link><Text m={2} textDecoration={'underline'}>View more stories <ArrowForwardIcon /></Text></Link>
            </Flex>
            <Button position={'absolute'} bottom={'50px'} right={'150px'} bgColor={'#2d3436'} _hover={{bgColor:"#b2bec3"}} color={'white'}>Play Now</Button>



            </Flex>

        
    </>
}