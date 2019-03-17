import React from 'react';
import '../icons/importAllIcons.js'
import "../helpers/classes"
import "./icon.scss"
import classes from '../helpers/classes';


interface IconProps extends  React.SVGAttributes<SVGElement>{
    name: string;
}
const Icon: React.FunctionComponent<IconProps> = (props) => {
    const {className, name, ...restProps} = props;
    return (
        <svg className={classes('gui-icon',className)}
            {...restProps}
        >
            <use xlinkHref={`#${name}`}></use>
        </svg>
    )
}

export default Icon;