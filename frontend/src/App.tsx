import { useState } from 'react'
import './App.css'
import CreateThing from "./features/Shared/components/forms/CreateThing.tsx";
import LargeCard from "./features/Shared/components/cards/LargeCard.tsx";

function App() {

  return (
    <>
          <LargeCard>
              <CreateThing />
          </LargeCard>
    </>
  )
}

export default App
