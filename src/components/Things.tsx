import * as React from 'react';
import Thing from './Thing';
import { genArray } from '../utils';

export default () => {
    const Things = genArray(10).map((value, index) => {
        return <Thing value={index} key={index} />;
    });

    return (
        <div>
            {Things}
        </div>
    );
};