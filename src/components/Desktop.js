import React, { useState, useContext, useEffect } from 'react'
import Explorer from './Explorer'
import Notepad from './Notepad';
import DataContext from '../contexts/dataContext'
import Shortcuts from './Shortcuts';
import Player from './Player';

function Desktop() {

    const isMobile = window.innerWidth < 850;

    const data = useContext(DataContext);
    const [explorerOpened, toggleExplorer] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [notepadOpened, toggleNotepad] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(
        () => {
            const files = data.getItems();
            setItems(files);
            toggleExplorer(true);
            setSelectedItem(files[0]);
            toggleNotepad(!isMobile);
        }, [data, isMobile]);


    const closeExplorer = () => {
        toggleExplorer(false);
    };

    const openExlorer = () => {
        toggleExplorer(true);
    };

    const closeNotepad = () => {
        toggleNotepad(false);
    };

    const openNotepad = (item) => {
        setSelectedItem(item)
        toggleNotepad(true);
    };

    return (
        <React.Fragment>
            <Shortcuts openExplorer={openExlorer} />
            {
                explorerOpened && (
                    <Explorer items={items} closeExplorer={closeExplorer} openNotepad={openNotepad} isMobile={isMobile} />
                )
            }
            {
                notepadOpened && (
                    <Notepad closeNotepad={closeNotepad} selectedItem={selectedItem} isMobile={isMobile} />
                )
            }
            <Player />
        </React.Fragment>
    )
}

export default Desktop
