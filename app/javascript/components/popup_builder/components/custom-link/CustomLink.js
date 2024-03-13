import {Link} from "react-router-dom";
import React from "react";

export default function CustomLink({children, url, ...rest}) {
    return (
        <span>
            {
                !url.startsWith('http') &&
                <Link
                    to={url}
                    {...rest}
                >
                    {children}
                </Link>
            }

            {
                url.startsWith('http') &&
                <a
                    href={url}
                    target="_blank"
                    {...rest}
                >
                    {children}
                </a>
            }
        </span>
    );
};