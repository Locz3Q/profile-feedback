import Header from "./components/Header"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import About from "./pages/About"
import AboutIconLink from "./components/AboutIconLink"
import Post from "./components/Post"
import {FeedbackProvider} from './context/FeedbackContext'

function App() {
    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <div className='container'>
                    <Routes>
                        <Route exact path='/' element={
                            <div className='container'>
                                <FeedbackForm/>
                                <FeedbackStats/>
                                <FeedbackList />
                                <AboutIconLink />
                            </div>
                        }>
                        </Route>
                        <Route path='/about' element={<About />}/>
                        <Route path='/post/:id/:name' element={<Post />}/>
                    </Routes>
                    
                </div>    
            </Router>
        </FeedbackProvider>
    )
}



export default App