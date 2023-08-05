import React from 'react';


const Bookings = () => {

    const submitHandler = (event) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={submitHandler} className='mt-6 '>
          <div className='booking__form'>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="email" placeholder="Email" />
          <input type="number" placeholder="Phone Number" />
          <input type="text" placeholder="From Address" />
          <input type="text" placeholder="to Address" />
        <select name="" id="">
          <option value="1 person">1 Person</option>
          <option value="2 person">2 Person</option>
          <option value="3 person">3 Person</option>
          <option value="4 person">4 Person</option>
          <option value="5+ person">5+ Person</option>
        </select>
        <select name="" id="">
          <option value="1 luggage">1 luggage</option>
          <option value="2 luggage">2 luggage</option>
          <option value="3 luggage">3 luggage</option>
          <option value="4 luggage">4 luggage</option>
          <option value="5+ luggage">5+ luggage</option>
        </select>
        <input type="date" placeholder="Journey Date" />
        <input
          type="time"
          placeholder="Journey Time"
          className="time__picker"
        />
      </div>

      <div>
        <textarea
          rows={5}
          type="textarea"
          className="textarea  mt-5 w-[50%]"
          placeholder="Write"
        ></textarea>
      </div>
    </form>
    )
}

export default Bookings
