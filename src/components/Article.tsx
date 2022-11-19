import React from 'react';
// import moment from 'moment';

type propData = {
    title: string;
    length: number;
    snippet: string;
};

export const Article = ({ title, length, snippet }: propData) => {
    return (
        <article className='post'>
            <h2>{title}</h2>
            <div className='post-info'>
                <span>{length} min read</span>
            </div>
            <p>{snippet}</p>
        </article>
    );
};
