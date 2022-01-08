import { useContext } from 'react';
import { ProductContext } from "./ProductCard";

import styles from '../styles/styles.module.css'

interface titleProps{
    title?:string
    white?:string
}

export const ProductTitle = ({ title ,white}: titleProps) => {

    const { product } = useContext( ProductContext )

    return (
        <span className={ `${styles.productDescription } ${white}` }>
            { title ? title : product.title }
        </span>
    );
}