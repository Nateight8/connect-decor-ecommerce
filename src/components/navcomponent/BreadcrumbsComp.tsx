import React from 'react'
import { Breadcrumbs, Link } from '@mui/material'
// import Link from 'next/link'

type Props = {}

export default function BreadcrumbsComp({ }: Props) {
    return (
        <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
                MUI
            </Link>
            <Link underline="hover" color="inherit" href="/">

            </Link>
        </Breadcrumbs>
    )
}