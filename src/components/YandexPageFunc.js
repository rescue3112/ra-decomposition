import BanerMarketing from "./BanerMarketingBlockFunc";
import NewsBlocks from "./NewsBlocksFunc";
import Search from "./SearchBlockFunc";
import YandexAdvertising from "./YandexAdvertisingBlockFunc";
import InfoBlocks from "./InfoBlocksFunc";

/**
 * The main search page
 * 
 * @param {date} // is the main source of content
 * @param {src, url, href} // link to image or resource
 * @param {alt, title, name, type, text, bold, time, program, chanel, category} // String
 * @param {cost, difference, temp} // Number
 * @param {icon} // Symbol
 * 
 * @public
 */

export default function YandexPage() {

    const data = {
        news: [
            {
                favicon: {
                    src: '',
                    alt: '',
                },
                title: '',
            }
        ],
        assets: [{
            name: '',
            cost: '',
            difference: '',
        }],
        advertising: {
            text: '', 
            src: '', 
            title: '',
        },
        baner: {
            href: 'https://alexwebart.github.io/ra-decomposition/', 
            src: '', 
            alt: '',
        },
        infoBlocks: [
            {
                type: 'wether',
                title: 'Погода',
                href: 'https://alexwebart.github.io/ra-decomposition/', 
                url: '', 
                temp: '', 
                text: '',
            },
            {
                type: 'visit',
                title: 'Посещаемое',
                listLink: [
                    {
                        href: 'https://alexwebart.github.io/ra-decomposition/',
                        bold: '',
                        text: 'о сталинках',
                    },
                    {
                        href: 'https://alexwebart.github.io/ra-decomposition/',
                        bold: '',
                        text: 'люстры',
                    },
                    {
                        href: 'https://alexwebart.github.io/ra-decomposition/',
                        bold: '',
                        text: 'привод',
                    },
                ], 
            },
            {
                type: 'map',
                title: 'Карта Германии',
                listLink: [
                    {
                        href: 'https://alexwebart.github.io/ra-decomposition/',
                        text: '',
                    },
                ], 
            },
            {
                type: 'TVprogram',
                title: 'Телепрограмма',
                listLink: [
                    {
                        href: 'https://alexwebart.github.io/ra-decomposition/',
                        time: '',
                        program: 'ТНТ.Best',
                        chanel: '',
                    },
                    {
                        href: 'https://alexwebart.github.io/ra-decomposition/',
                        time: '',
                        program: 'Джунгли',
                        chanel: '',
                    },
                    {
                        href: 'https://alexwebart.github.io/ra-decomposition/',
                        time: '',
                        program: 'Наедине со всеми',
                        chanel: '',
                    },
                ], 
            },
            {
                type: 'broadcast',
                title: 'Эфир',
                listLink: [
                    {
                        href: 'https://alexwebart.github.io/ra-decomposition/',
                        icon: '',
                        name: 'Управление',
                        category: '',
                    },
                    {
                        href: 'https://alexwebart.github.io/ra-decomposition/',
                        icon: '',
                        name: 'Ночь',
                        category: '',
                    },
                    {
                        href: 'https://alexwebart.github.io/ra-decomposition/',
                        icon: '',
                        name: 'Андрей',
                        category: '',
                    },
                ], 
            },
        ]
    }

    return (
        <>
            <div className="page-top">
                <NewsBlocks {...data}>
                    {data.news.map(item => <li key={item.title}><img src={item.favicon.src} alt={item.favicon.alt}/><a href="https://alexwebart.github.io/ra-decomposition/">{item.title}</a></li>)}
                </NewsBlocks>
                <YandexAdvertising advertising={data.advertising}/>
            </div>
            <Search>

            </Search>
            <div className="page-bottom">
                <BanerMarketing baner={data.baner}/>
                <InfoBlocks {...data}>

                </InfoBlocks>
            </div>
            
        </>
    )
}