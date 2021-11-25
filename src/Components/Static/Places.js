import perfumeImg from '../../Images/perfume.jpg';
import cosmeticimg from '../../Images/makeup.jpg';
import walletImg from '../../Images/Wallet.jpg';
import watchImg from '../../Images/watches.jpg';
import giftImg from '../../Images/Gift.jpg';
import bagImg from '../../Images/bags.jpg';
import mugImg from '../../Images/Printed mugs.jpg';
import jewelaryImg from '../../Images/jewellary.jpg';

const Services = [
    {
        title: 'Perfume',
        desc: " High quality perfumes, all men, female and unisex perfumes. Imported and local perfumes available. starting from 250 rupees." ,
        imageUrl: process.env.PUBLIC_URL + perfumeImg,
        time: 1500,
    },
    {
        title: 'Cosmetics',
        desc: "Imported and local makups, lipstick, nail polish and many other cosmetic items to maker your apperance breathtaking", 
        imageUrl: process.env.PUBLIC_URL + cosmeticimg,
    },
    {
        title: 'Wallets',
        desc: "Gents and ladies wallets, purse and card holders are available from 300 rupees",
        imageUrl: process.env.PUBLIC_URL + walletImg,
    },
    {
        title: 'Watches',
        desc: "High qaulity watches imported from USA. Designer watches and degital watches are available in our store",
        imageUrl: process.env.PUBLIC_URL + watchImg,
    },
    {
        title: 'Gifts',
        desc: "From small to large gifts available for every ocassion. Roses, vases, toys, ornements and other gifts are available from 200 rupees",
        imageUrl: process.env.PUBLIC_URL + giftImg,
    },
    {
        title: 'Bags',
        desc: "Bags suitable for men and women as their daily carry or occational fits",
        imageUrl: process.env.PUBLIC_URL + bagImg,
    },
    {
        title: 'Printed Mugs',
        desc: "Custome printed mugs for every occation. We will add anything customer needs on a mug or on a plate",
        imageUrl: process.env.PUBLIC_URL + mugImg,
    },
    {
        title: 'Jewelary',
        desc: "We have a range of jewelary selection waiting to be picked by our customers. From plastic, wood to gold",
        imageUrl: process.env.PUBLIC_URL + jewelaryImg,
    },


]

export default Services;