import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPAge';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, { jobLoader }  from './pages/JobPAge';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';

const App = () => {
  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs',{
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(newJob)
    });

    return;
  }

  const deleteJob = async (jobId) => {
    const res = await fetch(`/api/jobs/${jobId}`,{
      method : 'DELETE'
    });

    return;
  }

  const updateJob = async (updatedJob) => {
    const res = await fetch(`/api/jobs/${updatedJob.id}`,{
      method : 'PUT',
      headers : {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(updatedJob)
    });

    return;
  }
  
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={ <MainLayout/> }>
      <Route index element={<HomePage/>} />
      <Route path='/jobs' element={<JobsPage/>} />
      <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />
      <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob} />} loader={jobLoader} />
      <Route path='/edit-job/:id' element={<EditJobPage updateJobSubmit={updateJob} />} loader={jobLoader} />
      <Route path='*' element={<NotFoundPage/>} />
    </Route>
    )
  )

  return <RouterProvider router={router}/>;
}

export default App
