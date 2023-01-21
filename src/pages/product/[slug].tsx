import React from 'react'
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { ThemeProvider } from '@mui/material';
import theme from '@/components/theme';
import CssBaseline from '@mui/material/CssBaseline';
import NavBar from '@/components/navcomponent/NavBar';
import Description from '@/components/description/Description';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';

type Props = {
    product: {}
}



export default function Product({ product }: Props) {
    console.log(product);

    return (
        <main>
            <Description product={product} />
        </main>

    )
}


export const getStaticPaths: GetStaticPaths = async () => {

    const res = await fetch("http://localhost:3500/products");
    const data = await res.json();

    const paths = data.map((path: { id: number }) => {
        return {
            params: { slug: path.id.toString() }
        }
    })

    // console.log(data);


    return {
        paths,
        fallback: false
    }

}


export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {

    const id = context.params.slug

    const res = await fetch(`http://localhost:3500/products/${id}`);
    const data = await res.json();

    // console.log(data);


    return {
        props: {
            product: data
        }
    }

}
