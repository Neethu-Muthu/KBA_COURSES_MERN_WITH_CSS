import React, { useEffect, useState } from 'react'
import '../App.css'
import CourseCard from './CourseCard'
// import courses from '../courses.json'
import {BarLoader} from 'react-spinners'


const CourseCards = ({ isHome = false }) => {

    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true)
    // console.log(courses)
    useEffect(() => {
  
        const fetchCourses = async () => {
            try {
                const res = await fetch('/api/courses');
                const data = await res.json()
                setCourses(data)
            } catch (error) {
                console.log('error', error)
            } finally {
                setLoading(false)
            }
        };
        fetchCourses()
    },[])
    const courseList = isHome ? courses.slice(0, 3) : courses;
    console.log("courses===",courses)
    return (
        <>
            <h1 className='course-cards-title'>{isHome ? 'Top courses' : 'All courses'}</h1>
            {loading ? (
                <div className='loader'>
                    <BarLoader />
                </div>
            ) : (
                <div className='course-cards-grid'>
                    {courseList.map((course) => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
            )}
        </>
    );
};


export default CourseCards