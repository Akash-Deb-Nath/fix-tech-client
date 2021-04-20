import React from 'react';

const Feedback = () => {
    return (
        <div style={{ height: '600px', backgroundColor: 'lightslategray' }} className="p-5 w-50 mb-5 text-center mx-auto">
            <h1 className="mb-3">Stay Connected With Us</h1>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Name</label>
                <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="name" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput2" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea3" class="form-label">Example textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput4" class="form-label">Submit</label>
                <input type="submit" class="form-control" id="exampleFormControlInput1" />
            </div>
        </div>
    );
};

export default Feedback;