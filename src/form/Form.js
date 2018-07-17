import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  render() {
    return (
      <div className="Form">
        <form id="survey-form" action="">
          <div className="rowTab">
            <div className="labels">
              <label for="name"  id="name-label">* Name:</label>
            </div>
            <div className="inputs">
              <input name="name" id="name" placeholder="Enter your name" required type="text"/>
            </div>
          </div>
          <div className="rowTab">
            <div className="labels">
              <label for="email"  id="email-label">* Email:</label>
            </div>
            <div className="inputs">
              <input name="email" id="email" placeholder="Enter your email" required type="email"/>
            </div>
          </div> 
          <div className="rowTab">
            <div className="labels">
              <label for="age"  id="number-label">* Age:</label>
            </div>
            <div className="inputs">
              <input name="age" id="number" placeholder="Enter your age" required type="number" max="125" min="1"/>
            </div>
          </div> 
          <div className="rowTab">
            <div className="labels">
              <label for="role">Which option best describes your current role?</label>
            </div>
            <div className="inputs">
              <select placeholder="Select an option" name="role" id="dropdown">
                <option disabled value>Select an option</option>
                <option>Student</option>
                <option>Full Time Job</option>
                <option>Prefer not to say</option>
                <option>Other</option>
              </select>
            </div>
          </div> 
          <div className="rowTab">
            <div className="labels">
              <label>* How likely is that you would recommend freeCodeCamp to a friend?:</label>
            </div>
            <div className="inputs">
              <label><input name="recommend" value="definitely" required type="radio"/> Definitely</label><br/>
              <label><input name="recommend" value="maybe" required type="radio"/> Maybe</label><br/>
              <label><input name="recommend" value="not sure" required type="radio"/> Not Sure</label>
            </div>
          </div> 
          <div className="rowTab">
            <div className="labels">
              <label for="role">What do you like most about FCC:</label>
            </div>
            <div className="inputs">
              <select placeholder="Select an option" name="role" id="dropdown">
                <option disabled value>Select an option</option>
                <option>Challenges</option>
                <option>Projects</option>
                <option>Community</option>
                <option>Open Source</option>
              </select>
            </div>
          </div> 
          <div className="rowTab">
            <div className="labels">
              <label>Things that should be improved in the future (Check all that apply):</label>
            </div>
            <div className="inputs">
              <div className="checkboxes">
                <input name="front" value="front" type="checkbox"/>
                <label for="front">Front-end Projects</label>
              </div>
              <div className="checkboxes">
                <input name="back" value="back" type="checkbox"/>
                <label for="back">Back-end Projects</label>
              </div>
              <div className="checkboxes">
                <input name="visualisation" value="visualisation" type="checkbox"/>
                <label for="visualisation">Data Visualisation</label>
              </div>
              <div className="checkboxes">
                <input name="challenges" value="challenges" type="checkbox"/>
                <label for="challenges">Challenges</label>
              </div>
              <div className="checkboxes">
                <input name="community" value="community" type="checkbox"/>
                <label for="community">Open Source Community</label>
              </div>
              <div className="checkboxes">
                <input name="gitter" value="gitter" type="checkbox"/>
                <label for="gitter">Gitter help rooms</label>
              </div>
              <div className="checkboxes">
                <input name="videos" value="videos" type="checkbox"/>
                <label for="videos">Videos</label>
              </div>
              <div className="checkboxes">
                <input name="meetups" value="meetups" type="checkbox"/>
                <label for="meetups">City Meetups</label>
              </div>
              <div className="checkboxes">
                <input name="wiki" value="wiki" type="checkbox"/>
                <label for="wiki">Wiki</label>
              </div>
              <div className="checkboxes">
                <input name="forum" value="forum" type="checkbox"/>
                <label for="forum">Forum</label>
              </div>
              <div className="checkboxes">
                <input name="courses" value="courses" type="checkbox"/>
                <label for="courses">Additional Courses</label>
              </div>
            </div>
          </div>
          <div className="rowTab">
            <div className="labels">
              <label for="comments"  id="email-label">Any Comments or Suggestions?</label>
            </div>
            <div className="inputs">
              <textarea name="comments" id="comments" placeholder="Enter your comments here..." ></textarea>
            </div>
          </div>
          <input type="submit" value="Submit" id="submit"/>      
        </form>
      </div>
    );
  }
}

export default Form;
