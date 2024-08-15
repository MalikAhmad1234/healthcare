import { Stack, Button, Collapse, IconButton } from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import { useState } from 'react';
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from 'react-router-dom';




const IconsWithContent=(props)=>{
    const {icon1,icon2,icon3,icon4,icon5,icon6,icon7,icon8,icon9,icon10,icon11,icon12,icon13,
           route1,route2,route3,route4,route5,route6,route7,route8,route9,route10,route11,route12,route13,
        text1,text2,text3,text4,text5,text6,text7,text8,text9,text10,text11,text12,text13, title, name1, 
        name2,name3,name4,name5,name6,name7,name8,title2,secondmenu1,secondmenu2,secondmenu3,secondmenu4,
        secondmenu5,secondmenu6,secondmenu7,secondmenu8,heading1,heading2,heading3,heading4,heading5, 
        title3, thirdmenu1,thirdmenu2,thirdmenu3,thirdmenu4,thirdmenu5, title4,faq1,faq2,faq3,faq4,faq5,
        faqimg1,faqimg2,faqimg3,faqimg4,faqimg5,pillarsroute1,pillarsroute2,pillarsroute3,pillarsroute4,pillarsroute5, 
        weofferlink1, weofferlink2, weofferlink3, weofferlink4, weofferlink5 , 
        faqlink1,faqlink2,faqlink3,faqlink4,faqlink5,
        faqdesc1, faqdesc2, faqdesc3, faqdesc4, faqdesc5, faqoptlink1, faqoptlink2, faqoptlink3, faqoptlink4, faqoptlink5}=props
    
        const [openMenu, setOpenMenu] = useState({});

        const handleToggle = (menu) => {
          setOpenMenu((prev) => ({ ...prev, [menu]: !prev[menu] }));
        };

        const menus = [
            {
              label: title,
              options: [
                { icon: icon1, text: text1, route: route1 },
                { icon: icon2, text: text2, route: route2 },
                { icon: icon3, text: text3, route: route3 },
                { icon: icon4, text: text4, route: route4 },
                { icon: icon5, text: text5, route: route5 },
                { icon: icon6, text: text6, route: route6 },
                { icon: icon7, text: text7, route: route7 },
                { icon: icon8, text: text8, route: route8 },
                { icon: icon9, text: text9, route: route9 },
                { icon: icon10, text: text10, route: route10 },
                { icon: icon11, text: text11, route: route11 },
                { icon: icon12, text: text12, route: route12 },
                { icon: icon13, text: text13, route: route13 },
              ],
            },
            {
                label: title2,
                options: [
                  { icon: secondmenu1, text: name1, route : pillarsroute1 },
                  { icon: secondmenu2, text: name2, route : pillarsroute2},
                  { icon: secondmenu3, text: name3,route : pillarsroute3},
                  { icon: secondmenu4, text: name4,route : pillarsroute4 },
                  { icon: secondmenu5, text: name5,route : pillarsroute5 },
                  { icon: secondmenu6, text: name6,},
                  { icon: secondmenu7, text: name7, },
                  { icon: secondmenu8, text: name8, },
            
                ],
              },
              
              {
                label: title3,
                options: [
                  { icon: thirdmenu1, text: heading1,route : weofferlink1 },
                  { icon: thirdmenu2, text: heading2, route : weofferlink2},
                  { icon: thirdmenu3, text: heading3, route : weofferlink3 },
                  { icon: thirdmenu4, text: heading4, route : weofferlink4 },
                  { icon: thirdmenu5, text: heading5, route : weofferlink5 },
               
                ],
              },
              {
                label: title4,
                options: [
                 
                    { icon: faqimg1, text: faq1,route : faqlink1 , text2 :'FAQ' ,desc:faqdesc1 , faqoptlink :  faqoptlink1},
                    { icon: faqimg2, text: faq2,route : faqlink2, text2 :'FAQ',desc:faqdesc2 ,faqoptlink :  faqoptlink2},
                    { icon: faqimg3, text: faq3,route : faqlink3, text2 :'FAQ' ,desc:faqdesc3 ,faqoptlink :  faqoptlink3},
                    { icon: faqimg4, text: faq4,route : faqlink4 ,text2 :'FAQ',desc:faqdesc4 ,faqoptlink :  faqoptlink4},
                    { icon: faqimg5, text: faq5,route : faqlink5 ,text2 :'FAQ',desc:faqdesc5 ,faqoptlink :  faqoptlink5},
                ],
              },
            
          ];
          
          const filteredMenus = menus
          .filter(menu => menu.label)
          .map(menu => ({
              ...menu,
              options: menu.options.filter(option => option.text)
          }));
    return(<>
    <Stack direction={'column'}  px={2} py={2} >
      {filteredMenus.map((menu, index) => (
        <div key={index}>
          <Button 
            onClick={() => handleToggle(menu.label)} 
            endIcon={openMenu[menu.label] ? <IoMdArrowDropdown /> : <IoMdArrowDropright/>}
            sx={{ justifyContent:"left", textAlign:'start' ,width: '100%' , color:'black', fontSize:'12px', fontWeight:'bold' }}
          >
            {menu.label}
          </Button>
          <Collapse in={openMenu[menu.label]}>
            <Stack direction={'column'} spacing={1.5} sx={{marginTop:'2%'}}>
              {menu.options.map((option, idx) => (
                
                <Stack direction="row" spacing={2} key={idx} alignItems='center'>
                  <img style={{ width: '50px' }} src={option.icon} alt="" />
                  <div style={{display:'flex',flexDirection :'column',}}>
                  <Link style={{ color: 'unset', fontSize: '11px' }} to={option.route}>{option.text}</Link>
                  <Link style={{ color: 'unset', fontSize: '9px',  }} >{option.desc}</Link>
                  <Link style={{ color: 'unset', fontSize: '9px', textDecoration: 'underline' }} to={option.faqoptlink}>{option.text2}</Link>
                  </div>
                </Stack>
              ))}
            </Stack>
          </Collapse>
        </div>
      ))}
    </Stack>
    {/* <Stack direction={'column'} spacing={2} px={2} py={2}>
        <Stack direction="row" spacing={2}>
            <img style={{ width: '27px' }}  src={icon1} alt="" />
            <Link  style={{color:'unset',fontSize:'11px'}} to={route1}>{text1}</Link>
        </Stack>
        <Stack direction="row" spacing={2}>
            <img style={{ width: '27px' }} src={icon2} alt="" />
            <Link  style={{color:'unset',fontSize:'11px'}} to={route2}>{text2}</Link>
        </Stack>
        <Stack direction="row" spacing={2}>
            <img style={{ width: '27px' }} src={icon3} alt="" />
            <Link  style={{color:'unset',fontSize:'11px'}} to={route3}>{text3}</Link>
        </Stack>
        <Stack direction="row" spacing={2}>
            <img style={{ width: '27px' }} src={icon4} alt="" />
            <Link  style={{color:'unset',fontSize:'11px'}} to={route4}>{text4}</Link>
        </Stack>
        <Stack direction="row" spacing={2}>
            <img style={{ width: '27px' }} src={icon5} alt="" />
            <Link  style={{color:'unset',fontSize:'11px'}} to={route5}>{text5}</Link>
        </Stack>
        <Stack direction="row" spacing={2}>
            <img style={{ width: '27px' }} src={icon6} alt="" />
            <Link  style={{color:'unset',fontSize:'11px'}} to={route6}>{text6}</Link>
        </Stack>
        <Stack direction="row" spacing={2}>
            <img style={{ width: '27px' }} src={icon7} alt="" />
            <Link  style={{color:'unset',fontSize:'11px'}} to={route7}>{text7}</Link>
        </Stack>
        <Stack direction="row" spacing={2}>
            <img style={{ width: '27px' }} src={icon8} alt="" />
            <Link  style={{color:'unset',fontSize:'11px'}} to={route8}>{text8}</Link>
        </Stack>
        <Stack direction="row" spacing={2}>
            <img style={{ width: '27px' }} src={icon9} alt="" />
            <Link  style={{color:'unset',fontSize:'11px'}} to={route9}>{text9}</Link>
        </Stack>
        <Stack direction="row" spacing={2}>
            <img style={{ width: '27px' }} src={icon10} alt="" />
            <Link  style={{color:'unset',fontSize:'11px'}} to={route10}>{text10}</Link>
        </Stack>
        <Stack direction="row" spacing={2}>
            <img style={{ width: '27px' }} src={icon11} alt="" />
            <Link  style={{color:'unset',fontSize:'11px'}} to={route11}>{text11}</Link>
        </Stack>
        <Stack direction="row" spacing={2}>
            <img style={{ width: '27px' }} src={icon12} alt="" />
            <Link  style={{color:'unset',fontSize:'11px'}} to={route12}>{text12}</Link>
        </Stack>
        <Stack direction="row" spacing={2}>
            <img style={{ width: '27px' }} src={icon13} alt="" />
            <Link  style={{color:'unset',fontSize:'11px'}} to={route13}>{text13}</Link>
        </Stack>
        

    </Stack> */}
    </>)
}
export default IconsWithContent