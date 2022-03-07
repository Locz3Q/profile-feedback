import Card from "../components/shared/Card"
import {Link} from 'react-router-dom'
import {motion, AnimatePresence} from 'framer-motion'

function About() {
  return (
    <Card>
      <AnimatePresence>
        <motion.div 
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}>
          <div className="about">
            <h1>About Me and This Feedback UI project</h1>  
            <p>This is my first React app created with Udemy Video Course.
              Project allows to leave feedback about my profile portfolio. </p>
            <p>Version: 1.0.0</p>
            <Link to='/'>Go Back</Link>
          </div>
        </motion.div>
      </AnimatePresence>
    </Card>
  )
}

export default About