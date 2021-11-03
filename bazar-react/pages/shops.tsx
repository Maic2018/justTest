import FlexBox from '@component/FlexBox'
import ShopCard1 from '@component/shop/ShopCard1'
import { H2 } from '@component/Typography'
import { Grid } from '@material-ui/core'
import React from 'react'

const ShopList = () => {
  return (
    <>
    {/*<NavbarLayout>*/}
      <H2 mb={3} sx={{color: 'white'}}>Comércios</H2>

      <Grid container spacing={3}>
        {shopList.map((item, ind) => (
          <Grid item lg={4} sm={6} xs={12} key={ind}>
            <ShopCard1 {...item} />
          </Grid>
        ))}
      </Grid>

      <FlexBox
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
        mt={4}
      >
        {/*<Span color="grey.600">Showing 1-9 of 300 Shops</Span>*/}
        {/*<Pagination count={shopList.length} variant="outlined" color="primary" />*/}
      </FlexBox>
    {/*</NavbarLayout>*/}
    </>
  )
}

const shopList = [
  {
    name: 'Padaria Pão e Trigo',
    //rating: 5,
    address: 'R. Bento, 20 - São Jorge, Belo Horizonte - MG, 30451-182',
    phone: '(31) 3327-8239',
    //coverImgUrl: '/assets/images/banners/cycle.png',
    coverImgUrl: '/assets/images/banners/bakery/padariaPaoeTrigo.png',
    //imgUrl: '/assets/images/faces/propic.png',
    imgUrl: '/assets/images/banners/bakery/padariaPaoeTrigo.png',
    //shopUrl: '/shop/53244445',
  },
  {
    name: 'Varejao Do Didi',
    //rating: 5,
    address: 'Rua Belfort Roxo, 10 - São Jorge, Belo Horizonte - MG, 30431-380',
    phone: '(31) 3332-5694',
    //coverImgUrl: '/assets/images/banners/banner.png',
    coverImgUrl: '/assets/images/banners/supermarket/varejaoDidi.png',
    //imgUrl: '/assets/images/faces/propic(1).png',
    imgUrl: '/assets/images/banners/supermarket/varejaoDidi.png',
    //shopUrl: '/shop/53244445',
  },
  {
    name: 'Momento do Frango Assado',
    //rating: 4.5,
    address: 'Rua Belfort Roxo, 8 - Nova Granada, Belo Horizonte - MG, 30431-375',
    phone: '(31) 3786-7922',
    //coverImgUrl: '/assets/images/banners/banner-3.png',
    //imgUrl: '/assets/images/faces/propic(2).png',
    coverImgUrl: '/assets/images/banners/others/momentoDoFrangoAssado.png',
    imgUrl: '/assets/images/banners/others/momentoDoFrangoAssado.png',
    //shopUrl: '/shop/53244445',
  },
  {
    name: 'Construbento Utilidades',
    //rating: 4.5,
    address: 'R. Bento, 53 - São Jorge, Belo Horizonte - MG, 30451-182',
    phone: '(31) 99352-8924',
    //coverImgUrl: '/assets/images/banners/banner-3.png',
    //imgUrl: '/assets/images/faces/propic(2).png',
    coverImgUrl: '/assets/images/banners/constructionMaterial/constructionMaterial.png',
    imgUrl: '/assets/images/banners/constructionMaterial/constructionMaterial.png',
    //shopUrl: '/shop/53244445',
  },
  {
    name: 'Ana Kamile Esmalteria',
    //rating: 4.5,
    address: 'R. Bento, 73 - São Jorge, Belo Horizonte - MG, 30451-182',
    phone: ' - ',
    //coverImgUrl: '/assets/images/banners/banner-3.png',
    //imgUrl: '/assets/images/faces/propic(2).png',
    coverImgUrl: '/assets/images/banners/enamelShop/anaKamileEsmalteria.png',
    imgUrl: '/assets/images/banners/enamelShop/anaKamileEsmalteria.png',
    //shopUrl: '/shop/53244445',
  },
  {
    name: 'Loro Lanches',
    //rating: 4.5,
    address: 'São Jorge 1ª Seção, Belo Horizonte - State of Minas Gerais, 30451-185',
    phone: '(31) 3586-7274',
    //coverImgUrl: '/assets/images/banners/banner-3.png',
    //imgUrl: '/assets/images/faces/propic(2).png',
    coverImgUrl: '/assets/images/banners/others/loroLanches.png',
    imgUrl: '/assets/images/banners/others/loroLanches.png',
    //shopUrl: '/shop/53244445',
  },
  {
    name: 'Cachorro Quente Self Service Do Kiki',
    //rating: 4.5,
    address: 'R. Bento, 40 - São Jorge, Belo Horizonte - MG, 30451-182',
    phone: '(31) 3586-7274',
    //coverImgUrl: '/assets/images/banners/banner-3.png',
    //imgUrl: '/assets/images/faces/propic(2).png',
    coverImgUrl: '/assets/images/banners/others/cachorroQuenteSelfServiceDoKiki.png',
    imgUrl: '/assets/images/banners/others/cachorroQuenteSelfServiceDoKiki.png',
    //shopUrl: '/shop/53244445',
  },
  {
    name: 'Garagem Beleza',
    //rating: 4.5,
    address: 'Rua Estrada Nova, 115 - São Jorge, Belo Horizonte - MG, 30451-225',
    phone: ' - ',
    //coverImgUrl: '/assets/images/banners/banner-3.png',
    //imgUrl: '/assets/images/faces/propic(2).png',
    coverImgUrl: '/assets/images/banners/others/garagemDaBeleza.png',
    imgUrl: '/assets/images/banners/others/garagemDaBeleza.png',
    //shopUrl: '/shop/53244445',
  },
  {
    name: 'Ana Luiza Modas E Acessórios',
    //rating: 4.5,
    address: 'Rua Estrada Nova, 357A - São Jorge, Belo Horizonte - MG, 30451-225',
    phone: ' - ',
    //coverImgUrl: '/assets/images/banners/banner-3.png',
    //imgUrl: '/assets/images/faces/propic(2).png',
    coverImgUrl: '/assets/images/banners/others/anaLuizaModasEAcessorios.png',
    imgUrl: '/assets/images/banners/others/anaLuizaModasEAcessorios.png',
    //shopUrl: '/shop/53244445',
  },
  {
    name: 'Constant Shoppers',
    rating: 4,
    address: '845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark',
    phone: '(613) 343-9004',
    coverImgUrl: '/assets/images/banners/banner-4.png',
    imgUrl: '/assets/images/faces/propic(3).png',
    //: '/shop/53244445',
  },
  /*{
    name: 'Keyboard Kiosk',
    rating: 5,
    address: '845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark',
    phone: '(613) 343-9004',
    coverImgUrl: '/assets/images/banners/banner-5.png',
    imgUrl: '/assets/images/faces/propic(4).png',
    shopUrl: '/shop/53244445',
  },
  {
    name: 'Anytime Buys',
    rating: 5,
    address: '845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark',
    phone: '(613) 343-9004',
    coverImgUrl: '/assets/images/banners/banner-6.png',
    imgUrl: '/assets/images/faces/propic(5).png',
    shopUrl: '/shop/53244445',
  },
  {
    name: 'Word Wide Wishes',
    rating: 4,
    address: '845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark',
    phone: '(613) 343-9004',
    coverImgUrl: '/assets/images/banners/banner-7.png',
    imgUrl: '/assets/images/faces/propic(6).png',
    shopUrl: '/shop/53244445',
  },
  {
    name: 'Cybershop',
    rating: 5,
    address: '845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark',
    phone: '(613) 343-9004',
    coverImgUrl: '/assets/images/banners/banner-8.png',
    imgUrl: '/assets/images/faces/propic(7).png',
    shopUrl: '/shop/53244445',
  },
  {
    name: 'Scarlett Beauty',
    rating: 5,
    address: '845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark',
    phone: '(613) 343-9004',
    coverImgUrl: '/assets/images/banners/banner-9.png',
    imgUrl: '/assets/images/faces/propic(8).png',
    shopUrl: '/shop/53244445',
  },*/
]

export default ShopList
