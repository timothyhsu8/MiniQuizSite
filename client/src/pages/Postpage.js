import React from 'react'
import { Box } from "@chakra-ui/react"
import bg from '../images/homebg.png';

import moon from '../images/moon.jpg'
import uranus from '../images/uranus.jpg'
import { Link } from 'react-router-dom';

import "../styles/postpage.css";
class Postpage extends React.Component {
    //Constructor and State
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { 
            bleh: ["alpha","vita","gamma","thelta","epsilon","zita","ita","thita"],
            score: ["5","5","4","4","3","3","2","2"],
            pulledData: false
        
        };
        this.mainPage = this.mainPage.bind(this);
        this.retry = this.retry.bind(this);
      }

    //Functions
      mainPage(){
        console.log("Hello\n");
        console.log("Hello\n");
        return;
      }
      
      retry(){
        return;
      }

      //Pulls data?
      componentDidUpdate(pulledData) {
          //assume structure is {username, score, totalScore}
        // Typical usage (don't forget to compare props):
        if (!pulledData) {
            fetch('/api/quizs')
              .then((res) => res.json())
              .then((data) => console.log(data));

            pulledData = true;
          }
      }

    //The frontend
    render() {
        if(this.state.pulledData===true){ //Waits indefinitely for the data, change to true to get the real page
            var max = 5
            var randInt = Math.floor(Math.random() * max);
            if(randInt==0){
                return(
                    <Box backgroundImage={bg} backgroundColor= "Black" height="auto">
                        <h1 className="title2">"Not Actually Loading...Get PRANKED!!!"</h1>
                        <Box className="quizIconCentered" w="50%" h="50%">
                                    <img alt="Uranus" src={uranus} />
                        </Box>
                        <h1 className="center button white">"Here's Uranus, where the alien race Uranium is from! Except I'm lying"</h1>
                    </Box>);
                    //Displays a loading screen while it waits
            }
            else if(randInt!=0){
                return(
                        <Box backgroundImage={bg} backgroundColor= "Black" height="auto">
                            <h1 className="title2">"Loading..."</h1>
                            <Box className="quizIconCentered" w="50%" h="50%">
                                        <img alt="Moon" src={moon} />
                            </Box>
                            <h1 className="center button white">"Here's a picuture of the moon while you wait!"</h1>
                            <Box h="200px">
                            </Box>
                        </Box>
                        
                   //Displays a loading screen while it waits
                );
            }
        }

        else{
            return(
                <Box height="100%" backgroundImage={bg} backgroundColor= "Black">
                    <Box className="containerAcross">  
                        <Box className="quizIcon" w="15%" h="10%">
                                <img alt="Moon" src={moon} />
                        </Box>
                        <Box>
                            <h1 className="title2">Nintendo Music Page</h1>
                        </Box>
                    </Box>
                    
    
                    <Box className="containerAcross">
                        <Box w="75%">  {/* for horizontal line*/}
                            <br></br>
                            <hr />
                        </Box>
                    </Box>
    
    
                    <Box className="containerDown">
                        <Box h="10px"></Box> {/* Can move everything down a little*/}
                        <Box className="containerAcross">
                            <Box mr ="20px" w="20px" >  {/* added space on the left side*/}
                            </Box>
    
                            <Box mt="50px" w="500px" h="350px" bg='gray'>  {/* Gradebox */}
                                <h2></h2>
                            </Box>
                            <Box  mt="50px" w="400px" h="350px" bg='#D3D3D3'>  {/* for horizontal line*/}
                            </Box>
    
    
                            <Box className="containerDown">{/* Statbox */}
                                <Box  ml="50px" w="400px" h="50px" bg='gray'>  {/* leaderboards Heading*/}
                                    <h1 className="board-title">Quiz Leaderboards</h1>
                                </Box>
                                <Box  ml="50px" w="400px" h="450px" bg='#D3D3D3'>  {/* leaderboards*/}
                                    <Box mb="26px" display="flex" alignItems="center" justifyContent="space-between">
                                        <Box>
                                            <h2 className="text">1.  <img src={moon} alt="moon" className="round"/> {this.state.bleh[0]} Quiz Leaderboards</h2>
                                        </Box>
                                        <Box>
                                            <h2 className="text">{this.state.score[0]}</h2>
                                        </Box>
                                    </Box>
                                    <Box mb="26px" display="flex" alignItems="center" justifyContent="space-between">
                                        <Box>
                                            <h2 className="text">2.  <img src={moon} alt="moon" className="round"/> {this.state.bleh[1]} Quiz Leaderboards</h2>
                                        </Box>
                                        <Box>
                                            <h2 className="text">{this.state.score[1]}</h2>
                                        </Box>
                                    </Box>
                                    <Box mb="26px" display="flex" alignItems="center" justifyContent="space-between">
                                        <Box>
                                            <h2 className="text">3.  <img src={moon} alt="moon" className="round"/> {this.state.bleh[2]} Quiz Leaderboards</h2>
                                        </Box>
                                        <Box>
                                            <h2 className="text">{this.state.score[2]}</h2>
                                        </Box>
                                    </Box>
                                    <Box mb="26px" display="flex" alignItems="center" justifyContent="space-between">
                                        <Box>
                                            <h2 >4.  <img src={moon} alt="moon" className="round"/>  {this.state.bleh[3]} Quiz Leaderboards</h2>
                                        </Box>
                                        <Box>
                                            <h2 className="text">{this.state.score[3]}</h2>
                                        </Box>
                                    </Box>
                                    <Box mb="26px" display="flex" alignItems="center" justifyContent="space-between">
                                        <Box>
                                            <h2 className="text" >5.  <img src={moon} alt="moon" className="round"/>  {this.state.bleh[4]} Quiz Leaderboards</h2>
                                        </Box>
                                        <Box>
                                            <h2 className="text">{this.state.score[4]}</h2>
                                        </Box>
                                    </Box>
                                    <Box mb="26px" display="flex" alignItems="center" justifyContent="space-between">
                                        <Box>
                                            <h2 className="text" >6.  <img src={moon} alt="moon" className="round"/>  {this.state.bleh[5]} Quiz Leaderboards</h2>
                                        </Box>
                                        <Box>
                                            <h2 className="text">{this.state.score[5]}</h2>
                                        </Box>
                                    </Box>
                                    <Box mb="26px" display="flex" alignItems="center" justifyContent="space-between">
                                        <Box>
                                            <h2 className="text" >7.  <img src={moon} alt="moon" className="round"/>  {this.state.bleh[6]} Quiz Leaderboards</h2>
                                        </Box>
                                        <Box>
                                            <h2 className="text">{this.state.score[6]}</h2>
                                        </Box>
                                    </Box>
                                    <Box  mb="26px" display="flex" alignItems="center" justifyContent="space-between">
                                        <Box>
                                            <h2 className="text" >8.  <img src={moon} alt="moon" className="round"/>  {this.state.bleh[7]} Quiz Leaderboards</h2>
                                        </Box>
                                        <Box>
                                            <h2 className="text">{this.state.score[7]}</h2>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box h="60px"></Box>
    
                        <Box className="containerAcross" >
                            <Box  ml="250px" w="200px" h="40px" bg='gray'>{/* for horizontal line*/}
                                <Link to="/" className="center button white" onClick={this.mainPage}>Return to Main</Link>    
                            </Box>  
                            <Box  ml="5px" w="200px" h="40px" bg='#D3D3D3'> {/* for horizontal line*/}
                                <Link to="/TestingPage" className="center button black" onClick={this.retry}>Retry Quiz</Link>    
                            </Box>  
                        </Box>
                        
                        <Box h="60px"></Box>
                    </Box>
                    
                    
                </Box>
            );
        }
        
    }
  }
  
  export default Postpage;