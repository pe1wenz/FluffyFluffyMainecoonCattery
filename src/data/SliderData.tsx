import ImageFive from '../assets/images/slider_imgs/slider_img5_Large.jpeg'
import ImageThree from '../assets/images/slider_imgs/slider_img3_Large.jpeg'
import ImageFour from '../assets/images/slider_imgs/slider_img4_Large.jpeg'

import LuckyCover from '../assets/images/adult_imgs/Lucky_img_Large.jpeg'
import OrangeCover from '../assets/images/adult_imgs/Orange_img_Large.jpeg'
import SesameCover from '../assets/images/adult_imgs/Sesame_img_Large.jpeg'

import LuckyDNA from '../assets/images/adult_imgs/Lucky_Genetic_Report.pdf'
import OrangeDNA from '../assets/images/adult_imgs/Orange_Genetic_Report.pdf'
import SesameDNA from '../assets/images/adult_imgs/Sesame_Genetic_Report.pdf'

export const SliderData = [
    {
        title: 'Kittens',
        comment: 'See Our Current and Past Kittens',
        path: '/kittens',
        label: 'View Kittens',
        image: ImageFour,
        alt:'home kitten slide'
    },
    {
        title: 'Our Cats',
        comment: 'See Our Lovely King and Queens',
        path: '/our-cats',
        label: 'View',
        image: ImageFive,
        alt:'home king and queens slide'
    },
    {
        title: 'Owning',
        comment: 'Information about owning our kittens',
        path: '/owning',
        label: 'Instructions',
        image: ImageThree,
        alt:'home owning information slide'
    }
]

export const OurCatsSliderData = [
    {
        title: 'Lucky',
        comment: 'King',
        path: LuckyDNA,
        label: 'DNA TestResult',
        image: LuckyCover,
        alt:'king lucky slide'
    },
    {
        title: 'Orange',
        comment: 'Queen',
        path: OrangeDNA,
        label: 'DNA TestResult',
        image: OrangeCover,
        alt:'queen orange slide'
    },
    {
        title: 'Sesame',
        comment: 'Queen',
        path: SesameDNA,
        label: 'DNA TestResult',
        image: SesameCover,
        alt:'queen sesame slide'
    }
]