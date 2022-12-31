import React,{useState} from 'react'
import ScheduleTimeline from './ScheduleTimeline'
// import timelineElements from './Schedule_data'

function ScheduleBody() {
  const [items, setItems] = useState(ScheduleTimeline);
  const filterItem = (time)=>{
    const updatedItems=ScheduleTimeline.filter((curItem)=>{
      return curItem.time===time;
    });

    setItems(updatedItems);
  }
  return (
    <>
    <div className='schedule_body'>
        <div className="timeline">
         
              <button onClick={()=> filterItem("09:00-09:30")}>09AM-09:30AM</button>
              <button onClick={()=> filterItem("09:30-10:00")}>09:30AM-10AM</button>
              <button onClick={()=> filterItem("10:00-11:00")}>10AM-11AM</button>
              <button onClick={()=> filterItem("11:00-12:00")}>11AM-12PM</button>
              <button onClick={()=> filterItem("12:00-13:00")}>12PM-01PM</button>
              <button onClick={()=> filterItem("13:00-14:00")}>01PM-02PM</button>
              <button onClick={()=> filterItem("14:00-15:00")}>02PM-03PM</button>
              <button onClick={()=> filterItem("15:00-16:00")}>03PM-04PM</button>
              <button onClick={()=> filterItem("16:00-17:00")}>04PM-05PM</button>
              {/* <button></button> */}
              
        </div>
          {/* <div className='scheduleCard'> */}
            <div className="ScheduleCardRow">
              {items.map((details) => {
                return(
                  <div className='ScheduleCardCol'>
                    <h1 className="ScheduleCardHeading">{details.heading}</h1>
                    <h3 className="ScheduleCardRound">{details.round}</h3>
                  </div>
                )
              })}
            </div>
          </div>          
        {/* </div> */}
    </>
  )
}

export default ScheduleBody