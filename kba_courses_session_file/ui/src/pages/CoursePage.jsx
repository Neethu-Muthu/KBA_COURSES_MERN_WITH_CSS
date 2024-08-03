import React, { useEffect, useState } from 'react'
import { Link, useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { getUserType } from './LoginPage';
import '../App.css'

const CoursePage = () => {

  

    const course = useLoaderData();
    const { id } = useParams()
    const navigate = useNavigate()
    const userType = getUserType()

    const deleteCourse = async () => {
        const confirm = window.confirm('Sure want to delete ?')
        if (!confirm) return;
        const res = await fetch(`/api/courses/${id}`,
            { method: 'DELETE' }
        )
        navigate('/courses')
    }

    return (
        <>
            {/* {loading?<h1>Loading ...</h1>:      */}
            <div className="container">
                <div className="inner-container">
                    <section>
                        <a className="back-link" href='/courses'>Back to Courses</a>
                    </section>

                    <div className="course-card">
                        <img
                            src="/src/assets/images/digital-learning-web-banner-design-students-study-with-mobile-phone-during-online-class-online-education-digital-classroom-e-learning-concept-header-or-footer-banner-free-vector.jpg"
                            alt="Course Thumbnail"
                            className="course-image"
                        />
                        <div className="course-content">
                            <div className="course-header sm:flex-row">
                                <h1 className="course-title">{course.title}</h1>
                                <div className="flex items-center mt-2 sm:mt-0 ml-4">
                                    <span className="course-price">{course.price}</span>
                                    <button className="course-button">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                            <div className="course-section">
                                <h2 className="course-section-title">
                                    Description
                                </h2>
                                <p>{course.description}</p>
                            </div>

                            <div className="course-section">
                                <h2 className="course-section-title">
                                    Prerequisites
                                </h2>
                                <ul className="course-list">
                                    <li>Basic understanding of blockchain technology</li>
                                    <li>Familiarity with programming languages</li>
                                    <li>Internet access</li>
                                </ul>
                            </div>

                            <div className="course-section">
                                <h2 className="course-section-title">
                                    Features
                                </h2>
                                <ul className="course-list">
                                    <li>40 hours of content</li>
                                    <li>Certificate of completion</li>
                                    <li>Access to community forums</li>
                                    <li>Downloadable resources</li>
                                    <li>24/7 support</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="action-buttons">
                    {userType === 'admin' && (
                        <>
                            <Link to={`/edit-course/${id}`} className="action-button edit-button">
                                Edit Course
                            </Link>
                            <button onClick={() => deleteCourse(id)} className="action-button remove-button">
                                Remove Course
                            </button>
                        </>
                    )}
                </div>
            </div>
            {/* } */}


        </>
    )
};

const courseLoader = async ({ params }) => {
    const res = await fetch(`/api/courses/${params.id}`);
    const data = await res.json()
    return data;
}
// export default CoursePage
export { CoursePage as default, courseLoader }