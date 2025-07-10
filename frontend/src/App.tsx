import { useState } from 'react'
import './App.css'
import './index.css'
import { CreateEvent } from "@/features/planner/components/forms/CreateEvent.tsx";
import Layout from "@/components/shared/layout/layout.tsx"

function App() {

  return (
    <>
        <Layout>
            <CreateEvent />
        </Layout>
    </>
  )
}

export default App
