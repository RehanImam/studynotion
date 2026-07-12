// import React, { useEffect, useRef, useState } from "react"
// import { AiOutlineDown } from "react-icons/ai"
// import { HiOutlineVideoCamera } from "react-icons/hi"

// function CourseSubSectionAccordion({ subSec }) {
//   return (
//     <div>
//       <div className="flex justify-between py-2">
//         <div className={`flex items-center gap-2`}>
//           <span>
//             <HiOutlineVideoCamera />
//           </span>
//           <p>{subSec?.title}</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default CourseSubSectionAccordion


// FIX 1: Removed unused useEffect, useRef, and useState hooks
import React from "react"
// FIX 2: Removed unused AiOutlineDown icon import
import { HiOutlineVideoCamera } from "react-icons/hi"

function CourseSubSectionAccordion({ subSec }) {
  return (
    <div>
      <div className="flex justify-between py-2">
        <div className={`flex items-center gap-2`}>
          <span>
            <HiOutlineVideoCamera />
          </span>
          <p>{subSec?.title}</p>
        </div>
      </div>
    </div>
  )
}

export default CourseSubSectionAccordion