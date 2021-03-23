import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';

import Tile, {TileProps} from '../components/Tile';

export default {
    title: 'Example/Tile',
    component: Tile
} as Meta;

const Template: Story<TileProps> = args => <Tile {...args} />;

export const Default = Template.bind({});
Default.args = {
    tileSize: '1x1',
    thumbnailUrl: '//static.everymatrix.com/cms2/tipico/_casino/5/5C6FBE471E9E022F67A53B136169A571.jpg',
    vendorName: 'RedTigerGaming',
    isNew: false
};

export const New = Template.bind({});
New.args = {
    tileSize: '1x1',
    thumbnailUrl: '//static.everymatrix.com/cms2/tipico/_casino/D/DC1A7FB443F57AA163BD25AF3408C68A.jpg',
    vendorName: 'RedTigerGaming',
    isNew: true
};
export const Wide2x1 = Template.bind({});
Wide2x1.args = {
    tileSize: '2x1',
    thumbnailUrl: '//static.everymatrix.com/cms2/tipicogamesde/_casino/4/4237F019296AFE0A139DF1AE2F882CEA.jpg',
    vendorName: 'PlayTech',
    isNew: false
};
export const Wide1x2 = Template.bind({});
Wide1x2.args = {
    tileSize: '1x2',
    thumbnailUrl: '//static.everymatrix.com/cms2/tipico/_casino/3/3544C22D89ED160813CECF861C7BF51A.jpg',
    vendorName: 'Netent',
    isNew: false
};
export const Wide2x2 = Template.bind({});
Wide2x2.args = {
    tileSize: '2x2',
    thumbnailUrl: '//static.everymatrix.com/cms2/tipicogamesde/_casino/D/D77F94D3E955159D31D51A23D68DAC61.jpg',
    vendorName: 'Netent',
    isNew: false
};
