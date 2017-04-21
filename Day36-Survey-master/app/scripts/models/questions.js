export default function questions(){
  
  const Question1 = () => (<div>
                    <p>How old are you?</p>
                    <input placeholder="type in your answer" type="text"></input>
                    <button>Submit Answer</button>
                    <Link to="/question/2">Next Question</Link>
                    </div>)
  const Question2 = () => (<div>
                    <p>What are you doing tonight?</p>
                    <input placeholder="type in your answer" type="text"></input>
                    <button>Submit Answer</button>
                    <Link to="/question/1">Previous Question</Link>
                    <Link to="/question/3">Next Question</Link>
                    </div>)
  const Question3 = () => (<div>
                    <p>How many cups of water have you had today?</p>
                    <input placeholder="type in your answer" type="text"></input>
                    <button>Submit Answer</button>
                    <Link to="/question/2">Previous Question</Link>
                    <Link to="/question/4">Next Question</Link>
                    </div>)
  const Question4 = () => (<div>
                    <p>How many cats do you currently own??</p>
                    <input placeholder="type in your answer" type="text"></input>
                    <button>Submit Answer</button>
                    <Link to="/question/3">Previous Question</Link>
                    <Link to="/question/5">Next Question</Link>
                    </div>)
  const Question5 = () => (<div>
                    <p>Who is your Overwatch Main?</p>
                    <input placeholder="type in your answer" type="text"></input>
                    <button>Submit Answer</button>
                    <Link to="/question/4">Previous Question</Link>
                    <Link to="/question/6">Next Question</Link>
                    </div>)
  const Question6 = () => (<div>
                    <p>In how many language can you do the FizzBuzz {`function`} in?</p>
                    <input placeholder="type in your answer" type="text"></input>
                    <button>Submit Answer</button>
                    <Link to="/question/5">Previous Question</Link>
                    <Link to="/question/7">Next Question</Link>
                    </div>)
  const Question7 = () => (<div>
                    <p>If money and health was not an issue, what kind of Taco Bell item would you order?</p>
                    <input placeholder="type in your answer" type="text"></input>
                    <button>Submit Answer</button>
                    <Link to="/question/6">Previous Question</Link>
                    <Link to="/question/8">Next Question</Link>
                    </div>)
  const Question8 = () => (<div>
                    <p>Why is Google Fiber available in the majority of the 78704 area but not mine?</p>
                    <input placeholder="type in your answer" type="text"></input>
                    <button>Submit Answer</button>
                    <Link to="/question/7">Previous Question</Link>
                    <Link to="/question/9">Next Question</Link>
                    </div>)
  const Question9 = () => (<div>
                    <p>How much cheese is too much?</p>
                    <input placeholder="type in your answer" type="text"></input>
                    <button>Submit Answer</button>
                    <Link to="/question/8">Previous Question</Link>
                    <Link to="/question/10">Next Question</Link>
                    </div>)
  const Question10 = () => (<div>
                    <p>What is your Social Security Number? You can trust me</p>
                    <input placeholder="type in your answer" type="text"></input>
                    <button>Submit Answer</button>
                    <Link to="/question/9">Previous Question</Link>
                    </div>)
}
