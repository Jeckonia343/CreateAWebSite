import { useState, useEffect } from 'react'

import metricsStyle from './MetricsContainer.module.css'

export default function MetricsContainer() {
  const travelerMax = 700
  const travelReviewMax = 100
  const travelPlanMax = 470

  const [traveler, setTraveler] = useState(0)
  const [travelerStep, setTravelerStep] = useState(travelerMax)

  const [travelReview, setTravelReview] = useState(0)
  const [travelReviewStep, setTravelReviewStep] = useState(travelReviewMax)

  const [travelPlan, setTravelPlan] = useState(0)
  const [travelPlanStep, setTravelPlanStep] = useState(travelPlanMax)

  useEffect(() => {
    const travelerInterval = setInterval(() => {
      if (traveler < travelerMax) {
        setTraveler(Math.ceil(travelerMax - travelerStep))
        setTravelerStep((travelerStep) => travelerStep / 2)
      }
    }, 150)
    return () => {
      clearInterval(travelerInterval)
    }
  }, [traveler, travelerStep])

  useEffect(() => {
    const travelReviewInterval = setInterval(() => {
      if (travelReview < travelReviewMax) {
        setTravelReview(Math.ceil(travelReviewMax - travelReviewStep))
        setTravelReviewStep((travelReviewStep) => travelReviewStep / 2)
      }
    }, 150)

    return () => {
      clearInterval(travelReviewInterval)
    }
  }, [travelReview, travelReviewStep])

  useEffect(() => {
    const travelPlanInterval = setInterval(() => {
      if (travelPlan < travelPlanMax) {
        setTravelPlan(Math.ceil(travelPlanMax - travelPlanStep))
        setTravelPlanStep((travelPlanStep) => travelPlanStep / 2)
      }
    }, 150)

    return () => {
      clearInterval(travelPlanInterval)
    }
  }, [travelPlan, travelPlanStep])

  return (
    <div className={metricsStyle.section_metrics_container}>
      <div className={metricsStyle.section_metrics_item}>
        <strong>{traveler}만 명</strong>의 여행자
      </div>
      <div className={metricsStyle.section_metrics_item}>
        <strong>{travelReview}만 개</strong>의 여행 리뷰
      </div>
      <div className={metricsStyle.section_metrics_item}>
        <strong>{travelPlan}만 개</strong>의 여행 일정
      </div>
    </div>
  )
}
