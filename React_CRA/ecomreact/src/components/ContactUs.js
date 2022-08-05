import React from 'react';

function ContactUs(props) {
    return (
        <div>
            <div class="container">

                <div class="row">
                    <div class="col-12 col-sm-10 mt-4">
                        <div class="col-sm-8">
                            <h3 class="display-4">Contact Us</h3>
                        <div id="conform">   
                        <form action="mailto:janedoe@geemail.com" method="POST" encType="text/plain" name="EmailForm">
                            Name:<br/> <input type="text" size="40" name="ContactName"/> <br/>
                            Message:   <br/> <textarea name="ContactComment" rows="6" cols="40"></textarea><br/>
                            <input type="submit" value="Submit"/> 
                        </form>
                        </div>
                    </div>
        
                </div>
            </div>

        </div>

        </div>
    );
}

export default ContactUs;