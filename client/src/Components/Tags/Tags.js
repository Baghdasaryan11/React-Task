import React, { useState, useEffect } from 'react';
import './Tags.css';
import axios from 'axios';


const Tags = () => {
    const [tags, setTags] = useState([])

    useEffect(async () => {
        const res = await axios('/tags', {
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = res.data;
        setTags(data)
    }, [])

    return (
        <div className={'tags'}>
            <p>TAGS</p>
            <div className={'hr'}></div>
            <br />
            <div className={'cont'}>
                {
                    tags.map(tag => {
                        return (
                            <span key={tag} className={'tagsName'}>{tag}, </span>
                        )
                    })
                }
            </div>


        </div>
    )
};

export default Tags;