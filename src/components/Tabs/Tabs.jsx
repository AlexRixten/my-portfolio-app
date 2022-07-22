import React from 'react'

export const Tabs = ({items}) => {
    const [active, setActive] = React.useState(null);

    const openTab = e => setActive(+e.target.dataset.index);

    const TabContent = (items) => (
        <div className="tabcontent">
            <h3>{items.title}</h3>
            <p>{items.content}</p>
        </div>
    );

    return (
        <div>
            <div className="tab">
                {items.map((n, i) => (
                    <button
                        className={`tablinks ${i === active ? 'active' : ''}`}
                        onClick={openTab}
                        data-index={i}
                    >{n.title}</button>
                ))}
            </div>
            {items[active] && <TabContent {...items[active]} />}
        </div>
    );
}
