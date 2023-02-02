import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const NavMenu = ({ routes }) => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        const _menu = routes.map(c => {
            if (c.path === "*") c.path = "home"
            return c;
        })
        setMenu(_menu)
    }, routes)
    return (
        <div
            className="navigation-menu">
            <ul>
                {
                    menu.map((r, i) => (
                        <li key={i} >
                            <Link to={r.path}>{r.path}</Link>
                        </li>
                    )
                    )
                }
            </ul>
        </div>
    )
}