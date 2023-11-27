import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeStateValue } from '../redux/MainReducer';
import { insertContact } from '../actions/MainAction';

const ContactPage = () => {
  const contact = useSelector(state => state.Data.contact);
  const dispatch = useDispatch();

  function changeInpValue(e) {
    dispatch(changeStateValue({
      name: e.target.name,
      value: e.target.value
    }))
  }

  function contactBtn(contactsData) {
    if(contact.name !== '' && contact.phone !== '' 
          && contact.email !== '' && contact.subject !== '' 
                && contact.message !== '') {
                  console.log(contact)
                  dispatch(insertContact(contact))
                  .then(resp => {
                    dispatch(changeStateValue({
                      name: 'contact', 
                      value: {
                        name: '',
                        phone: '',
                        email: '',
                        subject: '',
                        message: ''
                      }
                    }))
                  })
                }
  }
  return (
    <div className='contact_main'>
      <div className="contact_title">
        <h1>Contact</h1>
      </div>
      <div className='contact_main_container'>
        <div className="contact_left">
          <h2>Tell Us Your Project</h2>
          <div className="name_phone">
            <input onChange={(e) => changeInpValue(e)} type="text" placeholder='Name *' name='contact.name' value={contact.name}  />
            <input onChange={(e) => changeInpValue(e)}  type="text" placeholder='Phone *' name='contact.phone' value={contact.phone}  />
          </div>
          <div className="name_phone">
            <input onChange={(e) => changeInpValue(e)}  type="email" placeholder='Email *' name='contact.email' value={contact.email} />
            <input onChange={(e) => changeInpValue(e)}  type="text" placeholder='Subject *' name='contact.subject' value={contact.subject} />
          </div>
          <input onChange={(e) => changeInpValue(e)}  className='message_inp' type="text" placeholder='Message *' name='contact.message' value={contact.message} />
          <button onClick={() => contactBtn()} className='send_msg_btn'>Send Message</button>
        </div>
        <div className="contact_right">
          <h2>Contact Us</h2>
          <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram anteposuerit litterarum formas human.</p>
          <p>Address : No 40 Baria Sreet 133/2 NewYork City</p>
          <p>Email: nfo@yourdomain.com</p>
          <p>Phone: +88013245657</p>
          <h5>Working hours</h5>
          <p>Monday – Saturday:08AM – 22PM</p>
        </div>
      </div>
    </div>
  )
}

export default ContactPage