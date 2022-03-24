import FeedbackItem from "./FeedbackItem"
import { useContext } from "react"
import {motion, AnimatePresence} from 'framer-motion'
import PropTypes from 'prop-types'
import FeedbackContext from "../context/FeedbackContext"

function FeedbackList() {
  
  const {feedback} = useContext(FeedbackContext)
  if(!feedback || feedback.length === 0){
    return 'No feedback get :('
  }
    
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
            <motion.div 
            key={item.id}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}>
              <FeedbackItem 
              key={item.id} 
              item={item} />
            </motion.div>
        ))}       
      </AnimatePresence>
    </div>
  )

  // return (
  //   <div className="feedback-list">
  //       {feedback.map((item) => (
  //           <FeedbackState 
  //           key={item.id} 
  //           item={item} 
  //           handleDelete={handleDelete}/>
  //       ))}
  //   </div>
  // )
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  )
}

export default FeedbackList