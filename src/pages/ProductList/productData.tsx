import { CustomCardProps } from "../../components/CustomSection"

interface ProductProps {
    id: string;
    image: string;
    title: string;
    rating: number;
    reviews: {
        review: number;
        link: string;
    };
    description: string;
    prices: {
        actualPrice: string;
        price: string;
    };
}
export const productData: ProductProps[] = [
    {
        id: '1',
        image: 'images/new/image6.jpeg',
        title: 'HTC Rhyme Sense',
        rating: 3,
        reviews: { review: 3, link: '/' },
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptates labore nam dolor minus quaerat beatae assumenda nemo, quod ad unde...`,
        prices: { actualPrice: '442.99', price: '222.99' },
    },
    {
        id: '2',
        image: 'images/new/image7.jpeg',
        title: 'Seagate 250GB HD',
        rating: 5,
        reviews: { review: 5, link: '/' },
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptates labore nam dolor minus quaerat beatae assumenda nemo, quod ad unde...`,
        prices: { actualPrice: '542.99', price: '302.99' },
    },
    {
        id: '3',
        image: 'images/new/image8.jpeg',
        title: 'HTC Auto Car',
        rating: 4,
        reviews: { review: 5, link: '/' },
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptates labore nam dolor minus quaerat beatae assumenda nemo, quod ad unde...`,
        prices: { actualPrice: '1042.99', price: '922.99' },
    },
    {
        id: '4',
        image: 'images/new/image9.jpeg',
        title: 'HTC Rhyme Sense',
        rating: 3,
        reviews: { review: 3, link: '/' },
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptates labore nam dolor minus quaerat beatae assumenda nemo, quod ad unde...`,
        prices: { actualPrice: '442.99', price: '222.99' },
    },
    {
        id: '5',
        image: 'images/new/image16.png',
        title: 'Seagate 250GB HD',
        rating: 5,
        reviews: { review: 5, link: '/' },
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptates labore nam dolor minus quaerat beatae assumenda nemo, quod ad unde...`,
        prices: { actualPrice: '542.99', price: '302.99' },
    },
    {
        id: '6',
        image: 'images/new/image15.jpeg',
        title: 'HTC Auto Car',
        rating: 4,
        reviews: { review: 5, link: '/' },
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptates labore nam dolor minus quaerat beatae assumenda nemo, quod ad unde...`,
        prices: { actualPrice: '1042.99', price: '922.99' },
    },
]

export const productItemData: CustomCardProps[] = [
    {
        reviews: 5,
        image: "images/new/image1.jpeg",
        title: 'Gorgeous Mercedes-Benz E-Class All-Terrain Luxury',
        amount: '4900.00',
        speed: '4879km',
        mode: 'Manual',
        year: '2019',
        badge1: "HOT"

    },
    {
        reviews: 2,
        image: "images/new/image2.jpeg",
        title: 'Gorgeous Mercedes-Benz E-Class All-Terrain Luxury',
        amount: '9900.00',
        speed: '4879km',
        mode: 'Auto',
        year: '2020',
    },
    {
        reviews: 4,
        image: "images/new/image3.jpeg",
        title: 'Gorgeous Mercedes-Benz E-Class All-Terrain Luxury',
        amount: '3900.00',
        speed: '4879km',
        mode: 'Auto',
        year: '2005',
    },
    {
        reviews: 3,
        image: "images/new/image6.jpeg",
        title: 'Gorgeous Mercedes-Benz E-Class All-Terrain Luxury',
        amount: '4100.00',
        speed: '4879km',
        mode: 'Aut0',
        year: '2000',
    },
    {
        reviews: 2,
        image: "images/new/image4.jpeg",
        title: 'Gorgeous Mercedes-Benz E-Class All-Terrain Luxury',
        amount: '4900.00',
        speed: '4879km',
        mode: 'Manual',
        year: '2019',
        badge1: "HOT"

    },
    {
        reviews: 4,
        image: "images/new/image5.jpeg",
        title: 'Gorgeous Mercedes-Benz E-Class All-Terrain Luxury',
        amount: '9900.00',
        speed: '4879km',
        mode: 'Auto',
        year: '2020',
    },
    {
        reviews: 3,
        image: "images/new/image7.jpeg",
        title: 'Gorgeous Mercedes-Benz E-Class All-Terrain Luxury',
        amount: '3900.00',
        speed: '4879km',
        mode: 'Auto',
        year: '2005',
    },
    {
        reviews: 3,
        image: "images/new/image8.jpeg",
        title: 'Gorgeous Mercedes-Benz E-Class All-Terrain Luxury',
        amount: '4100.00',
        speed: '4879km',
        mode: 'Aut0',
        year: '2000',
    },
]