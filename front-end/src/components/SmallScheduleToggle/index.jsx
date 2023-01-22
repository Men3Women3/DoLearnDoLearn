import React, { useState } from "react"
import SmallSchedule from "../SmallSchedule"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons"
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons"
import { SSmallScheduleMain } from "./styles"

const SmallScheduleToggle = () => {
  const [smallScheduleToggle, setSmallScheduleToggle] = useState(true)

  const handleSmallScheduleToggle = () => {
    setSmallScheduleToggle(!smallScheduleToggle)
  }

  return (
    <SSmallScheduleMain>
      <div className="smallSchedule-container">
        {smallScheduleToggle && <SmallSchedule />}
        <button
          className="smallSchedule__toggle-button"
          onClick={handleSmallScheduleToggle}
        >
          {smallScheduleToggle ? (
            <FontAwesomeIcon icon={faAnglesRight} />
          ) : (
            <FontAwesomeIcon icon={faCalendarDays} />
          )}
        </button>
      </div>
    </SSmallScheduleMain>
  )
}

export default SmallScheduleToggle
