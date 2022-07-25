import React from 'react'

import style from '../../sass/components/Portfolios.module.scss'

export const Tabs = ({items}) => {
    const [active, setActive] = React.useState(0);

    const openTab = e => setActive(+e.target.dataset.index);

    const TabContent = (items) => (
        <div className="tabcontent">
            <h3>{items.title}</h3>
            <p>{items.content}</p>
        </div>
    );

    return (
        <div>
            <div className={style.tabs}>
                {items.map((n, i) => (
                    <button
                        className={`${style.tablinks} ${i === active ? style.active : ''}`}
                        onClick={openTab}
                        data-index={i}
                        key={i}
                    >{n.title}</button>
                ))}
            </div>
            {items[active] && <TabContent {...items[active]} />}
        </div>
    );
}
