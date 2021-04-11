import { React, useEffect } from 'react';
import $ from 'jquery';
import swal from 'sweetalert';
import './contact.css';
const Contact = () => {
    useEffect(()=>{
        const scriptURL = "https://script.google.com/macros/s/AKfycbwJma0PDQ855ERUqzzt7rB94h5eBd80RI4qG6yS3kZhxpWo4o9e/exec";
        const form = document.forms['contactMe']
        $('#ContactForm').on('submit', function(e) {
            e.preventDefault();
            var reasons='';
            if($('#cbx1').is(':checked')){
                reasons+='| Hire |';
            }
            if($('#cbx2').is(':checked')){
                reasons+='| Suggestion |';
            }
            if($('#cbx3').is(':checked')){
                reasons+='| Other |';
            }
            $('.reasonInput').val(reasons);
            var dates=new Date();
            $('.dateInput').val(dates);
            $('.submitBtn').addClass('pointer-events-none');
            
            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(response => {
                    swal({
                        title: "Thank You!",
                        text: "Your Message Has Been Sent",
                        icon: "success",
                        button: "ok",
                    })
                    .then(msg=>{
                        $('.submitBtn').removeClass('pointer-events-none');
                    })
                    form.reset();
                })
                .catch(error => console.error('Error!', error.message))
        })
    },[]);
    return (
        <div className="darkBg section" id="Contact">
            <div className="lines container-fluid">
                <div className="row h-100">
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <span className='phead'>Contact Me</span>
            <br/>
            <br/>
            <div className="social">
				<ul className="social-list">
					<li className="media github">
						<a href="https://www.github.com/ayank007" target="_blank">
							<i className="fa fa-github"></i>
						</a>
					</li>
					<li className="media linkedin">
						<a href="https://www.www.linkedin.com/in/ayan-koley-3370a9190" 
							target="_blank">
								<i className="fa fa-linkedin" aria-hidden="true"></i>
						</a>
					</li>
					<li className="media xing">
						<a href="https://www.xing.com/profile/Ayan_Koley" target='_blank'>
						<i className="fa fa-xing" aria-hidden="true"></i></a>
					</li>
					<li className="media gmail">
						<a href="https://mail.google.com/mail/?view=cm&fs=1&to=ayankoley@gmail.com&su=SUBJECT&body=BODY" target='_blank'>
						<i className="fa fa-envelope" aria-hidden="true"></i></a>
					</li>
					<li className="media twitter">
						<a href="https://twitter.com/messages/1129830842065346560-1129830842065346560?text="
							target='_blank'>
							<i className="fa fa-twitter" aria-hidden="true"></i>
						</a>
					</li>
				</ul>
			</div>
            <form method='POST' name='contactMe' id='ContactForm'>
                <div className='checkBoxs'>
                    <div>
                        <input type="checkbox" id="cbx1" data-type='hireme' className='cbx' />
                        <label htmlFor="cbx1" className="check">
                        <svg width="18px" height="18px" viewBox="0 0 18 18" data-type='hireme'>
                            <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                            <polyline points="1 9 7 14 15 4"></polyline>
                        </svg>
                        </label>
                        <span>&nbsp;Hire Me</span>
                    </div>
                    <div>
                        <input type="checkbox" data-type='suggestion' id="cbx2" className='cbx' />
                        <label htmlFor="cbx2" className="check">
                        <svg width="18px" height="18px" viewBox="0 0 18 18" data-type='suggestion'>
                            <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                            <polyline points="1 9 7 14 15 4"></polyline>
                        </svg>
                        </label>
                        <span>&nbsp;Report a bug / Suggest Something</span>
                    </div>
                    <div>
                        <input type="checkbox" data-type='other' id="cbx3" className='cbx' />
                        <label htmlFor="cbx3" className="check">
                        <svg width="18px" height="18px" viewBox="0 0 18 18" data-type='other'>
                            <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                            <polyline points="1 9 7 14 15 4"></polyline>
                        </svg>
                        </label>
                        <span>&nbsp;Others</span>
                    </div>
                </div>
                <div>
                    <input type="text" id='contactName' minLength="1" className='form-control'
                        name='Name' required autoComplete='off' />
                    <div className='placeholder'>Your Name / Contact Details</div>
                </div>
                <input name='Reasons' className='hiddenInput reasonInput' />
                <input name='Date' className='hiddenInput dateInput' />
                <div className='msgDiv'>
                    <textarea  id="message" minLength="1" name="message" className='form-control'
                        name='Message' required />
                    <div className='placeholder'>Any Message ?</div>
                </div>
                <button type='submit' className='link submitBtn'>Submit</button>
            </form>
            <br/>
            <br/>
        </div>
    );
}

export default Contact;