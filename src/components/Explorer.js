import React from 'react'
import styled from 'styled-components'
import { Modal, Frame } from '@react95/core'
import Item from './Item'

const FilesWrapper = styled.div`
	display: flex;
	grid-template-columns: repeat(4, 1fr);
	flex-wrap: wrap;
`;


function Explorer({ items, closeExplorer, openNotepad, isMobile }) {
    return (
        <Modal
            icon="windows_explorer"
            title="Explorer - Insaf Khamzin"
            closeModal={closeExplorer}
            style={{
                left: isMobile ? '5%' : '15%',
                top: '30%',
                width: isMobile ? '90%' : 400,
            }}
            menu={[
                { name: 'File', list: [] },
                { name: 'Edit', list: [] },
                { name: 'Help', list: [] },
            ]}>
            <Frame
                bg="white"
                boxShadow="in"
                height="100%"
            >
                <FilesWrapper>
                    {
                        items.map((item) => (
                            <Item
                                key={item.id}
                                item={item}
                                openNotepad={openNotepad}
                            />
                        ))
                    }
                </FilesWrapper>
            </Frame>
        </Modal>
    )
}

export default Explorer
