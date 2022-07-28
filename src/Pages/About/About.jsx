import React from 'react';
import youtuber from "../../../public/images/youtuber.png";
import bangli from "../../../public/images/bangli.png";
const About = () => {
    return (
        <div className="row">
            <div className="col-lg-12 py-4">
                <div className="row px-4 mt-5">
                    <div className="col-lg-6">
                        <h1>Introduction</h1>
                        <p>Hi I am Orva. A single passionate on creat Food vlog content. I always cook bengli food and delicious food of many countries and upload it on my you tube channel by video.If you like my cooked foods  items then follow my youtube channel and subscribe by clicking on the link given blow.</p>
                    </div>
                    <div className="col-lg-6">
                        <img className="w-50" src={youtuber} />
                    </div>
                </div>
            </div>
            <div className="col-lg-12 mt-5">
                <div className="row px-3">
                    <div className="col-lg-6">
                        <h1>The Best Bangli Food I Love and Cook</h1>
                        <p>this is Bengali Aloo Dum or Alur Dum recipe. the delicious bengli food it is. where crispy fried potatoes are dunked in a creamy onion tomato curry. It is best served with Luchi. Here is how to make it.Bengali Dum Aloo (Aloor Dum) is a traditional recipe where baby potatoes are boiled, fried and then added to a spicy tomato onion curry. It is easy to make, delicious and comes together in under 30 minutes.It is best served with matar kochuri or luchi in Bengali homes. It can also be served with phulka or paratha for weekday meals or to be packed in lunch box.
                        </p>
                    </div>
                    <div className="col-lg-6">
                        <img className="w-50 h-50" src={bangli} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;