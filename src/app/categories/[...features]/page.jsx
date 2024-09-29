import React from 'react';

const DetailsCategoriesPage = ({ params }) => {
    if (params.features.length == 3)
        return <div>{params.features[2]}</div>
    if (params.features.length == 2)
        return <div>{params.features[1]}</div>
    if (params.features.length == 4)
        return <div>{params.features[3]}</div>
    return (
        <div>
            <h1>Details Categories Pages</h1>
        </div>
    );
};

export default DetailsCategoriesPage;