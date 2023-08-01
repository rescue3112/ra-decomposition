/**
 * Search block
 * 
 * 
 * @public
 */

export default function Search() {
    return(
        <div className="search-block">
            <div className="logo">
                <a className="logo-link" href="https://alexwebart.github.io/ra-decomposition/">
                    <img className="logo-image" src='...' alt='...'></img>
                </a>
            </div>
            <form className="search-form">
                <ul className="search-category-list">
                    <li className="search-category-item">
                        <a className="search-category-link" href="https://alexwebart.github.io/ra-decomposition/">Видео</a>
                    </li>
                    <li className="search-category-item">
                        <a className="search-category-link" href="https://alexwebart.github.io/ra-decomposition/">Картинки</a>
                    </li>
                    <li className="search-category-item">
                        <a className="search-category-link" href="https://alexwebart.github.io/ra-decomposition/">Новости</a>
                    </li>
                    <li className="search-category-item">
                        <a className="search-category-link" href="https://alexwebart.github.io/ra-decomposition/">Карты</a>
                    </li>
                    <li className="search-category-item">
                        <a className="search-category-link" href="https://alexwebart.github.io/ra-decomposition/">Маркет</a>
                    </li>
                    <li className="search-category-item">
                        <a className="search-category-link" href="https://alexwebart.github.io/ra-decomposition/">Переводчик</a>
                    </li>
                    <li className="search-category-item">
                        <a className="search-category-link" href="https://alexwebart.github.io/ra-decomposition/">Эфир</a>
                    </li>
                    <span className="search-still">ещё</span>
                </ul>
                <input className="search-input"></input>
                <button className="btn-search">Найти</button>
            </form>
            <span className="search-postscript">Найдется все. Например, <a className="search-postscript-link" href="https://alexwebart.github.io/ra-decomposition/">фаза луны, сегодня</a></span>
        </div>
        
        
    )
}