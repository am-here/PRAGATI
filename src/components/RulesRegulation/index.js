import React from 'react'
import "./style.css";
import questionList from './rules/event1';
import Heading from "../Heading/index"
function Rules() {
  return (
    <>
      <Heading title="RULES" />
      <div className="section">
      <div className='lol'>
      <ol className='rules_ol'>
        {questionList.map(question => {
          return (
            <li className='rules_li' key={question.key}>{question.description}</li>
          );
        })}
      </ol>
      </div>
      </div>
    </>
  )
}

export default Rules