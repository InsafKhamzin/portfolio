import React from 'react'
import { Modal, Frame } from '@react95/core'
import ContentFactory from './NotepadContent/ContentFactory';

function Notepad({ closeNotepad, selectedItem, isMobile }) {
    return (
        <Modal
            icon="notepad"
            title={`Notepad - ${selectedItem.name}`}
            closeModal={closeNotepad}
            buttons={[{ value: "Close", onClick: closeNotepad }]}
            style={{
                left: isMobile ? '5%' : '50%',
                top: isMobile ? '3%' : '15%',
                width: isMobile ? '90%' : 450,
            }}
            menu={[
                { name: 'File', list: [] },
                { name: 'Edit', list: [] }
            ]}>
            <Frame
                bg="white"
                boxShadow="in"
                height="100%"
                padding={20}
                style={{
					overflowY: "auto",
					maxHeight: "60vh",
				}}
            >
            <ContentFactory id={selectedItem.id} isMobile={isMobile} />
            </Frame>
        </Modal >
    )
}

export default Notepad
