
// Mock Data for School Mode

export const studentProfile = {
  name: "Rahul Sharma",
  class: "Class 10 - A",
  rollNo: "24",
  admissionNo: "ADM2023001",
  dob: "2008-05-15",
  bloodGroup: "B+",
  fatherName: "Mr. Rajesh Sharma",
  motherName: "Mrs. Priya Sharma",
  contact: "+91 98765 43210",
  address: "123, Green Park, New Delhi",
  photo: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  attendance: 85,
  academicYear: "2025-2026"
};

export const weeklySchedule = {
  Monday: [
    { subject: "Mathematics", code: "MAT101", time: "08:00 AM - 08:45 AM", faculty: "Mr. Gupta", type: "Lecture", location: "Class 10-A" },
    { subject: "Science", code: "SCI101", time: "08:45 AM - 09:30 AM", faculty: "Mrs. Verma", type: "Lab", location: "Sci Lab" },
    { subject: "English", code: "ENG101", time: "09:30 AM - 10:15 AM", faculty: "Ms. Davis", type: "Lecture", location: "Class 10-A" },
    { subject: "Break", code: "BRK", time: "10:15 AM - 10:30 AM", faculty: "-", type: "Break", location: "-" },
    { subject: "Social Studies", code: "SST101", time: "10:30 AM - 11:15 AM", faculty: "Mr. Khan", type: "Lecture", location: "Class 10-A" }
  ],
  Tuesday: [
    { subject: "Science", code: "SCI101", time: "08:00 AM - 08:45 AM", faculty: "Mrs. Verma", type: "Lecture", location: "Class 10-A" },
    { subject: "Mathematics", code: "MAT101", time: "08:45 AM - 09:30 AM", faculty: "Mr. Gupta", type: "Lecture", location: "Class 10-A" },
    { subject: "Computer", code: "CS101", time: "09:30 AM - 10:15 AM", faculty: "Ms. Tech", type: "Lab", location: "Comp Lab" },
    { subject: "Break", code: "BRK", time: "10:15 AM - 10:30 AM", faculty: "-", type: "Break", location: "-" },
    { subject: "Hindi", code: "HIN101", time: "10:30 AM - 11:15 AM", faculty: "Mrs. Singh", type: "Lecture", location: "Class 10-A" }
  ],
  Wednesday: [
    { subject: "English", code: "ENG101", time: "08:00 AM - 08:45 AM", faculty: "Ms. Davis", type: "Lecture", location: "Class 10-A" },
    { subject: "Social Studies", code: "SST101", time: "08:45 AM - 09:30 AM", faculty: "Mr. Khan", type: "Lecture", location: "Class 10-A" },
    { subject: "Mathematics", code: "MAT101", time: "09:30 AM - 10:15 AM", faculty: "Mr. Gupta", type: "Lecture", location: "Class 10-A" },
    { subject: "Break", code: "BRK", time: "10:15 AM - 10:30 AM", faculty: "-", type: "Break", location: "-" },
    { subject: "Science", code: "SCI101", time: "10:30 AM - 11:15 AM", faculty: "Mrs. Verma", type: "Lecture", location: "Class 10-A" }
  ],
  Thursday: [
    { subject: "Mathematics", code: "MAT101", time: "08:00 AM - 08:45 AM", faculty: "Mr. Gupta", type: "Lecture", location: "Class 10-A" },
    { subject: "Hindi", code: "HIN101", time: "08:45 AM - 09:30 AM", faculty: "Mrs. Singh", type: "Lecture", location: "Class 10-A" },
    { subject: "English", code: "ENG101", time: "09:30 AM - 10:15 AM", faculty: "Ms. Davis", type: "Lecture", location: "Class 10-A" },
    { subject: "Break", code: "BRK", time: "10:15 AM - 10:30 AM", faculty: "-", type: "Break", location: "-" },
    { subject: "PT", code: "PHY101", time: "10:30 AM - 11:15 AM", faculty: "Coach", type: "Activity", location: "Ground" }
  ],
  Friday: [
    { subject: "Science", code: "SCI101", time: "08:00 AM - 08:45 AM", faculty: "Mrs. Verma", type: "Lecture", location: "Class 10-A" },
    { subject: "Social Studies", code: "SST101", time: "08:45 AM - 09:30 AM", faculty: "Mr. Khan", type: "Lecture", location: "Class 10-A" },
    { subject: "Library", code: "LIB101", time: "09:30 AM - 10:15 AM", faculty: "Librarian", type: "Self Study", location: "Library" },
    { subject: "Break", code: "BRK", time: "10:15 AM - 10:30 AM", faculty: "-", type: "Break", location: "-" },
    { subject: "Computer", code: "CS101", time: "10:30 AM - 11:15 AM", faculty: "Ms. Tech", type: "Lab", location: "Comp Lab" }
  ]
};

export const todaysClasses = [
  { period: 1, subject: "Mathematics", teacher: "Mr. Gupta", time: "08:00 - 08:45", type: "Lecture" },
  { period: 2, subject: "Science", teacher: "Mrs. Verma", time: "08:45 - 09:30", type: "Lab" },
  { period: 3, subject: "English", teacher: "Ms. Davis", time: "09:30 - 10:15", type: "Lecture" },
  { period: 4, subject: "Social Studies", teacher: "Mr. Khan", time: "10:30 - 11:15", type: "Lecture" },
  { period: 5, subject: "Computer", teacher: "Ms. Tech", time: "11:15 - 12:00", type: "Lab" }
];

export const homework = [
  { id: 1, subject: "Mathematics", title: "Algebra Exercises", assigned: "2025-02-20", due: "2025-02-22", status: "Pending", instructions: "Complete Ex 5.1 and 5.2" },
  { id: 2, subject: "Science", title: "Lab Report", assigned: "2025-02-19", due: "2025-02-21", status: "Submitted", instructions: "Submit report on Photosynthesis" },
  { id: 3, subject: "English", title: "Essay Writing", assigned: "2025-02-18", due: "2025-02-25", status: "Pending", instructions: "Write an essay on 'My Hobby'" }
];

export const subjects = [
  { name: "Mathematics", teacher: "Mr. Gupta", periodsPerWeek: 6, syllabus: "math_syllabus.pdf" },
  { name: "Science", teacher: "Mrs. Verma", periodsPerWeek: 5, syllabus: "science_syllabus.pdf" },
  { name: "English", teacher: "Ms. Davis", periodsPerWeek: 5, syllabus: "english_syllabus.pdf" },
  { name: "Social Studies", teacher: "Mr. Khan", periodsPerWeek: 4, syllabus: "sst_syllabus.pdf" },
  { name: "Computer Science", teacher: "Ms. Tech", periodsPerWeek: 3, syllabus: "cs_syllabus.pdf" },
  { name: "Hindi", teacher: "Mrs. Singh", periodsPerWeek: 4, syllabus: "hindi_syllabus.pdf" }
];

export const notices = [
  { id: 1, title: "Annual Sports Day", date: "2025-02-25", category: "Event", content: "Annual Sports Day will be held on March 5th. Participation is mandatory." },
  { id: 2, title: "Parent Teacher Meeting", date: "2025-02-28", category: "Meeting", content: "PTM for Class 10 will be held on Saturday, March 1st from 9 AM to 12 PM." },
  { id: 3, title: "Holiday Announcement", date: "2025-03-08", category: "Holiday", content: "School will remain closed on March 8th for Holi." }
];

export const exams = [
  { name: "Unit Test 1", subject: "Mathematics", date: "2025-03-10", type: "Written", status: "Upcoming" },
  { name: "Unit Test 1", subject: "Science", date: "2025-03-12", type: "Written", status: "Upcoming" },
  { name: "Unit Test 1", subject: "English", date: "2025-03-14", type: "Written", status: "Upcoming" }
];

export const results = [
  { term: "Term 1", subjects: [
    { subject: "Mathematics", marks: 85, grade: "A" },
    { subject: "Science", marks: 78, grade: "B+" },
    { subject: "English", marks: 90, grade: "A+" },
    { subject: "Social Studies", marks: 82, grade: "A" },
    { subject: "Computer", marks: 95, grade: "O" }
  ], total: 430, percentage: 86, remarks: "Excellent performance!" }
];

export const fees = [
  { type: "Tuition Fee - Q1", amount: 15000, dueDate: "2025-04-10", status: "Paid" },
  { type: "Tuition Fee - Q2", amount: 15000, dueDate: "2025-07-10", status: "Pending" },
  { type: "Transport Fee", amount: 5000, dueDate: "2025-04-10", status: "Paid" }
];

export const events = [
  { name: "Inter-School Debate", date: "2025-03-15", type: "Competition", status: "Registered" },
  { name: "Science Exhibition", date: "2025-04-20", type: "Exhibition", status: "Open" }
];

export const parentComm = [
  { id: 1, sender: "Mr. Gupta (Maths)", date: "2025-02-10", message: "Rahul needs to improve in Algebra. Please monitor his homework.", status: "Unread" },
  { id: 2, sender: "Principal Office", date: "2025-02-05", message: "Circular regarding fee hike for next session.", status: "Read" }
];
