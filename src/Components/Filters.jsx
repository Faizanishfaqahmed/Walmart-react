import React from 'react'

const Filters = () => {
  return (
    <div>
      <div className="">Filter Products</div>
      <Form.check
      inline
      label="Ascending"
      name="group1"
      type="radio"
      id={'inline-1'}
      />
    </div>
  )
}

export default Filters
