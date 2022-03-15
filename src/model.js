import image from './assets/nurburgring.jpg'
import image2 from './assets/24h.jpg'
import {TextBlock, ColumnsBlock, ImageBlock, TitleBlock} from './classes/blocks'


const text  = `
<a href="https://nuerburgring.de/" target="_blank"> Гоночная трасса в Германии, рядом с посёлком Нюрбург. Строительство закончено весной 1927 года, первые соревнования Всеобщего немецкого автомобильного клуба состоялись 18 мая 1927 года.
`

export const model = [
    new TitleBlock('Нюрбургринг Нордшляйф', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, black, #493240)',
            color: 'red',
            padding: '1.5rem',
            'text-align': 'center'
        }
    }),
    new ImageBlock(image, {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyles: {
            width: '500px',
            height: 'auto'
        },
        alt: 'Это картинка'
    }),
    new ColumnsBlock([
        '«Нюрбургринг - это нечто! <br> Грандиозная трасса, где есть возможность получить новые незабываемые впечатления даже на таком простом автомобиле, как Renault Clio RS.',
        '«Никогда не думал, что в поворотах на скорости за 150 км/ч может быть такой держак. Автомобиль в буквальном смысле проходит повороты и шиканы, как по рельсам.',
        '«Огромное спасибо организаторам за возможность побывать на Нюрбургринге.'
    ], {
        styles: {
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            padding: '2rem',
            color: '#fff',
            'font-weight': 'bold',

        }
    }),
    new TextBlock(text, {
        styles: {
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            padding: '1rem',
            'font-weight': 'bold'
        }
    }),
    new ImageBlock(image2, {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyles: {

        },
        alt: 'Это картинка'
    }),
]