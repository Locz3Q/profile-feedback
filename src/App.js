import Header from "./components/Header"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'
import FeedbackList from "./components/FeedbackList"
import { useState } from "react"
import FeedbackData from "./Data/data"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import About from "./pages/About"
import AboutIconLink from "./components/AboutIconLink"
import Post from "./components/Post"

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)
    const deleteFeedback = (id) => {
        if(window.confirm('Do U really want to delete that feedback??')){
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    return (
        <Router>
            <Header />
            <div className='container'>
                <Routes>
                    <Route exact path='/' element={
                        <div className='container'>
                            <FeedbackForm handleAdd={addFeedback} />
                            <FeedbackStats feedback={feedback} />
                            <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
                            <AboutIconLink />
                        </div>
                    }>
                    </Route>
                    <Route path='/about' element={<About />}/>
                    <Route path='/post/:id/:name' element={<Post />}/>
                </Routes>
                
            </div>    
        </Router>
    )
}



export default App