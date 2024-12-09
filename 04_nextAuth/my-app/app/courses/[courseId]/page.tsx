"use client"

import { useParams } from 'next/navigation';

export default function CoursePage() {
  const params = useParams();
  const courseId = params.courseId; 
  return (
    <div>course page{courseId}</div>
  )
}
