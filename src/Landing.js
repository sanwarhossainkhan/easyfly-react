import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Landing extends Component {
    render() {
        return (
            <div>
                
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <Link className="navbar-brand" to="#">
                        <img src="easyflybd-logo.jpeg" width="200" height="100" className="d-inline-block align-top" alt=""/>
                        </Link>
                    </div>
                    <div className="col-md-6">
                        <div className="float-end icon-text-color">
                        <i className="fas fa-envelope icon-text-color"></i><span className="icon-text-color-black fw-bold"> support@easyflybd.com </span>
                        <span style={{borderRight:"2px solid #ccc",margin:"0 10px"}}></span>
                         <i className="fab fa-facebook-square" style={{color:"blue", fontSize:"35px"}}></i> 
                         <i className="fab fa-twitter-square" style={{color:"skyblue", fontSize:"35px"}}></i>
                        <br></br><i className="fas fa-phone icon-text-color"></i><span className="icon-text-color-black fw-bold"> +8801945 778899 </span><br></br>
                        <span className="icon-text-color-black fw-bold"> Welcome To Guest User </span>
                        | <i className="fas fa-key icon-text-color"></i> <span className="icon-text-color-black fw-bold">Login</span>
                        | <i className="fas fa-lock icon-text-color"></i> <span className="icon-text-color-black fw-bold"> Registration</span></div>
                    </div>
                </div>
            </div>

                <div className="container-fluid" style={{backgroundImage:`url('back.jpg')`,backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                    <div className="row">
                        <div className="col-md-10 offset-md-1" style={{height:"auto",backgroundColor:"rgb(0 0 0 / 73%)",border:"10px solid rgb(85 87 103)"}}>

                            <div className="row">
                                <div className="col-md-4">
                                    <div style={{ backgroundColor:"orangered"}} className="p-3 mt-5 fw-bold">
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                                            <label className="form-check-label text-color" for="inlineRadio1">OneWay</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                                            <label className="form-check-label text-color" for="inlineRadio2">Round Trip</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
                                            <label className="form-check-label text-color" for="inlineRadio3">MultiCity</label>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div class="form-group col-md-6">
                                            <label for="exampleFormControlInput1" className="text-color">From City</label>
                                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Select from city"/>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="exampleFormControlInput1" className="text-color">Departure Date</label>
                                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="28/3/2021"/>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div class="form-group col-md-12">
                                            <label for="exampleFormControlInput1" className="text-color">To City</label>
                                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Select To city"/>
                                        </div>
                                    </div>
                                                               
                                </div>

                                <div className="col-md-4">
                                    <div style={{ backgroundColor:"orangered"}} className="p-3 mt-5">
                                         <div className="card-title text-color fw-bold">Passenger Details</div>
                                    </div>
                                    <div class="form-group row mt-3">
                                        <label class="col-sm-4 col-form-label text-color">Adults (12+ Yrs)</label>
                                        <div class="col-sm-8">
                                            <select class="form-control">
                                            <option selected>0</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>

                                            </select>
                                        </div>
                                    </div>

                                    <div class="form-group row mt-3">
                                        <label class="col-sm-4 col-form-label text-color">Child (2-12 Yrs)</label>
                                        <div class="col-sm-8">
                                            <select class="form-control">
                                                <option>0</option>
                                                <option selected>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                             

                                            </select>
                                        </div>
                                    </div>

                                    <div class="form-group row mt-3">
                                        <label class="col-sm-4 col-form-label text-color">Infants (0-2 Yrs)</label>
                                        <div class="col-sm-8">
                                            <select class="form-control">
                                            <option selected>0</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>

                                            </select>
                                        </div>
                                    </div>
                                    <div className="pt-4 text-color text-center fst-italic">(Max. 9 Pax per Trip)></div>
                                </div>

                                <div className="col-md-4">
                                    <div style={{ backgroundColor:"orangered"}} className="p-3 mt-5">
                                        <div className="card-title text-color fw-bold">Additional Options</div>
                                    </div>

                                    <div class="form-group row mt-3">
                                        <label class="col-sm-4 col-form-label text-color">Class</label>
                                        <div class="col-sm-8">
                                            <select class="form-control">
                                            <option selected>Economy</option>
                                                <option>Business</option>
                                                <option>First Class</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="form-group row mt-3">
                                        <label class="col-sm-4 col-form-label text-color">Airline</label>
                                        <div class="col-sm-8">
                                            <select class="form-control">
                                            <option selected>All</option>
                                                <option>....</option>
                                                <option>....</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="form-group row mt-3">
                                        <label class="col-sm-4 col-form-label text-color">Time Window</label>
                                        <div class="col-sm-8">
                                            <select class="form-control">
                                            <option selected>All</option>
                                                <option>....</option>
                                                <option>....</option>
                                            </select>
                                        </div>
                                    </div>


                                    <div class="form-group row mt-3">
                                        <label class="col-sm-6 col-form-label text-color">Non Stop Flight</label>
                                        <div class="col-sm-6">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        </div>
                                    </div>
                                    <div class="form-group row mt-1">
                                        <label class="col-sm-6 col-form-label text-color">Refundable Fares</label>
                                        <div class="col-sm-6">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        </div>
                                    </div>
                                    <div class="form-group row mt-1">
                                        <label class="col-sm-6 col-form-label text-color">Nearby Airports</label>
                                        <div class="col-sm-6">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        </div>
                                    </div>
                                    <div class="form-group row my-5">
                                        <div class="col-md-12 d-grid gap-2">
                                        <button class="btn btn-primary btn-md fw-bold" type="submit">SEARCH FLIGHT</button>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;