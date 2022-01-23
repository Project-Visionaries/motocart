interface DataProps {
    id: string,
    title: string,
    data: Link[],
}
interface Link{
    id: string,
    title: string,
    onClick: ()=>void
}
const _audio = [
    {
        id: '1',
        title: 'Speakers',
        onClick: ()=>{},
    },
    {
        id: '2',
        title: 'Amplifiers',
        onClick: ()=>{},
    },
    {
        id: '3',
        title: 'Stereos',
        onClick: ()=>{},
    }
]
const _bodyParts = [
    {
        id: '1',
        title: 'Doors',
        onClick: ()=>{},
    },
    {
        id: '2',
        title: 'Fenders',
        onClick: ()=>{},
    },
    {
        id: '3',
        title: 'Hoods',
        onClick: ()=>{},
    }
]
const _exterior = [
    {
        id: '1',
        title: 'car covers',
        onClick: ()=>{},
    },
    {
        id: '2',
        title: 'Body kits',
        onClick: ()=>{},
    },
    {
        id: '3',
        title: 'Custom Grilles',
        onClick: ()=>{},
    }
]
const _interior = [
    {
        id: '1',
        title: 'Dash Kit',
        onClick: ()=>{},
    },
    {
        id: '2',
        title: 'Seat cover',
        onClick: ()=>{},
    },
    {
        id: '3',
        title: 'Sun Shades',
        onClick: ()=>{},
    }
]
const _lighting = [
    {
        id: '1',
        title: 'LED Light',
        onClick: ()=>{},
    },
    {
        id: '2',
        title: 'Headlight',
        onClick: ()=>{},
    },
    {
        id: '3',
        title: 'Fog light',
        onClick: ()=>{},
    }
]
const _performance = [
    {
        id: '1',
        title: 'Brakes',
        onClick: ()=>{},
    },
    {
        id: '2',
        title: 'Power Adders',
        onClick: ()=>{},
    },
    {
        id: '3',
        title: 'Racing Gear',
        onClick: ()=>{},
    }
]

export const accessoriesData: DataProps[] = [
    {
        id: '1',
        title: 'AUDIO',
        data: _audio,
    },
    {
        id: '2',
        title: 'BODY PARTS',
        data: _bodyParts,
    },
    {
        id: '3',
        title: 'EXTERIOR',
        data: _exterior,
    },
    {
        id: '4',
        title: 'INTERIOR',
        data: _interior,
    },
    {
        id: '5',
        title: 'LIGHTING',
        data: _lighting,
    },
    {
        id: '6',
        title: 'PERFORMANCE',
        data: _performance,
    },
]
