import React, { useState, useEffect } from "react";
import '../../App.css';

export default function DemoGuideVideo() {

    const [groups, setGroups] = useState(null);

    useEffect(() => {
        const getData = async () => {
            await fetch('http://127.0.0.1:8000/api/groups/')
                .then(resp => resp.json())
                .then(data => {
                    setGroups(data);
                })
        }
        getData();
    })

    return <h1>
        Demo Guide Tutorial Video
        {groups && groups.map(group => {
            return <p>{group.name}</p>
        })}
    </h1>
    
}