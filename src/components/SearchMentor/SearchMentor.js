import React, { useEffect, useState } from 'react';
import './SearchMentor.scss';

import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";

import { AvatarGenerator } from 'random-avatar-generator';

export default function SearchMentor() {
    const MentorCollectionRef = collection(db, "mentors");
    const [mentors, setMentors] = useState([]);
    
    const generator = new AvatarGenerator();
    const image = generator.generateRandomAvatar();

    const getMentors = async() => {
        const data = await getDocs(MentorCollectionRef)
        setMentors(data.docs.map((doc) => (
            {...doc.data(), id: doc.id }
        )));
    }

    useEffect(() => {
        getMentors()
    }, [])

    return (
        <div style={{textAlign: 'center'}}>
            <h1>Mentors</h1>
            <div className="mentor-data" id="mentors">
                { mentors.map((mentor) => {
                    return (
                        <div className="card">
                            <div className="container">
                                <img src={image} alt="profile photo" className="card-image" />
                                <p className="card-name"><b>{ mentor.name }</b></p>
                                <p className="card-company"><b>{ mentor.company }</b></p>
                                <p className="card-expertise">{ mentor.expertise }</p>
                                <p className="card-about"><i>"{ mentor.about.slice(0,80) }..."</i></p>
                                <p className="card-interests">
                                    { mentor.interests.map((interest) => {
                                        return (
                                            <button className="button">{ interest }</button>
                                        )
                                    }) 
                }
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}