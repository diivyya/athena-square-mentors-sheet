import React from 'react';
import './HomePage.scss';

export default function HomePage() {
    return (
        <div className="home-page">
            <h1 className="home-page-h1">Find a Mentor, Upgrade your career</h1>
            <h2 className="home-page-h2">Expand your skillset, gain insights, and get support from mentors.</h2>
            <div className="home-page-block">
                Scale your career, network with the best!<br/>
                <button type="submit" href="#mentors">Find a Mentor</button>
            </div>
        </div>
    );
}