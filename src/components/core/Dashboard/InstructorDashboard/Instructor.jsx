// import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux';
// import { fetchInstructorCourses } from '../../../../services/operations/courseDetailsAPI';
// import { getInstructorData } from '../../../../services/operations/profileAPI';
// import InstructorChart from './InstructorChart';
// import { Link } from 'react-router-dom';

// export default function Instructor() {
//     const { token } = useSelector((state) => state.auth)
//     const { user } = useSelector((state) => state.profile)
//     const [loading, setLoading] = useState(false)
//     const [instructorData, setInstructorData] = useState(null)
//     const [courses, setCourses] = useState([])
  
//     useEffect(() => {
//       ;(async () => {
//         setLoading(true)
//         const instructorApiData = await getInstructorData(token)
//         const result = await fetchInstructorCourses(token)
//         console.log(instructorApiData)
//         if (instructorApiData.length) setInstructorData(instructorApiData)
//         if (result) {
//           setCourses(result)
//         }
//         setLoading(false)
//       })()
//     }, [])
  
//     const totalAmount = instructorData?.reduce(
//       (acc, curr) => acc + curr.totalAmountGenerated,
//       0
//     )
  
//     const totalStudents = instructorData?.reduce(
//       (acc, curr) => acc + curr.totalStudentsEnrolled,
//       0
//     )
  
//     return (
//       <div>
//         <div className="space-y-2">
//           <h1 className="text-2xl font-bold text-richblack-5">
//             Hi {user?.firstName} 👋
//           </h1>
//           <p className="font-medium text-richblack-200">
//             Let's start something new
//           </p>
//         </div>
//         {loading ? (
//           <div className="spinner"></div>
//         ) : courses.length > 0 ? (
//           <div>
//             <div className="my-4 flex h-[450px] space-x-4">
//               {/* Render chart / graph */}
//               {totalAmount > 0 || totalStudents > 0 ? (
//                 <InstructorChart courses={instructorData} />
//               ) : (
//                 <div className="flex-1 rounded-md bg-richblack-800 p-6">
//                   <p className="text-lg font-bold text-richblack-5">Visualize</p>
//                   <p className="mt-4 text-xl font-medium text-richblack-50">
//                     Not Enough Data To Visualize
//                   </p>
//                 </div>
//               )}
//               {/* Total Statistics */}
//               <div className="flex min-w-[250px] flex-col rounded-md bg-richblack-800 p-6">
//                 <p className="text-lg font-bold text-richblack-5">Statistics</p>
//                 <div className="mt-4 space-y-4">
//                   <div>
//                     <p className="text-lg text-richblack-200">Total Courses</p>
//                     <p className="text-3xl font-semibold text-richblack-50">
//                       {courses.length}
//                     </p>
//                   </div>
//                   <div>
//                     <p className="text-lg text-richblack-200">Total Students</p>
//                     <p className="text-3xl font-semibold text-richblack-50">
//                       {totalStudents}
//                     </p>
//                   </div>
//                   <div>
//                     <p className="text-lg text-richblack-200">Total Income</p>
//                     <p className="text-3xl font-semibold text-richblack-50">
//                       Rs. {totalAmount}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="rounded-md bg-richblack-800 p-6">
//               {/* Render 3 courses */}
//               <div className="flex items-center justify-between">
//                 <p className="text-lg font-bold text-richblack-5">Your Courses</p>
//                 <Link to="/dashboard/my-courses">
//                   <p className="text-xs font-semibold text-yellow-50">View All</p>
//                 </Link>
//               </div>
//               <div className="my-4 flex items-start space-x-6">
//                 {courses.slice(0, 3).map((course) => (
//                   <div key={course._id} className="w-1/3">
//                     <img
//                       src={course.thumbnail}
//                       alt={course.courseName}
//                       className="h-[201px] w-full rounded-md object-cover"
//                     />
//                     <div className="mt-3 w-full">
//                       <p className="text-sm font-medium text-richblack-50">
//                         {course.courseName}
//                       </p>
//                       <div className="mt-1 flex items-center space-x-2">
//                         <p className="text-xs font-medium text-richblack-300">
//                           {course.studentsEnroled.length} students
//                         </p>
//                         <p className="text-xs font-medium text-richblack-300">
//                           |
//                         </p>
//                         <p className="text-xs font-medium text-richblack-300">
//                           Rs. {course.price}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ) : (
//           <div className="mt-20 rounded-md bg-richblack-800 p-6 py-20">
//             <p className="text-center text-2xl font-bold text-richblack-5">
//               You have not created any courses yet
//             </p>
//             <Link to="/dashboard/add-course">
//               <p className="mt-1 text-center text-lg font-semibold text-yellow-50">
//                 Create a course
//               </p>
//             </Link>
//           </div>
//         )}
//       </div>
//     )
//   }




// import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux'
// import { fetchInstructorCourses } from '../../../../services/operations/courseDetailsAPI'
// import { getInstructorData } from '../../../../services/operations/profileAPI'
// import InstructorChart from './InstructorChart'
// import { Link } from 'react-router-dom'

// export default function Instructor() {
//   const { token } = useSelector((state) => state.auth)
//   const { user } = useSelector((state) => state.profile)

//   const [loading, setLoading] = useState(false)
//   const [instructorData, setInstructorData] = useState([])
//   const [courses, setCourses] = useState([])

  
//   useEffect(() => {
//   ;(async () => {
//     setLoading(true)

//     try {
//       const instructorApiData = await getInstructorData(token)
//       const result = await fetchInstructorCourses(token)

//       console.log("Instructor API:", instructorApiData)
//       console.log("Courses API:", result)

//       // ✅ FIXED
//       setInstructorData(instructorApiData || [])
//       setCourses(result || [])

//     } catch (error) {
//       console.log("ERROR:", error)
//       setInstructorData([])
//       setCourses([])
//     }

//     setLoading(false)
//   })()
// }, [token])

//   // ✅ FIX 3: Safe reduce
//   const totalAmount = Array.isArray(instructorData)
//     ? instructorData.reduce((acc, curr) => acc + (curr.totalAmountGenerated || 0), 0)
//     : 0

//   const totalStudents = Array.isArray(instructorData)
//     ? instructorData.reduce((acc, curr) => acc + (curr.totalStudentsEnrolled || 0), 0)
//     : 0

//   return (
//     <div>
//       <div className="space-y-2">
//         <h1 className="text-2xl font-bold text-richblack-5">
//           Hi {user?.firstName} 👋
//         </h1>
//         <p className="font-medium text-richblack-200">
//           Let's start something new
//         </p>
//       </div>

//       {loading ? (
//         <div className="spinner"></div>
//       ) : courses && courses.length > 0 ? (
//         <div>
//           <div className="my-4 flex h-[450px] space-x-4">
            
//             {/* instructorData.length > 0 */}
             
//             {/* Chart */}
//             {totalAmount > 0 || totalStudents > 0 ?  (
//               <InstructorChart courses={instructorData} />
//             ) : (
//               <div className="flex-1 rounded-md bg-richblack-800 p-6">
//                 <p className="text-lg font-bold text-richblack-5">Visualize</p>
//                 <p className="mt-4 text-xl font-medium text-richblack-50">
//                   Not Enough Data To Visualize
//                 </p>
//               </div>
//             )}

//             {/* Stats */}
//             <div className="flex min-w-[250px] flex-col rounded-md bg-richblack-800 p-6">
//               <p className="text-lg font-bold text-richblack-5">Statistics</p>

//               <div className="mt-4 space-y-4">
//                 <div>
//                   <p className="text-lg text-richblack-200">Total Courses</p>
//                   <p className="text-3xl font-semibold text-richblack-50">
//                     {courses.length}
//                   </p>
//                 </div>

//                 <div>
//                   <p className="text-lg text-richblack-200">Total Students</p>
//                   <p className="text-3xl font-semibold text-richblack-50">
//                     {totalStudents}
//                   </p>
//                 </div>

//                 <div>
//                   <p className="text-lg text-richblack-200">Total Income</p>
//                   <p className="text-3xl font-semibold text-richblack-50">
//                     Rs. {totalAmount}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Courses */}
//           <div className="rounded-md bg-richblack-800 p-6">
//             <div className="flex items-center justify-between">
//               <p className="text-lg font-bold text-richblack-5">Your Courses</p>
//               <Link to="/dashboard/my-courses">
//                 <p className="text-xs font-semibold text-yellow-50">View All</p>
//               </Link>
//             </div>

//             <div className="my-4 flex items-start space-x-6">
//               {courses.slice(0, 3).map((course) => (
//                 <div key={course._id} className="w-1/3">
//                   <img
//                     src={course.thumbnail}
//                     alt={course.courseName}
//                     className="h-[201px] w-full rounded-md object-cover"
//                   />

//                   <div className="mt-3 w-full">
//                     <p className="text-sm font-medium text-richblack-50">
//                       {course.courseName}
//                     </p>

//                     <div className="mt-1 flex items-center space-x-2">
//                       {/* ✅ FIX 4: spelling + safe */}
//                       <p className="text-xs font-medium text-richblack-300">
//                         {course.studentsEnrolled?.length || 0} students
//                       </p>

//                       <p className="text-xs font-medium text-richblack-300">|</p>

//                       <p className="text-xs font-medium text-richblack-300">
//                         Rs. {course.price}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//           </div>
//         </div>
//       ) : (
//         <div className="mt-20 rounded-md bg-richblack-800 p-6 py-20">
//           <p className="text-center text-2xl font-bold text-richblack-5">
//             You have not created any courses yet
//           </p>
//           <Link to="/dashboard/add-course">
//             <p className="mt-1 text-center text-lg font-semibold text-yellow-50">
//               Create a course
//             </p>
//           </Link>
//         </div>
//       )}
//     </div>
//   )
// }





import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { fetchInstructorCourses } from '../../../../services/operations/courseDetailsAPI'
import { getInstructorData } from '../../../../services/operations/profileAPI'
import InstructorChart from './InstructorChart'
import { Link } from 'react-router-dom'

export default function Instructor() {
  const { token } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.profile)
  const [loading, setLoading] = useState(false)
  const [instructorData, setInstructorData] = useState([])
  const [courses, setCourses] = useState([])

  useEffect(() => {
    const getFullDetails = async () => {
      setLoading(true)
      try {
        const instructorApiData = await getInstructorData(token)
        const result = await fetchInstructorCourses(token)

        console.log("STATS DATA:", instructorApiData)
        console.log("COURSES DATA:", result)

        if (instructorApiData) setInstructorData(instructorApiData)
        if (result) setCourses(result)
      } catch (error) {
        console.error("Could not fetch dashboard data", error)
      }
      setLoading(false)
    }
    getFullDetails()
  }, [token])

  // ✅ IMPROVED CALCULATION
  // We try to get totals from instructorData (the stats API)
  // If stats API is empty, it defaults to 0
  const totalAmount = instructorData?.reduce((acc, curr) => acc + (curr.totalAmountGenerated || 0), 0)
  const totalStudents = instructorData?.reduce((acc, curr) => acc + (curr.totalStudentsEnrolled || 0), 0)

  return (
    <div className="text-white">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-richblack-5">Hi {user?.firstName} 👋</h1>
        <p className="font-medium text-richblack-200">View your performance at a glance</p>
      </div>

      {loading ? (
        <div className="grid min-h-[400px] place-items-center"><div className="spinner"></div></div>
      ) : courses.length > 0 ? (
        <div className="my-10 flex flex-col gap-y-6">
          <div className="flex flex-col lg:flex-row gap-4 h-auto lg:min-h-[450px]">
            
            {/* Chart Section */}
            {totalAmount > 0 || totalStudents > 0 ? (
              <InstructorChart courses={instructorData} />
            ) : (
              <div className="flex-1 rounded-md bg-richblack-800 p-6">
                <p className="text-lg font-bold">Visualize</p>
                <p className="mt-4 text-xl font-medium text-richblack-300">
                  Not enough data to visualize. (Enrollments required)
                </p>
              </div>
            )}

            {/* Statistics Sidebar */}
            <div className="flex min-w-[250px] flex-col rounded-md bg-richblack-800 p-6">
              <p className="text-lg font-bold">Statistics</p>
              <div className="mt-4 space-y-4">
                <div>
                  <p className="text-lg text-richblack-200">Total Courses</p>
                  <p className="text-3xl font-semibold text-richblack-50">{courses.length}</p>
                </div>
                <div>
                  <p className="text-lg text-richblack-200">Total Students</p>
                  <p className="text-3xl font-semibold text-richblack-50">{totalStudents}</p>
                </div>
                <div>
                  <p className="text-lg text-richblack-200">Total Income</p>
                  <p className="text-3xl font-semibold text-yellow-50">Rs. {totalAmount}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Render 3 courses at bottom */}
          <div className="rounded-md bg-richblack-800 p-6">
            <div className="flex items-center justify-between">
              <p className="text-lg font-bold">Your Courses</p>
              <Link to="/dashboard/my-courses"><p className="text-xs font-semibold text-yellow-50">View All</p></Link>
            </div>
            <div className="my-4 flex flex-wrap gap-6">
              {courses.slice(0, 3).map((course) => (
                <div key={course._id} className="w-full lg:w-[30%]">
                  <img src={course.thumbnail} alt="course" className="h-[201px] w-full rounded-md object-cover" />
                  <div className="mt-3">
                    <p className="text-sm font-medium text-richblack-50">{course.courseName}</p>
                    <div className="mt-1 flex items-center space-x-2 text-xs text-richblack-300">
                      <p>{course.studentsEnrolled?.length || 0} students</p>
                      <p>|</p>
                      <p>Rs. {course.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-20 rounded-md bg-richblack-800 p-6 py-20 text-center">
          <p className="text-2xl font-bold">You haven't created any courses yet.</p>
          <Link to="/dashboard/add-course"><p className="mt-1 text-lg font-semibold text-yellow-50">Create a course</p></Link>
        </div>
      )}
    </div>
  )
}