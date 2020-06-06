import React, { useEffect, useState, useContext } from 'react'
import DataContext from '../../contexts/dataContext'
import About from './About'
import Resume from './Resume'
import Skills from './Skills'
import Contact from './Contact'
import Projects from './Projects'

function ContentFactory({ id, isMobile }) {
    const data = useContext(DataContext);
    const [item, setItem] = useState(null);

    useEffect(() => {
        const file = data.getItem(id);
        setItem(file);
    }, [id, data]);

    if (item === null) {
        return (<div></div>);
    }

    switch (item.id) {
        case 'about':
            return <About content={item.content} />
        case 'resume':
            return <Resume content={item.content} />
        case 'skills':
            return <Skills content={item.content} isMobile={isMobile} />
        case 'contact':
            return <Contact content={item.content} />
        case 'projects':
            return <Projects content={item.content} />
        default:
            return (<div></div>);
    }

}

export default ContentFactory
