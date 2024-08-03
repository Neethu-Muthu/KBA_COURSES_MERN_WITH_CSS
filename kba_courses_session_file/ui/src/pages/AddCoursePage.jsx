import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../App.css'

const AddCoursePage = () => {
  const [title, setTitle] = useState('');
  const [courseId, setCourseId] = useState('')
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('')
  const navigate = useNavigate()

  const submitForm = (e) => {
    e.preventDefault()
    const newCourse = {
      title,
      courseId,
      type,
      description,
      price
    }
    const res = addCourseSubmit(newCourse)
    toast.success('Course added successfully')
    navigate('/courses')
  }

  const addCourseSubmit = async (newCourse) => {
    const res = await fetch('/api/courses', {
      method: 'POST',
      headers: {
        'Content-Type': "application/json",
      },
      body: JSON.stringify(newCourse)
    })
    return res;
  }

  return (
    <>

     <section className='add-course-page'>
      <div className='container'>
        <div className='form-wrapper'>
          <form onSubmit={submitForm}>
            <h2 className='form-heading'>Add Course</h2>
            <div className='mb-4'>
              <label className='form-label' htmlFor='title'>Course Name</label>
              <input
                type='text'
                id='title'
                name='title'
                className='form-input'
                placeholder='eg. Certified Blockchain Associate'
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className='mb-4'>
              <label className='form-label' htmlFor='courseId'>Course Id</label>
              <input
                type='text'
                id='courseId'
                name='courseId'
                className='form-input'
                placeholder='eg. 1'
                required
                value={courseId}
                onChange={(e) => setCourseId(e.target.value)}
              />
            </div>
            <div className='mb-4'>
              <label className='form-label' htmlFor='type'>Course Type</label>
              <select
                id='type'
                name='type'
                className='form-select'
                required
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value='Self-Paced'>Self-Paced</option>
                <option value='Instructor-Led'>Instructor-Led</option>
                <option value='Hybrid'>Hybrid</option>
              </select>
            </div>
            <div className='mb-4'>
              <label className='form-label' htmlFor='description'>Description</label>
              <textarea
                id='description'
                name='description'
                className='form-textarea'
                rows='4'
                placeholder='Small description on the course'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className='mb-4'>
              <label className='form-label' htmlFor='price'>Price</label>
              <select
                id='price'
                name='price'
                className='form-select'
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              >
                <option value='Rs.5000'>Rs.5000</option>
                <option value='Rs.3500'>Rs.3500</option>
                <option value='Rs.15000'>Rs.15000</option>
              </select>
            </div>
            <div className='submit-button-wrapper'>
              <button
                className='submit-button'
                type='submit'
              >
                Add Course
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
    </>
  )
}

export default AddCoursePage