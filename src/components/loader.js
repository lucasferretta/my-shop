import React, { useEffect } from 'react'

export default function Loader({condition}) {


    return (
        <div>{condition === true ? 'class="spinner-border" role="status"><span className="visually-hidden">Loading...</span>':
        <div></div>}</div>
    )
}
