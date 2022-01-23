import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'

interface Props {

}
const slides = [
    {
        id: '0',
        url: 'images/new/image5.jpeg'
    },
    {
        id: '1',
        url: 'images/new/image9.jpeg'
    },
    {
        id: '2',
        url: 'images/new/image4.jpeg'
    },
    {
        id: '3',
        url: 'images/new/image14.jpeg'
    },
]

export const CarouselAnimation = (props: Props) => {
    const [index, setIndex] = useState(0)
    const item = slides[index]
    // using modolus creates an infinite loop when incrementing
    const increment = () => setIndex(state => (state + 1) % slides.length)
    // const timer = setInterval(() => {
    //     increment()
    //     clearTimeout(timer)
    // }, 10000)

    const prop = useSpring({

    })

    return (
        <div
         key={item.id}
         style={{
             backgroundImage: `url(${item.url})`,
             backgroundSize: 'cover',

             height: '100vh'

         }}
        >

        </div>
    )
}
