import React, { useState } from 'react'
import '../App.css'
import courseImage from '../assets/images/rp.png'
import { Link } from 'react-router-dom';
const CourseCard = ({ course }) => {

  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = course.description;

  if (!showFullDescription) {
    description = description.substring(0, 100) + "  ..."
  }

  const toggleText = () => {
    setShowFullDescription(!showFullDescription)
  }


  return (
    <>
      <div className='course-card'>
      <h2>{course.title}</h2>
      <img src={courseImage} alt="course thumbnail" />
      <p>{description}</p>
      <button onClick={toggleText}>{showFullDescription ? 'Less' : 'More'}</button>
      <Link to={`/courses/${course.courseId}`} className="learn-more">Learn More</Link>
    </div>
    </>
  )
}

export default CourseCard