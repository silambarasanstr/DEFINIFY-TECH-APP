import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './containers/Layout'
import CourseContainer from './containers/CourseContainer'
import './index.css'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/html" replace />} />
          <Route path="/:courseId" element={<CourseContainer />} />
          <Route path="*" element={
            <div className="text-center py-20">
              <h2 className="text-3xl font-bold text-white mb-4">404 - Page Not Found</h2>
              <p className="text-slate-400">The course you are looking for does not exist.</p>
            </div>
          } />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
