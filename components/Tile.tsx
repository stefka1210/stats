import React from 'react';
import styled, {css} from 'styled-components';
// import {ReactComponent as PlaySvg} from '../icons/Play.svg';

const StyledTile = styled.div<TileProps>`
    color: white;
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    scroll-snap-align: start;
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    cursor: pointer;
    /* width: 168px; */
    ${props =>
        props.tileSize === '1x2' &&
        css` 
            grid-column: auto/span 1;
            grid-row: auto/span 2;
            /* width: 168px; */
        `};
    ${props =>
        props.tileSize === '2x2' &&
        css`
            grid-column: auto/span 2;
            grid-row: auto/span 2;
            /* min-width: 336px; */
        `};
    ${props =>
        props.tileSize === '2x1' &&
        css`
            grid-column: auto/span 2;
            grid-row: auto/span 1;
            /* min-width: 336px; */
        `};
`;
const Icon = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    top: 0;
    background: rgba(0, 0, 0, 0.2);
    opacity: 0;
    transition: opacity 300ms;
    ${StyledTile}:hover & {
        opacity: 1;
    }
    svg {
        display: block;
        height: 44px;
        width: 44px;
        fill: white;
    }
`;
const BackgroundImage = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    transition: transform 300ms;
    ${StyledTile}:hover & {
        transform: scale(1.1);
    }
`;
const NewTag = styled.div`
    position: absolute;
    top: 6px;
    left: 6px;
    background: #43cc3c;
    color: white;
    border-radius: 3px;
    padding: 1px 4px;
    font-weight: 700;
    font-size: 12px;
`;
const Vendor = styled.div`
    position: absolute;
    bottom: 0px;
    left: 0px;
    right: 0px;
    background: rgba(0, 0, 0, 0.4);
    color: white;
    padding: 4px 4px;
    font-weight: 700;
    font-size: 10px;
    text-align: center;
    opacity: 0;
    transition: opacity 300ms;
    ${StyledTile}:hover & {
        opacity: 1;
    }
`;

export interface TileProps {
    /**
     * the id of the game
     */
    id: string;
    /**
     * the id of the game
     */
    category: string;
    /**
     * Size of the tile
     */
    tileSize?: '1x1' | '1x2' | '2x1' | '2x2';
    /**
     * URL of the Background-Image
     */
    thumbnailUrl: string;
    /**
     * Name of the vendor
     */
    vendorName: string;
    /**
     * true if the Games is flagged as new
     */
    isNew: boolean;
    /**
     * Optional click handler
     */
    onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
const Tile: React.FC<TileProps> = ({...props}) => {
    return (
        <StyledTile key={`${props.id} + ${props.category}`} {...props}>
            <BackgroundImage src={props.thumbnailUrl} /*loading="lazy"*/ />
            <Icon {...props}>
                {/* <PlaySvg /> */}
                huhu
            </Icon>
            {props.isNew && <NewTag>New</NewTag>}
            <Vendor>
                {props.vendorName} {props.tileSize}
            </Vendor>
        </StyledTile>
    );
};
export default Tile;
