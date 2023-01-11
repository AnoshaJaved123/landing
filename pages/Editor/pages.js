import React from 'react'

const Pages = () => {
  return (
    <>
    <div className='my-2 d-flex flex-column'>
    <button
      type='button'
      className='btn btn-outline-secondary btn-sm mb-2 mx-2'
      data-bs-toggle='modal'
      data-bs-target='#addPageModal'
    >
      <i className='fa fa-plus'></i>
      Add Page
    </button>
    <button
      type='button'
      className='btn btn-outline-secondary btn-sm mb-2 mx-2'
      data-bs-toggle='modal'
      data-bs-target='#addPageModal'
    >
      <i className='fa fa-save'></i>
      Save Page
    </button>
     <ul className='list-group pages'>
      <li className='list-group-item d-flex justify-content-between align-items-center'>
        Home
        <div className='m-2'>
          <button className='btn btn-sm btn-outline-primary'>
            <i className='fa fa-pencil'></i>
          </button>
          <button className='btn btn-sm btn-outline-danger'>
            <i className='fa fa-trash'></i>
          </button>
        </div>
      </li>
      <li className='list-group-item d-flex justify-content-between align-items-center'>
        About
        <div className='m-2'>
          <button className='btn btn-sm btn-outline-primary'>
            <i className='fa fa-pencil'></i>
          </button>
          <button className='btn btn-sm btn-outline-danger'>
            <i className='fa fa-trash'></i>
          </button>
        </div>
      </li>
      <li className='list-group-item d-flex justify-content-between align-items-center'>
        Contact Us
        <div className='m-2'>
          <button className='btn btn-sm btn-outline-primary'>
            <i className='fa fa-pencil'></i>
          </button>
          <button className='btn btn-sm btn-outline-danger'>
            <i className='fa fa-trash'></i>
          </button>
        </div>
      </li>
    </ul> 
  </div>
   {/* <div className='modal-dialog'>
          <div className='modal-content'>
            <form id='create-page'>
              <div className='modal-header'>
                <h5 className='modal-title' id='addPageModalLabel'>Create Page</h5>
                <button
                  type='button'
                  className='btn-close'
                  data-bs-dismiss='modal'
                  aria-label='Close'
                ></button>
              </div>
              <div className='modal-body'>
                <div className='col-auto'>
                  <label htmlFor='name' className='form-label'>Name</label>
                  <input
                    type='text'
                    className='form-control form-control-sm'
                    id='name'
                    name='name'
                    placeholder='Name of Page'
                    required
                  />
                  <div className='invalid-feedback'>
                    Please provide a valid name.
                  </div>
                </div>
              </div>
              <div className='modal-footer'>
                <button
                  type='button'
                  className='btn btn-secondary btn-sm'
                  data-bs-dismiss='modal'

                >
                  Close
                </button>
                <button type='submit' className='btn btn-primary btn-sm'>
                  Save
                </button>
              </div>
            </form>
          </div>
        </div> */}
        </>
  )
}

export default Pages