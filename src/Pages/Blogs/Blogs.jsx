import React from 'react';

const Blogs = () => {
    return (
        <div className="row py-5">
            <div className="col-lg-4">
                <div className="bg-light p-4">
                    <h5>1. অথোরাইজেশন এবং অথেন্টিকেশন এর মধ্যে পার্থক্য ?</h5>
                    <p>
                        <small>
                            ১. অথোরাইজেশন নির্দিষ্ট ব্যক্তিকে নির্দিষ্ট বিষয়ের ব্যবহারের অনুমতি দেয়, অন্যদিকে অথেন্টিকেশন একজন ব্যবহারকারী কে চিহ্নিত করতে ব্যবহৃত হয় । <br />
                            ২. অথোরাইজেশন এর উপর নির্ভর করে একজন ব্যবহারকারী সিস্টেমের কোন কোন ফাংশন ব্যবহার করতে পারবে অন্যদিকে অথেন্টিকেশন একজন ব্যবহারকারী কে ভ্যালিড করতে ব্যবহৃত হয়।<br />
                            ৩. অথেন্টিকেশন অথোরাইজেশন এর আগে করতে হয়।
                        </small>
                    </p>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="bg-light p-2">
                    <h5>2. আপনি কেন ফায়ারবেজ ব্যবহার করছেন অন্যান্য কি কি অপশন রয়েছে ?
                    </h5>
                    <p>
                        <small>
                            আমার ওয়েবসাইটে অথেন্টিকেশন সিস্টেম প্রয়োগ করার জন্য আমি ফায়ারবেজ ব্যবহার করে থাকি। ফায়ারবেজ অনেক ধরনের অথেন্টিকেশন সিস্টেম এর সুবিধা দিয়ে থাকে যা অথেন্টিকেশন ব্যবস্থা প্রয়োগ খুব সহজ করে দেয়।
                            অন্যান্য সিস্টেমগুলো:<br/>
                            1. Okta<br/>
                            2. Auth0<br/>
                            3. Passport<br/>
                            4. Back4app<br/>
                            5. Keycloak etc
                        </small>
                    </p>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="bg-light p-5">
                    <h3>
                        3. Other services of firebase</h3>
                    <p>
                        <small>
                            1. Hosting<br/>
                            2. Database<br/>
                            3. Machine learning<br/>
                            4. Cloud storage<br/>
                            5. Cloud messaging<br/>
                            6. Google analytics
                        </small>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;