import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Classroom from './pages/Classroom';
import Assignments from './pages/Assignments';
import Attendance from './pages/Attendance';
import Academics from './pages/Academics';
import Examinations from './pages/Examinations';
import CourseRegistration from './pages/CourseRegistration';
import Placements from './pages/Placements';
import Payments from './pages/Payments';
import StudentForm from './pages/StudentForm';
import Results from './pages/Results';
import Calendar from './pages/Calendar';
import Schedule from './pages/Schedule';
import Feedback from './pages/Feedback';
import Help from './pages/Help';
import Subjects from './pages/Subjects';
import Notices from './pages/Notices';
import Events from './pages/Events';
import ParentComm from './pages/ParentComm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="classroom" element={<Classroom />} />
          <Route path="assignments" element={<Assignments />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="academics" element={<Academics />} />
          <Route path="examinations" element={<Examinations />} />
          <Route path="course-registration" element={<CourseRegistration />} />
          <Route path="placements" element={<Placements />} />
          <Route path="payments" element={<Payments />} />
          <Route path="student-form" element={<StudentForm />} />
          <Route path="results" element={<Results />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="help" element={<Help />} />
          
          {/* School Mode Routes */}
          <Route path="subjects" element={<Subjects />} />
          <Route path="notices" element={<Notices />} />
          <Route path="events" element={<Events />} />
          <Route path="communication" element={<ParentComm />} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
