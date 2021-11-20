import perfumeImg from '../../Images/perfume.jpg';
import cosmeticimg from '../../Images/makeup.jpg';
import walletImg from '../../Images/Wallet.jpg';
import watchImg from '../../Images/watches.jpg';
import giftImg from '../../Images/Gift.jpg';
import bagImg from '../../Images/bags.jpg';
import mugImg from '../../Images/Printed mugs.jpg';
import jewelaryImg from '../../Images/jewellary.jpg';

const Places = [
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
    }
]

export default Places;