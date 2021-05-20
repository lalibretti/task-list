import React from 'react';
import styled from 'styled-components';



 const GridWrapper = styled.div`
   @import url(https://fonts.googleapis.com/css2?family=Poppins&display=swap);

body {
  font-family: Poppins;
  background-color: #9266ff;;
  background: var(--dark);
  line-height: 26px;
  margin: 0;
}

h1 {
  color: rgb(27,112,137);
  font-weight: bolder;
  
}

.App {
  background-color: #3f3160;
  min-height: 500px;
  width: 400px;
  margin: 40px auto;
}

form {
  margin-top: 20px;
  padding: 5px;
  background-color: #3f3160;
  min-height: 400px;
  width: 500px;
  margin: 40px auto;
  
}

.formRow {
  margin: 10px 0 20px 0;
}

.formInput {
background-color: rgb(27,112,137);
  border: 0;
  width: 200px;
  height: 50px;
  padding: 0 20px;
  margin: 20px;
  font-size: 18px;
  border-radius: 10px;
  color: #ffff;

}

.formInput:focus {
  background-color: #040d14;
  background-color: var(--dark);
  outline: none;
  box-shadow: 0 0 0 2px #21ce99;
  box-shadow: 0 0 0 2px var(--green);
  color: var(--light);
}


.formInput:-ms-input-placeholder {
  color:#ffff;
  opacity: 1;
}

.formInput::placeholder {
  color: #ffff;
  opacity: 1;
  font-weight: bolder;
}

.formInput:focus::-webkit-input-placeholder {
  color: #d0d1d3;
  color: var(--light);
  opacity: 1;
}

.formInput:focus:-ms-input-placeholder {
  color: #d0d1d3;
  color: var(--light);
  opacity: 1;
}

.formInput:focus::placeholder {
    cursor: pointer;
  font-weight: bolder;
  color: #ffff;
  opacity: 1;
}

.errorMessage {
  color: #f45532;
  font-size: 14px;
  margin: 0;
  padding: 0;
}

#notifyToast {
  color: #fff;
  border-radius: 6px;
  width: 200px;
  margin-left: 75px;
  background-color: #21ce99;
  background-color: var(--green);
}

.submit-btn {
  background-color: #040d14;
  background-color: var(--dark);
  
  background-color: rgb(202,156,24);
  padding: 15px 50px;
  border: 2px solid;
  border-radius: 10px;
  margin-bottom: 25px;
  cursor: pointer;
  font-weight: bolder;
  color: #ffff;
}

.submit-btn:hover {
  background-color: #21ce99;
  background-color: var(--green);
  color: #040d14 !important;
  color: var(--dark) !important;
  border: 2px solid #21ce99;
  border: 2px solid var(--green);
}

.submit-btn:disabled:hover {
  background-color: #040d14;
  background-color: var(--dark);
  color: #21ce99 !important;
  color: var(--green) !important;
  cursor: wait;
}

@media (max-width: 768px) {
  .submit-message {
    width: 125px;
    margin-left: 200px;
  }
}
 `; 


 export const Contact = () => (
   <GridWrapper>
   <div className= 'Contact'> <div className='container'>
        <div className='row'>
          <div className='col-12 text-center'>
            <div className='contactForm'>
              <form id='contact-form' noValidate>
              <h1>Contact Form</h1>
                {/* Row 1 of form */}
                <div className='row formRow'>
                  <div className='col-6'>
                    <input
                      type='text'
                      name='name'
                      className='form-control formInput'
                      placeholder='Name'>
                    </input>
                  </div>
                  <div className='col-6'>
                    <input
                      type='email'
                      name='email'
                      className='form-control formInput'
                      placeholder='Email address'
                    ></input>
                  </div>
                </div>
                {/* Row 2 of form */}
                <div className='row formRow'>
                  <div className='col'>
                    <input
                      type='text'
                      name='subject'
                      className='form-control formInput'
                      placeholder='Subject'
                    ></input>
                  </div>
                </div>
                {/* Row 3 of form */}
                <div className='row formRow'>
                  <div className='col'>
                    <textarea
                      rows={3}
                      name='message'
                      className='form-control formInput'
                      placeholder='Message'
                    ></textarea>
                  </div>
                </div>
                <button className='submit-btn' type='submit'>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
   </GridWrapper>
 )
